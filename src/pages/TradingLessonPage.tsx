import { Link, useParams, Navigate } from 'react-router-dom'
import { useLessonProgress } from '../hooks/useLessonProgress'
import LessonActions from '../components/LessonActions'
import { tradingLessons } from '../data/trading'
type B = { type: string; text?: string; items?: string[]; svg?: string; caption?: string }
function render(b: B, i: number) {
  switch (b.type) {
    case 'h2': return <h2 key={i} style={{ marginTop: 28 }}>{b.text}</h2>
    case 'h3': return <h3 key={i} style={{ marginTop: 20 }}>{b.text}</h3>
    case 'p': return <p key={i} style={{ lineHeight: 1.7 }}>{b.text}</p>
    case 'ul': return <ul key={i} style={{ lineHeight: 1.8 }}>{b.items?.map((x, j) => <li key={j}>{x}</li>)}</ul>
    case 'ol': return <ol key={i} style={{ lineHeight: 1.8 }}>{b.items?.map((x, j) => <li key={j}>{x}</li>)}</ol>
    case 'note': return <div key={i} style={{ background: '#fff7ed', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, margin: '16px 0' }}>{b.text}</div>
        case 'svg': return <figure key={i} style={{ margin: '24px 0', textAlign: 'center' }}><div style={{ display: 'inline-block', maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: b.svg || '' }} />{b.caption && <figcaption style={{ fontSize: 13, color: '#555', marginTop: 8, fontStyle: 'italic' }}>{b.caption}</figcaption>}</figure>
    case 'formula': return <div key={i} style={{ background: '#f4f6fb', borderLeft: '4px solid #1a73e8', padding: '12px 16px', borderRadius: 6, margin: '16px 0', fontFamily: 'monospace', color: '#1a3a78' }}>{b.text}</div>
    default: return null
  }
}
export default function TradingLessonPage() {
  const { slug } = useParams<{ slug: string }>()
  const lesson = tradingLessons.find((l) => l.slug === slug)
  
  const progress = useLessonProgress({ type: 'trading', subjectSlug: 'trading', lessonSlug: slug, title: lesson.title, subjectTitle: 'Trading', url: typeof window !== 'undefined' ? window.location.pathname : '' })
  if (!lesson) return <Navigate to="/trading/learn" replace />
  const idx = tradingLessons.findIndex((l) => l.slug === lesson.slug)
  const next = tradingLessons[idx + 1]
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/trading/learn" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← Academy</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{lesson.title}</h1>
      <p style={{ color: '#666', fontSize: 14, marginTop: 0 }}>{lesson.readMin} min · {lesson.level}</p>
      <div>{lesson.content.map(render)}</div>
      {next && (<div style={{ marginTop: 32 }}><Link to={`/trading/learn/${next.slug}`} style={{ display: 'inline-block', padding: '10px 18px', borderRadius: 8, background: '#1a73e8', color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Next: {next.title} →</Link></div>)}
    
      <LessonActions saved={progress.saved} onToggle={progress.toggleSave} completed={progress.completed} onComplete={progress.markCompleted} />
    </div>
  )
}


