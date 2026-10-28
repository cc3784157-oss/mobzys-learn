import { Link } from 'react-router-dom'
import { vocSubjects } from '../data/vocational'
export default function VocIndex() {
  const categories = [...new Set(vocSubjects.map((s) => s.category))]
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>🛠️ Trades & Vocational Skills</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>Learn real-world trade skills — auto mechanics, electrical, plumbing, welding, carpentry, tailoring, hairdressing, catering, construction.</p>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '10px 14px', borderRadius: 6, borderLeft: '4px solid #f59e0b', marginBottom: 24 }}>
        ⚠️ Trades involve real physical risk. All procedures shown require proper supervision and PPE. Never work on live circuits or unsupported vehicles.
      </p>
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: '#333', marginBottom: 12 }}>{cat}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {vocSubjects.filter((s) => s.category === cat).map((s) => {
              const total = s.modules.reduce((t, m) => t + m.lessons.length, 0)
              return (
                <Link key={s.slug} to={`/vocational/${s.slug}`} style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 18 }}>{s.title}</h3>
                  <p style={{ margin: '0 0 12px', color: '#555', fontSize: 13 }}>{s.tagline}</p>
                  <span style={{ fontSize: 12, color: '#1a73e8', fontWeight: 600 }}>{total} lessons →</span>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
