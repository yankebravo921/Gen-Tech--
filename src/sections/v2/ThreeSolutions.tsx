import { Link } from 'react-router-dom'
import { Eyebrow, Icon } from '@/components/anyflow/Atoms'

export default function ThreeSolutions() {
  const offers = [
    {
      tag: 'Solution 01',
      title: 'UX & conversion optimization',
      copy: 'Rebuild the failing booking system. Strip the friction out of the flow customers actually pay you for. Diagnose, fix, ship.',
      bullets: ['Diagnostic-first redesign', 'Booking & checkout rebuilds', 'Mobile-first conversion'],
      href: '/websites',
    },
    {
      tag: 'Solution 02',
      title: 'AI support agents',
      copy: 'Agents that complete bookings, resolve tickets, and close loops instantly. Support stops being a cost center and starts being a performance engine.',
      bullets: ['Resolution, not deflection', 'Trained on your real tickets', 'Live in 14 days'],
      href: '/ai-agents',
    },
    {
      tag: 'Solution 03',
      title: 'Lead & revenue systems',
      copy: 'Score every lead. Reactivate the dormant ones. Send your team only the conversations that close. Built on the data already in your CRM.',
      bullets: ['Lead qualification AI', 'Reactivation sequences', 'Pipeline that pays'],
      href: '/systems',
    },
  ]

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
            <Link key={o.title} to={o.href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                position: 'relative', height: 280, borderRadius: 20, overflow: 'hidden',
                backgroundColor: '#0A0A0A',
                marginBottom: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ fontFamily: 'var(--gt-font-serif)', fontSize: '8rem', color: '#F5F1EA', lineHeight: 1 }}>
                  {o.tag.replace('Solution ', '')}
                </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
