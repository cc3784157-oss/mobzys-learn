import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <section className="section" style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', lineHeight: 1.7 }}>
      <h1>Terms of Service</h1>
      <p><em>Last updated: October 2026</em></p>

      <div className="notice success" style={{ padding: '16px 20px' }}>
        <strong>Mobzy Learn is 100% free.</strong> There is no paid content, no subscriptions, and no
        premium tier. Every course and every lesson is accessible to every user without payment.
      </div>

      <h2>Using Mobzy Learn</h2>
      <p>By using Mobzy Learn you agree to the following:</p>

      <h2>Your Account</h2>
      <ul>
        <li>Provide accurate registration information.</li>
        <li>Do not share your account credentials with anyone.</li>
        <li>You are responsible for activity on your account.</li>
        <li>You may delete your account at any time from the Settings page.</li>
      </ul>

      <h2>Course Content</h2>
      <ul>
        <li>All course content is free and provided as-is for personal learning.</li>
        <li>You may use code examples from lessons in your own projects without restriction.</li>
        <li>You may share course links with anyone — sharing is encouraged.</li>
        <li>Please do not resell or republish the course content as your own product.</li>
      </ul>

      <h2>Cybersecurity Content</h2>
      <p>
        Our cybersecurity lessons are for defensive education and authorized practice only. Using any
        technique taught on this platform against systems you do not own or have explicit written
        permission to test is illegal and prohibited.
      </p>

      <h2>Advertising</h2>
      <p>
        Mobzy Learn is funded by advertising (Google AdSense on the website, Google AdMob in the
        Android app). By using the platform, you agree to see ads. You can opt out of personalized
        advertising via Google Ads Settings.
      </p>

      <h2>Certificates</h2>
      <p>
        Certificates are issued for course completion only and do not imply any accreditation,
        professional license, or government recognition.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Mobzy Learn is provided "as is" without warranty of any kind. We make no guarantees about
        uptime, accuracy of content, or fitness for any particular purpose. Use the content at your
        own discretion.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. Material changes will be announced on this page. Continued use of
        the platform after changes means you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>.
      </p>

      <hr style={{ margin: '40px 0' }} />
      <p>
        <Link to="/">← Back to Mobzy Learn</Link> ·{' '}
        <Link to="/about">About</Link> ·{' '}
        <Link to="/privacy">Privacy</Link> ·{' '}
        <Link to="/refunds">Refunds</Link>
      </p>
    </section>
  )
}