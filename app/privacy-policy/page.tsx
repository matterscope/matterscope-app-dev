import { MDXProvider } from '@mdx-js/react'
import Content from './content.mdx'

const PrivacyPolicy = () => {
  return (
    <div>
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <main>
        <section>
          <MDXProvider>
            <Content />
          </MDXProvider>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Matterscope. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
