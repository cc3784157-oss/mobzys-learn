import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { Capacitor } from '@capacitor/core'
import { useTranslation } from 'react-i18next'
import { auth } from '../lib/firebase'
import { friendlyAuthError } from '../lib/errors'

export default function SignIn() {
  const { t } = useTranslation()
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  function getDestination() {
    const params = new URLSearchParams(location.search)
    const fromState = (location.state as any)?.from?.pathname
    const fromQuery = params.get('next')
    const fromStorage = localStorage.getItem('postLoginRedirect')
    localStorage.removeItem('postLoginRedirect')
    return fromState || fromQuery || fromStorage || '/dashboard'
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setBusy(true)
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') ?? '').trim()
    const password = String(form.get('password') ?? '')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate(getDestination(), { replace: true })
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setBusy(false)
    }
  }

  async function handleGoogle() {
    setError('')
    setBusy(true)
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      if (Capacitor.isNativePlatform()) {
        await signInWithRedirect(auth, provider)
      } else {
        try {
          await signInWithPopup(auth, provider)
        } catch (err: any) {
          if (err?.code === 'auth/popup-blocked' || err?.code === 'auth/popup-closed-by-user' || err?.code === 'auth/cancelled-popup-request') {
            await signInWithRedirect(auth, provider)
            return
          }
          throw err
        }
      }
      navigate(getDestination(), { replace: true })
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="section" style={{ maxWidth: '480px', margin: '60px auto' }}>
      <div className="panel">
        <h1 style={{ marginBottom: '10px' }}>{t('auth.signInTitle')}</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          {t('auth.welcomeBack')}{' '}
          <Link to="/register" style={{ color: 'var(--green-dark)', fontWeight: 'bold' }}>
            {t('auth.createAccountLink')}
          </Link>.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={busy}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            width: '100%', padding: '12px 16px', borderRadius: 8,
            border: '1px solid #dadce0', background: '#fff', color: '#3c4043',
            fontSize: 15, fontWeight: 500, cursor: busy ? 'wait' : 'pointer', marginBottom: 16,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.5 39.6 16.2 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.2-.1-2.4-.4-3.5z" />
          </svg>
          {t('auth.continueGoogle')}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 13, margin: '8px 0 20px' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          {t('auth.or')}
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            {t('auth.email')}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            {t('auth.password')}
            <div style={{ position: 'relative' }}>
              <input
                name="password"
                type={showPw ? 'text' : 'password'}
                required
                autoComplete="current-password"
                style={{ paddingRight: 44, width: '100%' }}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? t('auth.hidePassword') : t('auth.showPassword')}
                style={{
                  position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: 18,
                  color: '#6b7280', padding: 4,
                }}
              >
                {showPw ? 'ðŸ™ˆ' : 'ðŸ‘'}
              </button>
            </div>
          </label>

          {error && <p className="notice error">{error}</p>}

          <button className="button primary" disabled={busy}>
            {busy ? t('auth.signingIn') : t('auth.signInTitle')}
          </button>
        </form>
      </div>
    </section>
  )
}
