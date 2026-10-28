import { Link, useParams, Navigate } from 'react-router-dom'
import { getVocSubject } from '../data/vocational'
export default function VocSubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>()
  const subject = subjectSlug ? getVocSubject(subjectSlug) : undefined
  if (!subject) return <Navigate to="/vocational" replace />
  const total = subject.modules.reduce((t, m) => t + m.lessons.length, 0)
  const ready = subject.modules.reduce((t, m) => t + m.lessons.filter((l) => l.status === 'complete').length, 0)
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/vocational" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All trades</Link>
      <h1 style={{ margin: '16px 0 6px' }}>{subject.icon} {subject.title}</h1>
      <p style={{ color: '#555', marginTop: 0, marginBottom: 4 }}>{subject.tagline}</p>
      <p style={{ color: '#666', fontSize: 13, marginTop: 0, marginBottom: 24 }}>{total} lessons · {ready} with full content ready</p>
      {subject.modules.map((mod) => (
        <div key={mod.name} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: '#333', marginBottom: 12, paddingBottom: 8, borderBottom: '2px solid #e5e7eb' }}>{mod.name}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {mod.lessons.map((l, i) => (
              <Link key={l.slug} to={`/vocational/${subject.slug}/${l.slug}`} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111', background: l.status === 'complete' ? '#f0fdf4' : '#fff' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#eef2ff', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{l.title}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{l.level} · {l.duration}</div>
                </div>
                {l.status === 'complete' && <span style={{ fontSize: 11, background: '#bbf7d0', color: '#166534', padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>✓ Ready</span>}
                <div style={{ color: '#1a73e8', fontSize: 16 }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
