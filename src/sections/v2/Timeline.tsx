import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/anyflow/Atoms'
import { TIMELINE } from '@/lib/content'

export default function Timeline() {
  return (
    <section id="timeline" className="w-full bg-[#F5F1EA] py-20 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-[800px] mb-20 flex flex-col items-center">
          <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {TIMELINE.eyebrow}
          </Eyebrow>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0E0F11] mt-4">
            {TIMELINE.h2}
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8 w-full">
          {TIMELINE.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="font-serif text-[2.5rem] leading-none text-[#0E0F11] mb-4">
                {step.number}
              </div>
              <div className="w-full h-[1px] bg-[#DCD9D2] mb-6" />
              <div className="font-serif text-[1.25rem] text-[#0E0F11] mb-3">
                {step.time}
              </div>
              <p className="text-[0.875rem] text-[#4B5563] leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Stack */}
        <div className="flex md:hidden flex-col w-full relative">
          {/* Continuous vertical line spanning full height connecting all items */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-[#DCD9D2]" />
          
          {TIMELINE.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-6 mb-12 relative z-10"
            >
              {/* Solid background behind number blocks the line stroke */}
              <div className="flex-shrink-0 w-[48px] bg-[#F5F1EA] py-2 flex justify-center">
                 <div className="font-serif text-[2rem] leading-none text-[#0E0F11]">
                   {step.number}
                 </div>
              </div>
              <div className="pt-2">
                <div className="font-serif text-[1.25rem] text-[#0E0F11] mb-2">
                  {step.time}
                </div>
                <p className="text-[0.875rem] text-[#4B5563] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
