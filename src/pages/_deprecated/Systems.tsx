import { Eyebrow, Button, Icon, ScarcityCounter, Tag } from '@/components/anyflow/Atoms'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'

export default function Systems() {
  const leads = [
    { name: 'Acme Logistics', score: 94, source: 'Inbound · Pricing page', tag: 'Send to sales', tone: 'blue' as const },
    { name: 'Northwind Co', score: 71, source: 'Reactivation · Q4 \u201924', tag: 'Reach out today', tone: 'orange' as const },
    { name: 'Bluebird Studio', score: 38, source: 'Cold form fill', tag: 'Auto-nurture', tone: 'neutral' as const },
    { name: 'Summit Holdings', score: 12, source: 'SEO long-tail', tag: 'Drop', tone: 'neutral' as const },
  ]
  const lastTouch = ['12m ago', '3d ago', '14d ago', '47d ago']

  return (
    <>
      <section style={{ background: 'var(--gt-bg)', position: 'relative' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px 36px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <Eyebrow>Lead & revenue systems</Eyebrow>
          </div>
          <h1 className="gt-display-xl" style={{ margin: '0 auto', maxWidth: 1080, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Turn every lead{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
              into a result.
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: '0.05em', height: '0.16em', background: 'var(--gt-orange)', opacity: 0.85, zIndex: -1, borderRadius: 2 }} />
            </span>
          </h1>
          <p className="gt-body-lg" style={{ margin: '32px auto 0', maxWidth: 660, textAlign: 'center', color: 'var(--gt-fg-2)' }}>
            Systematic lead qualification. Reactivation of dormant data points. Autonomous AI integration mapping specifically engineered to target and close maximum revenue gaps.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/book">Book the free diagnostic <Icon name="arrow-right" size={16} /></Button>
            <Button variant="secondary" size="lg">See a sample fix</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <ScarcityCounter remaining={1} total={3} month="May" />
          </div>
        </div>
        <div style={{ width: '100%', height: 360, backgroundImage: 'url(/assets/hero-grass-field.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderTop: '1px solid var(--gt-border)', borderBottom: '1px solid var(--gt-border)' }} />
      </section>

      {/* Lead scoring */}
      <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <Eyebrow>What your team sees</Eyebrow>
            <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>Only the conversations that close.</h2>
          </div>
          <div style={{ background: 'var(--gt-bg-card)', borderRadius: 20, border: '1px solid var(--gt-border)', boxShadow: 'var(--gt-shadow-md)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '60px 1.6fr 1fr 1fr 160px', padding: '14px 24px', background: 'var(--gt-bg-soft)', fontSize: 12, color: 'var(--gt-fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Score</span><span>Lead</span><span>Source</span><span>Last touch</span><span>Action</span>
            </div>
            {leads.map((l, i) => (
              <div key={l.name} style={{
                display: 'grid', gridTemplateColumns: '60px 1.6fr 1fr 1fr 160px', padding: '20px 24px', alignItems: 'center',
                borderTop: '1px solid var(--gt-border)', background: i === 0 ? 'var(--gt-blue-soft)' : 'transparent',
              }}>
                <span style={{ fontFamily: 'var(--gt-font-display)', fontSize: 24, color: 'var(--gt-fg-1)', letterSpacing: '-0.01em' }}>{l.score}</span>
                <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--gt-fg-1)' }}>{l.name}</span>
                <span className="gt-body-sm" style={{ margin: 0 }}>{l.source}</span>
                <span style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 12, color: 'var(--gt-fg-3)' }}>{lastTouch[i]}</span>
                <Tag tone={l.tone}>{l.tag}</Tag>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThePromise />
      <FinalCTA />
      <Footer />
    </>
  )
}
