import Footer from '@/sections/v2/Footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] flex flex-col">
      <div className="flex-1 w-full max-w-[720px] mx-auto px-6 py-24 md:py-32">
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#0E0F11] mb-12">
          Terms of Service
        </h1>
        
        <div className="font-sans text-lg text-[#4B5563] leading-relaxed space-y-8">
          <p className="text-sm text-[#52525B]">Last updated: May 2026</p>
          
          <p>
            These Terms of Service govern your use of the Gentech Plus website and services. By using this website, booking a diagnostic call, or communicating with us, you agree to these terms.
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">1. About Gentech Plus</h2>
            <p>Gentech Plus is a diagnostic-first AI consulting business. We help operators identify revenue leaks across websites, customer support, lead handling, and business systems.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">2. Website use</h2>
            <p>You agree to use this website only for lawful purposes. You must not attempt to disrupt, damage, reverse engineer, or misuse the website or its content.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">3. Diagnostic calls</h2>
            <p>The Revenue Leak Diagnostic is offered as an initial consultation. During the call, we may review your funnel, website, systems, customer journey, or operational processes based on the information you provide.</p>
            <p>A diagnostic call does not guarantee a specific business result, revenue increase, or engagement offer.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">4. Written audits and recommendations</h2>
            <p>If we provide notes, recommendations, or a written audit, these are based on the information available at the time. You are responsible for deciding whether to implement any recommendation.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">5. Paid services</h2>
            <p>Any paid engagement will be governed by a separate written agreement, proposal, invoice, or statement of work. The scope, pricing, timeline, responsibilities, and deliverables will be defined before work begins.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">6. No guarantees</h2>
            <p>We aim to identify practical opportunities for improvement, but we do not guarantee specific revenue, conversion, ranking, operational, or financial outcomes unless explicitly stated in a separate written agreement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">7. Intellectual property</h2>
            <p>All content on this website, including copy, design, structure, graphics, and branding, belongs to Gentech Plus unless otherwise stated. You may not copy, reproduce, or reuse our website content without permission.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">8. Third-party tools</h2>
            <p>Our website and services may use third-party tools such as Calendly, analytics platforms, automation tools, communication platforms, or AI providers. We are not responsible for the availability, security, or policies of third-party services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">9. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Gentech Plus is not liable for indirect, incidental, special, or consequential damages arising from your use of the website, diagnostic calls, recommendations, or services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">10. Changes to these terms</h2>
            <p>We may update these Terms of Service from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-[#0E0F11]">11. Contact</h2>
            <p>For questions about these Terms, contact:</p>
            <p>
              Gentech Plus<br />
              Email: <a href="mailto:team@gentechteam.com" className="text-[#0E0F11] underline decoration-[#DCD9D2] hover:decoration-[#FF4D2E] underline-offset-4 transition-colors">team@gentechteam.com</a>
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
