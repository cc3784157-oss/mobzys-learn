import { useState } from 'react'

export const SITE = 'https://mobzys.pages.dev'

function toFullUrl(url: string): string {
  let u = (url || '').trim()
  u = u.replace(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i, '')
  u = u.replace(/^capacitor:\/\/[^\/]+/i, '')
  u = u.replace(/^file:\/\/[^\/]+/i, '')
  u = u.replace(/^https?:\/\/mobzy-learn\.netlify\.app/i, SITE)
  u = u.replace(/^https?:\/\/[a-z0-9-]+\.pages\.dev/i, SITE)
  u = u.replace(/^https?:\/\/mobzys?(-[a-z0-9]+)?\.pages\.dev/i, SITE)
  if (/^https?:\/\//i.test(u)) return u
  if (u.startsWith('/')) return SITE + u
  if (u) return SITE + '/' + u
  return SITE
}

export default function ShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const fullUrl = toFullUrl(url)
    const text = 'Learn ' + title + ' for FREE on Mobzy Learn!'
    const message = text + '\n\n' + fullUrl

    const androidShare = (window as any).AndroidShare
    if (androidShare && typeof androidShare.share === 'function') {
      androidShare.share(message)
      return
    }

    if (typeof navigator !== 'undefined' && (navigator as any).share) {
      try {
        await (navigator as any).share({ title: 'Mobzy Learn: ' + title, text, url: fullUrl })
        return
      } catch (err) {}
    }

    window.open('https://wa.me/?text=' + encodeURIComponent(message), '_blank')
  }

  const copyToClipboard = async () => {
    const fullUrl = toFullUrl(url)
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullUrl)
      } else {
        const ta = document.createElement('textarea')
        ta.value = fullUrl
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {}
  }

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '20px 0' }}>
      <button
        onClick={handleShare}
        className="button primary"
        style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}
      >
        Share on WhatsApp
      </button>
      <button onClick={copyToClipboard} className="button secondary">
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  )
}