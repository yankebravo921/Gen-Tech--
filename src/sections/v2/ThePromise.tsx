import { Eyebrow, Icon } from '@/components/anyflow/Atoms'

export default function ThePromise() {
  const items = [
    ['Free 30-minute live diagnostic', 'No discovery call. No qualifier form.'],
    ['Written audit in 5 days', 'Yours to keep — even if you walk.'],
    ['90-day lift guarantee', 'We work free until projected lift lands.'],
    ['Three operators per month', 'Hard cap. We say no to most.'],
  ]

  return (
    <section className="gt-on-dark" style={{
      background: 'var(--gt-ink)', padding: '120px 24px', position: 'relative', overflow: 'hidden',
    }}>

      <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>The promise</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 24px', color: '#fff' }}>
            Pay nothing unless you want us to fix it.
          </h2>
          <p className="gt-body-lg" style={{ margin: 0, color: 'var(--gt-fg-on-dark-2)' }}>
            The diagnostic is free because we{'\u2019'}re only interested in the operators we can move. If the audit is wrong, you owe us nothing. If we don{'\u2019'}t hit the projected lift in 90 days, we work for free until we do. That{'\u2019'}s the whole offer.
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 20, padding: 28,
        }}>
          {items.map(([t, d]) => (
            <div key={t} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', background: 'var(--gt-blue)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0,
              }}><Icon name="check" size={14} /></span>
              <div>
                <div style={{ color: '#fff', fontSize: 15, fontWeight: 500, marginBottom: 2 }}>{t}</div>
                <div style={{ color: 'var(--gt-fg-on-dark-2)', fontSize: 13 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
