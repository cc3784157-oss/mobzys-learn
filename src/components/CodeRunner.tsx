import { useState } from 'react'

type Language = 'html' | 'css' | 'js' | 'react' | 'python' | 'c' | 'cpp'

type Props = {
  code: string
  language: Language
  height?: number
}

function buildSRCDoc(code: string, language: Language): string {
  if (language === 'html') return code
  if (language === 'css') {
    return `<!DOCTYPE html><html><head><style>body{font-family:system-ui;padding:20px}${code}</style></head><body><h1>Hello</h1><p>Style me with CSS!</p><button>Click me</button><div class="box">A box</div></body></html>`
  }
  if (language === 'js') {
    return `<!DOCTYPE html><html><head><style>body{font-family:system-ui;padding:16px;background:#0f172a;color:#e2e8f0;margin:0}pre{background:#1e293b;padding:10px;border-radius:6px;color:#86efac;margin:6px 0;font-size:13px;overflow:auto}</style></head><body><div id="out"></div><script>
const out = document.getElementById('out')
const origLog = console.log
console.log = (...args) => {
  const p = document.createElement('pre')
  p.textContent = args.map(a => { try { return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a) } catch { return String(a) } }).join(' ')
  out.appendChild(p)
  origLog(...args)
}
window.onerror = (m, src, line) => console.log('❌ ' + m + ' (line ' + line + ')')
try { ${code} } catch(e) { console.log('❌ ' + e.message) }
<\/script></body></html>`
  }
  if (language === 'react') {
    return `<!DOCTYPE html><html><head><script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script><script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script><script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script><style>body{font-family:system-ui;padding:20px}</style></head><body><div id="root"></div><script type="text/babel">
${code}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
<\/script></body></html>`
  }
  return ''
}

export default function CodeRunner({ code, language, height = 320 }: Props) {
  const [showOutput, setShowOutput] = useState(false)
  const [key, setKey] = useState(0)

  const run = () => {
    setShowOutput(true)
    setKey((k) => k + 1)
  }

  const isWebRunnable = ['html', 'css', 'js', 'react'].includes(language)
  const replit: Record<string, string> = { python: 'python3', c: 'c', cpp: 'cpp' }

  return (
    <div style={{ margin: '20px 0', borderRadius: 8, overflow: 'hidden', border: '1px solid #334155' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e293b', padding: '8px 12px' }}>
        <span style={{ color: '#94a3b8', fontSize: 12, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1 }}>{language}</span>
        {isWebRunnable && (
          <button
            onClick={run}
            style={{ background: '#10b981', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: 6, fontSize: 13, cursor: 'pointer', fontWeight: 'bold' }}
          >
            ▶ Run Code
          </button>
        )}
      </div>
      <pre style={{ margin: 0, padding: 16, background: '#0f172a', color: '#e2e8f0', overflow: 'auto', fontSize: 13, lineHeight: 1.6 }}>
        <code>{code}</code>
      </pre>
      {isWebRunnable && showOutput && (
        <iframe
          key={key}
          srcDoc={buildSRCDoc(code, language)}
          sandbox="allow-scripts allow-modals"
          title="Output"
          style={{ width: '100%', height, border: 'none', borderTop: '1px solid #334155', background: '#fff', display: 'block' }}
        />
      )}
      {!isWebRunnable && (
        <div style={{ padding: 14, background: '#fef3c7', color: '#78350f', fontSize: 14 }}>
          <strong>Try it:</strong> Copy the code →{' '}
          <a href={'https://replit.com/languages/' + (replit[language] || 'python3')} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 'bold' }}>Run on Replit ↗</a>
          {' or '}
          <a href="https://www.programiz.com/online-compiler/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 'bold' }}>Programiz ↗</a>
        </div>
      )}
    </div>
  )
}