import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface AccordionItemProps {
  question: string
  answer: string
  isLast?: boolean
  defaultOpen?: boolean
}

export default function AccordionItem({ question, answer, isLast = false, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`w-full ${isLast ? '' : 'border-b border-[#DCD9D2]'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left py-6 min-h-[44px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F1EA]"
      >
        <span className="font-serif text-[1.125rem] md:text-[1.25rem] text-[#0E0F11] pr-8">
          {question}
        </span>
        <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#0E0F11]">
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Minus size={20} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Plus size={20} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 text-[1rem] text-[#4B5563] leading-relaxed max-w-[720px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
