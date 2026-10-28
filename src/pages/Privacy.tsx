import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section className="section" style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', lineHeight: 1.7 }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: October 2026</em></p>

      <p>
        Mobzy Learn ("we", "us", "our") operates the website at <strong>https://mobzys.pages.dev</strong> and
        the Mobzy Learn Android application. This page informs you of our policies regarding the collection,
        use, and disclosure of personal data when you use our service.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li><strong>Account information:</strong> When you create an account, we collect your email address, name, and a securely hashed password. This is managed by Google Firebase Authentication.</li>
        <li><strong>Course progress:</strong> We track which lessons you have completed to show your progress on the dashboard.</li>
        <li><strong>Usage data:</strong> We may collect anonymized analytics about how you use the site (pages visited, time spent) to improve the experience.</li>
      </ul>

      <h2>Advertising and Cookies</h2>
      <p>
        Mobzy Learn is a free service supported by advertising. We use <strong>Google AdSense</strong> on the
        website and <strong>Google AdMob</strong> in the Android app to display ads.
      </p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our site or other sites on the internet.</li>
        <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the internet.</li>
        <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
        <li>You can also opt out of third-party vendors' use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
      </ul>
      <p>
        AdSense and AdMob may use cookies, web beacons, or similar technologies to collect data for ad
        personalization. This data collection is governed by Google's own privacy policy, available at
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain the Mobzy Learn service</li>
        <li>To track your learning progress</li>
        <li>To improve the quality of our courses</li>
        <li>To display relevant advertisements that keep the platform free</li>
        <li>To communicate with you about your account or updates (only if you opt in)</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal data. We share data with the following trusted service providers:
      </p>
      <ul>
        <li><strong>Google Firebase</strong> — for authentication and database storage</li>
        <li><strong>Google AdSense / AdMob</strong> — for advertising</li>
        <li><strong>Cloudflare</strong> — for website hosting</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain your account information for as long as your account is active. You may request deletion
        of your account at any time by emailing us at <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>.
        We will delete your data within 30 days of your request.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of personalized advertising (see above)</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Mobzy Learn is suitable for learners of all ages, but we do not knowingly collect personal information
        from children under 13 without parental consent. If you believe we have collected information from a
        child under 13, please contact us so we can delete it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
        the new policy on this page and updating the "Last updated" date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:
        <br />
        <strong>Email:</strong> <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>
        <br />
        <strong>Developer:</strong> RAYAN PRO
      </p>

      <hr style={{ margin: '40px 0' }} />
      <p>
        <Link to="/">← Back to Mobzy Learn</Link> ·{' '}
        <Link to="/about">About</Link> ·{' '}
        <Link to="/terms">Terms</Link> ·{' '}
        <Link to="/refunds">Refunds</Link>
      </p>
    </section>
  )
}