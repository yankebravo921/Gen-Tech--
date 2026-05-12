// deprecated page
import { Eyebrow, Button, Icon, ScarcityCounter, Tag } from '@/components/anyflow/Atoms'
import ThePromise from '@/sections/v2/ThePromise'
import FinalCTA from '@/sections/v2/FinalCTA'
import Footer from '@/sections/v2/Footer'

export default function AiAgents() {
  const lines = [
    ['09:14:02', 'inbound', 'Customer asks: "Can I move my Friday booking to Saturday?"'],
    ['09:14:03', 'agent', 'Pulled booking #28491 from Acme CRM.'],
    ['09:14:04', 'agent', 'Checked Saturday availability — 3 slots.'],
    ['09:14:05', 'agent', 'Confirmed move via SMS. Ticket closed.'],
    ['09:14:05', 'metric', 'Resolution time: 3.1s · Human time: 0s'],
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--gt-bg)', position: 'relative' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px 36px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <Eyebrow>AI support agents</Eyebrow>
          </div>
          <h1 className="gt-display-xl" style={{ margin: '0 auto', maxWidth: 1080, textAlign: 'center', letterSpacing: '-0.02em' }}>
            AI agents that{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
              actually do the work.
              <span aria-hidden="true" style={{
                position: 'absolute', left: 0, right: 0, bottom: '0.05em', height: '0.16em',
                background: 'var(--gt-orange)', opacity: 0.85, zIndex: -1, borderRadius: 2,
              }} />
            </span>
          </h1>
          <p className="gt-body-lg" style={{ margin: '32px auto 0', maxWidth: 660, textAlign: 'center', color: 'var(--gt-fg-2)' }}>
            Voice agents, WhatsApp agents, customer support agents that complete bookings, resolve tickets, and close loops without burning out a team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/book">
              Book the free diagnostic <Icon name="arrow-right" size={16} />
            </Button>
            <Button variant="secondary" size="lg">See a sample fix</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <ScarcityCounter remaining={1} total={3} month="May" />
          </div>
        </div>
        <div style={{ width: '100%', height: 360, backgroundImage: 'url(/assets/leaf-texture.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderTop: '1px solid var(--gt-border)', borderBottom: '1px solid var(--gt-border)' }} />
      </section>

      {/* Ticket log showcase */}
      <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <Eyebrow>What an agent actually does</Eyebrow>
            <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>Resolution, not deflection.</h2>
          </div>
          <div style={{ background: 'var(--gt-bg-card)', borderRadius: 20, padding: 28, border: '1px solid var(--gt-border)', boxShadow: 'var(--gt-shadow-md)' }}>
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
                <span style={{ color: lvl === 'inbound' ? 'var(--gt-orange)' : lvl === 'metric' ? 'var(--gt-green)' : 'var(--gt-blue)', fontWeight: 600 }}>{lvl}</span>
                <span style={{ color: 'var(--gt-fg-2)' }}>{msg}</span>
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
