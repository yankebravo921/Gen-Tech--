import Hero from '@/sections/v2/Hero'
import PainBeat from '@/sections/v2/PainBeat'
import FunnelDiagnostic from '@/sections/v2/FunnelDiagnostic'
import SolutionDetail from '@/sections/v2/SolutionDetail'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'
import { SYSTEMS_OFFER } from '@/lib/content'

export default function Systems() {
  return (
    <main>
      <Hero content={SYSTEMS_OFFER.hero} />
      <PainBeat />
      <FunnelDiagnostic 
        eyebrow="WHERE LEADS GO COLD"
        headline="People ask for help, then wait too long to hear back."
        readoutStats={[
          "8,500 leads came in.",
          "420 were contacted fast.",
          "Only 85 booked."
        ]}
        readoutConclusion={[
          "That is not a lead problem.",
          "That is a follow-up problem."
        ]}
        problemFound="People ask for help, then wait too long before anyone follows up."
        fixFirst="The first response, the 5-minute follow-up window, and the sequence after touch one."
        moneyLeft="$312k / month"
        ctaStripText="Fix the follow-up gap. Recover lost sales."
      />
      <SolutionDetail content={SYSTEMS_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
