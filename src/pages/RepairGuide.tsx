import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { repairGuides, type RepairImage } from '../data/repair'

function PhotoSlot({ image, size = 'normal' }: { image?: RepairImage; size?: 'normal' | 'hero' }) {
  const [failed, setFailed] = useState(false)
  if (!image) return null
  if (failed) return (
    <div style={{ background: 'linear-gradient(135deg, #eef2ff, #f3f4f6)', padding: size === 'hero' ? '48px 24px' : '32px 24px', borderRadius: 10, textAlign: 'center', color: '#6b7280', border: '2px dashed #d1d5db', margin: size === 'hero' ? '0 0 24px' : '10px 0 0' }}>
      <div style={{ fontSize: size === 'hero' ? 48 : 32, marginBottom: 8 }}>📷</div>
      <div style={{ fontWeight: 600, marginBottom: 4, color: '#374151' }}>{image.alt}</div>
      <div style={{ fontSize: 12 }}>Add photo → <code style={{ background: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11 }}>public{image.url}</code></div>
    </div>
  )
  return (
    <figure style={{ margin: size === 'hero' ? '0 0 24px' : '10px 0 0' }}>
      <img src={image.url} alt={image.alt} onError={() => setFailed(true)} style={{ width: '100%', height: 'auto', borderRadius: 10, border: '1px solid #e5e7eb', display: 'block' }} />
      {image.caption && <figcaption style={{ fontSize: 13, color: '#666', marginTop: 6, textAlign: 'center' }}>{image.caption}</figcaption>}
    </figure>
  )
}

const KEY = (s: string) => `mobzy_repair_${s}`

