import { Link, useParams, Navigate } from 'react-router-dom'
import { getSubject } from '../data/subjects'

export default function SubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>()
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined

  if (!subject) return <Navigate to="/learn" replace />

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/learn" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>
        ← All tracks
      </Link>

      <h1 style={{ margin: '16px 0 6px' }}>{subject.icon} {subject.title}</h1>
      <p style={{ color: '#555', marginTop: 0, marginBottom: 24 }}>{subject.tagline}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {subject.lessons.map((lesson, i) => (
          <Link
            key={lesson.slug}
            to={`/learn/${subject.slug}/${lesson.slug}`}
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              padding: 16,
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#eef2ff',
                color: '#1a73e8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{lesson.title}</div>
              <div style={{ fontSize: 13, color: '#666' }}>{lesson.readMin} min read</div>
            </div>
            <div style={{ color: '#1a73e8', fontSize: 18 }}>→</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
