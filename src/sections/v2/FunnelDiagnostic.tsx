import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eyebrow } from '@/components/anyflow/Atoms'

interface Props {
  eyebrow?: string;
  headline?: string;
  body?: string;
  readoutStats?: string[];
  readoutConclusion?: string[];
  problemFound?: string;
  fixFirst?: string;
  moneyLeft?: string;
  ctaStripText?: string;
}

const ease = [0.16, 1, 0.3, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  }
}

export default function FunnelDiagnostic({ 
  eyebrow = "WHERE BOOKINGS BREAK",
  headline = "People are getting stuck before they book.",
  readoutStats = [
    "24,180 people visited the site.",
    "5,800 tried to book.",
    "Only 435 finished."
  ],
  readoutConclusion = [
    "That is not a traffic problem.",
    "That is a booking problem."
  ],
  problemFound = "The booking step was slow, confusing, and hard to use on mobile.",
  fixFirst = "The mobile booking path, calendar load time, and hidden date picker.",
  moneyLeft = "$184k / month",
  ctaStripText = "Fix the booking experience. Recover hidden revenue."
}: Props) {

  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  // Parse numbers from readoutStats strings
  const parsedFlow = readoutStats.map(stat => {
    const match = stat.match(/^([0-9,]+|Only\s[0-9,]+)\s+(.+)$/i);
    if (match) {
      const num = match[1].replace(/only\s/i, '');
      const label = match[2].replace(/\.$/, '');
      return { num, label };
    }
    const parts = stat.split(' ');
    return { num: parts[0], label: parts.slice(1).join(' ').replace(/\.$/, '') };
  });

  const subhead = readoutConclusion.join(' ');

  return (
    <section
      ref={sectionRef}
      id="funnel-diagnostic"
      className="w-full bg-[#F5F1EA] pt-36 pb-24 px-6 flex flex-col items-center font-sans scroll-mt-40"
    >
      {/* ── Intro ── */}
      <div className="w-full max-w-[1200px] mb-14">
        <motion.div {...fadeUp(0)} animate={isInView ? fadeUp(0).animate : fadeUp(0).initial}>
          <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {eyebrow}
          </Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.14)}
          animate={isInView ? fadeUp(0.14).animate : fadeUp(0.14).initial}
          className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-[#0E0F11] mt-4 mb-4 max-w-[800px]"
        >
          {headline}
        </motion.h2>

        <motion.p
          {...fadeUp(0.26)}
          animate={isInView ? fadeUp(0.26).animate : fadeUp(0.26).initial}
          className="text-[#4B5563] max-w-[640px] text-xl font-sans"
        >
          {subhead}
        </motion.p>
      </div>

      {/* ── 3-Card Grid ── */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ━━ Card 1: Where People Stop ━━ */}
        <motion.div
          {...fadeUp(0.38)}
          animate={isInView ? fadeUp(0.38).animate : fadeUp(0.38).initial}
          className="bg-white rounded-[16px] border border-[#DCD9D2] shadow-sm p-8 flex flex-col relative overflow-hidden"
        >
          <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase mb-8">Where people stop</h3>
          
          <div className="flex-1 flex flex-col relative ml-2">
            {/* Timeline base line */}
            <motion.div
              className="absolute left-[15px] top-[20px] w-px bg-[#DCD9D2] z-0 origin-top"
              initial={{ height: 0 }}
              animate={isInView ? { height: '60%' } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            />
            {/* Red break line drawn after the base line */}
            <motion.div
              className="absolute left-[15px] top-[60%] w-px z-0 origin-top"
              style={{ borderLeft: '2px dashed #D9381E' }}
              initial={{ height: 0 }}
              animate={isInView ? { height: '40%' } : { height: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease }}
            />

            <div className="flex flex-col justify-between h-full min-h-[300px] gap-10 z-10 relative">
              
              {/* State 1 */}
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.55, delay: 0.5, ease }}
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#F5F1EA] border border-[#DCD9D2] flex items-center justify-center font-serif text-xs text-[#4B5563] shrink-0">01</div>
                <div>
                  <div className="font-serif text-[2rem] text-[#0E0F11] leading-none tracking-tight">{parsedFlow[0]?.num}</div>
                  <div className="font-sans text-sm text-[#4B5563] mt-1.5">{parsedFlow[0]?.label}</div>
                </div>
              </motion.div>

              {/* State 2 */}
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.55, delay: 0.7, ease }}
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#F5F1EA] border border-[#DCD9D2] flex items-center justify-center font-serif text-xs text-[#4B5563] shrink-0">02</div>
                <div>
                  <div className="font-serif text-[2rem] text-[#0E0F11] leading-none tracking-tight">{parsedFlow[1]?.num}</div>
                  <div className="font-sans text-sm text-[#4B5563] mt-1.5">{parsedFlow[1]?.label}</div>
                </div>
              </motion.div>

              {/* Audit annotation — loss note */}
              <motion.div
                className="flex items-center gap-6 -my-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.15, ease }}
              >
                <div className="w-[32px] shrink-0" />
                <p className="font-sans text-xs text-[#D9381E] tracking-wide uppercase font-medium">
                  ⚠ Loss happens here
                </p>
              </motion.div>

              {/* State 3 */}
              <motion.div
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.55, delay: 1.3, ease }}
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#FDECE7] border border-[#D9381E]/30 flex items-center justify-center font-serif text-xs text-[#D9381E] shrink-0">03</div>
                <div>
                  <div className="font-serif text-[2rem] text-[#D9381E] leading-none tracking-tight">{parsedFlow[2]?.num}</div>
                  <div className="font-sans text-sm text-[#D9381E]/70 mt-1.5">{parsedFlow[2]?.label}</div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Conclusion block */}
          <div className="mt-8 pt-5 border-t border-[#DCD9D2] bg-[#F5F1EA] p-4 rounded-md">
            <p className="font-sans text-sm text-[#0E0F11] font-medium leading-relaxed">
              {readoutConclusion.map((c, i) => <span key={i} className="block">{c}</span>)}
            </p>
          </div>
        </motion.div>

        {/* ━━ Card 2: Problem Found ━━ */}
        <motion.div
          {...fadeUp(0.52)}
          animate={isInView ? fadeUp(0.52).animate : fadeUp(0.52).initial}
          className="bg-white rounded-[16px] border border-[#DCD9D2] shadow-sm p-8 flex flex-col relative overflow-hidden"
        >
          {/* Subtle abstract wash */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-[#F5F1EA] rounded-full opacity-40 blur-3xl pointer-events-none" />
          
          <div className="flex-1 flex flex-col relative z-10">
            <div className="mb-10">
              <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#D9381E] uppercase mb-5">Problem found</h3>
              <p className="font-serif text-[1.65rem] text-[#0E0F11] leading-snug">
                {problemFound}
              </p>
            </div>
            
            <div className="pt-7 border-t border-[#DCD9D2] mt-auto">
              <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase mb-5">What we fix first</h3>
              <p className="font-serif text-lg text-[#4B5563] leading-relaxed">
                {fixFirst}
              </p>
            </div>

            {/* Audit annotation */}
            <div className="mt-6 pt-4 border-t border-dashed border-[#DCD9D2]">
              <p className="font-sans text-xs text-[#A1A1AA] italic">
                More ads push more people into the same broken step.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ━━ Card 3: Money Left on the Table ━━ */}
        <motion.div
          {...fadeUp(0.66)}
          animate={isInView ? fadeUp(0.66).animate : fadeUp(0.66).initial}
          className="bg-[#FCFAF8] rounded-[16px] border border-[#DCD9D2] shadow-sm p-8 flex flex-col relative overflow-hidden"
        >
          {/* Subtle lime arc background */}
          <div className="absolute left-0 right-0 bottom-0 h-[40%] bg-[#A3E635]/15 rounded-t-[100%] scale-[1.6] origin-bottom pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#0E0F11] uppercase mb-8">Money left on the table</h3>
            
            <div className="mt-auto mb-10">
              <motion.p
                className="font-serif text-5xl md:text-[3.75rem] text-[#0E0F11] font-medium tracking-tight leading-none mb-2"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.7, delay: 0.9, ease }}
              >
                {moneyLeft.split(' / ')[0]}
              </motion.p>
              <p className="font-serif text-2xl text-[#4B5563]">
                / {moneyLeft.split(' / ')[1] || 'month'}
              </p>
            </div>
            
            <p className="font-sans text-sm text-[#4B5563] font-medium">
              In recoverable revenue
            </p>

            {/* Audit annotation */}
            <div className="mt-4 pt-4 border-t border-dashed border-[#DCD9D2]">
              <p className="font-sans text-xs text-[#A1A1AA] italic">
                Based on current traffic, not projected growth.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Bottom CTA Strip ── */}
      <motion.div
        {...fadeUp(0.80)}
        animate={isInView ? fadeUp(0.80).animate : fadeUp(0.80).initial}
        className="w-full max-w-[1200px] mt-6 bg-white rounded-[16px] border border-[#DCD9D2] shadow-sm p-6 md:py-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-[#F5F1EA] rounded-full flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E0F11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <h4 className="font-sans text-[15px] font-bold text-[#0E0F11] leading-snug">{ctaStripText}</h4>
            <p className="font-sans text-sm text-[#4B5563]">Book a free Revenue Leak Diagnostic — 1 of 3 May spots left.</p>
          </div>
        </div>
        
        <a
          href="/book"
          className="shrink-0 bg-[#A3E635] hover:bg-[#95D12A] active:bg-[#86CB14] text-[#0A0A0A] font-sans font-semibold text-[15px] px-7 py-3 rounded-full transition-colors inline-flex items-center gap-2"
        >
          Book the diagnostic
          <span aria-hidden="true">→</span>
        </a>
      </motion.div>

    </section>
  )
}
