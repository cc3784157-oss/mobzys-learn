import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import { courses } from '../data/courses'
import { subjects } from '../data/subjects'
import { secondarySubjects } from '../data/academicsSecondary'
import { aLevelSubjects } from '../data/academicsALevel'
import { higherEdSubjects } from '../data/academicsHigherEd'
import { vocSubjects } from '../data/vocational'
import { lifeSubjects } from '../data/lifeSkills'
import { tradingLessons } from '../data/trading'
import { repairGuides } from '../data/repair'
import { software } from '../data/software'
import { blogPosts } from '../data/blog'

function countLessons(subject: any): number {
  if (subject.lessons) return subject.lessons.length
  if (subject.terms) return subject.terms.reduce((t: number, term: any) => t + term.lessons.length, 0)
  if (subject.modules) return subject.modules.reduce((t: number, m: any) => t + m.lessons.length, 0)
  return 0
}

export default function Home() {
  const acadSubjects = [...secondarySubjects, ...aLevelSubjects, ...higherEdSubjects]
  const acadLessons = acadSubjects.reduce((s, sub) => s + countLessons(sub), 0)
  const vocLessons = vocSubjects.reduce((s, sub) => s + countLessons(sub), 0)
  const lifeLessons = lifeSubjects.reduce((s, sub) => s + sub.lessons.length, 0)
  const codingLessons = subjects.reduce((s, sub) => s + sub.lessons.length, 0)

  const sections = [
    {
      to: '/academics',
      icon: '🎓',
      title: 'Academics',
      desc: 'O-Level (S1–S4), A-Level (S5–S6), and higher education subjects with objectives, worked examples, and exercises with answers.',
      stats: [`${acadSubjects.length} subjects`, `${acadLessons} lessons`],
      subsections: ['Secondary', 'A-Level', 'Higher Ed', 'Past Papers'],
    },
    {
      to: '/vocational',
      icon: '🛠️',
      title: 'Trades & Vocational',
      desc: 'Auto mechanics, electrical installation, plumbing, welding, carpentry, tailoring, hairdressing, catering, construction.',
      stats: [`${vocSubjects.length} trades`, `${vocLessons} lessons`],
      subsections: ['Auto Mechanics', 'Electrical', 'Plumbing', 'Welding', 'Carpentry', 'Tailoring', 'Catering', 'Construction'],
    },
    {
      to: '/life',
      icon: '🌍',
      title: 'Life Skills',
      desc: 'Practical skills for real life: first aid, water purification, fire safety, budgeting, cooking, parenting, legal basics, digital literacy.',
      stats: [`${lifeSubjects.length} categories`, `${lifeLessons} lessons`],
      subsections: ['First Aid', 'Health', 'Money', 'Home', 'Family', 'Civic'],
    },
    {
      to: '/learn',
      icon: '💻',
      title: 'Programming',
      desc: 'JavaScript, Python, TypeScript, React, Node.js, Rust, Go, databases, cybersecurity and more.',
      stats: [`${subjects.length} tracks`, `${codingLessons} lessons`],
      subsections: ['Web', 'Backend', 'Mobile', 'DevOps', 'CS'],
    },
    {
      to: '/trading',
      icon: '📈',
      title: 'Trading & Markets',
      desc: 'Candlestick patterns, chart patterns, indicators, risk management, and a $100,000 paper trading simulator with live crypto prices.',
      stats: [`${tradingLessons.length} lessons`, 'Paper simulator'],
      subsections: ['Candlesticks', 'Chart Patterns', 'Indicators', 'Risk', 'Simulator', 'Demo Platforms'],
    },
    {
      to: '/repair',
      icon: '🔧',
      title: 'Repair Guides',
      desc: 'Step-by-step repair guides for phones, laptops, PCs, radios, keyboards, audio interfaces, TVs, consoles, and accessories.',
      stats: [`${repairGuides.length} guides`, 'Photos & diagrams'],
      subsections: ['Phone', 'Laptop', 'PC', 'Audio', 'Radio', 'Keyboard', 'TV', 'Console'],
    },
    {
      to: '/downloads',
      icon: '💾',
      title: 'Free Software',
      desc: 'Legal, official links to free and open-source software and games for Windows, macOS, Linux, and Android.',
      stats: [`${software.length} apps`, 'Official links only'],
      subsections: ['Media', 'Office', 'Design', 'Development', 'Security', 'Utilities', 'Education', 'Games'],
    },
    {
      to: '/blog',
      icon: '📝',
      title: 'Blog',
      desc: 'Long-form articles on learning, careers, technology, and practical guides.',
      stats: [`${blogPosts.length} articles`, 'Guides'],
      subsections: ['Learning', 'Career', 'Tech'],
    },
    {
      to: '/learning',
      icon: '🧭',
      title: 'Learning Dashboard',
      desc: 'One page to pick anything on the site. If you are not sure where to start, start here.',
      stats: ['9 sections', 'Everything'],
      subsections: ['All sections'],
    },
  ]

  const totalPages = acadLessons + vocLessons + lifeLessons + codingLessons + tradingLessons.length + repairGuides.length + software.length + blogPosts.length

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
      <HeroCarousel />

      <div style={{ marginBottom: 40 }}>
        <h1 style={{ margin: '0 0 12px', fontSize: 32, lineHeight: 1.2, color: '#111' }}>
          Mobzy Learn
        </h1>
        <p style={{ margin: '0 0 8px', fontSize: 16, color: '#444', lineHeight: 1.6, maxWidth: 800 }}>
          Free lessons on academic subjects, trades, life skills, programming, trading, and repair. No account required, no paywall.
        </p>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          {totalPages}+ pages · {sections.length} sections · 100% free
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 40 }}>
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            style={{
              display: 'block',
              padding: 20,
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <h2 style={{ margin: 0, fontSize: 18, color: '#111' }}>{s.title}</h2>
            </div>
            <p style={{ margin: '0 0 12px', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{s.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
              {s.stats.map((stat) => (
                <span
                  key={stat}
                  style={{ fontSize: 12, background: '#eef', color: '#224', padding: '3px 9px', borderRadius: 20 }}
                >
                  {stat}
                </span>
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>{s.subsections.join(' · ')}</div>
            <div style={{ marginTop: 12, color: '#1a73e8', fontWeight: 600, fontSize: 14 }}>Open →</div>
          </Link>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 24, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, color: '#111', marginBottom: 12 }}>Featured programming courses</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>A small sample of the {courses.length} programming courses available.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
          {courses.slice(0, 6).map((c: any) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}`}
              style={{
                display: 'block',
                padding: 14,
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                textDecoration: 'none',
                color: '#111',
                background: '#fafafa',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: '#666' }}>{c.category} · {c.level}</div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 24 }}>
        <h2 style={{ fontSize: 20, color: '#111', marginBottom: 12 }}>Not sure where to start?</h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
          The Learning Dashboard shows every section on one page so you can pick what you need.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Link
            to="/learning"
            style={{
              padding: '12px 20px',
              background: '#1a73e8',
              color: '#fff',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Open Learning Dashboard
          </Link>
          <Link
            to="/blog"
            style={{
              padding: '12px 20px',
              background: '#fff',
              color: '#111',
              border: '1px solid #d1d5db',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

