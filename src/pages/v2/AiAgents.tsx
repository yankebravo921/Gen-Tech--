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
        eyebrow="WHERE YOUR TEAM GETS BURIED"
        headline="Your team is repeating answers that should already be handled."
        readoutStats={[
          "12,500 questions came in.",
          "1,800 were handled automatically.",
          "10,700 still reached the team."
        ]}
        readoutConclusion={[
          "That is not a staffing problem.",
          "That is a repeat-question problem."
        ]}
        problemFound="The same questions keep reaching the team even though the answers already exist in docs, tickets, or policies."
        fixFirst="The top repeat questions, the answer source, and the handoff rules for anything sensitive."
        moneyLeft="$94k / month"
        ctaStripText="Stop burying the team in repeat questions. Recover wasted support time."
      />
      <SolutionDetail content={AI_AGENTS_OFFER.solution} />
      <ThePromise />
      <FinalCTA />
      <Footer />
    </main>
  )
}
