import Hero from '@/sections/v2/Hero'
import FunnelDiagnostic from '@/sections/v2/FunnelDiagnostic'
import BrandMoment from '@/sections/v2/BrandMoment'
import PainBeat from '@/sections/v2/PainBeat'
import StatsGrid from '@/sections/v2/StatsGrid'
import ThreePlaces from '@/sections/v2/ThreePlaces'
import Timeline from '@/sections/v2/Timeline'
import ThreeSolutions from '@/sections/v2/ThreeSolutions'
import ThePromise from '@/sections/v2/ThePromise'
import FAQ from '@/sections/v2/FAQ'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <PainBeat />
      <FunnelDiagnostic
        eyebrow="WHERE THE MONEY SLIPS"
        headline="You paid to bring people in. Then they disappear."
        readoutStats={[
          "24,180 people visited the site.",
          "5,800 tried to take action.",
          "Only 435 followed through."
        ]}
        readoutConclusion={[
          "Most businesses do not need more traffic first.",
          "They need to know where the people they already paid to reach are disappearing."
        ]}
        problemFound="People arrive, start to engage, then hit a wall — a slow step, a confusing form, a dead end nobody noticed."
        fixFirst="The exact step where people stop. We find it in 30 minutes."
        moneyLeft="$184k / month"
        ctaStripText="Find the leak. Fix the step. Recover the revenue."
      />
      <BrandMoment />
      <StatsGrid />
      <ThreePlaces />
      <Timeline />
      <ThreeSolutions />
      <ThePromise />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
