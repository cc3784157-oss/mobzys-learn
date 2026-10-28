import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { getCourse } from '../data/courses'
import { getLessons } from '../data/lessons'
import ShareButton from '../components/ShareButton'
import AdBanner from '../components/AdBanner'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = slug ? getCourse(slug) : undefined
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => onAuthStateChanged(auth, setUser), [])

  if (!course) {
    return (
      <section className="section">
        <h1>Course not found</h1>
        <Link className="button primary" to="/">Back to home</Link>
      </section>
    )
  }

  const lessons = getLessons(course.slug)
  const hasLessons = lessons.length > 0
  const coursePath = '/courses/' + course.slug

  return (
    <section className="section course-detail">
      <Link to="/" className="back-link">&lt; All courses</Link>
      <span className="eyebrow">{course.category} / {course.level}</span>
      <h1>{course.title}</h1>
      <p className="lead">{course.description}</p>

      <ShareButton title={course.title} url={coursePath} />

      {!user && (
        <div className="notice" style={{ background: '#fff7e6', borderLeft: '4px solid #f5a623', padding: '12px 16px', marginBottom: '20px' }}>
          <Link to={'/signin?next=' + encodeURIComponent(coursePath)} style={{ color: '#1a73e8', fontWeight: 'bold' }}>
            Sign in to save your progress →
          </Link>
        </div>
      )}

      <div className="course-detail-meta">
        <span>Duration: {course.duration}</span>
        <span style={{ color: '#25D366', fontWeight: 'bold' }}>100% Free</span>
      </div>

      {hasLessons ? (
        <div className="notice success">{lessons.length} lesson{lessons.length === 1 ? '' : 's'} available — all free.</div>
      ) : (
        <div className="notice">Lessons are being written. Check back soon.</div>
      )}

      <h2>What you will learn</h2>
      <ul>{course.objectives.map((o) => <li key={o}>{o}</li>)}</ul>

      <h2>Curriculum</h2>
      {hasLessons ? (
        <ol className="lesson-list">
          {lessons.map((lesson) => (
            <li key={lesson.slug}><Link to={coursePath + '/lessons/' + lesson.slug}>{lesson.title}</Link></li>
          ))}
        </ol>
      ) : (
        <ol>{course.curriculum.map((m) => <li key={m}>{m}</li>)}</ol>
      )}

      <AdBanner />

      {hasLessons && (
        <Link className="button primary" to={coursePath + '/lessons/' + lessons[0].slug}>Start Learning — Free</Link>
      )}
    </section>
  )
}