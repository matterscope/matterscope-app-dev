// app/contact/page.tsx
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>We'd love to hear from you!</h2>
          <p>If you have any questions, feedback, or suggestions, please reach out to us at:</p>
          <p>Email: <a href="mailto:matterscope@gmail.com">matterscope@gmail.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Matterscope. All rights reserved.</p>
      </footer>
    </>
  )
}
