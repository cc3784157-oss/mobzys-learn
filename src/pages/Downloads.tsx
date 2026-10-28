import { useState } from 'react'
import { software } from '../data/software'

export default function Downloads() {
  const [tab, setTab] = useState<'software' | 'game'>('software')
  const items = software.filter((s) => s.kind === tab)

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>Free Software &amp; Free Games</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>
        A curated list of free, safe, and legal software and games.
      </p>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '10px 14px', borderRadius: 6, borderLeft: '4px solid #f59e0b' }}>
        We do not host files. Every link below opens the official download page. We never share cracked or pirated software.
      </p>

      <div style={{ display: 'flex', gap: 8, margin: '20px 0' }}>
        <button
          onClick={() => setTab('software')}
          style={{
            padding: '8px 18px',
            borderRadius: 6,
            border: '1px solid ' + (tab === 'software' ? '#1a73e8' : '#ddd'),
            background: tab === 'software' ? '#1a73e8' : '#fff',
            color: tab === 'software' ? '#fff' : '#111',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Software ({software.filter((s) => s.kind === 'software').length})
        </button>
        <button
          onClick={() => setTab('game')}
          style={{
            padding: '8px 18px',
            borderRadius: 6,
            border: '1px solid ' + (tab === 'game' ? '#1a73e8' : '#ddd'),
            background: tab === 'game' ? '#1a73e8' : '#fff',
            color: tab === 'game' ? '#fff' : '#111',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Games ({software.filter((s) => s.kind === 'game').length})
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 16, background: '#fafafa' }}
          >
            <h3 style={{ margin: '0 0 8px' }}>{item.name}</h3>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>{item.category}</span>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20 }}>{item.license}</span>
            </div>
            <p style={{ color: '#444', fontSize: 14, marginBottom: 8 }}>{item.description}</p>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>
              <strong>Platforms:</strong> {item.platforms.join(', ')}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '8px 14px', background: '#1a73e8', color: '#fff', textDecoration: 'none', borderRadius: 6, fontWeight: 600, fontSize: 14 }}
            >
              Official download →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
