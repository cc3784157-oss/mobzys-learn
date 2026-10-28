import { Link, useParams, Navigate } from 'react-router-dom'
import { getSoftwareBySlug } from '../data/software'
export default function ItemDetail() {
  const { kind, slug } = useParams<{ kind: string; slug: string }>()
  const item = slug ? getSoftwareBySlug(slug) : undefined
  if (!item || (kind !== 'software' && kind !== 'game') || item.kind !== kind) return <Navigate to="/downloads" replace />
  const share = () => {
    const url = window.location.href
    const text = `${item.name} — free and legal on Mobzy Learn`
    if (navigator.share) navigator.share({ title: item.name, text, url }).catch(() => {})
    else window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
  }
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/downloads" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All {kind === 'software' ? 'software' : 'games'}</Link>
      <h1 style={{ margin: '16px 0 8px' }}>{item.name}</h1>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 13, background: '#eef', color: '#224', padding: '3px 10px', borderRadius: 20, marginRight: 6 }}>{item.category}</span>
        <span style={{ fontSize: 13, background: '#eef', color: '#224', padding: '3px 10px', borderRadius: 20, marginRight: 6 }}>{item.license}</span>
        <span style={{ fontSize: 13, background: '#eef', color: '#224', padding: '3px 10px', borderRadius: 20 }}>{item.platforms.join(' · ')}</span>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: '#333' }}>{item.description}</p>
      {item.alternativesTo && <p style={{ background: '#f4f6fb', padding: '12px 16px', borderRadius: 8, fontSize: 14 }}><strong>Replaces:</strong> {item.alternativesTo}</p>}
      <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '12px 20px', background: '#1a73e8', color: '#fff', textDecoration: 'none', borderRadius: 8, fontWeight: 700, marginTop: 8 }}>Official download →</a>
      <div style={{ marginTop: 32 }}>
        <button onClick={share} style={{ padding: '10px 18px', borderRadius: 8, border: 'none', background: '#25d366', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>Share on WhatsApp</button>
      </div>
    </div>
  )
}
