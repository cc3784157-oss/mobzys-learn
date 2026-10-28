import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'

type AuthPanelProps = {
  onClose?: () => void
}

export default function AuthPanel({ onClose }: AuthPanelProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [accountType, setAccountType] = useState<'buyer' | 'seller'>('buyer')
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (mode === 'register') {
        if (!displayName.trim()) {
          throw new Error('Please enter your name.')
        }

        if (password.length < 6) {
          throw new Error('Your password must contain at least 6 characters.')
        }

        const credential = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        )

        await updateProfile(credential.user, {
          displayName: displayName.trim(),
        })

        await setDoc(doc(db, 'users', credential.user.uid), {
          displayName: displayName.trim(),
          email: credential.user.email,
          accountType,
          createdAt: serverTimestamp(),
        })

        setSuccess('Your Mobzy account has been created successfully.')
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password)
        setSuccess('You have signed in successfully.')
      }

      onClose?.()
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong.'

      const friendlyMessages: Record<string, string> = {
        'auth/email-already-in-use':
          'This email already has an account. Try signing in.',
        'auth/invalid-email': 'Enter a valid email address.',
        'auth/invalid-credential':
          'Email or password is incorrect. Please try again.',
        'auth/weak-password': 'Choose a stronger password.',
        'auth/network-request-failed':
          'Network problem. Check your internet connection.',
        'auth/operation-not-allowed':
          'Email/password sign-in is not enabled in Firebase.',
        'permission-denied':
          'Firestore denied this operation. Check the published security rules.',
      }

      const key = message.match(/auth\/[\w-]+/)?.[0] ?? message
      setError(friendlyMessages[key] ?? message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-panel">
      <div className="auth-panel__heading">
        <h2>{mode === 'login' ? 'Welcome back' : 'Join Mobzy'}</h2>
        <p>
          {mode === 'login'
            ? 'Sign in to your account.'
            : 'Create your real Mobzy marketplace account.'}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'register' && (
          <>
            <label htmlFor="mobzy-name">Full name</label>
            <input
              id="mobzy-name"
              autoComplete="name"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              required
            />

            <label htmlFor="mobzy-account-type">Account type</label>
            <select
              id="mobzy-account-type"
              value={accountType}
              onChange={(event) =>
                setAccountType(event.target.value as 'buyer' | 'seller')
              }
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </>
        )}

        <label htmlFor="mobzy-email">Email address</label>
        <input
          id="mobzy-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="mobzy-password">Password</label>
        <input
          id="mobzy-password"
          type="password"
          autoComplete={
            mode === 'login' ? 'current-password' : 'new-password'
          }
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          required
        />

        {error && <p role="alert" className="auth-panel__error">{error}</p>}
        {success && (
          <p role="status" className="auth-panel__success">{success}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading
            ? 'Please wait...'
            : mode === 'login'
              ? 'Sign in'
              : 'Create account'}
        </button>
      </form>

      <p className="auth-panel__switch">
        {mode === 'login' ? 'New to Mobzy?' : 'Already have an account?'}{' '}
        <button
          type="button"
          className="auth-panel__text-button"
          onClick={() => {
            setMode(mode === 'login' ? 'register' : 'login')
            setError('')
            setSuccess('')
          }}
        >
          {mode === 'login' ? 'Create an account' : 'Sign in'}
        </button>
      </p>
    </section>
  )
}