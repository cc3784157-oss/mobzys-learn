import { useState, useEffect, useCallback } from 'react'

export type OrderType = 'market' | 'limit'
export type Side = 'buy' | 'sell'

export type Trade = {
  id: string
  symbol: string
  side: Side
  qty: number
  price: number
  total: number
  ts: number
  type: OrderType
}

export type Position = {
  symbol: string
  coinId: string
  qty: number
  avgPrice: number
}

export type OpenOrder = {
  id: string
  symbol: string
  coinId: string
  side: Side
  qty: number
  limitPrice: number
  ts: number
}

type State = {
  cash: number
  positions: Position[]
  trades: Trade[]
  openOrders: OpenOrder[]
}

const STORAGE_KEY = 'mobzy_paper_trader_v2'
const STARTING = 100000

function loadState(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const s = JSON.parse(raw)
      return {
        cash: typeof s.cash === 'number' ? s.cash : STARTING,
        positions: Array.isArray(s.positions) ? s.positions : [],
        trades: Array.isArray(s.trades) ? s.trades : [],
        openOrders: Array.isArray(s.openOrders) ? s.openOrders : [],
      }
    }
  } catch {}
  return { cash: STARTING, positions: [], trades: [], openOrders: [] }
}

export function usePaperTrading() {
  const [state, setState] = useState<State>(loadState)

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch {}
  }, [state])

  const placeMarketOrder = useCallback((coin: { id: string; symbol: string; name: string; current_price: number }, side: Side, qty: number) => {
    if (!coin || qty <= 0) return { ok: false, error: 'Invalid quantity' }
    const price = coin.current_price
    const total = price * qty

    if (side === 'buy' && total > state.cash) return { ok: false, error: 'Not enough cash' }
    if (side === 'sell') {
      const held = state.positions.find((p) => p.coinId === coin.id)
      if (!held || held.qty < qty) return { ok: false, error: 'Not enough holdings' }
    }

    setState((prev) => {
      let cash = prev.cash
      let positions = [...prev.positions]
      if (side === 'buy') {
        cash -= total
        const existing = positions.find((p) => p.coinId === coin.id)
        if (existing) {
          const newQty = existing.qty + qty
          const newAvg = (existing.avgPrice * existing.qty + price * qty) / newQty
          positions = positions.map((p) => (p.coinId === coin.id ? { ...p, qty: newQty, avgPrice: newAvg } : p))
        } else {
          positions.push({ coinId: coin.id, symbol: coin.symbol.toUpperCase(), qty, avgPrice: price })
        }
      } else {
        cash += total
        const existing = positions.find((p) => p.coinId === coin.id)!
        if (existing.qty === qty) {
          positions = positions.filter((p) => p.coinId !== coin.id)
        } else {
          positions = positions.map((p) => (p.coinId === coin.id ? { ...p, qty: p.qty - qty } : p))
        }
      }

      const trade: Trade = {
        id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
        symbol: coin.symbol.toUpperCase(),
        side, qty, price, total, ts: Date.now(), type: 'market',
      }

      return { ...prev, cash, positions, trades: [trade, ...prev.trades] }
    })

    return { ok: true }
  }, [state])

  const placeLimitOrder = useCallback((coin: { id: string; symbol: string; name: string; current_price: number }, side: Side, qty: number, limitPrice: number) => {
    if (!coin || qty <= 0 || limitPrice <= 0) return { ok: false, error: 'Invalid order' }
    if (side === 'buy' && limitPrice * qty > state.cash) return { ok: false, error: 'Not enough cash to reserve' }
    if (side === 'sell') {
      const held = state.positions.find((p) => p.coinId === coin.id)
      if (!held || held.qty < qty) return { ok: false, error: 'Not enough holdings' }
    }

    const order: OpenOrder = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
      symbol: coin.symbol.toUpperCase(),
      coinId: coin.id,
      side, qty, limitPrice, ts: Date.now(),
    }

    setState((prev) => ({ ...prev, openOrders: [order, ...prev.openOrders] }))
    return { ok: true }
  }, [state])

  const cancelOrder = useCallback((orderId: string) => {
    setState((prev) => ({ ...prev, openOrders: prev.openOrders.filter((o) => o.id !== orderId) }))
  }, [])

  const checkLimitOrders = useCallback((prices: Record<string, number>) => {
    setState((prev) => {
      const stillOpen: OpenOrder[] = []
      const newTrades: Trade[] = []
      let cash = prev.cash
      let positions = [...prev.positions]

      for (const order of prev.openOrders) {
        const currentPrice = prices[order.coinId]
        if (currentPrice === undefined) {
          stillOpen.push(order)
          continue
        }

        const shouldFill =
          (order.side === 'buy' && currentPrice <= order.limitPrice) ||
          (order.side === 'sell' && currentPrice >= order.limitPrice)

        if (!shouldFill) {
          stillOpen.push(order)
          continue
        }

        const fillPrice = currentPrice
        const total = fillPrice * order.qty

        if (order.side === 'buy') {
          if (total > cash) {
            stillOpen.push(order)
            continue
          }
          cash -= total
          const existing = positions.find((p) => p.coinId === order.coinId)
          if (existing) {
            const newQty = existing.qty + order.qty
            const newAvg = (existing.avgPrice * existing.qty + fillPrice * order.qty) / newQty
            positions = positions.map((p) => (p.coinId === order.coinId ? { ...p, qty: newQty, avgPrice: newAvg } : p))
          } else {
            positions.push({ coinId: order.coinId, symbol: order.symbol, qty: order.qty, avgPrice: fillPrice })
          }
        } else {
          cash += total
          const existing = positions.find((p) => p.coinId === order.coinId)!
          if (existing.qty === order.qty) {
            positions = positions.filter((p) => p.coinId !== order.coinId)
          } else {
            positions = positions.map((p) => (p.coinId === order.coinId ? { ...p, qty: p.qty - order.qty } : p))
          }
        }

        newTrades.push({
          id: order.id,
          symbol: order.symbol,
          side: order.side,
          qty: order.qty,
          price: fillPrice,
          total,
          ts: Date.now(),
          type: 'limit',
        })
      }

      if (newTrades.length === 0) return prev
      return { ...prev, cash, positions, trades: [...newTrades, ...prev.trades], openOrders: stillOpen }
    })
  }, [])

  const reset = useCallback(() => {
    setState({ cash: STARTING, positions: [], trades: [], openOrders: [] })
  }, [])

  return { state, placeMarketOrder, placeLimitOrder, cancelOrder, checkLimitOrders, reset, STARTING }
}
