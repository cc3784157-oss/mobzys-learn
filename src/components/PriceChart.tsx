import { useEffect, useRef, useState } from 'react'
import { createChart, CandlestickSeries, LineSeries, ColorType, type IChartApi, type ISeriesApi, type UTCTimestamp } from 'lightweight-charts'

type Props = { coinId: string; days: number | 'max'; height?: number }

type Candle = { time: UTCTimestamp; open: number; high: number; low: number; close: number }

// Simple in-memory cache — prevents hitting CoinGecko rate limits
const CACHE = new Map<string, { data: Candle[]; ts: number }>()
const CACHE_TTL_MS = 2 * 60 * 1000  // 2 minutes

export default function PriceChart({ coinId, days, height = 420 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const candleRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
  const maRef = useRef<ISeriesApi<'Line'> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create chart
    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height,
      layout: { background: { type: ColorType.Solid, color: '#ffffff' }, textColor: '#333' },
      grid: { vertLines: { color: '#f3f4f6' }, horzLines: { color: '#f3f4f6' } },
      timeScale: { timeVisible: true, secondsVisible: false, borderColor: '#e5e7eb' },
      rightPriceScale: { borderColor: '#e5e7eb' },
      crosshair: { mode: 1 },
    })
    chartRef.current = chart

    // Add candlestick series (v5 API with v4 fallback)
    let candleSeries: ISeriesApi<'Candlestick'>
    let maSeries: ISeriesApi<'Line'>
    try {
      candleSeries = (chart as any).addSeries(CandlestickSeries, {
        upColor: '#16a34a', downColor: '#dc2626',
        borderUpColor: '#16a34a', borderDownColor: '#dc2626',
        wickUpColor: '#16a34a', wickDownColor: '#dc2626',
      })
      maSeries = (chart as any).addSeries(LineSeries, { color: '#1a73e8', lineWidth: 2 })
    } catch {
      candleSeries = (chart as any).addCandlestickSeries({
        upColor: '#16a34a', downColor: '#dc2626',
        borderUpColor: '#16a34a', borderDownColor: '#dc2626',
        wickUpColor: '#16a34a', wickDownColor: '#dc2626',
      })
      maSeries = (chart as any).addLineSeries({ color: '#1a73e8', lineWidth: 2 })
    }
    candleRef.current = candleSeries
    maRef.current = maSeries

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const cacheKey = `${coinId}:${days}`
        const cached = CACHE.get(cacheKey)
        if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
          candleSeries.setData(cached.data)
          applyMA(cached.data, maSeries)
          chart.timeScale().fitContent()
          setLoading(false)
          return
        }

        const url = `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const raw: number[][] = await res.json()

        const candles: Candle[] = raw.map((d) => ({
          time: Math.floor(d[0] / 1000) as UTCTimestamp,
          open: d[1], high: d[2], low: d[3], close: d[4],
        }))

        // Deduplicate by time (CoinGecko sometimes returns dupes)
        const seen = new Set<number>()
        const unique = candles.filter((c) => {
          if (seen.has(c.time)) return false
          seen.add(c.time)
          return true
        }).sort((a, b) => a.time - b.time)

        candleSeries.setData(unique)
        applyMA(unique, maSeries)
        chart.timeScale().fitContent()
        CACHE.set(cacheKey, { data: unique, ts: Date.now() })
      } catch (e: any) {
        setError(e.message || 'Could not load chart')
      } finally {
        setLoading(false)
      }
    }

    load()

    const onResize = () => {
      if (containerRef.current && chartRef.current) {
        chartRef.current.applyOptions({ width: containerRef.current.clientWidth })
      }
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      chart.remove()
    }
  }, [coinId, days, height])

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div style={{ position: 'absolute', top: 8, right: 8, background: '#eef', color: '#1a73e8', padding: '4px 10px', borderRadius: 4, fontSize: 12, zIndex: 10 }}>
          Loading…
        </div>
      )}
      {error && (
        <div style={{ position: 'absolute', top: 8, right: 8, background: '#fef2f2', color: '#991b1b', padding: '4px 10px', borderRadius: 4, fontSize: 12, zIndex: 10 }}>
          {error}
        </div>
      )}
      <div ref={containerRef} style={{ width: '100%', height }} />
    </div>
  )
}

function applyMA(candles: Candle[], series: ISeriesApi<'Line'>) {
  const ma: { time: UTCTimestamp; value: number }[] = []
  for (let i = 19; i < candles.length; i++) {
    let sum = 0
    for (let j = i - 19; j <= i; j++) sum += candles[j].close
    ma.push({ time: candles[i].time, value: sum / 20 })
  }
  series.setData(ma)
}
