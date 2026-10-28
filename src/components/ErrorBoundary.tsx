import { Component, type ReactNode, type ErrorInfo } from 'react'

type Props = { children: ReactNode; label?: string }
type State = { error: Error | null; errorInfo: ErrorInfo | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: 20, fontFamily: 'system-ui, Arial, sans-serif' }}>
          <div style={{ background: '#fef2f2', border: '2px solid #dc2626', borderRadius: 10, padding: 20 }}>
            <h1 style={{ margin: '0 0 8px', color: '#991b1b', fontSize: 22 }}>⚠️ Something went wrong</h1>
            <p style={{ margin: '0 0 16px', color: '#333', fontSize: 14 }}>
              {this.props.label || 'This page'} crashed. Please share this error so we can fix it.
            </p>
            <details style={{ marginBottom: 12 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#1a73e8', marginBottom: 8 }}>Show error details</summary>
              <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: 12, borderRadius: 6, fontSize: 12, overflow: 'auto', maxHeight: 400 }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack && '\n\nComponent stack:' + this.state.errorInfo.componentStack}
              </pre>
            </details>
            <button onClick={() => window.location.reload()} style={{ padding: '8px 16px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>
              Reload page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
