import { Eyebrow } from '@/components/anyflow/Atoms'

interface Props {
  eyebrow?: string;
  headline?: string;
  body?: string;
  readoutStats?: string[];
  readoutConclusion?: string[];
  flowSteps?: string[];
  problemFound?: string;
  fixFirst?: string;
  moneyLeft?: string;
}

export default function FunnelDiagnostic({ 
  eyebrow = "WHERE THE MONEY SLIPS",
  headline = "You paid to bring people in. Then they disappear.",
  body = "Most businesses do not need more traffic first. They need to know where the people they already paid to reach are disappearing.",
  readoutStats = [
    "24,180 people visited the site.",
    "5,800 tried to book.",
    "Only 435 finished."
  ],
  readoutConclusion = [
    "That is not a traffic problem.",
    "That is a booking problem."
  ],
  flowSteps = [
    "People visited",
    "Tried to book",
    "Got stuck",
    "Finished booking"
  ],
  problemFound = "The booking step was slow, confusing, and hard to use on mobile.",
  fixFirst = "The mobile booking path, calendar load time, and hidden date picker.",
  moneyLeft = "$184k / month"
}: Props) {

  return (
    <section id="funnel-diagnostic" className="w-full bg-[#F5F1EA] py-24 px-6 flex flex-col items-center font-sans">
      {/* Intro */}
      <div className="w-full max-w-[1080px] mb-12">
        <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {eyebrow}
        </Eyebrow>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#0E0F11] mt-4 mb-3 max-w-[800px]">
          {headline}
        </h2>
        <p className="text-[#4B5563] max-w-[640px] text-lg">
          {body}
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1080px] bg-[#F5F1EA] rounded-[16px] border border-[#DCD9D2] shadow-sm p-6 md:p-10 flex flex-col gap-10">
        
        {/* Top Section: Readout */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-[#0E0F11]">
            {readoutStats.map((stat, i) => (
              <p key={i}>{stat}</p>
            ))}
          </div>
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-[#0E0F11] md:text-right">
            {readoutConclusion.map((conc, i) => (
              <p key={i}>{conc}</p>
            ))}
          </div>
        </div>

        {/* Visual Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-y border-[#DCD9D2]">
          {flowSteps.map((step, i) => {
            const isStuck = i === 2; // the 3rd step is always the highlighted stuck step
            const node = (
              <div key={`node-${i}`} className={`flex-1 text-center font-sans px-4 py-3 rounded-md border w-full md:w-auto ${isStuck ? 'font-bold text-[#D9381E] bg-[#FDECE7] border-[#FADBD8] relative' : 'font-medium text-[#4B5563] bg-white border-[#DCD9D2]'}`}>
                {step}
              </div>
            );
            if (i === flowSteps.length - 1) return node;
            return [
              node,
              <span key={`arrow-desktop-${i}`} className="text-[#DCD9D2] hidden md:block">→</span>,
              <span key={`arrow-mobile-${i}`} className="text-[#DCD9D2] md:hidden">↓</span>
            ];
          })}
        </div>

        {/* Action Panel */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wider text-[#4B5563] uppercase mb-2">Problem found:</h4>
            <p className="font-serif text-xl text-[#0E0F11]">{problemFound}</p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wider text-[#4B5563] uppercase mb-2">What we would fix first:</h4>
            <p className="font-serif text-xl text-[#0E0F11]">{fixFirst}</p>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wider text-[#4B5563] uppercase mb-2">Estimated money left on the table:</h4>
            <p className="font-serif text-2xl text-[#0E0F11] inline-block bg-[#A3E635] px-3 py-1 rounded-sm">
              {moneyLeft}
            </p>
          </div>
        </div>
      </div>

      {/* What this means panel */}
      <div className="w-full max-w-[1080px] mt-6 bg-[#EBE7DF] rounded-[16px] p-6 md:p-8 border border-[#DCD9D2]">
        <h4 className="font-serif text-2xl text-[#0E0F11] mb-4">What this means</h4>
        <ul className="list-disc pl-5 font-sans text-lg text-[#4B5563] space-y-2">
          <li>You are not losing random visitors.</li>
          <li>You are losing people who already wanted to book.</li>
          <li>More ads will send more people into the same broken step.</li>
          <li>Fix the broken step first.</li>
        </ul>
      </div>

    </section>
  )
}
