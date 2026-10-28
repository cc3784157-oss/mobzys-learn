import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBlogPost } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  useEffect(() => {
    if (post) {
      document.title = post.title + ' — Mobzy Learn'
    }
    return () => {
      document.title = 'Mobzy Learn — Learn Programming by Building'
    }
  }, [post])

  if (!post) {
    return (
      <section className="section" style={{ maxWidth: 800, margin: '40px auto', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <Link to="/blog" className="button primary">Back to Blog</Link>
      </section>
    )
  }

  return (
    <section className="section" style={{ maxWidth: 780, margin: '40px auto' }}>
      <Link to="/blog" style={{ fontSize: 14, color: 'var(--text-muted)', display: 'inline-block', marginBottom: 20 }}>
        ← All articles
      </Link>

      <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--green-dark)', marginBottom: 10 }}>
        {post.category} · {post.readMin} min read
      </div>

      <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.2, marginBottom: 20 }}>
        {post.title}
      </h1>

      <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 32 }}>
        {post.excerpt}
      </p>

      <img
        src={post.image}
        alt=""
        width={1200}
        height={630}
        style={{ width: '100%', height: 'auto', aspectRatio: '1200 / 630', objectFit: 'cover', borderRadius: 12, marginBottom: 32, background: 'var(--surface-2)', display: 'block' }}
      />

      <article style={{ fontSize: 17, lineHeight: 1.8 }}>
        {post.content.map((block, i) => {
          if (block.type === 'p') return <p key={i} style={{ marginBottom: 20 }}>{block.text}</p>
          if (block.type === 'h2') return <h2 key={i} style={{ fontSize: 26, marginTop: 40, marginBottom: 16 }}>{block.text}</h2>
          if (block.type === 'h3') return <h3 key={i} style={{ fontSize: 20, marginTop: 28, marginBottom: 12 }}>{block.text}</h3>
          if (block.type === 'ul') return (
            <ul key={i} style={{ marginBottom: 20, paddingLeft: 24 }}>
              {block.items?.map((item, j) => <li key={j} style={{ marginBottom: 8 }}>{item}</li>)}
            </ul>
          )
          if (block.type === 'ol') return (
            <ol key={i} style={{ marginBottom: 20, paddingLeft: 24 }}>
              {block.items?.map((item, j) => <li key={j} style={{ marginBottom: 8 }}>{item}</li>)}
            </ol>
          )
          if (block.type === 'code') return (
            <pre key={i} style={{ background: '#0f172a', color: '#e2e8f0', padding: 20, borderRadius: 10, overflowX: 'auto', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              <code>{block.text}</code>
            </pre>
          )
          if (block.type === 'note') return (
            <div key={i} style={{ background: 'var(--green-light)', borderLeft: '4px solid var(--green)', padding: '14px 20px', marginBottom: 20, borderRadius: 8 }}>
              {block.text}
            </div>
          )
          return null
        })}
      </article>

      <div style={{ marginTop: 60, paddingTop: 32, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 12 }}>Ready to start learning?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>Every course on Mobzy Learn is 100% free.</p>
        <Link to="/" className="button primary">Browse All Courses</Link>
      </div>
    </section>
  )
}
