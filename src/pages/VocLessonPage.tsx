import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getVocSubject, getVocLesson, type VocContentBlock } from '../data/vocational'
import { useLessonProgress } from '../hooks/useLessonProgress'
import LessonActions from '../components/LessonActions'

function renderBlock(b: VocContentBlock, i: number) {
  switch (b.type) {
    case 'h2': return <h2 key={i} style={{ marginTop: 28 }}>{b.text}</h2>
    case 'h3': return <h3 key={i} style={{ marginTop: 20 }}>{b.text}</h3>
    case 'p': return <p key={i} style={{ lineHeight: 1.8, color: '#333' }}>{b.text}</p>
    case 'ul': return <ul key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
    case 'ol': return <ol key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ol>
    case 'note': return <div key={i} style={{ background: '#fff7ed', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, margin: '16px 0' }}>{b.text}</div>
    case 'formula': return <div key={i} style={{ background: '#f4f6fb', borderLeft: '4px solid #1a73e8', padding: '12px 16px', borderRadius: 6, margin: '16px 0', fontFamily: 'monospace', color: '#1a3a78' }}>{b.text}</div>
    case 'svg': return <figure key={i} style={{ margin: '24px 0', textAlign: 'center' }}><div style={{ display: 'inline-block', maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: (b as any).svg || '' }} />{(b as any).caption && <figcaption style={{ fontSize: 13, color: '#555', marginTop: 8, fontStyle: 'italic' }}>{(b as any).caption}</figcaption>}</figure>
    case 'image': return <figure key={i} style={{ margin: '24px 0' }}><img src={(b as any).url} alt={(b as any).alt || ''} style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid #e5e7eb' }} />{(b as any).caption && <figcaption style={{ fontSize: 13, color: '#666', marginTop: 6, textAlign: 'center' }}>{(b as any).caption}</figcaption>}</figure>
    default: return null
  }
}

