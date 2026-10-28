import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <section className="section" style={{ maxWidth: 1000, margin: '40px auto' }}>
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <span className="eyebrow">BLOG</span>
        <h1 style={{ marginBottom: 12 }}>Learning to code, explained</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 640, margin: '0 auto' }}>
          Practical guides, honest advice, and free resources.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 24 }}>
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="panel"
            style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start', padding: 24 }}
          >
            <img
              src={post.image}
              alt=""
              width={240}
              height={160}
              loading="lazy"
              style={{ width: 240, height: 160, objectFit: 'cover', borderRadius: 12, flexShrink: 0, background: 'var(--surface-2)', display: 'block' }}
            />
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--green-dark)', marginBottom: 8 }}>
                {post.category} · {post.readMin} min read
              </div>
              <h2 style={{ margin: '0 0 12px', fontSize: 24 }}>
                <Link to={'/blog/' + post.slug} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: 'var(--text-muted)', margin: '0 0 16px', lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
              <Link to={'/blog/' + post.slug} className="button secondary" style={{ fontSize: 14 }}>
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 40, textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
        More articles are added regularly. <Link to="/">Start learning a course</Link> while you wait.
      </div>
    </section>
  )
}
