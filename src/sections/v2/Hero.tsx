import { Eyebrow, Button, Icon, ScarcityCounter } from '@/components/anyflow/Atoms'
import { HERO } from '@/lib/content'

interface HeroContent {
  eyebrow?: string;
  h1: Array<{ text: string; italic?: boolean }>;
  body?: string;
  subhead?: string;
  primaryCta: { href: string; label?: string };
  secondaryCta: { href: string; label: string };
  trustLine: string;
}

export default function Hero({ content = HERO }: { content?: HeroContent }) {
  return (
    <section id="hero" className="relative w-full flex flex-col justify-center" style={{ background: 'var(--gt-bg)' }}>
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16 md:pl-[120px] flex flex-col items-center md:items-start text-center md:text-left">
        
        {content.eyebrow && (
          <div className="mb-4">
            <Eyebrow color="orange">{content.eyebrow}</Eyebrow>
          </div>
        )}

        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.015em] text-[#0E0F11] max-w-[900px]">
          {content.h1.map((span: { text: string; italic?: boolean }, i: number) => {
            const isLastHomepage = content === HERO && i === 3;
            return (
              <span key={i} className={`block ${span.italic ? 'italic text-gray-600' : ''} ${isLastHomepage ? 'mt-1 md:mt-2' : ''}`}>
                {isLastHomepage ? (
                  <span className="relative inline-block whitespace-nowrap">
                    {span.text}
                    <span aria-hidden="true" className="absolute left-0 right-0 bottom-[0.05em] h-[0.16em] bg-[#E0533A] opacity-85 z-[-1] rounded-sm" />
                  </span>
                ) : (
                  span.text
                )}
              </span>
            );
          })}
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-[520px] leading-relaxed">
          {content.body || content.subhead}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Button variant="primary" size="lg" href={content.primaryCta.href}>
            {content.primaryCta.label || 'Book the free diagnostic'} <Icon name="arrow-right" size={16} />
          </Button>
          <Button variant="secondary" size="lg" href={content.secondaryCta.href}>
            {content.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center md:items-start">
          <ScarcityCounter remaining={1} total={3} month="June" />
          <p className="mt-3 text-[13px] text-gray-600 max-w-[520px] leading-relaxed">
            {content.trustLine}
          </p>
        </div>
      </div>
    </section>
  )
}

