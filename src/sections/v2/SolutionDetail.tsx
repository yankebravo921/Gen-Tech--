import { Eyebrow } from '@/components/anyflow/Atoms'

interface SolutionDetailProps {
  content: {
    eyebrow?: string;
    h2: string;
    bullets: { title: string; description: string }[];
  }
}

export default function SolutionDetail({ content }: SolutionDetailProps) {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-6 font-sans">
      <div className="w-full max-w-[1080px] mx-auto flex flex-col items-start">
        {content.eyebrow && (
          <div className="mb-4">
            <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {content.eyebrow}
            </Eyebrow>
          </div>
        )}

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-white mt-4 mb-16 max-w-[800px]">
          {content.h2}
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[#333333] pt-12">
          {content.bullets.map((bullet, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span className="font-serif text-[#A3E635] text-lg mb-2">{(index + 1).toString().padStart(2, '0')}</span>
              <h3 className="font-serif text-xl md:text-2xl text-white leading-tight">
                {bullet.title}
              </h3>
              <p className="font-sans text-[1rem] leading-relaxed text-[#A0A0A5]">
                {bullet.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
