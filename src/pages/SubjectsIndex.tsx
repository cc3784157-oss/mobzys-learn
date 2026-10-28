import { Link } from 'react-router-dom'
import { subjects } from '../data/subjects'

export default function SubjectsIndex() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>All Learning Tracks</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>
        Free lessons across coding, English, math, Excel, digital skills, career and AI tools.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {subjects.map((s) => (
          <Link
            key={s.slug}
            to={`/learn/${s.slug}`}
            style={{
              display: 'block',
              padding: 20,
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
            <h2 style={{ margin: '0 0 6px', fontSize: 18 }}>{s.title}</h2>
            <p style={{ margin: '0 0 12px', color: '#555', fontSize: 14 }}>{s.tagline}</p>
            <span style={{ fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>
              {s.lessons.length} lesson{s.lessons.length === 1 ? '' : 's'} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
