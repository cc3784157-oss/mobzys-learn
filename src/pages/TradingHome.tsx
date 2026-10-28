import { Link } from 'react-router-dom'
import { tradingLessons, demoPlatforms } from '../data/trading'
export default function TradingHome() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>📈 Learn Trading</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>Free lessons, a $100,000 paper trading simulator, and real crypto prices — no real money required.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
        <Link to="/trading/learn" style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📚</div>
          <h2 style={{ margin: '0 0 6px', fontSize: 18 }}>Trading Academy</h2>
          <p style={{ margin: '0 0 12px', color: '#555', fontSize: 14 }}>{tradingLessons.length} structured lessons.</p>
          <span style={{ fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>Start →</span>
        </Link>
        <Link to="/trading/simulator" style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📊</div>
          <h2 style={{ margin: '0 0 6px', fontSize: 18 }}>Paper Simulator</h2>
          <p style={{ margin: '0 0 12px', color: '#555', fontSize: 14 }}>$100,000 virtual cash. Live prices.</p>
          <span style={{ fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>Open →</span>
        </Link>
        <Link to="/trading/demo-platforms" style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌐</div>
          <h2 style={{ margin: '0 0 6px', fontSize: 18 }}>External Platforms</h2>
          <p style={{ margin: '0 0 12px', color: '#555', fontSize: 14 }}>{demoPlatforms.length} free simulators.</p>
          <span style={{ fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>See →</span>
        </Link>
      </div>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '12px 16px', borderRadius: 6, borderLeft: '4px solid #f59e0b' }}><strong>Risk warning:</strong> Trading involves risk. Not financial advice.</p>
    </div>
  )
}
