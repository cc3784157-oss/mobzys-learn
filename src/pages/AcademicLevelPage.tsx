import { Link, useParams, Navigate } from 'react-router-dom'
import { secondarySubjects } from '../data/academicsSecondary'
import { aLevelSubjects } from '../data/academicsALevel'
import { higherEdSubjects } from '../data/academicsHigherEd'
const maps: Record<string, any> = { secondary: secondarySubjects, alevel: aLevelSubjects, highered: higherEdSubjects }
const titles: Record<string, string> = { secondary: 'Secondary (S1–S4)', alevel: 'A-Level (S5–S6)', highered: 'Higher Education' }
export default function AcademicLevelPage() {
  const { level } = useParams<{ level: string }>()
  const subjects = level ? maps[level] : undefined
  if (!subjects) return <Navigate to="/academics" replace />
  const categories = [...new Set(subjects.map((s: any) => s.category))]
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/academics" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Learning dashboard</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{titles[level!]}</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>{subjects.length} subjects — click any to see topics.</p>
      {categories.map((cat: any) => (
        <div key={cat} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, color: '#333', marginBottom: 12 }}>{cat}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {subjects.filter((s: any) => s.category === cat).map((s: any) => (
              <Link key={s.slug} to={`/academics/${level}/${s.slug}`} style={{ display: 'block', padding: 16, border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#111', background: '#fff' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>{s.title}</h3>
                <p style={{ margin: '0 0 8px', fontSize: 13, color: '#666' }}>{s.tagline}</p>
                <span style={{ fontSize: 12, color: '#1a73e8', fontWeight: 600 }}>{s.terms.reduce((t: number, term: any) => t + term.lessons.length, 0)} lessons →</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
