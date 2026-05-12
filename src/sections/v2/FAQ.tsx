import { Eyebrow } from '@/components/anyflow/Atoms'
import AccordionItem from '@/components/anyflow/AccordionItem'
import { FAQ_CONTENT } from '@/lib/content'

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-[#F5F1EA] py-20 md:py-24 px-6">
      <div className="w-full max-w-[880px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {FAQ_CONTENT.eyebrow}
          </Eyebrow>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0E0F11] mt-4">
            {FAQ_CONTENT.h2}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full border-t border-[#DCD9D2]">
          {FAQ_CONTENT.items.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isLast={i === FAQ_CONTENT.items.length - 1}
              defaultOpen={item.defaultOpen}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
