import { Link } from 'react-router-dom'
import { FOOTER } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F1EA] pt-[64px] pb-[32px] md:pt-[96px] md:pb-[48px] px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Top Row: Mobile stacks to column, Desktop is 3 columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 md:mb-24">
          {FOOTER.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h3 className="font-sans text-[0.875rem] font-bold tracking-[0.1em] uppercase text-[#4B5563]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.href}
                      className="font-sans text-[1rem] text-[#0E0F11] hover:text-[#A3E635] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="w-full border-t border-[#DCD9D2] pt-8 flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          
          {/* Left: Logo Mark */}
          <div className="flex-shrink-0">
            <img src="/gentech-mark.svg" alt="Gentech Plus mark" className="h-[32px] w-auto" />
          </div>

          {/* Center: Tagline */}
          <p className="font-serif italic text-[1rem] md:text-[1.125rem] text-[#4B5563] text-center">
            {FOOTER.tagline}
          </p>

          {/* Right: Copyright */}
          <div className="font-sans text-[0.875rem] text-[#4B5563] text-center md:text-right">
            © {new Date().getFullYear()} {FOOTER.brand}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
