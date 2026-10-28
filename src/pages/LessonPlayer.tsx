import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { getCourse } from '../data/courses'
import { getLessons, getLesson, type Block } from '../data/lessons'
import ShareButton from '../components/ShareButton'
import AdBanner from '../components/AdBanner'
import CodeRunner from '../components/CodeRunner'
import CodeExercise from '../components/CodeExercise'

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p': return <p>{block.text}</p>
    case 'h2': return <h2>{block.text}</h2>
    case 'h3': return <h3>{block.text}</h3>
    case 'code': {
      const lang = (block.language || 'js') as 'html' | 'css' | 'js' | 'react' | 'python' | 'c' | 'cpp'
      if (block.runnable) return <CodeRunner code={block.code} language={lang} />
      return <pre className="lesson-code"><code>{block.code}</code></pre>
    }
    case 'ul': return <ul>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    case 'ol': return <ol>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ol>
    case 'note': return <div className="lesson-note">{block.text}</div>
    case 'exercise':
      return (
        <div className="lesson-exercise">
          <strong>Exercise</strong>
          <p>{block.text}</p>
          {block.solution && (
            <details>
              <summary>Show solution</summary>
              <pre className="lesson-code"><code>{block.solution}</code></pre>
            </details>
          )}
        </div>
      )
    case 'codeExercise':
      return (
        <CodeExercise
          exerciseId={block.exerciseId}
          prompt={block.prompt}
          starter={block.starter}
          expectedOutput={block.expectedOutput}
          hint={block.hint}
          solution={block.solution}
        />
      )
    default: return null
  }
}

export default function LessonPlayer() {
  const { slug, lessonSlug } = useParams()
  const course = slug ? getCourse(slug) : undefined
  const lessons = slug ? getLessons(slug) : []
  const lesson = slug && lessonSlug ? getLesson(slug, lessonSlug) : undefined
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => onAuthStateChanged(auth, setUser), [])

  if (!course || !lesson) {
    return (
      <section className="section">
        <h1>Lesson not found</h1>
        <Link className="button primary" to="/">Back to home</Link>
      </section>
    )
  }

  const index = lessons.findIndex((l) => l.slug === lesson.slug)
  const prev = index > 0 ? lessons[index - 1] : null
  const next = index < lessons.length - 1 ? lessons[index + 1] : null
  const coursePath = '/courses/' + course.slug
  const lessonPath = coursePath + '/lessons/' + lesson.slug

  return (
    <div className="lesson-layout">
      <aside className="lesson-sidebar">
        <Link to={coursePath} className="back-link">&lt; {course.title}</Link>
        <h2>Lessons</h2>
        <ol>
          {lessons.map((l) => (
            <li key={l.slug}>
              <Link
                to={coursePath + '/lessons/' + l.slug}
                className={l.slug === lesson.slug ? 'active' : ''}
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ol>
      </aside>

      <article className="lesson-main">
        <span className="eyebrow">Lesson {lesson.order} of {lessons.length} | {lesson.durationMin} min</span>
        <h1>{lesson.title}</h1>

        {!user && (
          <div className="notice" style={{ background: '#fff7e6', borderLeft: '4px solid #f5a623', padding: '12px 16px', marginBottom: '20px' }}>
            <Link to={'/signin?next=' + encodeURIComponent(lessonPath)} style={{ color: '#1a73e8', fontWeight: 'bold' }}>
              Sign in to save your progress →
            </Link>
          </div>
        )}

        {lesson.blocks.map((block, i) => <BlockView key={i} block={block} />)}

        <ShareButton title={lesson.title} url={lessonPath} />
        <AdBanner />

        <nav className="lesson-nav">
          {prev ? (
            <Link className="button secondary" to={coursePath + '/lessons/' + prev.slug}>
              &lt; Previous
            </Link>
          ) : <span />}
          {next ? (
            <Link className="button primary" to={coursePath + '/lessons/' + next.slug}>
              Next lesson &gt;
            </Link>
          ) : (
            <Link className="button primary" to={coursePath}>
              Back to course
            </Link>
          )}
        </nav>
      </article>
    </div>
  )
}