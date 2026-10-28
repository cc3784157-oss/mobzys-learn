import { Link } from 'react-router-dom'
import { languages } from '../data/languages'
export default function LanguagesIndex() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>🌐 Learn Languages</h1>
      <p style={{ color: '#555', marginBottom: 24 }}>Learn {languages.length} languages with real lessons, pronunciation guides, and exercises.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {languages.map((lang) => (
          <Link key={lang.slug} to={`/languages/${lang.slug}`} style={{ display: 'block', padding: 20, border: '1px solid #e5e7eb', borderRadius: 12, textDecoration: 'none', color: '#111', background: '#fff' }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{lang.flag}</div>
            <h2 style={{ margin: '0 0 4px', fontSize: 20 }}>{lang.name}</h2>
            <p style={{ margin: '0 0 4px', fontSize: 14, color: '#888' }}>{lang.nativeName}</p>
            <p style={{ margin: '0 0 12px', fontSize: 13, color: '#555' }}>{lang.description}</p>
            <div style={{ display: 'flex', gap: 8, fontSize: 12 }}>
              <span style={{ background: '#eef', color: '#224', padding: '3px 9px', borderRadius: 20 }}>{lang.lessons.length} lessons</span>
              <span style={{ background: '#fef3c7', color: '#92400e', padding: '3px 9px', borderRadius: 20 }}>{lang.speakers}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
