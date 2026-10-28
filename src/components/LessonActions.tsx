import { useAuthUser } from '../hooks/useAuthUser'

type Props = {
  saved: boolean
  onToggle: () => void
  completed?: boolean
  onComplete?: () => void
}

export default function LessonActions({ saved, onToggle, completed, onComplete }: Props) {
  const { user } = useAuthUser()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', padding: '16px 0', borderTop: '1px solid #e5e7eb', marginTop: 24 }}>
      <button
        onClick={onToggle}
        style={{
          padding: '9px 16px', borderRadius: 6,
          border: '1px solid ' + (saved ? '#f59e0b' : '#d1d5db'),
          background: saved ? '#fef3c7' : '#fff',
          color: saved ? '#92400e' : '#111',
          fontWeight: 600, cursor: 'pointer', fontSize: 13,
        }}
      >
        {saved ? '★ Saved' : '☆ Save for later'}
      </button>
      {onComplete && (
        <button
          onClick={onComplete}
          style={{
            padding: '9px 16px', borderRadius: 6,
            border: '1px solid ' + (completed ? '#16a34a' : '#d1d5db'),
            background: completed ? '#dcfce7' : '#fff',
            color: completed ? '#166534' : '#111',
            fontWeight: 600, cursor: 'pointer', fontSize: 13,
          }}
        >
          {completed ? '✓ Completed' : 'Mark as complete'}
        </button>
      )}
      {!user && (
        <span style={{ fontSize: 12, color: '#888' }}>
          <a href="/signin" style={{ color: '#1a73e8' }}>Sign in</a> to save your progress
        </span>
      )}
    </div>
  )
}
