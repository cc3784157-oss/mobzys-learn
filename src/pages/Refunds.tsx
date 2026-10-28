import { Link } from 'react-router-dom'

export default function Refunds() {
  return (
    <section className="section" style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', lineHeight: 1.7 }}>
      <h1>Refund Policy</h1>
      <p><em>Last updated: October 2026</em></p>

      <div className="notice success" style={{ padding: '20px', fontSize: '17px' }}>
        <strong>Mobzy Learn is 100% free.</strong> We do not charge for any course, lesson, or feature.
        There are no subscriptions, no premium tiers, and no hidden costs. Because nothing costs money,
        there is nothing to refund.
      </div>

      <h2>Our Commitment</h2>
      <p>
        Every course on Mobzy Learn is free forever. This includes:
      </p>
      <ul>
        <li>All 40+ courses and 200+ lessons</li>
        <li>Runnable code examples in lessons</li>
        <li>Progress tracking</li>
        <li>Completion certificates (where available)</li>
        <li>The Android mobile app</li>
        <li>The ability to share courses with anyone</li>
      </ul>

      <h2>How We Fund the Platform</h2>
      <p>
        Mobzy Learn is supported entirely by advertising. You may see ads on the website and in the
        mobile app. These ads fund the platform so that learners who cannot afford paid courses still
        get access to the same quality content.
      </p>

      <h2>What If I Paid Something by Mistake?</h2>
      <p>
        If you believe you were charged by Mobzy Learn, please contact us immediately at{' '}
        <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>. We will investigate and,
        if any charge was made in error, refund it in full within 5 working days.
      </p>
      <p>
        Please note: Mobzy Learn does not currently accept any form of payment. If you see a request for
        payment claiming to be from Mobzy Learn, it is not us — please do not pay and report it to
        mobzysupport@gmail.com.
      </p>

      <h2>Third-Party Charges</h2>
      <p>
        Mobzy Learn is not responsible for charges from third parties such as:
      </p>
      <ul>
        <li>Your internet service provider (data charges)</li>
        <li>Mobile network operator (data charges)</li>
        <li>Google Play Store or Apple App Store (if you install the app through a store)</li>
      </ul>
      <p>
        These charges are between you and the third party. Contact them directly for any refunds
        related to their services.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{' '}
        <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>. We respond within
        1–3 business days.
      </p>

      <hr style={{ margin: '40px 0' }} />
      <p>
        <Link to="/">← Back to Mobzy Learn</Link> ·{' '}
        <Link to="/about">About</Link> ·{' '}
        <Link to="/privacy">Privacy</Link> ·{' '}
        <Link to="/terms">Terms</Link>
      </p>
    </section>
  )
}