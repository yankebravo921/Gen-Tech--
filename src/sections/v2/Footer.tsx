import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { FOOTER, NAV } from '@/lib/content'

const MiniThreeDLogo = lazy(() => import('@/components/MiniThreeDLogo'))

export default function Footer() {

  return (
    <footer className="w-full bg-[#F5F1EA] px-6 pb-6 pt-12">
      <div className="w-full max-w-7xl mx-auto">

        {/* ── Dark Card ── */}
        <div className="relative bg-[#0E0F11] rounded-[28px] overflow-hidden px-6 md:px-16 pt-20 pb-10">

          {/* Subtle decorative arcs (CSS only) */}
          <div className="absolute top-[30%] -left-[200px] w-[500px] h-[500px] rounded-full border border-[#1A1B1E] pointer-events-none" />
          <div className="absolute top-[10%] -right-[180px] w-[460px] h-[460px] rounded-full border border-[#1A1B1E] pointer-events-none" />
          <div className="absolute -bottom-[120px] left-[30%] w-[380px] h-[380px] rounded-full border border-[#1A1B1E] pointer-events-none" />

          {/* ── Logo Center ── */}
          <div className="flex flex-col items-center mb-14 relative z-10">
            {/* Logo mark */}
            <div className="w-48 h-48 mb-2 flex items-center justify-center">
              <Suspense fallback={
                <img src="/gentech-mark.svg" alt="Gentech Plus" className="h-24 w-auto brightness-0 invert" />
              }>
                <MiniThreeDLogo size={180} />
              </Suspense>
            </div>
            {/* Tagline */}
            <p className="font-serif italic text-base text-[#A1A1AA] mt-2 text-center max-w-md">
              {FOOTER.tagline}
            </p>

            {/* Twin CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <Link
                to="/book"
                className="bg-[#A3E635] hover:bg-[#95D12A] active:bg-[#86CB14] text-[#0A0A0A] font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                Book the diagnostic
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/#funnel-diagnostic"
                className="border border-[#A3E635] text-[#A3E635] hover:bg-[#A3E635]/10 font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                See a sample diagnostic
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* ── Three-Column Content ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[#27272A] pt-10 mb-10">

            {/* Contact */}
            <div>
              <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase mb-5">
                Contact
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="font-sans text-sm text-[#D1D5DB]">
                  hello@gentechplus.com
                </li>
                <li className="font-sans text-sm text-[#D1D5DB]">
                  Gentech Plus
                </li>
              </ul>
              {/* Social links */}
              <div className="flex items-center gap-5 mt-5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#A3E635] transition-colors inline-flex items-center gap-1.5 text-sm font-sans">
                  LinkedIn
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L9 3M9 3H4M9 3V8"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#A3E635] transition-colors inline-flex items-center gap-1.5 text-sm font-sans">
                  Instagram
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L9 3M9 3H4M9 3V8"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase mb-5">
                Quick links
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-[#D1D5DB] hover:text-[#A3E635] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A1A1AA] uppercase mb-5">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {FOOTER.columns
                  .find(col => col.title === "COMPANY")
                  ?.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-[#D1D5DB] hover:text-[#A3E635] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── Bottom Legal Strip ── */}
          <div className="relative z-10 border-t border-[#27272A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="font-sans text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                Privacy policy
              </Link>
              <Link to="/terms" className="font-sans text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors">
                Terms of service
              </Link>
            </div>
            <p className="font-sans text-xs text-[#71717A]">
              © {new Date().getFullYear()} {FOOTER.brand}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
