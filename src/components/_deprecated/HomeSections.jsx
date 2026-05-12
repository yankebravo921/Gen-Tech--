// HomeOperator — "How we analyze a business" — schematic 3-axis breakdown.
// HomeSolutions — three offer cards routing to the dedicated landing pages.

const HomeOperator = () => {
  const axes = [
    {
      label: 'UX & flows',
      stat: '3.8s',
      sub: 'avg drop point on mobile',
      desc: 'We map every screen, click, and tap that stands between intent and revenue. The slow form. The hidden CTA. The broken booking widget.',
      icon: 'cursor',
    },
    {
      label: 'Support volume',
      stat: '62%',
      sub: 'tickets that should never exist',
      desc: 'We watch where customers ask the same question over and over. Each one is a UX bug, a pricing question, or a flow your team is paying to repeat.',
      icon: 'message',
    },
    {
      label: 'Lead quality',
      stat: '1 in 9',
      sub: 'leads worth your team\u2019s time',
      desc: 'We score every lead source by close rate, not volume. Then we cut the dead channels and reactivate the ones already in your CRM.',
      icon: 'filter',
    },
  ];
  return (
    <section style={{ background: 'var(--gt-bg-soft)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 64 }}>
          <div>
            <Eyebrow>How we read a business</Eyebrow>
            <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>
              Three places where money quietly walks out the door.
            </h2>
          </div>
          <p className="gt-body-lg" style={{ margin: 0, color: 'var(--gt-fg-2)' }}>
            Most operators don&rsquo;t have a traffic problem. They have a leak problem. We diagnose all three at once and tell you which one is costing you the most this month.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {axes.map((a) => (
            <div key={a.label} style={{
              background: 'var(--gt-bg-card)', borderRadius: 20, padding: 28,
              border: '1px solid var(--gt-border)', display: 'flex', flexDirection: 'column', gap: 18,
              minHeight: 320,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10, background: 'var(--gt-bg-soft)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gt-fg-1)',
                }}><Icon name={a.icon} size={18} /></span>
                <span className="gt-mono-sm" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {a.label}
                </span>
              </div>
              <div>
                <div className="gt-metric" style={{ fontSize: 64 }}>{a.stat}</div>
                <div className="gt-metric-label">{a.sub}</div>
              </div>
              <p className="gt-body-sm" style={{ margin: 0, lineHeight: 1.55, color: 'var(--gt-fg-2)' }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeSolutions = () => {
  const offers = [
    {
      tag: 'Solution 01',
      title: 'UX & conversion optimization',
      copy: 'Rebuild the failing booking system. Strip the friction out of the flow customers actually pay you for. Diagnose, fix, ship.',
      bullets: ['Diagnostic-first redesign', 'Booking & checkout rebuilds', 'Mobile-first conversion'],
      href: 'ux-conversion.html',
      img: 'assets/motion-blur-grass.png',
      tint: 'rgba(20, 50, 25, 0.35)',
    },
    {
      tag: 'Solution 02',
      title: 'AI support agents',
      copy: 'Agents that complete bookings, resolve tickets, and close loops instantly. Support stops being a cost center and starts being a performance engine.',
      bullets: ['Resolution, not deflection', 'Trained on your real tickets', 'Live in 14 days'],
      href: 'ai-support.html',
      img: 'assets/leaf-texture.png',
      tint: 'rgba(20, 30, 20, 0.5)',
    },
    {
      tag: 'Solution 03',
      title: 'Lead & revenue systems',
      copy: 'Score every lead. Reactivate the dormant ones. Send your team only the conversations that close. Built on the data already in your CRM.',
      bullets: ['Lead qualification AI', 'Reactivation sequences', 'Pipeline that pays'],
      href: 'lead-revenue.html',
      img: 'assets/hero-grass-field.png',
      tint: 'rgba(40, 50, 30, 0.45)',
    },
  ];
  return (
    <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <Eyebrow>The three solutions</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0', maxWidth: 880 }}>
            After the diagnostic, you choose what to fix. Or nothing at all.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {offers.map((o) => (
            <a key={o.title} href={o.href} style={{
              textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                position: 'relative', height: 280, borderRadius: 20, overflow: 'hidden',
                backgroundImage: `url(${o.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                marginBottom: 20,
              }}>
                <div style={{ position: 'absolute', inset: 0, background: o.tint }} />
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.85)', color: 'var(--gt-fg-1)',
                    fontFamily: 'var(--gt-font-mono)', fontSize: 11, padding: '4px 10px',
                    borderRadius: 999, letterSpacing: '0.05em',
                  }}>{o.tag}</span>
                </div>
                <div style={{
                  position: 'absolute', bottom: 20, right: 20,
                  width: 40, height: 40, borderRadius: '50%', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gt-fg-1)',
                }}>
                  <Icon name="arrow-right" size={16} />
                </div>
              </div>
              <h3 className="gt-h3" style={{ margin: '0 0 10px', fontSize: 28 }}>{o.title}</h3>
              <p className="gt-body-sm" style={{ margin: '0 0 16px', color: 'var(--gt-fg-2)', lineHeight: 1.55 }}>{o.copy}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {o.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--gt-fg-2)' }}>
                    <span style={{ color: 'var(--gt-blue)' }}><Icon name="check" size={14} /></span>{b}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HomeOperator, HomeSolutions });
