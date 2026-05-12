import Hero from '@/sections/v2/Hero'
import PainBeat from '@/sections/v2/PainBeat'
import FunnelDiagnostic from '@/sections/v2/FunnelDiagnostic'
import SolutionDetail from '@/sections/v2/SolutionDetail'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'
import { AI_AGENTS_OFFER } from '@/lib/content'

export default function AiAgents() {
  return (
    <main>
      <Hero content={AI_AGENTS_OFFER.hero} />
      <PainBeat />
      <FunnelDiagnostic 
        data={AI_AGENTS_OFFER.diagnosticData} 
        highlightStage={AI_AGENTS_OFFER.highlightStage}
        diagnosisText={AI_AGENTS_OFFER.diagnosisText}
        recoveryValue={AI_AGENTS_OFFER.recoveryValue}
        badge={AI_AGENTS_OFFER.badge}
      />
      <SolutionDetail content={AI_AGENTS_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
