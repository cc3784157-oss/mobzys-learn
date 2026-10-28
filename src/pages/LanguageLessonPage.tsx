import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getLanguage, getLangLesson, type LangBlock } from '../data/languages'
function renderBlock(b: LangBlock, i: number) {
  switch (b.type) {
    case 'h2': return <h2 key={i} style={{ marginTop: 28 }}>{b.text}</h2>
    case 'p': return <p key={i} style={{ lineHeight: 1.8, color: '#333' }}>{b.text}</p>
    case 'ul': return <ul key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
    case 'ol': return <ol key={i} style={{ lineHeight: 1.9 }}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ol>
    case 'note': return <div key={i} style={{ background: '#fff7ed', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: 6, margin: '16px 0' }}>{b.text}</div>
    case 'table': return <div key={i} style={{ overflowX: 'auto', margin: '16px 0' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}><tbody>{b.rows.map((row, ri) => <tr key={ri} style={{ borderBottom: '1px solid #e5e7eb' }}>{row.map((cell, ci) => <td key={ci} style={{ padding: '10px 12px', background: ri === 0 ? '#f3f4f6' : '#fff', fontWeight: ri === 0 ? 600 : 400 }}>{cell}</td>)}</tr>)}</tbody></table></div>
    default: return null
  }
}
export default function LanguageLessonPage() {
  const { langSlug, lessonSlug } = useParams<{ langSlug: string; lessonSlug: string }>()
  const lang = langSlug ? getLanguage(langSlug) : undefined
  const lesson = langSlug && lessonSlug ? getLangLesson(langSlug, lessonSlug) : undefined
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set())
  if (!lang || !lesson) return <Navigate to="/languages" replace />
  const toggle = (i: number) => { const n = new Set(showAnswers); n.has(i) ? n.delete(i) : n.add(i); setShowAnswers(n) }
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px' }}>
      <Link to={`/languages/${lang.slug}`} style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← {lang.name}</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{lesson.title}</h1>
      <p style={{ color: '#666', fontSize: 14, marginTop: 0 }}>{lesson.level} · {lesson.duration}</p>
      <div style={{ background: '#eff6ff', borderLeft: '4px solid #1a73e8', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
        <strong style={{ display: 'block', marginBottom: 8 }}>🎯 What you will learn</strong>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>{lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
      </div>
      {lesson.content.map(renderBlock)}
      <h2 style={{ marginTop: 32 }}>✏️ Practice</h2>
      {lesson.exercises.map((ex, i) => (
        <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14, marginBottom: 12 }}>
          <p style={{ margin: '0 0 8px', lineHeight: 1.7 }}>{ex.question}</p>
          <button onClick={() => toggle(i)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #1a73e8', background: showAnswers.has(i) ? '#1a73e8' : '#fff', color: showAnswers.has(i) ? '#fff' : '#1a73e8', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>{showAnswers.has(i) ? 'Hide answer' : 'Show answer'}</button>
          {showAnswers.has(i) && <div style={{ background: '#f0fdf4', borderLeft: '3px solid #16a34a', padding: '10px 14px', marginTop: 10, borderRadius: 4, color: '#166534', lineHeight: 1.7 }}><strong>Answer:</strong> {ex.answer}</div>}
        </div>
      ))}
    </div>
  )
}
