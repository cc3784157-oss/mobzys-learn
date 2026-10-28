import { useState } from 'react'
import { Link } from 'react-router-dom'
import { repairGuides, repairCategories, type RepairCategory } from '../data/repair'

export default function Repair() {
  const [activeCat, setActiveCat] = useState<'All' | RepairCategory>('All')
  const filtered = activeCat === 'All' ? repairGuides : repairGuides.filter((g) => g.category === activeCat)
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>🔧 Repair Guides</h1>
      <p style={{ color: '#555', marginBottom: 8 }}>Free, step-by-step guides for phones, laptops, PCs, radios, keyboards, audio interfaces, TVs and more.</p>
      <p style={{ fontSize: 13, color: '#92400e', background: '#fff7ed', padding: '10px 14px', borderRadius: 6, borderLeft: '4px solid #f59e0b', marginBottom: 20 }}>
        Opening your device may void the warranty. Proceed at your own risk.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        <button onClick={() => setActiveCat('All')} style={{ padding: '8px 14px', borderRadius: 20, border: '1px solid ' + (activeCat === 'All' ? '#1a73e8' : '#d1d5db'), background: activeCat === 'All' ? '#1a73e8' : '#fff', color: activeCat === 'All' ? '#fff' : '#111', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>
          All ({repairGuides.length})
        </button>
        {repairCategories.map((cat) => {
          const count = repairGuides.filter((g) => g.category === cat).length
          if (count === 0) return null
          const active = activeCat === cat
          return (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{ padding: '8px 14px', borderRadius: 20, border: '1px solid ' + (active ? '#1a73e8' : '#d1d5db'), background: active ? '#1a73e8' : '#fff', color: active ? '#fff' : '#111', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>
              {cat} ({count})
            </button>
          )
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {filtered.map((g) => (
          <Link key={g.slug} to={`/repair/${g.slug}`} style={{ display: 'block', border: '1px solid #e5e7eb', borderRadius: 10, padding: 16, background: '#fafafa', textDecoration: 'none', color: '#111' }}>
            <h3 style={{ margin: '0 0 8px' }}>{g.title}</h3>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>{g.category}</span>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20, marginRight: 4 }}>{g.difficulty}</span>
              <span style={{ fontSize: 12, background: '#eef', color: '#224', padding: '2px 8px', borderRadius: 20 }}>⏱ {g.time}</span>
            </div>
            <p style={{ color: '#444', fontSize: 14, margin: 0 }}>{g.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
