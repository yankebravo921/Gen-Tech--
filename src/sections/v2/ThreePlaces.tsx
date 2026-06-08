import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/anyflow/Atoms'
import { THREE_PLACES } from '@/lib/content'
import { MousePointer2, MessageCircle, Filter, type LucideIcon } from 'lucide-react'

// Map string icon names to explicit Lucide components as requested
const iconMap: Record<string, LucideIcon> = {
  cursor: MousePointer2,
  chat: MessageCircle,
  filter: Filter
}

export default function ThreePlaces() {
  return (
    <section id="three-places" className="w-full bg-[#F5F1EA] py-20 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-[800px] mb-16 flex flex-col items-center">
          <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {THREE_PLACES.eyebrow}
          </Eyebrow>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0E0F11] mt-4 mb-4">
            {THREE_PLACES.h2.map((span, i) => (
              <span key={i} className={span.italic ? 'italic text-gray-500 block md:inline mt-2 md:mt-0' : ''}>
                {span.italic && <br className="hidden md:block" />}
                {span.text}{' '}
              </span>
            ))}
          </h2>
          <p className="text-[#4B5563] text-lg max-w-[640px]">
            {THREE_PLACES.body}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {THREE_PLACES.cards.map((card, i) => {
            const IconComponent = iconMap[card.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <a 
                  href={card.href} 
                  className="block w-full h-full bg-[#F5F1EA] border border-[#DCD9D2] p-8 rounded-xl relative group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 text-[#0E0F11]">
                     {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}
                  </div>
                  <div className="text-[0.75rem] font-bold tracking-widest text-[#4B5563] mb-4 uppercase">
                    {card.label}
                  </div>
                  <div className="font-serif text-[2.5rem] leading-none text-[#0E0F11] mb-3">
                    {card.stat}
                  </div>
                  <div className="text-[0.875rem] font-medium text-[#0E0F11] mb-4">
                    {card.caption}
                  </div>
                  <p className="text-[0.875rem] text-[#4B5563] leading-relaxed">
                    {card.body}
                  </p>
                  
                  {/* Hover Accent Line (Pseudo-element pattern, absolutely positioned, opacity transition, no layout shift) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A3E635] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
