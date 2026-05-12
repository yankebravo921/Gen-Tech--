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
        data={SYSTEMS_OFFER.diagnosticData} 
        highlightStage={SYSTEMS_OFFER.highlightStage}
        diagnosisText={SYSTEMS_OFFER.diagnosisText}
        recoveryValue={SYSTEMS_OFFER.recoveryValue}
        badge={SYSTEMS_OFFER.badge}
      />
      <SolutionDetail content={SYSTEMS_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
