import { useEffect, useState } from 'react'

const TIKTOK_URL = 'https://www.tiktok.com/@rayanpromax39'
const SEEN_KEY = 'mobzy_tiktok_seen_v1'
const DELAY_MS = 3000 // let user see the site for 3 seconds first

export default function TikTokGate() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(SEEN_KEY) === '1') return
    const t = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  if (!open) return null

  const close = () => {
    localStorage.setItem(SEEN_KEY, '1')
    setOpen(false)
  }

  const follow = () => {
    localStorage.setItem(SEEN_KEY, '1')
    window.open(TIKTOK_URL, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 16, maxWidth: 420, width: '100%',
          padding: 28, textAlign: 'center', position: 'relative',
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: 'absolute', top: 10, right: 14, background: 'none',
            border: 'none', fontSize: 24, cursor: 'pointer', color: '#999',
          }}
        >
          ×
        </button>

        <div style={{ fontSize: 48, marginBottom: 8 }}>🎵</div>
        <h2 style={{ margin: '0 0 8px', fontSize: 22 }}>Follow us on TikTok</h2>
        <p style={{ color: '#5b6b63', margin: '0 0 20px', fontSize: 15 }}>
          Help us keep Mobzy Learn 100% free — a follow takes 5 seconds and means everything.
        </p>

        <button
          onClick={follow}
          style={{
            background: '#000', color: '#fff', border: 'none', padding: '14px 24px',
            borderRadius: 10, fontSize: 16, fontWeight: 'bold', cursor: 'pointer',
            width: '100%', marginBottom: 12,
          }}
        >
          🎵 Follow @rayanpromax39
        </button>

        <button
          onClick={close}
          style={{
            background: 'none', border: 'none', color: '#5b6b63',
            fontSize: 14, cursor: 'pointer', textDecoration: 'underline',
          }}
        >
          Continue to free lessons →
        </button>
      </div>
    </div>
  )
}