import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuthUser } from '../hooks/useAuthUser'
import { STORAGE_KEY, type ProgressItem } from '../hooks/useLessonProgress'

const TYPE_LABEL: Record<string, string> = {
  academic: 'Academics',
  vocational: 'Trades',
  life: 'Life Skills',
  trading: 'Trading',
  programming: 'Programming',
}

function readAll(uid: string): ProgressItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(uid))
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr : []
  } catch { return [] }
}

export default function Dashboard() {
  const { user, loading: authLoading } = useAuthUser()
  const [items, setItems] = useState<ProgressItem[]>([])

  useEffect(() => {
    if (!user) return
    const refresh = () =>
      setItems(readAll(user.uid).slice().sort((a, b) => b.lastViewedAt - a.lastViewedAt))
    refresh()
    const onCustom = (e: Event) => {
      const d = (e as CustomEvent).detail
      if (d?.uid === user.uid) refresh()
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY(user.uid)) refresh()
    }
    window.addEventListener('mobzy:progress-changed', onCustom)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('mobzy:progress-changed', onCustom)
      window.removeEventListener('storage', onStorage)
    }
  }, [user])

  const clearAll = () => {
    if (!user) return
    if (!confirm('Clear all progress? This cannot be undone.')) return
    localStorage.removeItem(STORAGE_KEY(user.uid))
    setItems([])
  }

  if (authLoading) return <p style={{ padding: 40, textAlign: 'center' }}>Loading…</p>
  if (!user) return <Navigate to="/signin?redirect=/dashboard" replace />

  const inProgress = items.filter((i) => i.status === 'in-progress')
  const completed = items.filter((i) => i.status === 'completed')
  const saved = items.filter((i) => i.saved)
  const recent = items.slice(0, 6)
  const byType: Record<string, number> = {}
  items.forEach((i) => { byType[i.type] = (byType[i.type] || 0) + 1 })

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginTop: 0 }}>👋 Welcome back</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>{user.email}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 32 }}>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#1e40af', marginBottom: 4 }}>In Progress</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#1e40af' }}>{inProgress.length}</div>
        </div>
        <div style={{ background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#166534', marginBottom: 4 }}>Completed</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#166534' }}>{completed.length}</div>
        </div>
        <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#92400e', marginBottom: 4 }}>Saved</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#92400e' }}>{saved.length}</div>
        </div>
        <div style={{ background: '#f3e8ff', border: '1px solid #d8b4fe', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#6b21a8', marginBottom: 4 }}>Total Opened</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#6b21a8' }}>{items.length}</div>
        </div>
      </div>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>📖 Continue Learning</h2>
        {inProgress.length === 0 ? (
          <div style={{ background: '#f9fafb', padding: 20, borderRadius: 10, border: '1px dashed #d1d5db', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: 12 }}>No lessons in progress yet.</p>
            <Link to="/learning" style={{ color: '#1a73e8', fontWeight: 600 }}>Browse all sections →</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 8 }}>
            {inProgress.map((i) => (
              <Link key={i.key} to={i.url} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{i.title}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{i.subjectTitle} · {TYPE_LABEL[i.type] || i.type}</div>
                </div>
                <span style={{ color: '#1a73e8', fontWeight: 600, fontSize: 13 }}>Resume →</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>⭐ Saved for Later</h2>
        {saved.length === 0 ? (
          <div style={{ background: '#f9fafb', padding: 20, borderRadius: 10, border: '1px dashed #d1d5db', textAlign: 'center' }}>
            <p style={{ color: '#666', margin: 0 }}>Click ☆ Save on any lesson to add it here.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 8 }}>
            {saved.map((i) => (
              <Link key={i.key} to={i.url} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{i.title}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{i.subjectTitle} · {TYPE_LABEL[i.type] || i.type}</div>
                </div>
                <span style={{ color: '#f59e0b', fontSize: 20 }}>★</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>✓ Completed</h2>
        {completed.length === 0 ? (
          <div style={{ background: '#f9fafb', padding: 20, borderRadius: 10, border: '1px dashed #d1d5db', textAlign: 'center' }}>
            <p style={{ color: '#666', margin: 0 }}>Mark any lesson as complete to add it here.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 8 }}>
            {completed.map((i) => (
              <Link key={i.key} to={i.url} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{i.title}</div>
                  <div style={{ fontSize: 12, color: '#166534' }}>{i.subjectTitle} · {TYPE_LABEL[i.type] || i.type}</div>
                </div>
                <span style={{ color: '#16a34a', fontSize: 18 }}>✓</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {recent.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>🕒 Recently Viewed</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
            {recent.map((i) => (
              <Link key={i.key} to={i.url} style={{ display: 'block', padding: 12, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, textDecoration: 'none', color: '#111' }}>
                <div style={{ fontSize: 11, color: '#888', marginBottom: 2 }}>{TYPE_LABEL[i.type] || i.type}</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{i.title}</div>
                <div style={{ fontSize: 11, color: '#666' }}>{i.subjectTitle}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {Object.keys(byType).length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>📊 Your Learning Activity</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
            {Object.entries(byType).map(([type, count]) => (
              <div key={type} style={{ padding: 12, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8 }}>
                <div style={{ fontSize: 12, color: '#666' }}>{TYPE_LABEL[type] || type}</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{count}</div>
                <div style={{ fontSize: 11, color: '#888' }}>lessons opened</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link to="/learning" style={{ padding: '10px 18px', background: '#1a73e8', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Browse all sections</Link>
        <Link to="/settings" style={{ padding: '10px 18px', background: '#fff', color: '#111', border: '1px solid #d1d5db', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Account settings</Link>
        <button onClick={clearAll} style={{ padding: '10px 18px', background: '#fff', color: '#dc2626', border: '1px solid #dc2626', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Clear all progress</button>
      </div>

      <p style={{ marginTop: 24, fontSize: 12, color: '#888' }}>
        Progress is stored on this device, tied to your account. Clearing browser data will reset it.
      </p>
    </div>
  )
}
