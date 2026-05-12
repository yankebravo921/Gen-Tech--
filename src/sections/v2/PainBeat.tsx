import { PAIN_BEAT } from '@/lib/content'

export default function PainBeat() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white flex flex-col items-center justify-center min-h-[50vh] px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
          <span className="text-gray-400 font-sans text-[13px] font-medium tracking-[0.02em] uppercase">
            {PAIN_BEAT.eyebrow}
          </span>
        </div>
        
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.01em] text-[#F4F2EE]">
          {PAIN_BEAT.h2[0].text}{' '}
          <span className="italic text-gray-400">{PAIN_BEAT.h2[1].text}</span>
        </h2>
      </div>
    </section>
  )
}
