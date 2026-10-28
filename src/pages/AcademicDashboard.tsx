import { Link } from 'react-router-dom'
import { secondarySubjects } from '../data/academicsSecondary'
import { aLevelSubjects } from '../data/academicsALevel'
import { higherEdSubjects } from '../data/academicsHigherEd'
export default function AcademicDashboard() {
  const countLessons = (subs: any[]) => subs.reduce((s, sub) => s + sub.terms.reduce((t: number, term: any) => t + term.lessons.length, 0), 0)
  const levels = [
    { slug: 'secondary', title: 'Secondary (S1–S4)', subtitle: 'O-Level · Uganda national curriculum', icon: '🎒', subjects: secondarySubjects, color: '#1a73e8' },
    { slug: 'alevel', title: 'A-Level (S5–S6)', subtitle: 'Advanced level · university preparation', icon: '🎓', subjects: aLevelSubjects, color: '#7c3aed' },
    { slug: 'highered', title: 'Higher Education', subtitle: 'University & college courses', icon: '🏛️', subjects: higherEdSubjects, color: '#059669' }
  ]
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>📚 Learning Dashboard</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>Choose your level, then pick a subject. Every topic includes objectives, worked examples, exercises with answers, and past-paper questions.</p>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 32 }}>Total: {secondarySubjects.length + aLevelSubjects.length + higherEdSubjects.length} subjects across 3 levels</p>
      <div style={{ display: 'grid', gap: 20 }}>
        {levels.map((level) => (
          <Link key={level.slug} to={`/academics/${level.slug}`} style={{ display: 'block', padding: 24, borderRadius: 12, border: `2px solid ${level.color}`, textDecoration: 'none', color: '#111', background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 48 }}>{level.icon}</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 4px', color: level.color }}>{level.title}</h2>
                <p style={{ margin: 0, color: '#666', fontSize: 14 }}>{level.subtitle}</p>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: '#333' }}><strong>{level.subjects.length} subjects</strong> · {countLessons(level.subjects)} lessons</p>
              </div>
              <div style={{ fontSize: 24, color: level.color }}>→</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <Link to="/academics/past-papers" style={{ padding: '10px 18px', borderRadius: 8, background: '#1a73e8', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>📄 Past papers →</Link>
      </div>
    </div>
  )
}
