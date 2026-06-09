import Footer from '@/sections/v2/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] flex flex-col">
      <div className="flex-1 w-full max-w-[720px] mx-auto px-6 py-24 md:py-32">
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#0E0F11] mb-12">
          Privacy Policy
        </h1>
        
        <div className="font-sans text-lg text-[#4B5563] leading-relaxed space-y-8">
          <p className="text-sm text-[#52525B]">Last updated: June 2026</p>
          
          <p>
            Gentech Plus respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, book a diagnostic call, or contact us.
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">1. Information we collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Website URL</li>
              <li>Information you provide when booking a call or contacting us</li>
              <li>Technical information such as browser type, device type, pages visited, and basic analytics data</li>
            </ul>
            <p>If you book a call through Calendly, Calendly may collect and process your booking information according to its own privacy policy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">2. How we use your information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries</li>
              <li>Schedule and manage diagnostic calls</li>
              <li>Understand your business needs before a call</li>
              <li>Improve our website and services</li>
              <li>Send relevant follow-up communication</li>
              <li>Maintain security and prevent misuse of our website</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">3. Cookies and analytics</h2>
            <p>Our website may use basic analytics or tracking technologies to understand how visitors use the site. These tools may collect information such as pages visited, device type, browser type, and approximate location.</p>
            <p>You can disable cookies through your browser settings.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">4. Third-party services</h2>
            <p>We may use third-party services such as Calendly, hosting providers, analytics tools, email providers, and communication tools. These providers may process limited data on our behalf to help us operate the website and deliver our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">5. Data retention</h2>
            <p>We keep personal information only for as long as necessary to respond to inquiries, manage business relationships, comply with legal obligations, or improve our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">6. Your rights</h2>
            <p>Depending on your location, you may have the right to request access to, correction of, or deletion of your personal information. You may also request that we stop contacting you.</p>
            <p>To make a request, contact us at: <a href="mailto:hello@gentechplus.com" className="text-[#0E0F11] underline decoration-[#DCD9D2] hover:decoration-[#FF4D2E] underline-offset-4 transition-colors">hello@gentechplus.com</a></p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">7. Data security</h2>
            <p>We take reasonable steps to protect your information, but no method of transmission or storage is completely secure. We cannot guarantee absolute security.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">8. International visitors</h2>
            <p>If you access our website from outside Morocco, you understand that your information may be processed in Morocco or in countries where our service providers operate.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">9. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">10. Contact</h2>
            <p>For questions about this Privacy Policy, contact:</p>
            <p>
              Gentech Plus<br />
              Email: <a href="mailto:hello@gentechplus.com" className="text-[#0E0F11] underline decoration-[#DCD9D2] hover:decoration-[#FF4D2E] underline-offset-4 transition-colors">hello@gentechplus.com</a>
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
