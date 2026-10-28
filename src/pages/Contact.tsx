import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="section" style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px', lineHeight: 1.7 }}>
      <h1>Contact Mobzy Learn</h1>
      <p>
        We would love to hear from you. Whether you have a question about a lesson, a suggestion for a
        new course, or a bug report, please reach out.
      </p>

      <h2>Email</h2>
      <p>
        The fastest way to reach us is by email. We usually respond within 1–3 business days.
      </p>
      <p style={{ fontSize: '20px' }}>
        <a href="mailto:mobzysupport@gmail.com" style={{ color: '#10b981', fontWeight: 'bold' }}>
          mobzysupport@gmail.com
        </a>
      </p>

      <h2>What to Include</h2>
      <p>To help us respond quickly, please include:</p>
      <ul>
        <li>Your name</li>
        <li>The course or lesson you are writing about (if applicable)</li>
        <li>A clear description of your question or issue</li>
        <li>Screenshots if it is a technical problem</li>
      </ul>

      <h2>Common Questions</h2>

      <h3>Is Mobzy Learn really free?</h3>
      <p>
        Yes. Every course, every lesson, and every feature is 100% free. No credit card, no paywall, no
        hidden cost. The platform is supported by advertising.
      </p>

      <h3>Can I get a certificate?</h3>
      <p>
        Certificates are being rolled out. Check back soon or email us if you need one urgently.
      </p>

      <h3>I found a bug or incorrect content</h3>
      <p>
        Please email us with details. Bug reports and content corrections are our top priority.
      </p>

      <h3>Can I contribute content?</h3>
      <p>
        We are open to guest contributions on technical topics. Send a short pitch to{' '}
        <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>.
      </p>

      <h2>About the Developer</h2>
      <p>
        Mobzy Learn is built and maintained by <strong>Rayan Pro</strong>, a self-taught programmer from
        Uganda. You can follow the project on TikTok at{' '}
        <a href="https://www.tiktok.com/@rayanpromax39" target="_blank" rel="noopener noreferrer">
          @rayanpromax39
        </a>.
      </p>

      <hr style={{ margin: '40px 0' }} />
      <p>
        <Link to="/">← Back to Mobzy Learn</Link> ·{' '}
        <Link to="/about">About</Link> ·{' '}
        <Link to="/privacy">Privacy</Link>
      </p>
    </section>
  )
}