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
      <FunnelDiagnostic />
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
