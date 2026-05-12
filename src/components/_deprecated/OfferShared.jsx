// Shared landing-page sections — reused across the three offer pages.
// Configurable via props so each page tells its own story.

const OfferHero = ({ tag, headlineLight, headlineEmph, headlineRest, sub, image = 'assets/motion-blur-grass.png', emphColor = 'var(--gt-orange)' }) => (
  <section style={{ background: 'var(--gt-bg)', position: 'relative' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px 36px' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <Eyebrow>{tag}</Eyebrow>
      </div>
      <h1 className="gt-display-xl" style={{ margin: '0 auto', maxWidth: 1080, textAlign: 'center', letterSpacing: '-0.02em' }}>
        {headlineLight}{' '}
        <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
          {headlineEmph}
          <span aria-hidden style={{
            position: 'absolute', left: 0, right: 0, bottom: '0.05em', height: '0.16em',
            background: emphColor, opacity: 0.85, zIndex: -1, borderRadius: 2,
          }} />
        </span>{' '}
        {headlineRest}
      </h1>
      <p className="gt-body-lg" style={{ margin: '32px auto 0', maxWidth: 660, textAlign: 'center', color: 'var(--gt-fg-2)' }}>
        {sub}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
        <Button variant="primary" size="lg" href="index.html#book">
          Book the free diagnostic <Icon name="arrow-right" size={16} />
        </Button>
        <Button variant="secondary" size="lg">See a sample fix</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <ScarcityCounter remaining={1} total={3} month="May" />
      </div>
    </div>
    <div style={{
      width: '100%', height: 360,
      backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',
      borderTop: '1px solid var(--gt-border)', borderBottom: '1px solid var(--gt-border)',
    }} />
  </section>
);

// "The leak" — a focused diagnostic visual specific to this offer
const LeakBlock = ({ eyebrow, title, copy, beforeLabel, beforeStat, beforeSub, afterLabel, afterStat, afterSub, leakAmount }) => (
  <section style={{ background: 'var(--gt-bg-soft)', padding: '120px 24px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 56 }}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>{title}</h2>
        </div>
        <p className="gt-body-lg" style={{ margin: 0, color: 'var(--gt-fg-2)' }}>{copy}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center' }}>
        <div style={{
          background: 'var(--gt-bg-card)', borderRadius: 20, padding: 32,
          border: '1px solid var(--gt-border)', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 11, color: 'var(--gt-fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18 }}>
            Before
          </div>
          <div className="gt-metric" style={{ fontSize: 88, color: 'var(--gt-fg-3)' }}>{beforeStat}</div>
          <div className="gt-metric-label" style={{ marginTop: 10 }}>{beforeLabel}</div>
          <p className="gt-body-sm" style={{ margin: '20px auto 0', maxWidth: 240 }}>{beforeSub}</p>
        </div>

        <div style={{
          width: 64, height: 64, borderRadius: '50%', background: 'var(--gt-orange)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 0 8px rgba(224,83,58,0.16)',
        }}>
          <Icon name="arrow-right" size={20} />
        </div>

        <div style={{
          background: 'var(--gt-ink)', borderRadius: 20, padding: 32,
          color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'url(assets/dark-mesh.png)', backgroundSize: 'cover' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 11, color: 'var(--gt-fg-on-dark-2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18 }}>
              After
            </div>
            <div style={{ fontFamily: 'var(--gt-font-display)', fontSize: 88, lineHeight: 1, color: '#fff', letterSpacing: '-0.015em' }}>{afterStat}</div>
            <div style={{ fontFamily: 'var(--gt-font-body)', fontSize: 13, color: 'var(--gt-fg-on-dark-2)', marginTop: 10 }}>{afterLabel}</div>
            <p className="gt-body-sm" style={{ margin: '20px auto 0', maxWidth: 240, color: 'var(--gt-fg-on-dark-2)' }}>{afterSub}</p>
          </div>
        </div>
      </div>

      {leakAmount && (
        <div style={{
          marginTop: 32, padding: '20px 28px', background: 'var(--gt-bg-card)',
          borderRadius: 999, border: '1px solid var(--gt-border)',
          display: 'inline-flex', alignItems: 'center', gap: 14,
        }}>
          <Tag tone="orange">Recovered</Tag>
          <span className="gt-mono" style={{ fontSize: 13, color: 'var(--gt-fg-2)' }}>
            avg revenue recovered after fix —
          </span>
          <span style={{ fontFamily: 'var(--gt-font-display)', fontSize: 28, color: 'var(--gt-fg-1)', letterSpacing: '-0.01em' }}>
            {leakAmount}
          </span>
        </div>
      )}
    </div>
  </section>
);

// Three-step "what we actually do" block — sequential with monospace timing
const OfferProcess = ({ eyebrow, title, sub, steps }) => (
  <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="gt-display-md" style={{ margin: '14px 0 16px' }}>{title}</h2>
        <p className="gt-body-lg" style={{ margin: 0, color: 'var(--gt-fg-2)' }}>{sub}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 0 }}>
        {steps.map((s, i) => (
          <div key={s.t} style={{
            padding: i === 0 ? '28px 24px 28px 0' : '28px 24px',
            borderTop: '1px solid var(--gt-border)',
            borderRight: i < steps.length - 1 ? '1px solid var(--gt-border)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span className="gt-mono-sm" style={{ letterSpacing: '0.05em' }}>{s.n}</span>
              <span style={{ flex: 1, height: 1, background: 'var(--gt-border)' }} />
              <span style={{
                width: 28, height: 28, borderRadius: 8, background: 'var(--gt-bg-soft)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gt-fg-1)',
              }}><Icon name={s.icon} size={14} /></span>
            </div>
            <h4 className="gt-h4" style={{ margin: '0 0 10px', fontSize: 17 }}>{s.t}</h4>
            <p className="gt-body-sm" style={{ margin: 0, lineHeight: 1.55 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Inclusions list — a "what's in the engagement" block on dark
const Inclusions = ({ eyebrow, title, items, image = 'assets/motion-blur-grass.png' }) => (
  <section className="gt-on-dark" style={{ background: 'var(--gt-ink)', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: 'url(assets/dark-mesh.png)', backgroundSize: 'cover' }} />
    <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="gt-display-md" style={{ margin: '14px 0 32px', color: '#fff' }}>{title}</h2>
        <div style={{ position: 'relative', height: 320, borderRadius: 20, overflow: 'hidden',
          backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,15,17,0.25)' }} />
        </div>
      </div>
      <div>
        {items.map(([t, d], i) => (
          <div key={t} style={{
            padding: '22px 0', borderTop: '1px solid rgba(255,255,255,0.10)',
            borderBottom: i === items.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
            display: 'flex', alignItems: 'flex-start', gap: 16,
          }}>
            <span className="gt-mono-sm" style={{ color: 'var(--gt-fg-on-dark-2)', minWidth: 28, paddingTop: 4 }}>
              0{i + 1}
            </span>
            <div>
              <div style={{ color: '#fff', fontSize: 18, fontFamily: 'var(--gt-font-display)', marginBottom: 6, lineHeight: 1.25 }}>{t}</div>
              <div style={{ color: 'var(--gt-fg-on-dark-2)', fontSize: 14, lineHeight: 1.55 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Cross-sell — link to the other two offers
const CrossSell = ({ exclude }) => {
  const all = [
    { id: 'ux', title: 'UX & conversion optimization', desc: 'Rebuild the failing booking system. Strip the friction.', href: 'ux-conversion.html', img: 'assets/motion-blur-grass.png' },
    { id: 'support', title: 'AI support agents', desc: 'Resolution, not deflection. Live in 14 days.', href: 'ai-support.html', img: 'assets/leaf-texture.png' },
    { id: 'leads', title: 'Lead & revenue systems', desc: 'Score leads. Reactivate. Close the ones that pay.', href: 'lead-revenue.html', img: 'assets/hero-grass-field.png' },
  ].filter((x) => x.id !== exclude);
  return (
    <section style={{ background: 'var(--gt-bg)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <Eyebrow>The other two solutions</Eyebrow>
          <h3 className="gt-h2" style={{ margin: '14px 0 0', fontSize: 36 }}>Operators usually need more than one fix.</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {all.map((o) => (
            <a key={o.id} href={o.href} style={{
              textDecoration: 'none', color: 'inherit',
              display: 'flex', alignItems: 'center', gap: 24, padding: 24,
              background: 'var(--gt-bg-card)', borderRadius: 20, border: '1px solid var(--gt-border)',
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: 14,
                backgroundImage: `url(${o.img})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <h4 className="gt-h4" style={{ margin: '0 0 8px', fontSize: 18 }}>{o.title}</h4>
                <p className="gt-body-sm" style={{ margin: 0 }}>{o.desc}</p>
              </div>
              <span style={{
                width: 36, height: 36, borderRadius: '50%', background: 'var(--gt-bg-soft)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gt-fg-1)', flexShrink: 0,
              }}><Icon name="arrow-right" size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { OfferHero, LeakBlock, OfferProcess, Inclusions, CrossSell });
