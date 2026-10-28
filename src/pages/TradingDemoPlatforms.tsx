import { Link } from 'react-router-dom'
import { demoPlatforms } from '../data/trading'
export default function TradingDemoPlatforms() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/trading" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Trading</Link>
      <h1 style={{ margin: '16px 0 8px' }}>Free Demo Trading Platforms</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>These are third-party platforms. Mobzy does not redirect to them — use our own simulator above for practice with live prices and $100,000 virtual cash.</p>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '10px 14px', borderRadius: 6, borderLeft: '4px solid #f59e0b', marginBottom: 24 }}>Third-party. Not endorsed by Mobzy Learn.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {demoPlatforms.map((p) => (
          <div key={p.name} style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 16, background: '#fafafa' }}>
            <h3 style={{ margin: '0 0 8px' }}>{p.name}</h3>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>{p.type}</span>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>{p.startingCash}</span>
              {p.realData && <span style={{ fontSize: 12, background: '#e7f7ec', color: '#1a7f3c', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>Real data</span>}
              {p.crypto && <span style={{ fontSize: 12, background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: 20 }}>Crypto</span>}
            </div>
            <p style={{ color: '#444', fontSize: 14, marginBottom: 12 }}>{p.description}</p>
            <div style={{ display: "inline-block", padding: "8px 14px", background: "#e5e7eb", color: "#666", borderRadius: 6, fontWeight: 600, fontSize: 13 }}>Practice on Mobzy Simulator above ↑</div>
          </div>
        ))}
      </div>
    </div>
  )
}

