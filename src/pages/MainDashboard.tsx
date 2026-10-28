import { Link } from 'react-router-dom'
import { subjects } from '../data/subjects'
import { secondarySubjects } from '../data/academicsSecondary'
import { aLevelSubjects } from '../data/academicsALevel'
import { higherEdSubjects } from '../data/academicsHigherEd'
import { tradingLessons } from '../data/trading'
import { repairGuides } from '../data/repair'
import { software } from '../data/software'
import { blogPosts } from '../data/blog'
import { vocSubjects } from '../data/vocational'
import { lifeSubjects } from '../data/lifeSkills'

export default function MainDashboard() {
  const academicSubjects = secondarySubjects.length + aLevelSubjects.length + higherEdSubjects.length
  const academicLessons = [secondarySubjects, aLevelSubjects, higherEdSubjects].reduce((s: number, list: any[]) => s + list.reduce((t: number, sub: any) => t + sub.terms.reduce((tt: number, term: any) => tt + term.lessons.length, 0), 0), 0)
  const codingLessons = subjects.reduce((s, sub) => s + sub.lessons.length, 0)

  const sections = [
    { to: '/vocational', icon: '🛠️', title: 'Trades & Vocational', subtitle: 'Auto mechanics, electrical, plumbing, welding', count: `\ trades, 90+ lessons`, color: '#b45309', badge: 'NEW' },
    { to: '/life', icon: '🌍', title: 'Life Skills', subtitle: 'First aid, cooking, money, home, family', count: `\ categories, 80+ lessons`, color: '#0891b2', badge: 'NEW' },


    { to: '/academics', icon: '🎓', title: 'Academics', subtitle: 'O-Level · A-Level · Higher Ed', count: `${academicSubjects} subjects, ${academicLessons} lessons`, color: '#1a73e8', badge: 'NEW' },
    { to: '/learn', icon: '💻', title: 'Programming', subtitle: 'Python, JavaScript, React, more', count: `${subjects.length} tracks, ${codingLessons} lessons`, color: '#7c3aed' },
    { to: '/trading', icon: '📈', title: 'Trading', subtitle: 'Lessons + $100k simulator', count: `${tradingLessons.length} lessons + live simulator`, color: '#059669' },
    { to: '/repair', icon: '🔧', title: 'Repair Guides', subtitle: 'Phones, laptops, PC, audio', count: `${repairGuides.length} step-by-step guides`, color: '#dc2626' },
    { to: '/downloads', icon: '💾', title: 'Free Software', subtitle: 'Legal, official download links', count: `${software.length} apps & games`, color: '#d97706' },
    { to: '/blog', icon: '📝', title: 'Blog', subtitle: 'Guides, tutorials, comparisons', count: `${blogPosts.length} articles`, color: '#0891b2' }
  ]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, margin: '20px 0 8px', lineHeight: 1.2 }}>What do you want to learn today?</h1>
        <p style={{ color: '#666', fontSize: 16, marginBottom: 8 }}>
          Pick a section. Every topic includes notes, worked examples, and practice exercises.
        </p>
        <p style={{ color: '#888', fontSize: 14 }}>100% free. No account required to browse.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16, marginBottom: 40 }}>
        {sections.map((s) => (
          <Link key={s.to} to={s.to} style={{ display: 'block', padding: 24, borderRadius: 16, border: `2px solid ${s.color}`, textDecoration: 'none', color: '#111', background: '#fff', position: 'relative' }}>
            {s.badge && <span style={{ position: 'absolute', top: -10, right: 16, background: s.color, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{s.badge}</span>}
            <div style={{ fontSize: 48, marginBottom: 12 }}>{s.icon}</div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, color: s.color }}>{s.title}</h2>
            <p style={{ margin: '0 0 12px', color: '#666', fontSize: 14 }}>{s.subtitle}</p>
            <p style={{ margin: 0, fontSize: 13, color: '#333', fontWeight: 600 }}>{s.count}</p>
            <div style={{ marginTop: 12, color: s.color, fontSize: 14, fontWeight: 600 }}>Start →</div>
          </Link>
        ))}
      </div>

      <div style={{ background: '#f9fafb', borderRadius: 12, padding: 24 }}>
        <h2 style={{ margin: '0 0 16px', fontSize: 20 }}>🚀 New here? Start with these</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          <Link to="/academics/secondary/chemistry/atoms-and-elements" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Chemistry · O-Level</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>Atoms and Elements</div>
          </Link>
          <Link to="/academics/secondary/biology/cells-basic-unit-of-life" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Biology · O-Level</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>Cells: Basic Unit of Life</div>
          </Link>
          <Link to="/academics/secondary/physics/motion-and-speed" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Physics · O-Level</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>Motion and Speed</div>
          </Link>
          <Link to="/academics/secondary/mathematics/fractions-and-decimals" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Mathematics · O-Level</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>Fractions and Decimals</div>
          </Link>
          <Link to="/learn/javascript" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Programming</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>JavaScript from Scratch</div>
          </Link>
          <Link to="/trading/simulator" style={{ display: 'block', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontSize: 12, color: '#888' }}>Trading</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>Paper Trading Simulator</div>
          </Link>
        </div>
      </div>
    </div>
  )
}


