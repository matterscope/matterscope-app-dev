// app/privacy-policy/page.tsx
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <header>
        <h1>Privacy Policy</h1>
      </header>

      <main>
        <section>
          <h2>Effective Date: June 06, 2024</h2>
          <p>This Privacy Policy describes how Matterscope ("we", "our", or "us") collects, uses, and shares information about you when you use our mobile application ("App").</p>

          <h3>Information We sollect</h3>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information</strong>: Information that identifies you personally, such as your name, email address, phone number, and other contact details.</li>
            <li><strong>Usage Information</strong>: Information about how you interact with the App, such as the features you use, the actions you take, and the time, frequency, and duration of your activities.</li>
            <li><strong>Device Information</strong>: Information about the device you use to access the App, including the hardware model, operating system and version, unique device identifiers, and mobile network information.</li>
            <li><strong>Location Information</strong>: Information about your location, if you have provided your consent to collect this information.</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, operate, and maintain the App</li>
            <li>Improve, personalize, and expand the App</li>
            <li>Understand and analyze how you use the App</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the App, and for marketing and promotional purposes</li>
            <li>Process your transactions and manage your requests</li>
            <li>Find and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3>Sharing Your Information</h3>
          <p>We do not share your personal information with third parties except in the following circumstances:</p>
          <ul>
            <li><strong>With Your Consent</strong>: We may share your information with third parties if you have given us your consent to do so.</li>
            <li><strong>For Legal Reasons</strong>: We may share your information when we believe in good faith that disclosure is necessary to comply with a legal obligation, protect our rights or property, prevent fraud, or respond to legal process or government requests.</li>
            <li><strong>With Service Providers</strong>: We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service.</li>
          </ul>

          <h3>Data Security</h3>
          <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.</p>

          <h3>Your Choices</h3>
          <p>You have the following rights regarding your information:</p>
          <ul>
            <li><strong>Access and Update</strong>: You can access and update your personal information through the App.</li>
            <li><strong>Delete</strong>: You can request that we delete your personal information. Please note that we may retain certain information as required by law or for legitimate business purposes.</li>
            <li><strong>Opt-Out</strong>: You can opt out of receiving promotional communications from us by following the instructions in those communications.</li>
          </ul>

          <h3>Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:matterscope@gmail.com">matterscope@gmail.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Matterscope. All rights reserved.</p>
      </footer>
    </>
  )
}