export default function VocLessonPage() {
  const { subjectSlug, lessonSlug } = useParams<{ subjectSlug: string; lessonSlug: string }>()
  const subject = subjectSlug ? getVocSubject(subjectSlug) : undefined
  const result = subjectSlug && lessonSlug ? getVocLesson(subjectSlug, lessonSlug) : undefined
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set())

  // Call hook with safe fallbacks — works even if result is undefined
  const progress = useLessonProgress({
    type: 'vocational',
    subjectSlug: subjectSlug || '',
    lessonSlug: lessonSlug || '',
    title: result?.lesson.title || '',
    subjectTitle: subject?.title || '',
    url: typeof window !== 'undefined' ? window.location.pathname : '',
  })

  if (!subject || !result) return <Navigate to="/vocational" replace />

  const { lesson, module: moduleName } = result
  const toggle = (i: number) => { const n = new Set(showAnswers); n.has(i) ? n.delete(i) : n.add(i); setShowAnswers(n) }
  const all = subject.modules.flatMap((m) => m.lessons)
  const idx = all.findIndex((l) => l.slug === lesson.slug)
  const next = all[idx + 1]

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 16px' }}>
      <Link to={`/vocational/${subject.slug}`} style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← {subject.title}</Link>
      <p style={{ fontSize: 12, color: '#888', margin: '8px 0 0' }}>{moduleName}</p>
      <h1 style={{ margin: '8px 0' }}>{lesson.title}</h1>
      <p style={{ color: '#666', fontSize: 14, marginTop: 0 }}>{lesson.level} · {lesson.duration}</p>

      {lesson.status === 'in-progress' && (
        <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', padding: 12, borderRadius: 6, fontSize: 13, color: '#92400e', marginBottom: 16 }}>
          ⚠️ This lesson is being expanded. Objectives, safety notes, exercises and homework are complete below.
        </div>
      )}

      {lesson.safetyNotes && lesson.safetyNotes.length > 0 && (
        <div style={{ background: '#fef2f2', borderLeft: '4px solid #dc2626', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
          <strong style={{ display: 'block', marginBottom: 6, color: '#991b1b' }}>⚠️ Safety</strong>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>{lesson.safetyNotes.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      )}

      <div style={{ background: '#eff6ff', borderLeft: '4px solid #1a73e8', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
        <strong style={{ display: 'block', marginBottom: 8 }}>🎯 Learning objectives</strong>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>{(lesson.objectives || []).map((o, i) => <li key={i}>{o}</li>)}</ul>
      </div>

      {lesson.materials && lesson.materials.length > 0 && (
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', marginBottom: 24 }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>🔧 Materials / Tools</strong>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, fontSize: 14 }}>{lesson.materials.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </div>
      )}

      <div>{(lesson.content || []).map(renderBlock)}</div>

      {lesson.activities && lesson.activities.length > 0 && (
        <>
          <h2 style={{ marginTop: 32 }}>👥 Practical activities</h2>
          {lesson.activities.map((a, i) => (
            <div key={i} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: 14, marginBottom: 12 }}>
              <strong style={{ display: 'block', marginBottom: 4, color: '#166534' }}>{a.name}</strong>
              <span style={{ color: '#333' }}>{a.description}</span>
            </div>
          ))}
        </>
      )}

      {lesson.exercises && lesson.exercises.length > 0 && (
        <>
          <h2 style={{ marginTop: 32 }}>✏️ Exercises</h2>
          {lesson.exercises.map((ex, i) => (
            <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14, marginBottom: 12 }}>
              <p style={{ margin: '0 0 8px', lineHeight: 1.7 }}>{ex.question}</p>
              <button onClick={() => toggle(i)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #1a73e8', background: showAnswers.has(i) ? '#1a73e8' : '#fff', color: showAnswers.has(i) ? '#fff' : '#1a73e8', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>{showAnswers.has(i) ? 'Hide answer' : 'Show answer'}</button>
              {showAnswers.has(i) && <div style={{ background: '#f0fdf4', borderLeft: '3px solid #16a34a', padding: '10px 14px', marginTop: 10, borderRadius: 4, color: '#166534', lineHeight: 1.7 }}><strong>Answer:</strong> {ex.answer}</div>}
            </div>
          ))}
        </>
      )}

      {lesson.pastPaperQuestions && lesson.pastPaperQuestions.length > 0 && (
        <>
          <h2 style={{ marginTop: 32 }}>📄 Past-paper questions</h2>
          {lesson.pastPaperQuestions.map((pp, i) => {
            const key = 1000 + i
            return (
              <div key={i} style={{ border: '1px solid #fcd34d', background: '#fffbeb', borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: '#92400e', fontWeight: 600, marginBottom: 6 }}>{pp.year}</div>
                <p style={{ margin: '0 0 8px', lineHeight: 1.7 }}>{pp.question}</p>
                <button onClick={() => toggle(key)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #f59e0b', background: showAnswers.has(key) ? '#f59e0b' : '#fff', color: showAnswers.has(key) ? '#fff' : '#92400e', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>{showAnswers.has(key) ? 'Hide mark scheme' : 'Show mark scheme'}</button>
                {showAnswers.has(key) && <div style={{ background: '#fff', borderLeft: '3px solid #f59e0b', padding: '10px 14px', marginTop: 10, borderRadius: 4, color: '#78350f', lineHeight: 1.7 }}><strong>Mark scheme:</strong> {pp.answer}</div>}
              </div>
            )
          })}
        </>
      )}

      {lesson.homework && lesson.homework.length > 0 && (
        <>
          <h2 style={{ marginTop: 32 }}>📝 Homework</h2>
          <ol style={{ lineHeight: 1.9, paddingLeft: 20 }}>{lesson.homework.map((h, i) => <li key={i}>{h}</li>)}</ol>
        </>
      )}

      {lesson.notes && (
        <div style={{ background: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, marginTop: 24, color: '#78350f' }}>
          <strong style={{ display: 'block', marginBottom: 4 }}>📌 Instructor notes</strong>{lesson.notes}
        </div>
      )}

      <LessonActions saved={progress.saved} onToggle={progress.toggleSave} completed={progress.completed} onComplete={progress.markCompleted} />

      <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #e5e7eb', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => window.print()} style={{ padding: '10px 18px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', color: '#111', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>🖨 Print</button>
        <button onClick={() => { const u = window.location.href; const t = `${lesson.title} — free lesson on Mobzy Learn`; if (navigator.share) navigator.share({ title: lesson.title, text: t, url: u }).catch(() => {}); else window.open(`https://wa.me/?text=${encodeURIComponent(t + ' ' + u)}`, '_blank') }} style={{ padding: '10px 18px', borderRadius: 8, border: 'none', background: '#25d366', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>📤 Share</button>
      </div>

      {next && <div style={{ marginTop: 24 }}><Link to={`/vocational/${subject.slug}/${next.slug}`} style={{ display: 'inline-block', padding: '10px 18px', borderRadius: 8, background: '#1a73e8', color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>Next: {next.title} →</Link></div>}
    </div>
  )
}
