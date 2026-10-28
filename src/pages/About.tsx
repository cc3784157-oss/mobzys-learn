import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="section" style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', lineHeight: 1.7 }}>
      <h1>About Mobzy Learn</h1>

      <p style={{ fontSize: '18px', color: '#5b6b63' }}>
        Mobzy Learn is a 100% free learning platform built for African learners who want to build real
        skills in programming, web development, and cybersecurity — without paywalls, subscriptions, or
        expensive bootcamps.
      </p>

      <h2>Our Story</h2>
      <p>
        I am <strong>Rayan Pro</strong>, a self-taught programmer from Uganda. I built Mobzy Learn because
        I kept running into the same problem: the best coding resources online are expensive. A single
        online course can cost $50–$500 — more than many people in my community can afford for one month
        of internet access.
      </p>
      <p>
        When I was learning to code, I relied on free tutorials scattered across the internet. But most of
        them were incomplete, outdated, or hidden behind a signup wall that asked for a credit card "for
        the free trial." I wanted to build a place where someone with just a phone and an internet
        connection could learn the same skills that earn developers in Nairobi, Lagos, and Kampala a real
        income.
      </p>
      <p>
        Mobzy Learn is that place. Every course is free. Every lesson has runnable code so you can practice
        in your browser. There is no "premium tier" and there never will be. The platform is supported by
        advertising so that learners who cannot pay still get access to the same content as everyone else.
      </p>

      <h2>What We Teach</h2>
      <ul>
        <li>Programming fundamentals (JavaScript, Python, HTML, CSS)</li>
        <li>Modern web development (React, Node.js, TypeScript)</li>
        <li>Databases and SQL</li>
        <li>Cybersecurity fundamentals (passwords, phishing, 2FA)</li>
        <li>Developer tools (Git, Linux command line)</li>
        <li>Programming languages (Java, C, C++, Go)</li>
      </ul>

      <h2>Our Teaching Philosophy</h2>
      <p>Every lesson on Mobzy Learn follows the same three-step structure:</p>
      <ol>
        <li><strong>Explain the concept</strong> in plain language, with real-world examples</li>
        <li><strong>Show runnable code</strong> so you can click "Run" and see the output instantly</li>
        <li><strong>Give you an exercise</strong> to practice and lock in the learning</li>
      </ol>
      <p>
        We believe the fastest way to learn is to <em>do</em>. Reading about loops is not the same as
        writing one. Watching a video about arrays is not the same as accessing one. Our inline code
        runner means you never have to install anything to start practicing.
      </p>

      <h2>Free, Forever</h2>
      <p>
        Many platforms promise "free" and then put the good content behind a paywall. Mobzy Learn does not.
        The full catalogue is available to every visitor. You do not need an account to browse courses or
        read lessons. You only need an account if you want to save your progress or get a completion
        certificate — both of which are also free.
      </p>
      <p>
        If you want to support the project, the best thing you can do is <strong>share it</strong>. Send it
        to a friend learning to code. Post it in a WhatsApp group. Follow us on TikTok at{' '}
        <a href="https://www.tiktok.com/@rayanpromax39" target="_blank" rel="noopener noreferrer">
          @rayanpromax39
        </a>. That is how we grow and keep everything free.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, feedback, or corrections? I read every email.
        <br />
        <strong>Email:</strong> <a href="mailto:mobzysupport@gmail.com">mobzysupport@gmail.com</a>
      </p>

      <hr style={{ margin: '40px 0' }} />
      <p>
        <Link to="/">← Back to Mobzy Learn</Link> ·{' '}
        <Link to="/privacy">Privacy</Link> ·{' '}
        <Link to="/terms">Terms</Link> ·{' '}
        <Link to="/contact">Contact</Link>
      </p>
    </section>
  )
}