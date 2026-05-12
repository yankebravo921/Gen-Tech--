import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV } from '@/lib/content';

export default function TopPillNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDiagnosticClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('funnel-diagnostic');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#funnel-diagnostic');
    }
  };

  return (
    <div className="w-full px-4 pt-4 pb-2 flex justify-center pointer-events-none">
      <div className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] pointer-events-auto relative w-full max-w-5xl">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
            <img src="/gentech-mark.svg" alt="Gentech Plus" className="h-6 w-auto" />
            <span className="font-bold text-[#0A0A0A] hidden sm:inline">{NAV.brand}</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV.links.map((link, idx) => {
              const isDiagnostic = link.label === "Diagnostic";
              const isActive = isDiagnostic ? location.pathname === '/' : location.pathname === link.href;

              return (
                <Link
                  key={idx}
                  to={link.href}
                  onClick={isDiagnostic ? handleDiagnosticClick : undefined}
                  className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -right-2 top-0.5 h-1.5 w-1.5 rounded-full bg-[#FF6B35]"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to={NAV.cta.href}
              className="bg-[#A3E635] text-[#0A0A0A] px-4 py-1.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-colors whitespace-nowrap"
            >
              {NAV.cta.label}
            </Link>
            
            <button 
              className="md:hidden p-1 text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden md:hidden">
            <div className="flex flex-col py-2">
              {NAV.links.map((link, idx) => {
                const isDiagnostic = link.label === "Diagnostic";
                const isActive = isDiagnostic ? location.pathname === '/' : location.pathname === link.href;

                return (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={(e) => {
                      if (isDiagnostic) {
                        handleDiagnosticClick(e);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#FF6B35]"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
