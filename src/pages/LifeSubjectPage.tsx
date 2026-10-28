import { Link, useParams, Navigate } from 'react-router-dom'
import { getLifeSubject } from '../data/lifeSkills'
export default function LifeSubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>()
  const subject = subjectSlug ? getLifeSubject(subjectSlug) : undefined
  if (!subject) return <Navigate to="/life" replace />
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/life" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All life skills</Link>
      <h1 style={{ margin: '16px 0 6px' }}>{subject.icon} {subject.title}</h1>
      <p style={{ color: '#555', marginTop: 0, marginBottom: 24 }}>{subject.tagline}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {subject.lessons.map((l, i) => (
          <Link key={l.slug} to={`/life/${subject.slug}/${l.slug}`} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111', background: l.status === 'complete' ? '#f0fdf4' : '#fff' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#eef2ff', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{l.title}</div>
              <div style={{ fontSize: 12, color: '#666' }}>{l.duration}</div>
            </div>
            {l.status === 'complete' && <span style={{ fontSize: 11, background: '#bbf7d0', color: '#166534', padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>✓ Ready</span>}
            <div style={{ color: '#1a73e8', fontSize: 16 }}>→</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
