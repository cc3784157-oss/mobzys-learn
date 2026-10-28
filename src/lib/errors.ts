export function friendlyAuthError(err: unknown): string {
  const code =
    err && typeof err === 'object' && 'code' in err
      ? String((err as { code: unknown }).code)
      : ''

  switch (code) {
    case 'auth/email-already-in-use':
      return 'Email already in use.'
    case 'auth/invalid-email':
      return 'That email address is not valid.'
    case 'auth/weak-password':
      return 'Password must be at least 8 characters.'
    case 'auth/user-not-found':
      return 'No account with that email.'
    case 'auth/wrong-password':
      return 'Incorrect password.'
    case 'auth/invalid-credential':
      return 'Incorrect email or password.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a few minutes and try again.'
    case 'auth/network-request-failed':
      return 'Network error. Check your internet connection.'
    case 'auth/user-disabled':
      return 'This account has been disabled.'
    case 'auth/operation-not-allowed':
      return 'Email sign-in is not enabled. Please contact support.'
    default:
      return err instanceof Error ? err.message : 'Something went wrong.'
  }
}