export default function RepairGuide() {
  const { slug } = useParams<{ slug: string }>()
  const guide = repairGuides.find((g) => g.slug === slug)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [checkedTools, setCheckedTools] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!guide) return
    try {
      const raw = localStorage.getItem(KEY(guide.slug))
      if (raw) { const p = JSON.parse(raw); setCompletedSteps(new Set(p.steps || [])); setCheckedTools(new Set(p.tools || [])) }
      else { setCompletedSteps(new Set()); setCheckedTools(new Set()) }
    } catch {}
  }, [guide?.slug])

  useEffect(() => {
    if (!guide) return
    try { localStorage.setItem(KEY(guide.slug), JSON.stringify({ steps: [...completedSteps], tools: [...checkedTools] })) } catch {}
  }, [guide?.slug, completedSteps, checkedTools])

  if (!guide) return <Navigate to="/repair" replace />

  const total = guide.steps.length
  const progress = total === 0 ? 0 : Math.round((completedSteps.size / total) * 100)
  const toggleStep = (i: number) => { const n = new Set(completedSteps); n.has(i) ? n.delete(i) : n.add(i); setCompletedSteps(n) }
  const toggleTool = (i: number) => { const n = new Set(checkedTools); n.has(i) ? n.delete(i) : n.add(i); setCheckedTools(n) }
  const reset = () => { setCompletedSteps(new Set()); setCheckedTools(new Set()) }
  const share = () => {
    const url = window.location.href
    const text = `Free repair guide: ${guide.title} on Mobzy Learn`
    if (navigator.share) navigator.share({ title: guide.title, text, url }).catch(() => {})
    else window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
  }
  const related = (guide.related || []).map((s) => repairGuides.find((g) => g.slug === s)).filter(Boolean) as typeof repairGuides

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 16px' }}>
      <Link to="/repair" style={{ color: '#1a73e8', textDecoration: 'none', fontSize: 14 }}>← All repair guides</Link>
      <h1 style={{ margin: '16px 0 12px' }}>{guide.title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, fontSize: 13 }}>
        <span style={{ background: '#eef', color: '#224', padding: '4px 10px', borderRadius: 20 }}>{guide.category}</span>
        <span style={{ background: '#eef', color: '#224', padding: '4px 10px', borderRadius: 20 }}>Difficulty: {guide.difficulty}</span>
        <span style={{ background: '#eef', color: '#224', padding: '4px 10px', borderRadius: 20 }}>⏱ {guide.time}</span>
      </div>
      {guide.warnings && guide.warnings.length > 0 && (
        <div style={{ background: '#fff7ed', borderLeft: '4px solid #f59e0b', padding: '14px 18px', borderRadius: 6, marginBottom: 20 }}>
          <strong style={{ display: 'block', marginBottom: 6 }}>⚠️ Safety</strong>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{guide.warnings.map((w, i) => <li key={i} style={{ marginBottom: 4 }}>{w}</li>)}</ul>
        </div>
      )}
      <PhotoSlot image={guide.heroImage} size="hero" />
      <p style={{ lineHeight: 1.8, color: '#333' }}>{guide.intro}</p>
      <h2 style={{ marginTop: 32 }}>🔧 Tools needed</h2>
      <div style={{ background: '#f9fafb', borderRadius: 10, padding: '14px 18px', marginBottom: 24 }}>
        {guide.tools.map((tool, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', cursor: 'pointer', borderBottom: i < guide.tools.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
            <input type="checkbox" checked={checkedTools.has(i)} onChange={() => toggleTool(i)} style={{ marginTop: 3, cursor: 'pointer' }} />
            <span><span style={{ textDecoration: checkedTools.has(i) ? 'line-through' : 'none', color: checkedTools.has(i) ? '#6b7280' : '#111' }}>{tool.name}</span>{tool.note && <span style={{ color: '#666', fontSize: 13 }}> — {tool.note}</span>}</span>
          </label>
        ))}
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h2 style={{ margin: 0 }}>📋 Steps</h2>
          <span style={{ fontSize: 14, color: '#666' }}>{completedSteps.size} / {total} done</span>
        </div>
        <div style={{ height: 8, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden', marginBottom: 12 }}>
          <div style={{ width: `${progress}%`, height: '100%', background: progress === 100 ? '#22c55e' : '#1a73e8', transition: 'width 0.3s' }} />
        </div>
        {progress > 0 && (
          <div style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>
            {progress}% complete{progress === 100 && ' 🎉'}
            <button onClick={reset} style={{ marginLeft: 12, background: 'none', border: 'none', color: '#1a73e8', cursor: 'pointer', fontSize: 13, textDecoration: 'underline' }}>Reset</button>
          </div>
        )}
      </div>
      <ol style={{ lineHeight: 1.9, paddingLeft: 0, listStyle: 'none', margin: 0 }}>
        {guide.steps.map((step, i) => {
          const done = completedSteps.has(i)
          return (
            <li key={i} style={{ background: done ? '#f0fdf4' : '#fff', border: `1px solid ${done ? '#bbf7d0' : '#e5e7eb'}`, borderRadius: 10, padding: 16, marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <input type="checkbox" checked={done} onChange={() => toggleStep(i)} style={{ marginTop: 6, cursor: 'pointer', width: 18, height: 18, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#1a73e8', marginBottom: 4 }}>Step {i + 1}</div>
                  <div style={{ textDecoration: done ? 'line-through' : 'none', color: done ? '#6b7280' : '#111' }}>{step.text}</div>
                  {step.tip && <div style={{ background: '#eff6ff', borderLeft: '3px solid #3b82f6', padding: '8px 12px', marginTop: 10, borderRadius: 4, fontSize: 14, color: '#1e40af' }}>💡 <strong>Tip:</strong> {step.tip}</div>}
                  <PhotoSlot image={step.image} />
                </div>
              </div>
            </li>
          )
        })}
      </ol>
      {guide.troubleshooting && guide.troubleshooting.length > 0 && (
        <>
          <h2 style={{ marginTop: 40 }}>🔧 Troubleshooting</h2>
          {guide.troubleshooting.map((t, i) => (
            <div key={i} style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: 14, marginBottom: 12 }}>
              <strong style={{ display: 'block', marginBottom: 6, color: '#991b1b' }}>❌ {t.problem}</strong>
              <span style={{ color: '#333' }}>✅ <strong>Fix:</strong> {t.fix}</span>
            </div>
          ))}
        </>
      )}
      {guide.faqs && guide.faqs.length > 0 && (
        <>
          <h2 style={{ marginTop: 40 }}>❓ FAQ</h2>
          {guide.faqs.map((f, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h3 style={{ marginBottom: 6, fontSize: 16 }}>{f.q}</h3>
              <p style={{ marginTop: 0, color: '#444', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </>
      )}
      {related.length > 0 && (
        <>
          <h2 style={{ marginTop: 40 }}>Related guides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 24 }}>
            {related.map((r) => (
              <Link key={r.slug} to={`/repair/${r.slug}`} style={{ display: 'block', padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111', background: '#fafafa' }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{r.category} · {r.time}</div>
              </Link>
            ))}
          </div>
        </>
      )}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #e5e7eb', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={share} style={{ padding: '10px 18px', borderRadius: 8, border: 'none', background: '#25d366', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>📤 Share on WhatsApp</button>
        <button onClick={() => window.print()} style={{ padding: '10px 18px', borderRadius: 8, border: '1px solid #d1d5db', background: '#fff', color: '#111', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>🖨 Print</button>
      </div>
    </div>
  )
}
