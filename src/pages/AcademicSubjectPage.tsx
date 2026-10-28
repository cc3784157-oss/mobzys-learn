import { Link, useParams, Navigate } from 'react-router-dom'
import { secondarySubjects } from '../data/academicsSecondary'
import { aLevelSubjects } from '../data/academicsALevel'
import { higherEdSubjects } from '../data/academicsHigherEd'
const maps: Record<string, any> = { secondary: secondarySubjects, alevel: aLevelSubjects, highered: higherEdSubjects }
export default function AcademicSubjectPage() {
  const { level, subjectSlug } = useParams<{ level: string; subjectSlug: string }>()
  const subjects = level ? maps[level] : undefined
  const subject = subjects?.find((s: any) => s.slug === subjectSlug)
  if (!subject || !level) return <Navigate to="/academics" replace />
  const total = subject.terms.reduce((t: number, term: any) => t + term.lessons.length, 0)
  const ready = subject.terms.reduce((t: number, term: any) => t + term.lessons.filter((l: any) => l.status === 'complete').length, 0)
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to={`/academics/${level}`} style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All {level} subjects</Link>
      <h1 style={{ margin: '16px 0 6px' }}>{subject.icon} {subject.title}</h1>
      <p style={{ color: '#555', marginTop: 0, marginBottom: 4 }}>{subject.tagline}</p>
      <p style={{ color: '#666', fontSize: 13, marginTop: 0, marginBottom: 24 }}>{total} lessons · {ready} with full content ready</p>
      {subject.terms.map((term: any) => (
        <div key={term.name} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: '#333', marginBottom: 12, paddingBottom: 8, borderBottom: '2px solid #e5e7eb' }}>{term.name}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {term.lessons.map((lesson: any, i: number) => (
              <Link key={lesson.slug} to={`/academics/${level}/${subject.slug}/${lesson.slug}`} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111', background: lesson.status === 'complete' ? '#f0fdf4' : '#fff' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#eef2ff', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{lesson.title}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{lesson.level} · {lesson.duration}</div>
                </div>
                {lesson.status === 'complete' && <span style={{ fontSize: 11, background: '#bbf7d0', color: '#166534', padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>✓ Ready</span>}
                <div style={{ color: '#1a73e8', fontSize: 16 }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
