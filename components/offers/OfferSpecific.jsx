// Offer-specific content for each landing page.
// Each function returns the page's middle section that's unique to it.

// UX-specific: a "before/after" widget illustration
const UXShowcase = () => (
  <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <Eyebrow>The fix, visualized</Eyebrow>
        <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>
          A booking widget that actually books.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Before */}
        <div style={{ background: 'var(--gt-bg-soft)', borderRadius: 20, padding: 28, border: '1px solid var(--gt-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <span className="gt-mono-sm" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>Before</span>
            <Tag tone="neutral">4.2s load · 2.1% conv</Tag>
          </div>
          <div style={{
            background: '#fff', borderRadius: 12, padding: 20, border: '1px solid var(--gt-border)',
            color: 'var(--gt-fg-3)', minHeight: 220, display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Service', 'Date', 'Time', 'Details'].map((t, i) => (
                <span key={t} style={{
                  fontSize: 11, padding: '6px 10px',
                  background: i === 0 ? 'var(--gt-bg-soft)' : 'transparent',
                  border: '1px solid var(--gt-border)', borderRadius: 6,
                }}>{t}</span>
              ))}
            </div>
            <div style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6 }} />
            <div style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6 }} />
            <div style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6 }} />
            <div style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6, width: '60%' }} />
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 11, padding: '8px 14px', background: 'var(--gt-bg-mute)', color: 'var(--gt-fg-3)', borderRadius: 999 }}>Continue (disabled)</span>
            </div>
          </div>
          <p className="gt-body-sm" style={{ margin: '16px 0 0' }}>Four tabs. Calendar hidden. Mobile spinner. 89% drop.</p>
        </div>
        {/* After */}
        <div style={{ background: 'var(--gt-ink)', borderRadius: 20, padding: 28, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'url(assets/dark-mesh.png)', backgroundSize: 'cover' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <span className="gt-mono-sm" style={{ letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gt-fg-on-dark-2)' }}>After</span>
              <Tag tone="dark">0.8s load · 14.6% conv</Tag>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, color: 'var(--gt-fg-1)', minHeight: 220, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: 'var(--gt-font-display)', fontSize: 22 }}>Pick a time.</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i} style={{
                    aspectRatio: '1', background: i === 4 ? 'var(--gt-blue)' : 'var(--gt-bg-soft)',
                    color: i === 4 ? '#fff' : 'var(--gt-fg-1)',
                    borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 500,
                  }}>{i + 1}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['9:00', '10:30', '14:00'].map((t) => (
                  <span key={t} style={{
                    fontSize: 12, padding: '8px 14px', background: 'var(--gt-bg-soft)', borderRadius: 999,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: 12, padding: '10px 16px', background: 'var(--gt-blue)', color: '#fff', borderRadius: 999, fontWeight: 500 }}>Book →</span>
              </div>
            </div>
            <p className="gt-body-sm" style={{ margin: '16px 0 0', color: 'var(--gt-fg-on-dark-2)' }}>One screen. Calendar first. Sub-second. 7× lift.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI support: a "ticket → resolution" log mockup
const SupportTicketLog = () => {
  const lines = [
    ['09:14:02', 'inbound', 'Customer asks: "Can I move my Friday booking to Saturday?"'],
    ['09:14:03', 'agent', 'Pulled booking #28491 from Acme CRM.'],
    ['09:14:04', 'agent', 'Checked Saturday availability — 3 slots.'],
    ['09:14:05', 'agent', 'Confirmed move via SMS. Ticket closed.'],
    ['09:14:05', 'metric', 'Resolution time: 3.1s · Human time: 0s'],
  ];
  return (
    <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <Eyebrow>What an agent actually does</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>
            Resolution, not deflection.
          </h2>
        </div>
        <div style={{
          background: 'var(--gt-bg-card)', borderRadius: 20, padding: 28,
          border: '1px solid var(--gt-border)', boxShadow: 'var(--gt-shadow-md)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--gt-fg-3)' }} />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Live ticket — Acme Bookings #28491</span>
            <span style={{ flex: 1 }} />
            <Tag tone="blue">Resolved · 3.1s</Tag>
          </div>
          {lines.map(([ts, lvl, msg], i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '90px 80px 1fr', gap: 12,
              fontFamily: 'var(--gt-font-mono)', fontSize: 12, padding: '8px 0',
              borderTop: i === 0 ? 'none' : '1px solid var(--gt-border)',
            }}>
              <span style={{ color: 'var(--gt-fg-3)' }}>{ts}</span>
              <span style={{
                color: lvl === 'inbound' ? 'var(--gt-orange)' : lvl === 'metric' ? 'var(--gt-green)' : 'var(--gt-blue)',
                fontWeight: 600,
              }}>{lvl}</span>
              <span style={{ color: 'var(--gt-fg-2)' }}>{msg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lead & revenue: a CRM scoring mockup
const LeadScoring = () => {
  const leads = [
    { name: 'Acme Logistics', score: 94, source: 'Inbound · Pricing page', tag: 'Send to sales', tone: 'blue' },
    { name: 'Northwind Co', score: 71, source: 'Reactivation · Q4 \u201924', tag: 'Reach out today', tone: 'orange' },
    { name: 'Bluebird Studio', score: 38, source: 'Cold form fill', tag: 'Auto-nurture', tone: 'neutral' },
    { name: 'Summit Holdings', score: 12, source: 'SEO long-tail', tag: 'Drop', tone: 'neutral' },
  ];
  return (
    <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <Eyebrow>What your team sees</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>
            Only the conversations that close.
          </h2>
        </div>
        <div style={{
          background: 'var(--gt-bg-card)', borderRadius: 20, border: '1px solid var(--gt-border)',
          boxShadow: 'var(--gt-shadow-md)', overflow: 'hidden',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '60px 1.6fr 1fr 1fr 160px',
            padding: '14px 24px', background: 'var(--gt-bg-soft)',
            fontSize: 12, color: 'var(--gt-fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            <span>Score</span><span>Lead</span><span>Source</span><span>Last touch</span><span>Action</span>
          </div>
          {leads.map((l, i) => (
            <div key={l.name} style={{
              display: 'grid', gridTemplateColumns: '60px 1.6fr 1fr 1fr 160px',
              padding: '20px 24px', alignItems: 'center',
              borderTop: '1px solid var(--gt-border)',
              background: i === 0 ? 'var(--gt-blue-soft)' : 'transparent',
            }}>
              <span style={{
                fontFamily: 'var(--gt-font-display)', fontSize: 24, color: 'var(--gt-fg-1)', letterSpacing: '-0.01em',
              }}>{l.score}</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--gt-fg-1)' }}>{l.name}</span>
              <span className="gt-body-sm" style={{ margin: 0 }}>{l.source}</span>
              <span style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 12, color: 'var(--gt-fg-3)' }}>
                {['12m ago', '3d ago', '14d ago', '47d ago'][i]}
              </span>
              <Tag tone={l.tone}>{l.tag}</Tag>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { UXShowcase, SupportTicketLog, LeadScoring });
