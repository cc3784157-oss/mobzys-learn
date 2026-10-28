import { Link, useParams, Navigate } from 'react-router-dom'
import { getSubject, getSubjectLesson } from '../data/subjects'

type Block = { type: string; text?: string; items?: string[]; code?: string }

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} style={{ marginTop: 28 }}>{block.text}</h2>
    case 'h3':
      return <h3 key={i} style={{ marginTop: 20 }}>{block.text}</h3>
    case 'p':
      return <p key={i} style={{ lineHeight: 1.7 }}>{block.text}</p>
    case 'ul':
      return (
        <ul key={i} style={{ lineHeight: 1.8 }}>
          {block.items?.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} style={{ lineHeight: 1.8 }}>
          {block.items?.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      )
    case 'code':
      return (
        <pre
          key={i}
          style={{
            background: '#0f172a',
            color: '#e2e8f0',
            padding: 16,
            borderRadius: 8,
            overflowX: 'auto',
            fontSize: 13,
          }}
        >
          <code>{block.code}</code>
        </pre>
      )
    case 'note':
      return (
        <div
          key={i}
          style={{
            background: '#fff7ed',
            borderLeft: '4px solid #f59e0b',
            padding: '12px 16px',
            borderRadius: 6,
            margin: '16px 0',
          }}
        >
          {block.text}
        </div>
      )
    default:
      return null
  }
}

export default function SubjectLesson() {
  const { subjectSlug, lessonSlug } = useParams<{ subjectSlug: string; lessonSlug: string }>()
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined
  const lesson = subjectSlug && lessonSlug ? getSubjectLesson(subjectSlug, lessonSlug) : undefined

  if (!subject || !lesson) return <Navigate to="/learn" replace />

  const share = () => {
    const url = window.location.href
    const text = `Learn "${lesson.title}" for FREE on Mobzy Learn`
    if (navigator.share) {
      navigator.share({ title: lesson.title, text, url }).catch(() => {})
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
    }
  }

  const idx = subject.lessons.findIndex((l) => l.slug === lesson.slug)
  const next = subject.lessons[idx + 1]

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 16px' }}>
      <Link to={`/learn/${subject.slug}`} style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>
        ← {subject.title}
      </Link>

      <h1 style={{ margin: '16px 0 8px', lineHeight: 1.3 }}>{lesson.title}</h1>
      <p style={{ color: '#666', fontSize: 14, marginTop: 0 }}>{lesson.readMin} min read</p>

      <div>{lesson.content.map(renderBlock)}</div>

      <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button
          onClick={share}
          style={{
            padding: '10px 18px',
            borderRadius: 8,
            border: 'none',
            background: '#25d366',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Share on WhatsApp
        </button>
        {next && (
          <Link
            to={`/learn/${subject.slug}/${next.slug}`}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              background: '#1a73e8',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Next: {next.title} →
          </Link>
        )}
      </div>
    </div>
  )
}
