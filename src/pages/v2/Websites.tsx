import Hero from '@/sections/v2/Hero'
import PainBeat from '@/sections/v2/PainBeat'
import FunnelDiagnostic from '@/sections/v2/FunnelDiagnostic'
import SolutionDetail from '@/sections/v2/SolutionDetail'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'
import { WEBSITES_OFFER } from '@/lib/content'

export default function Websites() {
  return (
    <main>
      <Hero content={WEBSITES_OFFER.hero} />
      <PainBeat />
      <FunnelDiagnostic 
        eyebrow="WHERE BOOKINGS BREAK"
        headline="People are getting stuck before they book."
        ctaStripText="Fix the booking experience. Recover hidden revenue."
      />
      <SolutionDetail content={WEBSITES_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
