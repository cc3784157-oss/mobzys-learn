import { Link } from 'react-router-dom'
const papers = [
  { level: 'Secondary (UCE)', subject: 'Chemistry', years: ['2024', '2023', '2022', '2021'], link: '/academics/secondary/chemistry' },
  { level: 'Secondary (UCE)', subject: 'Biology', years: ['2024', '2023', '2022', '2021'], link: '/academics/secondary/biology' },
  { level: 'Secondary (UCE)', subject: 'Physics', years: ['2024', '2023', '2022', '2021'], link: '/academics/secondary/physics' },
  { level: 'Secondary (UCE)', subject: 'Mathematics', years: ['2024', '2023', '2022', '2021'], link: '/academics/secondary/mathematics' },
  { level: 'A-Level (UACE)', subject: 'Chemistry', years: ['2024', '2023', '2022', '2021'], link: '/academics/alevel/chemistry' },
  { level: 'A-Level (UACE)', subject: 'Biology', years: ['2024', '2023', '2022', '2021'], link: '/academics/alevel/biology' },
  { level: 'A-Level (UACE)', subject: 'Physics', years: ['2024', '2023', '2022', '2021'], link: '/academics/alevel/physics' },
  { level: 'A-Level (UACE)', subject: 'Mathematics', years: ['2024', '2023', '2022', '2021'], link: '/academics/alevel/mathematics' }
]
export default function PastPapers() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/academics" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Learning dashboard</Link>
      <h1 style={{ margin: '16px 0 8px' }}>📄 Past Papers</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>Past-paper questions are embedded in each lesson. Click a subject to see year-by-year questions with mark schemes.</p>
      <div style={{ display: 'grid', gap: 12 }}>
        {papers.map((p) => (
          <Link key={`${p.level}-${p.subject}`} to={p.link} style={{ display: 'block', padding: 16, border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#111', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontSize: 12, color: '#666' }}>{p.level}</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{p.subject}</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {p.years.map((y) => <span key={y} style={{ fontSize: 12, background: '#eef', color: '#224', padding: '3px 10px', borderRadius: 20 }}>{y}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
