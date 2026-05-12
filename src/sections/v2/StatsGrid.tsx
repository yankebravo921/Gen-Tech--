import { motion } from 'framer-motion'
import { STATS } from '@/lib/content'

export default function StatsGrid() {
  return (
    <section id="stats-grid" className="w-full bg-[#F5F1EA] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {STATS.map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
               className={`flex flex-col items-center text-center lg:border-r border-[#DCD9D2] ${
                 i === STATS.length - 1 ? 'lg:border-r-0' : ''
               } ${
                 i % 2 === 0 ? 'md:border-r' : 'md:border-r-0 lg:border-r'
               }`}
             >
                <div className="font-serif text-[3rem] md:text-[3.5rem] leading-none text-[#0E0F11] mb-2">{stat.value}</div>
                <div className="text-[0.875rem] font-sans text-[#4B5563] tracking-wide">{stat.label}</div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
