import { Link, useParams, Navigate } from 'react-router-dom'
import { getLanguage } from '../data/languages'
export default function LanguageSubjectPage() {
  const { langSlug } = useParams<{ langSlug: string }>()
  const lang = langSlug ? getLanguage(langSlug) : undefined
  if (!lang) return <Navigate to="/languages" replace />
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/languages" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All languages</Link>
      <h1 style={{ margin: '16px 0 6px', fontSize: 32 }}>{lang.flag} {lang.name}</h1>
      <p style={{ color: '#888', marginTop: 0, marginBottom: 4 }}>{lang.nativeName} · {lang.speakers} speakers</p>
      <p style={{ color: '#555', marginBottom: 24, lineHeight: 1.6 }}>{lang.description}</p>
      <h2 style={{ fontSize: 18, color: '#333', marginBottom: 12 }}>Lessons</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {lang.lessons.map((lesson, i) => (
          <Link key={lesson.slug} to={`/languages/${lang.slug}/${lesson.slug}`} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111', background: '#fff' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#eef2ff', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{lesson.title}</div>
              <div style={{ fontSize: 12, color: '#666' }}>{lesson.level} · {lesson.duration} · {lesson.exercises.length} exercises</div>
            </div>
            <div style={{ color: '#1a73e8', fontSize: 16 }}>→</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
