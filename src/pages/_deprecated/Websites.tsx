import { Eyebrow, Button, Icon, ScarcityCounter, Tag } from '@/components/anyflow/Atoms'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'

export default function Websites() {
  return (
    <>
      <section style={{ background: 'var(--gt-bg)', position: 'relative' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px 36px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <Eyebrow>UX & conversion optimization</Eyebrow>
          </div>
          <h1 className="gt-display-xl" style={{ margin: '0 auto', maxWidth: 1080, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Your website should sell.{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
              If it doesn{'\u2019'}t,
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: '0.05em', height: '0.16em', background: 'var(--gt-orange)', opacity: 0.85, zIndex: -1, borderRadius: 2 }} />
            </span>{' '}
            we fix it.
          </h1>
          <p className="gt-body-lg" style={{ margin: '32px auto 0', maxWidth: 660, textAlign: 'center', color: 'var(--gt-fg-2)' }}>
            Diagnostic-first redesign of the conversion system. We don{'\u2019'}t redesign websites. We rebuild the part that{'\u2019'}s losing you money.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/book">Book the free diagnostic <Icon name="arrow-right" size={16} /></Button>
            <Button variant="secondary" size="lg">See a sample fix</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <ScarcityCounter remaining={1} total={3} month="May" />
          </div>
        </div>
        <div style={{ width: '100%', height: 360, backgroundImage: 'url(/assets/motion-blur-grass.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderTop: '1px solid var(--gt-border)', borderBottom: '1px solid var(--gt-border)' }} />
      </section>

      {/* UX Before/After showcase */}
      <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <Eyebrow>The fix, visualized</Eyebrow>
            <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>A booking widget that actually books.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Before */}
            <div style={{ background: 'var(--gt-bg-soft)', borderRadius: 20, padding: 28, border: '1px solid var(--gt-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <span className="gt-mono-sm" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>Before</span>
                <Tag tone="neutral">4.2s load · 2.1% conv</Tag>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid var(--gt-border)', color: 'var(--gt-fg-3)', minHeight: 220, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['Service', 'Date', 'Time', 'Details'].map((t, i) => (
                    <span key={t} style={{ fontSize: 11, padding: '6px 10px', background: i === 0 ? 'var(--gt-bg-soft)' : 'transparent', border: '1px solid var(--gt-border)', borderRadius: 6 }}>{t}</span>
                  ))}
                </div>
                {[1, 2, 3].map(n => <div key={n} style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6 }} />)}
                <div style={{ height: 36, background: 'var(--gt-bg-soft)', borderRadius: 6, width: '60%' }} />
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: 11, padding: '8px 14px', background: 'var(--gt-bg-mute)', color: 'var(--gt-fg-3)', borderRadius: 999 }}>Continue (disabled)</span>
                </div>
              </div>
              <p className="gt-body-sm" style={{ margin: '16px 0 0' }}>Four tabs. Calendar hidden. Mobile spinner. 89% drop.</p>
            </div>
            {/* After */}
            <div style={{ background: 'var(--gt-ink)', borderRadius: 20, padding: 28, color: '#fff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'url(/assets/dark-mesh.png)', backgroundSize: 'cover' }} />
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
                        color: i === 4 ? '#fff' : 'var(--gt-fg-1)', borderRadius: 6,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500,
                      }}>{i + 1}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['9:00', '10:30', '14:00'].map(t => (
                      <span key={t} style={{ fontSize: 12, padding: '8px 14px', background: 'var(--gt-bg-soft)', borderRadius: 999 }}>{t}</span>
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

      <ThePromise />
      <FinalCTA />
      <Footer />
    </>
  )
}
