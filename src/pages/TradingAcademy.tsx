import { Link } from 'react-router-dom'
import { tradingLessons } from '../data/trading'
export default function TradingAcademy() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/trading" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Trading</Link>
      <h1 style={{ margin: '16px 0 8px' }}>Trading Academy</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>{tradingLessons.length} lessons.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tradingLessons.map((l, i) => (
          <Link key={l.slug} to={`/trading/learn/${l.slug}`} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 16, border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#111', background: '#fff' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#eef2ff', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{l.title}</div>
              <div style={{ fontSize: 13, color: '#666' }}>{l.readMin} min · {l.level}</div>
            </div>
            <div style={{ color: '#1a73e8', fontSize: 18 }}>→</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
