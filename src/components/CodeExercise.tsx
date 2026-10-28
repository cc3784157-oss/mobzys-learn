import { markExercisePassed, isExercisePassed } from '../lib/progress'
import { useState, useRef, useEffect } from 'react'

type Props = {
  exerciseId: string
  prompt: string
  starter: string
  expectedOutput: string
  hint?: string
  solution?: string
}

const MAX_ATTEMPTS = 10
const COOLDOWN_MS = 3000
const TIMEOUT_MS = 5000

function getAttempt(exerciseId: string): { count: number; lastAt: number } {
  try {
    const raw = localStorage.getItem('mobzy_ex_' + exerciseId)
    if (!raw) return { count: 0, lastAt: 0 }
    return JSON.parse(raw)
  } catch {
    return { count: 0, lastAt: 0 }
  }
}

function setAttempt(exerciseId: string, count: number, lastAt: number) {
  try {
    localStorage.setItem('mobzy_ex_' + exerciseId, JSON.stringify({ count, lastAt }))
  } catch {}
}

export default function CodeExercise({ exerciseId, prompt, starter, expectedOutput, hint, solution }: Props) {
  const [code, setCode] = useState(starter)
  const [output, setOutput] = useState('')
  const [result, setResult] = useState<'idle' | 'pass' | 'fail' | 'timeout'>('idle')
  const [attempts, setAttempts] = useState(0)
  const [cooldownEnd, setCooldownEnd] = useState(0)
  const [now, setNow] = useState(Date.now())
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const handlerRef = useRef<((e: MessageEvent) => void) | null>(null)

  useEffect(() => {
    const data = getAttempt(exerciseId)
    setAttempts(data.count)
    if (data.lastAt && Date.now() - data.lastAt < COOLDOWN_MS) {
      setCooldownEnd(data.lastAt + COOLDOWN_MS)
    }
    setCode(starter)
    setOutput('')
    setResult('idle')
  }, [exerciseId, starter])

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 200)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    function handler(e: MessageEvent) {
      if (e.data?.type !== 'mobzy-exercise-output') return
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      const out = String(e.data.output || '').trim()
      setOutput(out)
            const passed = out === expectedOutput.trim()
      setResult(passed ? 'pass' : 'fail')
      if (passed) markExercisePassed(exerciseId)
    }
    handlerRef.current = handler
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [expectedOutput])

  function buildSrcDoc(userCode: string) {
    return `<!DOCTYPE html><html><head><style>body{margin:0;font-family:monospace;background:#0f172a;color:#e2e8f0;font-size:13px}</style></head><body><div id="out"></div><script>
(function(){
  var lines=[];
  var origLog=console.log;
  console.log=function(){var args=Array.prototype.slice.call(arguments);lines.push(args.map(function(a){try{return typeof a==='object'?JSON.stringify(a):String(a)}catch(e){return String(a)}}).join(' '));origLog.apply(console,arguments)};
  window.onerror=function(m){lines.push('ERROR: '+m);try{window.parent.postMessage({type:'mobzy-exercise-output',output:lines.join('\\n')+'\\nERROR'},'*')}catch(e){}return true};
  try{${userCode}}catch(e){lines.push('ERROR: '+e.message)}
  document.getElementById('out').textContent=lines.join('\\n');
  try{window.parent.postMessage({type:'mobzy-exercise-output',output:lines.join('\\n')},'*')}catch(e){}
})();
<\/script></body></html>`
  }

  function runAndCheck() {
    const data = getAttempt(exerciseId)
    if (Date.now() - data.lastAt < COOLDOWN_MS) {
      setCooldownEnd(data.lastAt + COOLDOWN_MS)
      return
    }
    if (data.count >= MAX_ATTEMPTS) return

    const newCount = data.count + 1
    setAttempt(exerciseId, newCount, Date.now())
    setAttempts(newCount)
    setCooldownEnd(Date.now() + COOLDOWN_MS)
    setNow(Date.now())
    setResult('idle')
    setOutput('')

    if (!iframeRef.current) return
    iframeRef.current.srcdoc = buildSrcDoc(code)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      if (iframeRef.current) iframeRef.current.srcdoc = ''
      setResult('timeout')
      setOutput('Your code ran for more than 5 seconds. Check for an infinite loop.')
    }, TIMEOUT_MS)
  }

  function resetAttempts() {
    setAttempt(exerciseId, 0, 0)
    setAttempts(0)
    setCooldownEnd(0)
    setResult('idle')
    setOutput('')
    setCode(starter)
  }

  const attemptsLeft = MAX_ATTEMPTS - attempts
  const cooldownRemaining = Math.max(0, cooldownEnd - now)
  const isCoolingDown = cooldownRemaining > 0
  const isLocked = attempts >= MAX_ATTEMPTS

  return (
    <div style={{ margin: '20px 0', padding: 20, border: '2px solid var(--green)', borderRadius: 12, background: 'var(--surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
        <strong style={{ color: 'var(--green-dark)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
          🧪 Interactive Exercise
        </strong>
        <span style={{ fontSize: 12, color: isExercisePassed(exerciseId) ? 'var(--green-dark)' : 'var(--text-muted)', fontWeight: isExercisePassed(exerciseId) ? 700 : 400 }}>
          {isExercisePassed(exerciseId) ? '✓ Completed' : attemptsLeft + ' attempt' + (attemptsLeft !== 1 ? 's' : '') + ' left'}
        </span>
      </div>

      <p style={{ margin: '0 0 12px', color: 'var(--text)' }}>{prompt}</p>

      {hint && (
        <details style={{ marginBottom: 12 }}>
          <summary style={{ cursor: 'pointer', fontSize: 13, color: 'var(--text-muted)' }}>💡 Show hint</summary>
          <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-muted)', paddingLeft: 12 }}>{hint}</p>
        </details>
      )}

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        disabled={isLocked}
        style={{
          width: '100%', minHeight: 120, padding: 12, fontFamily: 'monospace',
          fontSize: 13, lineHeight: 1.5, background: '#0f172a', color: '#e2e8f0',
          border: '1px solid #334155', borderRadius: 8, resize: 'vertical', boxSizing: 'border-box',
        }}
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          onClick={runAndCheck}
          disabled={isLocked || isCoolingDown}
          style={{
            background: isLocked ? '#94a3b8' : isCoolingDown ? '#64748b' : 'var(--green)',
            color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 8,
            fontSize: 14, fontWeight: 600, cursor: isLocked || isCoolingDown ? 'not-allowed' : 'pointer',
          }}
        >
          {isCoolingDown ? 'Wait ' + Math.ceil(cooldownRemaining / 1000) + 's...' : isLocked ? 'Attempts used up' : '▶ Run & Check'}
        </button>
        <button
          onClick={resetAttempts}
          style={{
            background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
            padding: '10px 16px', borderRadius: 8, fontSize: 14, cursor: 'pointer',
          }}
        >
          Reset attempts
        </button>
      </div>

      {output && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, color: result === 'pass' ? 'var(--green-dark)' : '#ef4444' }}>
            {result === 'pass' ? '✓ Output — correct!' : result === 'timeout' ? '⏱ Timeout' : '✗ Output — not quite right'}
          </div>
          <pre style={{ margin: 0, padding: 12, background: '#0f172a', color: '#e2e8f0', borderRadius: 8, fontSize: 13, overflow: 'auto', whiteSpace: 'pre-wrap' }}>
            {output}
          </pre>
        </div>
      )}

      {result === 'pass' && (
        <div style={{ marginTop: 12, padding: 12, background: 'var(--green-light)', borderRadius: 8, border: '1px solid var(--green)' }}>
          <strong style={{ color: 'var(--green-dark)' }}>🎉 Correct! Nice work.</strong>
        </div>
      )}

      {result === 'fail' && !isLocked && (
        <div style={{ marginTop: 12, padding: 12, background: '#fef2f2', borderRadius: 8, border: '1px solid #fecaca' }}>
          <strong style={{ color: '#991b1b' }}>Not quite yet — try again</strong>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: '#991b1b' }}>
            Expected output: <code style={{ background: '#fff', padding: '2px 6px', borderRadius: 4 }}>{expectedOutput}</code>
          </p>
        </div>
      )}

      {isLocked && solution && (
        <div style={{ marginTop: 12, padding: 12, background: 'var(--surface-2)', borderRadius: 8, border: '1px solid var(--border)' }}>
          <strong style={{ color: 'var(--text)' }}>Solution (attempts exhausted)</strong>
          <pre style={{ margin: '8px 0 0', padding: 12, background: '#0f172a', color: '#e2e8f0', borderRadius: 8, fontSize: 13, overflow: 'auto' }}>
            {solution}
          </pre>
        </div>
      )}

      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        title="Exercise execution"
        style={{ display: 'none' }}
      />
    </div>
  )
}