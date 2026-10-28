import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PriceChart from '../components/PriceChart'
import { usePaperTrading, type Side, type OrderType } from '../hooks/usePaperTrading'

type Coin = {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  image: string
  market_cap: number
}

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

const TIMEFRAMES: { label: string; days: number | 'max' }[] = [
  { label: '1D', days: 1 },
  { label: '7D', days: 7 },
  { label: '1M', days: 30 },
  { label: '3M', days: 90 },
  { label: '1Y', days: 365 },
  { label: 'All', days: 'max' },
]

export default function TradingSimulator() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState('')
  const [timeframe, setTimeframe] = useState<number | 'max'>(30)
  const [side, setSide] = useState<Side>('buy')
  const [orderType, setOrderType] = useState<OrderType>('market')
  const [qty, setQty] = useState('')
  const [limitPrice, setLimitPrice] = useState('')
  const [tab, setTab] = useState<'positions' | 'orders' | 'history'>('positions')

  const { state, placeMarketOrder, placeLimitOrder, cancelOrder, checkLimitOrders, reset, STARTING } = usePaperTrading()

  const fetchPrices = useCallback(async () => {
    try {
      setError(null)
      const r = await fetch(URL)
      if (!r.ok) throw new Error('fetch')
      const d = await r.json()
      if (!Array.isArray(d) || d.length === 0) throw new Error('empty')
      setCoins(d)
      if (!selectedId && d[0]) setSelectedId(d[0].id)

      const priceMap: Record<string, number> = {}
      d.forEach((c: Coin) => { priceMap[c.id] = c.current_price })
      checkLimitOrders(priceMap)
    } catch {
      setError('Could not load prices. CoinGecko may be rate-limiting — wait a minute and click Refresh.')
    } finally {
      setLoading(false)
    }
  }, [selectedId, checkLimitOrders])

  useEffect(() => {
    fetchPrices()
    const i = setInterval(fetchPrices, 60000)
    return () => clearInterval(i)
  }, [fetchPrices])

  const coin = coins.find((c) => c.id === selectedId)
  const portfolioValue = state.positions.reduce((s, p) => {
    const c = coins.find((x) => x.id === p.coinId)
    return s + (c ? c.current_price * p.qty : 0)
  }, 0)
  const total = state.cash + portfolioValue
  const pnl = total - STARTING
  const pnlPct = (pnl / STARTING) * 100

  const execute = () => {
    if (!coin) return
    const n = parseFloat(qty)
    if (isNaN(n) || n <= 0) { alert('Enter a valid quantity'); return }

    if (orderType === 'market') {
      const result = placeMarketOrder(coin, side, n)
      if (!result.ok) alert(result.error)
      else setQty('')
    } else {
      const lp = parseFloat(limitPrice)
      if (isNaN(lp) || lp <= 0) { alert('Enter a valid limit price'); return }
      const result = placeLimitOrder(coin, side, n, lp)
      if (!result.ok) alert(result.error)
      else { setQty(''); setLimitPrice('') }
    }
  }

  const cc = (c: Coin) => c.price_change_percentage_24h >= 0 ? '#16a34a' : '#dc2626'

  return (
    <div style={{ maxWidth: 1300, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/trading" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Trading</Link>
      <h1 style={{ margin: '16px 0 8px' }}>📈 Trading Terminal</h1>
      <p style={{ color: '#555', marginBottom: 16 }}>Live prices · $100,000 virtual cash · market &amp; limit orders · no real money</p>

      {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: 12, borderRadius: 8, marginBottom: 16, color: '#991b1b', fontSize: 14 }}>⚠️ {error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, marginBottom: 20 }}>
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Total Value</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Cash</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>${state.cash.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        </div>
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Unrealized P&L</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: pnl >= 0 ? '#16a34a' : '#dc2626' }}>{pnl >= 0 ? '+' : ''}${pnl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div style={{ fontSize: 11, color: pnl >= 0 ? '#16a34a' : '#dc2626' }}>{pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%</div>
        </div>
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Open Orders</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{state.openOrders.length}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 16, marginBottom: 20 }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: 16, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            <div>
              <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 15, fontWeight: 600 }}>
                {coins.map((c) => <option key={c.id} value={c.id}>{c.symbol.toUpperCase()} — ${c.current_price.toLocaleString()}</option>)}
              </select>
              {coin && <span style={{ marginLeft: 10, fontSize: 14, color: cc(coin), fontWeight: 600 }}>{coin.price_change_percentage_24h >= 0 ? '▲' : '▼'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%</span>}
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {TIMEFRAMES.map((tf) => (
                <button key={tf.label} onClick={() => setTimeframe(tf.days)} style={{ padding: '6px 10px', borderRadius: 4, border: '1px solid ' + (timeframe === tf.days ? '#1a73e8' : '#d1d5db'), background: timeframe === tf.days ? '#1a73e8' : '#fff', color: timeframe === tf.days ? '#fff' : '#111', fontWeight: 600, cursor: 'pointer', fontSize: 12 }}>{tf.label}</button>
              ))}
            </div>
          </div>
          {loading && !coin ? <p style={{ color: '#666', padding: 40, textAlign: 'center' }}>Loading chart…</p> : coin ? <PriceChart coinId={coin.id} days={timeframe} height={440} /> : null}
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: 16 }}>
          <h2 style={{ margin: '0 0 12px', fontSize: 16 }}>Place Order</h2>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
            <button onClick={() => setSide('buy')} style={{ flex: 1, padding: '8px', borderRadius: 6, border: 'none', background: side === 'buy' ? '#16a34a' : '#e5e7eb', color: side === 'buy' ? '#fff' : '#111', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>Buy</button>
            <button onClick={() => setSide('sell')} style={{ flex: 1, padding: '8px', borderRadius: 6, border: 'none', background: side === 'sell' ? '#dc2626' : '#e5e7eb', color: side === 'sell' ? '#fff' : '#111', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>Sell</button>
          </div>
          <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Order Type</label>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
            <button onClick={() => setOrderType('market')} style={{ flex: 1, padding: '6px', borderRadius: 4, border: '1px solid ' + (orderType === 'market' ? '#1a73e8' : '#d1d5db'), background: orderType === 'market' ? '#eff6ff' : '#fff', color: orderType === 'market' ? '#1a73e8' : '#333', fontWeight: 600, cursor: 'pointer', fontSize: 12 }}>Market</button>
            <button onClick={() => setOrderType('limit')} style={{ flex: 1, padding: '6px', borderRadius: 4, border: '1px solid ' + (orderType === 'limit' ? '#1a73e8' : '#d1d5db'), background: orderType === 'limit' ? '#eff6ff' : '#fff', color: orderType === 'limit' ? '#1a73e8' : '#333', fontWeight: 600, cursor: 'pointer', fontSize: 12 }}>Limit</button>
          </div>
          <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Quantity (coins)</label>
          <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="0.00" min="0" step="any" style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14, boxSizing: 'border-box', marginBottom: 12 }} />
          {orderType === 'limit' && (
            <>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Limit Price (USD)</label>
              <input type="number" value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} placeholder={coin ? `e.g. ${(coin.current_price * 0.98).toFixed(2)}` : '0.00'} min="0" step="any" style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #d1d5db', fontSize: 14, boxSizing: 'border-box', marginBottom: 12 }} />
            </>
          )}
          {coin && qty && !isNaN(parseFloat(qty)) && (
            <div style={{ background: '#f9fafb', padding: 10, borderRadius: 6, marginBottom: 12, fontSize: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#666' }}>Est. {orderType === 'limit' ? 'at limit' : 'cost'}</span><span style={{ fontWeight: 600 }}>${((orderType === 'limit' ? parseFloat(limitPrice) : coin.current_price) * parseFloat(qty) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
            </div>
          )}
          <button onClick={execute} disabled={!coin} style={{ width: '100%', padding: '12px', borderRadius: 6, border: 'none', background: side === 'buy' ? '#16a34a' : '#dc2626', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: 15 }}>{side === 'buy' ? 'Buy' : 'Sell'} {orderType === 'limit' ? 'Limit' : 'Market'}</button>
          <p style={{ fontSize: 11, color: '#888', marginTop: 12, marginBottom: 0, lineHeight: 1.5 }}>Market orders fill immediately. Limit orders wait until the price reaches your target.</p>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
          {[
            { key: 'positions', label: `Positions (${state.positions.length})` },
            { key: 'orders', label: `Open Orders (${state.openOrders.length})` },
            { key: 'history', label: `Trade History (${state.trades.length})` },
          ].map((t: any) => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ padding: '12px 18px', border: 'none', background: tab === t.key ? '#eff6ff' : '#fff', color: tab === t.key ? '#1a73e8' : '#333', fontWeight: 600, cursor: 'pointer', fontSize: 14, borderBottom: '2px solid ' + (tab === t.key ? '#1a73e8' : 'transparent') }}>{t.label}</button>
          ))}
        </div>
        <div style={{ padding: 16 }}>
          {tab === 'positions' && (state.positions.length === 0 ? <p style={{ color: '#666', fontSize: 14 }}>No positions yet.</p> : (
            <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}><thead><tr style={{ background: '#f9fafb' }}><th style={{ textAlign: 'left', padding: '10px 12px' }}>Coin</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Qty</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Avg Price</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Current</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>P&L</th></tr></thead><tbody>{state.positions.map((p) => { const c = coins.find((x) => x.id === p.coinId); const cp = c?.current_price ?? 0; const pl = (cp - p.avgPrice) * p.qty; const plp = p.avgPrice > 0 ? ((cp - p.avgPrice) / p.avgPrice) * 100 : 0; return (<tr key={p.coinId} style={{ borderTop: '1px solid #e5e7eb' }}><td style={{ padding: '10px 12px', fontWeight: 600 }}>{p.symbol}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}>{p.qty}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}>${p.avgPrice.toFixed(2)}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}>${cp.toFixed(2)}</td><td style={{ padding: '10px 12px', textAlign: 'right', color: pl >= 0 ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{pl >= 0 ? '+' : ''}${pl.toFixed(2)} ({plp >= 0 ? '+' : ''}{plp.toFixed(2)}%)</td></tr>) })}</tbody></table></div>
          ))}
          {tab === 'orders' && (state.openOrders.length === 0 ? <p style={{ color: '#666', fontSize: 14 }}>No open limit orders.</p> : (
            <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}><thead><tr style={{ background: '#f9fafb' }}><th style={{ textAlign: 'left', padding: '10px 12px' }}>Coin</th><th style={{ textAlign: 'left', padding: '10px 12px' }}>Side</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Qty</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Limit Price</th><th style={{ textAlign: 'right', padding: '10px 12px' }}>Action</th></tr></thead><tbody>{state.openOrders.map((o) => (<tr key={o.id} style={{ borderTop: '1px solid #e5e7eb' }}><td style={{ padding: '10px 12px', fontWeight: 600 }}>{o.symbol}</td><td style={{ padding: '10px 12px', color: o.side === 'buy' ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{o.side.toUpperCase()}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}>{o.qty}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}>${o.limitPrice.toFixed(2)}</td><td style={{ padding: '10px 12px', textAlign: 'right' }}><button onClick={() => cancelOrder(o.id)} style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #dc2626', background: '#fff', color: '#dc2626', fontWeight: 600, cursor: 'pointer', fontSize: 12 }}>Cancel</button></td></tr>))}</tbody></table></div>
          ))}
          {tab === 'history' && (state.trades.length === 0 ? <p style={{ color: '#666', fontSize: 14 }}>No trades yet.</p> : (
            <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}><thead><tr style={{ background: '#f9fafb' }}><th style={{ textAlign: 'left', padding: '8px 10px' }}>Time</th><th style={{ textAlign: 'left', padding: '8px 10px' }}>Coin</th><th style={{ textAlign: 'left', padding: '8px 10px' }}>Side</th><th style={{ textAlign: 'left', padding: '8px 10px' }}>Type</th><th style={{ textAlign: 'right', padding: '8px 10px' }}>Qty</th><th style={{ textAlign: 'right', padding: '8px 10px' }}>Price</th><th style={{ textAlign: 'right', padding: '8px 10px' }}>Total</th></tr></thead><tbody>{state.trades.map((t) => (<tr key={t.id} style={{ borderTop: '1px solid #e5e7eb' }}><td style={{ padding: '8px 10px', color: '#666', fontSize: 12 }}>{new Date(t.ts).toLocaleString()}</td><td style={{ padding: '8px 10px', fontWeight: 600 }}>{t.symbol}</td><td style={{ padding: '8px 10px', color: t.side === 'buy' ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{t.side.toUpperCase()}</td><td style={{ padding: '8px 10px', fontSize: 12 }}>{t.type}</td><td style={{ padding: '8px 10px', textAlign: 'right' }}>{t.qty}</td><td style={{ padding: '8px 10px', textAlign: 'right' }}>${t.price.toFixed(2)}</td><td style={{ padding: '8px 10px', textAlign: 'right' }}>${t.total.toFixed(2)}</td></tr>))}</tbody></table></div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
        <button onClick={fetchPrices} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', color: '#111', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>Refresh Prices</button>
        <button onClick={() => { if (confirm('Reset simulator? All positions and history will be cleared.')) reset() }} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #dc2626', background: '#fff', color: '#dc2626', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>Reset</button>
      </div>

      <p style={{ marginTop: 24, fontSize: 12, color: '#888' }}>Prices from CoinGecko. Virtual trading only. Nothing here is financial advice.</p>
    </div>
  )
}
