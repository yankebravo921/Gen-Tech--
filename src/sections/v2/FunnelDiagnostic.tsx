import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/anyflow/Atoms'
import { FUNNEL_DIAGNOSTIC } from '@/lib/content'

// Mobile deliberately distorts the scale to maintain visibility of small values.
const getMobileWidth = (pct: number) => Math.max(pct, 8)

// We'll test this color (can be #E74C3C or #FF4D2E)
const highlightColor = '#D9381E' 
const highlightBg = '#FDECE7'

export default function FunnelDiagnostic({ 
  data = FUNNEL_DIAGNOSTIC.stages, 
  highlightStage = -1,
  diagnosisText = FUNNEL_DIAGNOSTIC.callout.split('Estimated recovery:')[0].trim(),
  recoveryValue = FUNNEL_DIAGNOSTIC.stages.find(s => s.highlighted)?.recoveryTag || '$184k / mo',
  badge = FUNNEL_DIAGNOSTIC.badge
}: { 
  data?: any[], 
  highlightStage?: number,
  diagnosisText?: string,
  recoveryValue?: string,
  badge?: string
}) {
  const activeStages = data.map((s, i) => ({
    ...s,
    highlighted: highlightStage !== -1 ? i === highlightStage : s.highlighted
  }));
  const maxValue = Math.max(...activeStages.map(s => s.value));
  const stages = activeStages.map(s => ({
    ...s,
    percentage: (s.value / maxValue) * 100
  }));

  return (
    <section id="funnel-diagnostic" className="w-full bg-[#F5F1EA] py-24 px-6 flex flex-col items-center font-sans">
      {/* Intro */}
      <div className="w-full max-w-[1080px] mb-12">
        <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          THE PROOF
        </Eyebrow>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0E0F11] mt-4 mb-3">
          How we read a funnel.
        </h2>
        <p className="text-[#4B5563] max-w-[640px] text-lg">
          Anonymized sample from a real audit. Five stages, one leak, one number that matters.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-[1080px] bg-[#F5F1EA] rounded-[16px] border border-[#DCD9D2] shadow-sm p-6 md:p-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h3 className="font-serif text-xl text-[#0E0F11] mb-1">{FUNNEL_DIAGNOSTIC.header}</h3>
            <p className="font-mono text-xs text-[#4B5563]">{FUNNEL_DIAGNOSTIC.meta}</p>
          </div>
          <div className="bg-[#FDECE7] text-[#C0392B] px-3 py-1.5 rounded-sm text-xs font-bold tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
            {badge}
          </div>
        </div>

        {/* Desktop Chart (Vertical Bars) */}
        <div className="hidden md:grid grid-cols-5 gap-4 w-full h-[400px] items-end border-b border-[#DCD9D2] pb-6 relative">
          {stages.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-end h-full w-full relative">
              <div className="flex flex-col items-center mb-2 min-h-[24px] justify-end">
                {s.drop && (
                  <span className={`text-[12px] font-mono ${s.highlighted ? 'text-[#D9381E]' : 'text-[#52525B]'}`}>
                    {s.drop}
                  </span>
                )}
              </div>
              
              {/* Bar */}
              <div className="w-full relative flex justify-center items-end h-[260px]">
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${s.percentage}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className={`w-[70%] max-w-[90px] rounded-t-sm relative ${s.highlighted ? '' : 'bg-[#DCD9D2]'}`}
                  style={s.highlighted ? { backgroundColor: highlightColor } : {}}
                >
                  {/* Pulse overlay */}
                  {s.highlighted && (
                    <motion.div
                      animate={{ opacity: [1, 0.85, 1] }}
                      transition={{ repeat: 5, duration: 2, ease: "easeInOut", delay: 1 }}
                      className="absolute inset-0 rounded-t-sm"
                      style={{ backgroundColor: highlightColor }}
                    />
                  )}
                  
                  {/* Callout Tag + Connector */}
                  {s.highlighted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute z-20 pointer-events-none"
                      style={{ bottom: 'calc(100% + 80px)', left: 'calc(50% + 40px)' }}
                    >
                      <svg 
                        className="absolute right-[calc(100%-8px)] top-full w-[40px] h-[80px] overflow-visible" 
                        style={{ color: highlightColor }}
                        viewBox="0 0 40 80"
                        preserveAspectRatio="none"
                      >
                        <path d="M 40 0 C 20 20, 0 50, 0 80" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      
                      <div className="px-4 py-2 text-lg font-serif shadow-sm rounded-sm whitespace-nowrap relative z-10 border"
                           style={{ backgroundColor: highlightBg, color: highlightColor, borderColor: '#FADBD8' }}>
                        {s.recoveryTag}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              
              <div className="mt-4 flex flex-col items-center">
                <span className="font-serif text-2xl text-[#0E0F11] mb-1">{s.value.toLocaleString()}</span>
                <span className="text-sm font-medium text-[#4B5563] text-center">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Chart (Horizontal Bars) */}
        <div className="flex md:hidden flex-col gap-8 border-b border-[#DCD9D2] pb-8">
          {stages.map((s, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline px-1">
                <span className="font-sans text-sm font-medium text-[#4B5563]">{s.label}</span>
                <div className="flex items-center gap-2">
                   <span className="font-serif text-lg text-[#0E0F11]">{s.value.toLocaleString()}</span>
                   {s.drop && (
                     <span className={`text-[11px] font-mono ${s.highlighted ? 'text-[#C0392B]' : 'text-[#52525B]'}`}>
                       {s.drop}
                     </span>
                   )}
                </div>
              </div>
              <div className="relative w-full h-10">
                 {/* Background track (optional, but requested layout is just bars) */}
                 <motion.div
                   initial={{ width: "0%" }}
                   whileInView={{ width: `${getMobileWidth(s.percentage)}%` }}
                   viewport={{ once: true, amount: 0.8 }}
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                   className={`h-full rounded-r-sm relative ${s.highlighted ? '' : 'bg-[#DCD9D2]'}`}
                   style={s.highlighted ? { backgroundColor: highlightColor } : {}}
                 >
                   {s.highlighted && (
                     <motion.div
                       animate={{ opacity: [1, 0.85, 1] }}
                       transition={{ repeat: 5, duration: 2, ease: "easeInOut", delay: 1 }}
                       className="absolute inset-0 rounded-r-sm"
                       style={{ backgroundColor: highlightColor }}
                     />
                   )}
                 </motion.div>

                 {/* Mobile Callout */}
                 {s.highlighted && (
                   <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 z-10"
                   >
                      <div className="px-2 py-1 text-sm font-serif shadow-sm rounded-sm whitespace-nowrap border"
                           style={{ backgroundColor: highlightBg, color: highlightColor, borderColor: '#FADBD8' }}>
                        {s.recoveryTag}
                      </div>
                      <svg className="absolute right-full top-1/2 -translate-y-1/2 w-[12px] h-[2px] overflow-visible" style={{ color: highlightColor }}>
                        <line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                      </svg>
                   </motion.div>
                 )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Callout */}
        <div className="mt-8 pt-8 border-t border-dashed" style={{ borderColor: highlightColor }}>
          <p className="font-serif text-lg text-[#0E0F11] mb-2 max-w-[800px] leading-relaxed">
            {diagnosisText}
          </p>
          <p className="font-serif text-xl text-[#0E0F11]">
            Estimated recovery:{' '}
            <span className="bg-[#A3E635] text-[#0A0A0A] px-2 py-0.5 rounded-sm">
              {recoveryValue}
            </span>
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="w-full max-w-[1080px] mt-4 text-center md:text-left">
        <p className="text-[13px] italic text-[#52525B]">
          {FUNNEL_DIAGNOSTIC.disclaimer}
        </p>
      </div>
    </section>
  )
}
