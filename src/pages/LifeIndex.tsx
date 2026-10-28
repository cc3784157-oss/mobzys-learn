import { Link } from 'react-router-dom'
import { lifeSubjects } from '../data/lifeSkills'
export default function LifeIndex() {
  const cats = ['Survival', 'Health', 'Money', 'Home', 'Family', 'Civic'] as const
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>🌍 Life Skills</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>Practical skills for surviving and thriving — first aid, budgeting, cooking, parenting, home maintenance, and more.</p>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '10px 14px', borderRadius: 6, borderLeft: '4px solid #f59e0b', marginBottom: 24 }}>
        ⚠️ For real emergencies, call emergency services immediately. These lessons teach awareness, not replace professional training.
      </p>
      {cats.map((cat) => {
        const subs = lifeSubjects.filter((s) => s.category === cat)
        if (subs.length === 0) return null
        return (
          <div key={cat} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, color: '#333', marginBottom: 12 }}>{cat}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {subs.map((s) => (
                <Link key={s.slug} to={`/life/${s.slug}`} style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 18 }}>{s.title}</h3>
                  <p style={{ margin: '0 0 12px', color: '#555', fontSize: 13 }}>{s.tagline}</p>
                  <span style={{ fontSize: 12, color: '#1a73e8', fontWeight: 600 }}>{s.lessons.length} lessons →</span>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
