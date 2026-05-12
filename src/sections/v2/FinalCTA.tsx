import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FINAL_CTA } from '@/lib/content'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="w-full bg-[#0A0A0A] py-[96px] md:py-[140px] px-6 text-center">
      <div className="w-full max-w-[880px] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#E0533A]" />
          <span className="font-sans text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#4B5563]">
            {FINAL_CTA.eyebrow}
          </span>
        </div>

        {/* H2 */}
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-white mb-8">
          {FINAL_CTA.h2.map((span, i) => (
            <span key={i} className={span.italic ? 'italic text-gray-400 block md:inline md:ml-4' : 'block md:inline'}>
              {span.text}
            </span>
          ))}
        </h2>

        {/* Body */}
        <p className="font-sans text-[1.125rem] md:text-[1.25rem] text-[#A0A0A5] leading-relaxed max-w-[600px] mb-12">
          {FINAL_CTA.body}
        </p>

        {/* CTA */}
        <Link
          to={FINAL_CTA.cta.href}
          className="inline-flex items-center justify-center bg-[#A3E635] text-[#0E0F11] font-sans font-medium text-[1.125rem] px-8 py-4 rounded-full transition-transform hover:scale-105 mb-6"
        >
          {FINAL_CTA.cta.label}
        </Link>

        {/* Spots Badge */}
        <div className="inline-flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-[#A3E635]"
          />
          <span className="font-mono text-[0.875rem] tracking-wider uppercase text-[#4B5563]">
            {FINAL_CTA.spotsBadge}
          </span>
        </div>
      </div>
    </section>
  )
}
