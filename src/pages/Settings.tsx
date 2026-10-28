import { useState, useEffect, useRef, type ChangeEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { onAuthStateChanged, updateProfile, sendPasswordResetEmail, deleteUser, signOut, type User } from 'firebase/auth'
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { auth, db } from '../lib/firebase'
import { LANGUAGES } from '../lib/i18n'

type Prefs = {
  language: string
  theme: 'light' | 'dark'
  emailUpdates: boolean
  progressSync: boolean
}

export default function Settings() {
  const { i18n } = useTranslation()
  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState('')
  const [error, setError] = useState('')

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [photoBase64, setPhotoBase64] = useState('')

  const [prefs, setPrefs] = useState<Prefs>({
    language: 'en',
    theme: 'light',
    emailUpdates: false,
    progressSync: true,
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        setDisplayName(u.displayName || '')
        setEmail(u.email || '')
        try {
          const snap = await getDoc(doc(db, 'users', u.uid))
          if (snap.exists()) {
            const d = snap.data()
            setPhotoBase64(d.photoBase64 || '')
            setPrefs({
              language: d.language || 'en',
              theme: d.theme || 'light',
              emailUpdates: d.emailUpdates || false,
              progressSync: d.progressSync !== false,
            })
          }
        } catch {}
      }
      setReady(true)
    })
  }, [])

  if (!ready) return <section className="section"><p>Loading...</p></section>

  if (!user) {
    return (
      <section className="section" style={{ maxWidth: 600, margin: '60px auto', textAlign: 'center' }}>
        <h1>Settings</h1>
        <p>You need to sign in to access settings.</p>
        <Link to="/signin" className="button primary">Sign In</Link>
      </section>
    )
  }

  async function handlePhotoUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) { setError('Please select an image file'); return }
    if (file.size > 5 * 1024 * 1024) { setError('Image must be under 5 MB'); return }

    setLoading(true)
    setError('')

    try {
      const base64 = await resizeImage(file, 200)
      setPhotoBase64(base64)
      await setDoc(doc(db, 'users', user!.uid), {
        photoBase64: base64,
        displayName,
        updatedAt: serverTimestamp(),
      }, { merge: true })
      setSaved('Profile photo updated!')
      setTimeout(() => setSaved(''), 2500)
    } catch (err: any) {
      setError(err.message || 'Failed to upload photo')
    } finally {
      setLoading(false)
    }
  }

  async function handleSaveProfile() {
    if (!displayName.trim() || displayName.trim().length < 2) {
      setError('Display name must be at least 2 characters')
      return
    }
    setLoading(true)
    setError('')
    try {
      await updateProfile(user!, { displayName: displayName.trim() })
      await setDoc(doc(db, 'users', user!.uid), {
        displayName: displayName.trim(),
        updatedAt: serverTimestamp(),
      }, { merge: true })
      setSaved('Profile saved!')
      setTimeout(() => setSaved(''), 2500)
    } catch (err: any) {
      setError(err.message || 'Failed to save')
    } finally {
      setLoading(false)
    }
  }

  async function handleSavePrefs() {
    setLoading(true)
    setError('')
    try {
      // 1. Change the language IMMEDIATELY (before the async save)
      await i18n.changeLanguage(prefs.language)

      // 2. Apply theme immediately
      if (prefs.theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }

      // 3. Save to Firestore
      await setDoc(doc(db, 'users', user!.uid), {
        ...prefs,
        updatedAt: serverTimestamp(),
      }, { merge: true })

      // 4. Save to localStorage (for persistence + LanguageDetector)
      localStorage.setItem('mobzy_lang', prefs.language)
      localStorage.setItem('mobzy_theme', prefs.theme)

      setSaved('Preferences saved!')
      setTimeout(() => setSaved(''), 2500)
    } catch (err: any) {
      setError(err.message || 'Failed to save')
    } finally {
      setLoading(false)
    }
  }

  async function handlePasswordReset() {
    setLoading(true)
    setError('')
    try {
      await sendPasswordResetEmail(auth, user!.email!)
      setSaved('Password reset email sent! Check your inbox.')
      setTimeout(() => setSaved(''), 4000)
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email')
    } finally {
      setLoading(false)
    }
  }

  async function handleSignOut() {
    await signOut(auth)
    navigate('/')
  }

  async function handleDeleteAccount() {
    if (!window.confirm('Delete your account? This cannot be undone.')) return
    const t = window.prompt('Type DELETE to confirm:')
    if (t !== 'DELETE') return

    setLoading(true)
    setError('')
    try {
      await deleteDoc(doc(db, 'users', user!.uid))
      await deleteUser(user!)
      navigate('/')
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
        setError('Please sign out and sign in again before deleting your account.')
      } else {
        setError(err.message || 'Failed to delete account')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" style={{ maxWidth: 700, margin: '40px auto' }}>
      <h1>Settings</h1>

      {saved && <div className="notice success">{saved}</div>}
      {error && <div className="notice error">{error}</div>}

      <div className="panel" style={{ marginBottom: 24 }}>
        <h2>Profile</h2>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%', overflow: 'hidden',
            background: 'var(--surface-2)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 32, fontWeight: 700, color: 'var(--green-dark)',
            flexShrink: 0,
          }}>
            {photoBase64 ? (
              <img src={photoBase64} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              (displayName || email || 'U').charAt(0).toUpperCase()
            )}
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              className="button secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
            >
              Change Photo
            </button>
            {photoBase64 && (
              <button
                type="button"
                className="button secondary"
                onClick={async () => {
                  setPhotoBase64('')
                  await setDoc(doc(db, 'users', user!.uid), { photoBase64: '' }, { merge: true })
                }}
                style={{ marginLeft: 8 }}
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <div className="auth-form">
          <label>
            Display Name
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Your name" />
          </label>
          <label>
            Email (cannot be changed here)
            <input value={email} disabled />
          </label>
          <button type="button" className="button primary" onClick={handleSaveProfile} disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: 24 }}>
        <h2>Preferences</h2>

        <div className="auth-form">
          <label>
            Language
            <select
              value={prefs.language}
              onChange={(e) => setPrefs({ ...prefs, language: e.target.value })}
              className="search"
              style={{ marginBottom: 0 }}
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native} — {l.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Theme
            <select
              value={prefs.theme}
              onChange={(e) => setPrefs({ ...prefs, theme: e.target.value as 'light' | 'dark' })}
              className="search"
              style={{ marginBottom: 0 }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={prefs.emailUpdates}
              onChange={(e) => setPrefs({ ...prefs, emailUpdates: e.target.checked })}
              style={{ width: 'auto' }}
            />
            Receive email updates about new courses
          </label>

          <label style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={prefs.progressSync}
              onChange={(e) => setPrefs({ ...prefs, progressSync: e.target.checked })}
              style={{ width: 'auto' }}
            />
            Sync my progress across devices
          </label>

          <button type="button" className="button primary" onClick={handleSavePrefs} disabled={loading}>
            {loading ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </div>

      <div className="panel">
        <h2>Account</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button type="button" className="button secondary" onClick={handlePasswordReset} disabled={loading}>
            Send password reset email
          </button>
          <button type="button" className="button secondary" onClick={handleSignOut}>
            Sign out
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={handleDeleteAccount}
            disabled={loading}
            style={{ color: '#ef4444', borderColor: '#ef4444' }}
          >
            Delete my account
          </button>
        </div>
      </div>
    </section>
  )
}

async function resizeImage(file: File, maxSize: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let w = img.width
        let h = img.height
        if (w > h) {
          if (w > maxSize) { h = Math.round((h * maxSize) / w); w = maxSize }
        } else {
          if (h > maxSize) { w = Math.round((w * maxSize) / h); h = maxSize }
        }
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')
        if (!ctx) { reject(new Error('Canvas not supported')); return }
        ctx.drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = e.target?.result as string
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}