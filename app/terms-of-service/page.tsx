// app/terms-of-service/page.tsx
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <>
      <header>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Terms of Service</h1>
      </header>

      <main>
        <section className="mb-4">
          <h2>Effective Date: June 06, 2024</h2>
          <p>Welcome to Matterscope. These Terms of Service ("Terms") govern your use of our mobile application ("App"). By using our App, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our App.</p>

          <h3>Use of the App</h3>
          <p>You must be at least 13 years old to use our App. By using the App, you represent and warrant that you have the right, authority, and capacity to enter into this agreement and to abide by all of the terms and conditions of these Terms.</p>

          <h3>Accounts</h3>
          <p>When you create an account with us, you must provide us with accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</p>

          <h3>Prohibited Activities</h3>
          <p>You agree not to use the App for any unlawful purpose or in any way that interferes with or disrupts the operation of the App. Prohibited activities include, but are not limited to:</p>
          <ul>
            <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity</li>
            <li>Interfering with or disrupting the App or servers or networks connected to the App</li>
            <li>Disobeying any requirements, procedures, policies, or regulations of networks connected to the App</li>
            <li>Engaging in conduct that could constitute a criminal offense or give rise to civil liability</li>
          </ul>

          <h3>Intellectual Property</h3>
          <p>The App and its original content, features, and functionality are and will remain the exclusive property of Matterscope and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Matterscope.</p>

          <h3>Termination</h3>
          <p>We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

          <h3>Limitation of Liability</h3>
          <p>In no event shall Matterscope, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the App; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the App; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App by any third party; and (v) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>

          <h3>Governing Law</h3>
          <p>These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>

          <h3>Changes to the Terms</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>Email: <a href="mailto:matterscope@gmail.com">matterscope@gmail.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Matterscope. All rights reserved.</p>
      </footer>
    </>
  )
}
