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
        data={WEBSITES_OFFER.diagnosticData} 
        highlightStage={WEBSITES_OFFER.highlightStage}
        diagnosisText={WEBSITES_OFFER.diagnosisText}
        recoveryValue={WEBSITES_OFFER.recoveryValue}
        badge={WEBSITES_OFFER.badge}
      />
      <SolutionDetail content={WEBSITES_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
