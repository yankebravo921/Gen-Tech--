// HomeHero — the diagnostic-first hero. Editorial display serif headline,
// "phrase coloring" via underline weights and an inline blue accent.
// No all-caps body. Hormozi directness, Voiceflow restraint.

const HomeHero = () => {
  return (
    <section style={{ background: 'var(--gt-bg)', position: 'relative' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Eyebrow>The Revenue Leak Diagnostic — free for operators</Eyebrow>
        </div>

        {/* Headline — phrase coloring via the orange "exact spot" highlight + accent underlines */}
        <h1 className="gt-display-xl" style={{
          margin: '0 auto', maxWidth: 1080, textAlign: 'center', letterSpacing: '-0.02em',
        }}>
          You&rsquo;re spending more <br/>
          <span style={{ color: 'var(--gt-fg-3)', fontStyle: 'italic' }}>to make less.</span><br/>
          We find the&nbsp;
          <span style={{
            position: 'relative', whiteSpace: 'nowrap',
          }}>
            exact spot
            <span aria-hidden style={{
              position: 'absolute', left: 0, right: 0, bottom: '0.05em', height: '0.16em',
              background: 'var(--gt-orange)', opacity: 0.85, zIndex: -1, borderRadius: 2,
            }} />
          </span>
          &nbsp;in 30 minutes.
        </h1>

        <p className="gt-body-lg" style={{
          margin: '32px auto 0', maxWidth: 660, textAlign: 'center', color: 'var(--gt-fg-2)',
        }}>
          Free 30-minute diagnostic. We map your funnel live with you, identify exactly where you&rsquo;re losing money, and send a written audit within 5 days. Pay nothing unless you want us to fix it.
        </p>

        <div id="book" style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg">
            Book the free diagnostic <Icon name="arrow-right" size={16} />
          </Button>
          <Button variant="secondary" size="lg">
            See a sample audit
          </Button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <ScarcityCounter remaining={1} total={3} month="May" />
        </div>

        <p style={{
          margin: '20px auto 0', maxWidth: 560, textAlign: 'center',
          fontSize: 13, color: 'var(--gt-fg-3)', lineHeight: 1.55,
        }}>
          Real audit. Real numbers. You walk away with actionable insight whether you hire us or not.
        </p>
      </div>

      {/* visual block — schematic of the diagnostic */}
      <div style={{
        position: 'relative', width: '100%', minHeight: 540, marginTop: 12,
        backgroundImage: 'url(assets/hero-grass-field.png)', backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(244,242,238,0.4) 0%, rgba(14,15,17,0) 30%, rgba(14,15,17,0.25) 100%)' }} />
        <div style={{
          position: 'relative', maxWidth: 1080, margin: '0 auto', padding: '60px 24px',
          display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center',
        }}>
          <DiagnosticCard />
        </div>
      </div>
    </section>
  );
};

// The "diagnostic" card — schematic of a funnel with a leak detected.
const DiagnosticCard = () => {
  const stages = [
    { label: 'Visitors', value: '24,180', drop: '' },
    { label: 'Started form', value: '3,810', drop: '−84%' },
    { label: 'Booked', value: '412',   drop: '−89%', leak: true },
    { label: 'Showed up', value: '301', drop: '−27%' },
    { label: 'Closed', value: '88',    drop: '−71%' },
  ];
  return (
    <div style={{
      width: '100%', maxWidth: 880, background: 'var(--gt-bg-card)',
      borderRadius: 22, padding: 28,
      boxShadow: 'var(--gt-shadow-lg)', border: '1px solid var(--gt-border)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 30, height: 30, borderRadius: 8, background: 'var(--gt-bg-soft)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gt-fg-1)',
          }}><Icon name="crosshair" size={16} /></span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--gt-fg-1)' }}>Funnel diagnostic — Acme Bookings</div>
            <div style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 11, color: 'var(--gt-fg-3)' }}>
              session_24180 · 30 days · Apr 27 → May 27
            </div>
          </div>
        </div>
        <Tag tone="orange"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gt-orange)' }} />Leak found · stage 2→3</Tag>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, alignItems: 'end' }}>
        {stages.map((s, i) => {
          const heights = [110, 90, 28, 78, 22]; // exaggerated leak at index 2
          return (
            <div key={s.label} style={{
              padding: '16px 12px', position: 'relative',
              borderRight: i < stages.length - 1 ? '1px dashed var(--gt-border)' : 'none',
            }}>
              <div style={{ height: 110, position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                <div style={{
                  width: '100%', height: heights[i],
                  background: s.leak ? 'var(--gt-orange)' : 'var(--gt-ink)',
                  borderRadius: '6px 6px 0 0',
                }} />
                {s.leak && (
                  <div style={{
                    position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--gt-orange)', color: '#fff',
                    fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999,
                    fontFamily: 'var(--gt-font-mono)', letterSpacing: '0.04em', whiteSpace: 'nowrap',
                  }}>$184k / mo</div>
                )}
              </div>
              <div style={{ marginTop: 14, fontFamily: 'var(--gt-font-display)', fontSize: 24, color: 'var(--gt-fg-1)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: 'var(--gt-fg-3)', marginTop: 2 }}>{s.label}</div>
              {s.drop && (
                <div style={{
                  fontFamily: 'var(--gt-font-mono)', fontSize: 10,
                  color: s.leak ? 'var(--gt-orange)' : 'var(--gt-fg-3)', marginTop: 4,
                }}>{s.drop}</div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 22, padding: 16, background: 'var(--gt-bg-soft)', borderRadius: 12,
        display: 'flex', alignItems: 'flex-start', gap: 12,
      }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', background: '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--gt-orange)', flexShrink: 0,
        }}><Icon name="alert" size={14} /></span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gt-fg-1)', marginBottom: 2 }}>
            Booking step is dropping 89% of qualified intent.
          </div>
          <div style={{ fontSize: 13, color: 'var(--gt-fg-2)', lineHeight: 1.5 }}>
            Calendar widget loads 4.2s slow on mobile. Date picker hidden behind a tab. Estimated recovery: $184k/mo.
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HomeHero });
