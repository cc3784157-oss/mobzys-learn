import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useLessonProgress } from '../hooks/useLessonProgress'
import LessonActions from '../components/LessonActions'
import { getLifeSubject, getLifeLesson, type LifeBlock } from '../data/lifeSkills'
function renderBlock(b: LifeBlock, i: number) {
  switch (b.type) {
    case 'h2': return <h2 key={i} style={{ marginTop: 28 }}>{b.text}</h2>
    case 'h3': return <h3 key={i} style={{ marginTop: 20 }}>{b.text}</h3>
    case 'p': return <p key={i} style={{ lineHeight: 1.8, color: '#333' }}>{b.text}</p>
    case 'ul': return <ul key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
    case 'ol': return <ol key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ol>
    case 'note': return <div key={i} style={{ background: '#fff7ed', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, margin: '16px 0' }}>{b.text}</div>
    case 'formula': return <div key={i} style={{ background: '#f4f6fb', borderLeft: '4px solid #1a73e8', padding: '12px 16px', borderRadius: 6, margin: '16px 0', fontFamily: 'monospace', color: '#1a3a78' }}>{b.text}</div>
    case 'image': return <figure key={i} style={{ margin: '20px 0' }}><img src={b.url} alt={b.alt} style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid #e5e7eb' }} />{b.caption && <figcaption style={{ fontSize: 13, color: '#666', marginTop: 6, textAlign: 'center' }}>{b.caption}</figcaption>}</figure>
    default: return null
  }
}
export default function LifeLessonPage() {
  const { subjectSlug, lessonSlug } = useParams<{ subjectSlug: string; lessonSlug: string }>()
  const subject = subjectSlug ? getLifeSubject(subjectSlug) : undefined
  const lesson = subjectSlug && lessonSlug ? getLifeLesson(subjectSlug, lessonSlug) : undefined
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set())
  
  const progress = useLessonProgress({ type: 'life', subjectSlug: subjectSlug, lessonSlug: lessonSlug, title: lesson.title, subjectTitle: subject.title, url: typeof window !== 'undefined' ? window.location.pathname : '' })
  if (!subject || !lesson) return <Navigate to="/life" replace />
  const toggle = (i: number) => { const n = new Set(showAnswers); n.has(i) ? n.delete(i) : n.add(i); setShowAnswers(n) }
  const idx = subject.lessons.findIndex((l) => l.slug === lesson.slug)
  const next = subject.lessons[idx + 1]
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 16px' }}>
      <Link to={`/life/${subject.slug}`} style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← {subject.title}</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{lesson.title}</h1>
      <p style={{ color: '#666', fontSize: 14, marginTop: 0 }}>{lesson.duration}</p>
      {lesson.status === 'in-progress' && <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', padding: 12, borderRadius: 6, fontSize: 13, color: '#92400e', marginBottom: 16 }}>⚠️ This lesson is being expanded.</div>}
      {lesson.safety && lesson.safety.length > 0 && (
        <div style={{ background: '#fef2f2', borderLeft: '4px solid #dc2626', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
          <strong style={{ display: 'block', marginBottom: 6, color: '#991b1b' }}>⚠️ Safety</strong>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>{lesson.safety.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}
      {lesson.imageUrl && <img src={lesson.imageUrl} alt={lesson.imageAlt || lesson.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 10, marginBottom: 20 }} />}
      <div style={{ background: '#eff6ff', borderLeft: '4px solid #1a73e8', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
        <strong style={{ display: 'block', marginBottom: 8 }}>🎯 Learning objectives</strong>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>{lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
      </div>
      {lesson.materials && lesson.materials.length > 0 && (
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', marginBottom: 24 }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>🔧 Materials</strong>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, fontSize: 14 }}>{lesson.materials.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </div>
      )}
      <div>{lesson.content.map(renderBlock)}</div>
      <h2 style={{ marginTop: 32 }}>✏️ Test your understanding</h2>
      {lesson.exercises.map((ex, i) => (
        <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14, marginBottom: 12 }}>
          <p style={{ margin: '0 0 8px', lineHeight: 1.7 }}>{ex.question}</p>
          <button onClick={() => toggle(i)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #1a73e8', background: showAnswers.has(i) ? '#1a73e8' : '#fff', color: showAnswers.has(i) ? '#fff' : '#1a73e8', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>{showAnswers.has(i) ? 'Hide answer' : 'Show answer'}</button>
          {showAnswers.has(i) && <div style={{ background: '#f0fdf4', borderLeft: '3px solid #16a34a', padding: '10px 14px', marginTop: 10, borderRadius: 4, color: '#166534', lineHeight: 1.7 }}><strong>Answer:</strong> {ex.answer}</div>}
        </div>
      ))}
      {lesson.notes && <div style={{ background: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, marginTop: 24, color: '#78350f' }}><strong style={{ display: 'block', marginBottom: 4 }}>📌 Important note</strong>{lesson.notes}</div>}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #e5e7eb', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => window.print()} style={{ padding: '10px 18px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', color: '#111', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>🖨 Print</button>
        <button onClick={() => { const u = window.location.href; const t = `${lesson.title} — free lesson on Mobzy Learn`; if (navigator.share) navigator.share({ title: lesson.title, text: t, url: u }).catch(() => {}); else window.open(`https://wa.me/?text=${encodeURIComponent(t + ' ' + u)}`, '_blank') }} style={{ padding: '10px 18px', borderRadius: 8, border: 'none', background: '#25d366', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>📤 Share</button>
      </div>
      {next && <div style={{ marginTop: 24 }}><Link to={`/life/${subject.slug}/${next.slug}`} style={{ display: 'inline-block', padding: '10px 18px', borderRadius: 8, background: '#1a73e8', color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Next: {next.title} →</Link></div>}
    
      <LessonActions saved={progress.saved} onToggle={progress.toggleSave} completed={progress.completed} onComplete={progress.markCompleted} />
    </div>
  )
}

