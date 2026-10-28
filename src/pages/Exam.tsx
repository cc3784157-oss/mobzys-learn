import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { getCourse } from '../data/courses'
import { getExam, getPassingScore } from '../data/exams'
import { saveExamResult, getExamResult, type ExamResult } from '../lib/exam'
import { downloadCertificate } from '../lib/certificate'

export default function Exam() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const course = slug ? getCourse(slug) : undefined
  const questions = slug ? getExam(slug) : undefined

  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<ExamResult | null>(null)
  const [existingResult, setExistingResult] = useState<ExamResult | null>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u)
      setReady(true)
      if (u && slug) {
        const prev = await getExamResult(u.uid, slug)
        setExistingResult(prev)
      }
    })
  }, [slug])

  if (!ready) {
    return (
      <section className="section" style={{ maxWidth: 800, margin: '40px auto' }}>
        <p>Loading...</p>
      </section>
    )
  }

  if (!course || !questions || questions.length === 0) {
    return (
      <section className="section" style={{ maxWidth: 800, margin: '40px auto', textAlign: 'center' }}>
        <h1>Exam not available</h1>
        <p style={{ color: 'var(--text-muted)' }}>No exam exists for this course yet.</p>
        <Link to="/" className="button primary">Back to Courses</Link>
      </section>
    )
  }

  if (!user) {
    return (
      <section className="section" style={{ maxWidth: 600, margin: '60px auto', textAlign: 'center' }}>
        <h1>Sign in to take the exam</h1>
        <Link to={'/signin?next=/courses/' + slug + '/exam'} className="button primary">Sign In</Link>
      </section>
    )
  }

  const passingScore = getPassingScore(questions.length)
  const answeredCount = Object.keys(answers).length

  async function handleSubmit() {
    if (answeredCount < questions!.length) {
      if (!window.confirm(`You have ${questions!.length - answeredCount} unanswered questions. Submit anyway?`)) return
    }
    setSubmitting(true)
    let score = 0
    questions!.forEach((q, i) => {
      if (answers[i] === q.correct) score++
    })
    const passed = score >= passingScore
    try {
      await saveExamResult(user!.uid, slug!, score, questions!.length, passed)
      const fresh = await getExamResult(user!.uid, slug!)
      setResult(fresh)
    } catch (e) {
      console.error(e)
      alert('Failed to save result. Try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleRetry() {
    setAnswers({})
    setResult(null)
    window.scrollTo(0, 0)
  }

  // ===== RESULT SCREEN =====
  if (result) {
    const passed = result.passed
    const percent = Math.round((result.score / result.total) * 100)
    return (
      <section className="section" style={{ maxWidth: 800, margin: '40px auto' }}>
        <Link to={'/courses/' + slug} style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          ← Back to {course.title}
        </Link>

        <div
          className="panel"
          style={{
            marginTop: 20,
            padding: 48,
            textAlign: 'center',
            borderColor: passed ? 'var(--green)' : '#ef4444',
            borderWidth: 2,
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>{passed ? '🎉' : '📚'}</div>
          <h1 style={{ marginBottom: 8, color: passed ? 'var(--green-dark)' : '#ef4444' }}>
            {passed ? 'Congratulations!' : 'Not quite there'}
          </h1>
          <p style={{ fontSize: 20, marginBottom: 8 }}>
            You scored <strong>{result.score} out of {result.total}</strong> ({percent}%)
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            {passed
              ? `You passed ${course.title}! Your certificate is ready to download.`
              : `You need ${passingScore} out of ${result.total} to pass (70%). Review the lessons and try again.`}
          </p>

          {passed ? (
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  const name = user.displayName || user.email || 'Student'
                  downloadCertificate(name, course.title, result.certId || 'ML-CERT')
                }}
                className="button primary"
                style={{ fontSize: 16, padding: '14px 28px' }}
              >
                ⬇ Download Certificate (PNG)
              </button>
              <Link to="/dashboard" className="button secondary" style={{ fontSize: 16, padding: '14px 28px' }}>
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleRetry} className="button primary" style={{ fontSize: 16, padding: '14px 28px' }}>
                Try Again
              </button>
              <Link to={'/courses/' + slug} className="button secondary" style={{ fontSize: 16, padding: '14px 28px' }}>
                Review Lessons
              </Link>
            </div>
          )}
        </div>

        <div className="panel" style={{ marginTop: 24 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>Review your answers</h2>
          {questions.map((q, i) => {
            const chosen = answers[i]
            const isCorrect = chosen === q.correct
            return (
              <div
                key={i}
                style={{
                  padding: 16,
                  marginBottom: 12,
                  borderRadius: 10,
                  background: isCorrect ? 'var(--green-light)' : '#fef2f2',
                  border: '1px solid ' + (isCorrect ? 'var(--green)' : '#fecaca'),
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: isCorrect ? 'var(--green-dark)' : '#991b1b', marginBottom: 6 }}>
                  Question {i + 1} — {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </div>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{q.q}</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                  Your answer: <strong>{chosen !== undefined ? q.options[chosen] : '(not answered)'}</strong>
                  {!isCorrect && (
                    <>
                      <br />
                      Correct answer: <strong style={{ color: 'var(--green-dark)' }}>{q.options[q.correct]}</strong>
                    </>
                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8, fontStyle: 'italic' }}>
                  {q.explain}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // ===== EXAM SCREEN =====
  return (
    <section className="section" style={{ maxWidth: 800, margin: '40px auto' }}>
      <Link to={'/courses/' + slug} style={{ fontSize: 14, color: 'var(--text-muted)' }}>
        ← Back to {course.title}
      </Link>

      <div style={{ marginTop: 20, marginBottom: 24 }}>
        <span className="eyebrow">FINAL EXAM</span>
        <h1 style={{ marginBottom: 8 }}>{course.title} — Final Exam</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Answer {questions.length} questions. Score <strong>{passingScore} out of {questions.length} (70%)</strong> to pass and unlock your certificate.
        </p>
        {existingResult?.passed && (
          <div className="notice success" style={{ marginTop: 16 }}>
            ✓ You already passed this exam with {existingResult.score}/{existingResult.total}. You can retake it to improve your score.
          </div>
        )}
      </div>

      <div style={{ position: 'sticky', top: 80, zIndex: 10, background: 'var(--surface)', padding: '12px 16px', borderRadius: 10, marginBottom: 20, border: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 600 }}>
          <span>Progress: {answeredCount} / {questions.length} answered</span>
          <span style={{ color: answeredCount === questions.length ? 'var(--green-dark)' : 'var(--text-muted)' }}>
            {answeredCount === questions.length ? '✓ Ready to submit' : 'Keep going'}
          </span>
        </div>
      </div>

      {questions.map((q, i) => (
        <div key={i} className="panel" style={{ marginBottom: 16, padding: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8 }}>
            Question {i + 1} of {questions.length}
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 16 }}>{q.q}</div>
          <div style={{ display: 'grid', gap: 8 }}>
            {q.options.map((opt, j) => (
              <label
                key={j}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '2px solid ' + (answers[i] === j ? 'var(--green)' : 'var(--border)'),
                  background: answers[i] === j ? 'var(--green-light)' : 'var(--bg)',
                  cursor: 'pointer',
                  fontSize: 15,
                }}
              >
                <input
                  type="radio"
                  name={'q' + i}
                  checked={answers[i] === j}
                  onChange={() => setAnswers({ ...answers, [i]: j })}
                  style={{ accentColor: 'var(--green)' }}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="button primary"
        style={{ width: '100%', padding: '16px', fontSize: 17, marginTop: 20, marginBottom: 40 }}
      >
        {submitting ? 'Grading...' : 'Submit Exam'}
      </button>
    </section>
  )
}