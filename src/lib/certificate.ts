export function generateCertId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let id = 'ML-'
  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

export function generateCertificatePNG(
  userName: string,
  courseTitle: string,
  date: string,
  certId: string
): string {
  const canvas = document.createElement('canvas')
  canvas.width = 1400
  canvas.height = 990
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  const gradient = ctx.createLinearGradient(0, 0, 1400, 990)
  gradient.addColorStop(0, '#f0fdf4')
  gradient.addColorStop(0.5, '#ffffff')
  gradient.addColorStop(1, '#dcfce7')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 1400, 990)

  ctx.strokeStyle = '#10b981'
  ctx.lineWidth = 10
  ctx.strokeRect(40, 40, 1320, 910)

  ctx.strokeStyle = '#047857'
  ctx.lineWidth = 3
  ctx.strokeRect(60, 60, 1280, 870)

  ctx.fillStyle = '#10b981'
  ctx.beginPath()
  ctx.arc(700, 170, 45, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 55px Georgia, serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('M', 700, 178)

  ctx.fillStyle = '#047857'
  ctx.font = 'bold 60px Georgia, serif'
  ctx.textBaseline = 'alphabetic'
  ctx.fillText('CERTIFICATE OF COMPLETION', 700, 320)

  ctx.fillStyle = '#64748b'
  ctx.font = 'italic 28px Georgia, serif'
  ctx.fillText('This certifies that', 700, 400)

  ctx.fillStyle = '#0f172a'
  ctx.font = 'bold 78px Georgia, serif'
  ctx.fillText(userName, 700, 520)

  ctx.strokeStyle = '#10b981'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(500, 570)
  ctx.lineTo(900, 570)
  ctx.stroke()

  ctx.fillStyle = '#475569'
  ctx.font = '26px Arial, sans-serif'
  ctx.fillText('has successfully completed the course', 700, 630)

  ctx.fillStyle = '#047857'
  ctx.font = 'bold 52px Georgia, serif'
  ctx.fillText(courseTitle, 700, 720)

  ctx.strokeStyle = '#94a3b8'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(300, 830)
  ctx.lineTo(650, 830)
  ctx.moveTo(750, 830)
  ctx.lineTo(1100, 830)
  ctx.stroke()

  ctx.fillStyle = '#0f172a'
  ctx.font = 'bold 22px Arial, sans-serif'
  ctx.fillText('RAYAN PRO', 475, 870)
  ctx.fillText(date, 925, 870)

  ctx.fillStyle = '#64748b'
  ctx.font = '18px Arial, sans-serif'
  ctx.fillText('Founder, Mobzy Learn', 475, 900)
  ctx.fillText('Date of Issue', 925, 900)

  ctx.fillStyle = '#94a3b8'
  ctx.font = '16px Arial, sans-serif'
  ctx.fillText('Certificate ID: ' + certId, 700, 950)

  return canvas.toDataURL('image/png')
}

export function downloadCertificate(
  userName: string,
  courseTitle: string,
  certId: string
): void {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const dataUrl = generateCertificatePNG(userName, courseTitle, date, certId)
  if (!dataUrl) return

  const safeCourse = courseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const filename = `Mobzy-Certificate-${safeCourse}.png`

  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}