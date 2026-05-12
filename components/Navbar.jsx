// Navbar — announcement bar + centered floating pill nav.
// dark={true} flips to translucent dark for full-bleed dark hero.

const Navbar = ({ dark = false, current = 'home', spotsLeft = 1 }) => {
  const inkColor = dark ? '#fff' : 'var(--gt-fg-1)';
  const navBg = dark ? 'rgba(20,21,24,0.65)' : '#fff';
  const navBorder = dark ? 'rgba(255,255,255,0.12)' : 'var(--gt-border)';
  const items = [
    { id: 'ux', label: 'UX & conversion', href: 'ux-conversion.html' },
    { id: 'support', label: 'AI support', href: 'ai-support.html' },
    { id: 'leads', label: 'Lead & revenue', href: 'lead-revenue.html' },
    { id: 'home', label: 'Diagnostic', href: 'index.html' },
  ];
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* announcement bar */}
      <div style={{
        background: 'var(--gt-ink)', color: '#fff', textAlign: 'center', padding: '10px 16px',
        fontSize: 13, fontWeight: 500, fontFamily: 'var(--gt-font-body)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gt-green)', boxShadow: '0 0 0 3px rgba(47,168,92,0.25)' }} />
          <span>Booking the free Revenue Leak Diagnostic — {spotsLeft} of 3 May spots left.</span>
        </span>
        <a href="index.html#book" style={{
          background: 'var(--gt-blue)', color: '#fff', padding: '4px 12px',
          borderRadius: 999, fontSize: 11, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em',
        }}>Book now</a>
      </div>

      {/* main nav row */}
      <div style={{
        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 36px', background: dark ? 'transparent' : 'transparent',
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="assets/gentech-logo.svg" alt="Gen Tech +"
            style={{ height: 28, filter: dark ? 'invert(1)' : 'none' }} />
        </a>

        {/* center pill */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          display: 'inline-flex', alignItems: 'center', gap: 2,
          background: navBg, border: `1px solid ${navBorder}`, borderRadius: 999,
          padding: '6px 8px', boxShadow: 'var(--gt-shadow-pill)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}>
          {items.map((it) => (
            <a key={it.id} href={it.href} style={{
              color: it.id === current ? (dark ? '#fff' : 'var(--gt-fg-1)') : (dark ? 'rgba(255,255,255,0.75)' : 'var(--gt-fg-2)'),
              fontSize: 14, fontWeight: 500, padding: '8px 14px',
              borderRadius: 999, textDecoration: 'none',
              background: it.id === current ? (dark ? 'rgba(255,255,255,0.10)' : 'var(--gt-bg-soft)') : 'transparent',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              {it.id === current && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gt-orange)' }} />}
              {it.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#" style={{ color: inkColor, fontSize: 14, fontWeight: 500, textDecoration: 'none', padding: '8px 12px' }}>Case studies</a>
          <Button variant="primary" size="sm" href="index.html#book">Book the diagnostic</Button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Navbar });
