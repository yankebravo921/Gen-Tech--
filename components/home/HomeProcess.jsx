// HomeProcess — what happens in 30 minutes, then 5 days.
// HomePromise — the risk reversal block, dark.

const HomeProcess = () => {
  const steps = [
  { n: '01', t: '00:00 — Map your funnel live', d: 'You share your screen. We walk every screen of your conversion path with you, in real time. No slides. No surveys.' },
  { n: '02', t: '00:18 — Find the leak', d: 'We point at the exact step where qualified intent is dying. Not a guess. A measurable drop, in dollars per month.' },
  { n: '03', t: '00:30 — You walk away', d: 'You have the leak, the cost, and the rough fix. You decide if you want our written audit. Most do.' },
  { n: '04', t: 'Day 5 — Written audit', d: 'A document with the leak, the loss, the proposed fix, the projected lift. Yours to keep. Yours to ignore.' }];

  return (
    <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <Eyebrow>What 30 minutes looks like</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>
            No slides. No discovery questionnaire. We get in your funnel.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {steps.map((s, i) =>
          <div key={s.n} style={{
            padding: '28px 24px 28px 0',
            borderTop: '1px solid var(--gt-border)',
            borderRight: i < steps.length - 1 ? '1px solid var(--gt-border)' : 'none',
            paddingLeft: i === 0 ? 0 : 28
          }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span className="gt-mono-sm" style={{ letterSpacing: '0.05em' }}>{s.n}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--gt-border)' }} />
              </div>
              <h4 className="gt-h4" style={{ margin: '0 0 10px', fontSize: 17 }}>{s.t}</h4>
              <p className="gt-body-sm" style={{ margin: 0, lineHeight: 1.55 }}>{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const HomePromise = () =>
<section className="gt-on-dark" style={{
  background: 'var(--gt-ink)', padding: '120px 24px', position: 'relative', overflow: 'hidden'
}}>
    <div style={{
    position: 'absolute', inset: 0, opacity: 0.4,
    backgroundImage: 'url(assets/dark-mesh.png)', backgroundSize: "auto", backgroundPosition: "center bottom"
  }} />
    <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <Eyebrow>The promise</Eyebrow>
        <h2 className="gt-display-md" style={{ margin: '14px 0 24px', color: '#fff' }}>
          Pay nothing unless you want us to fix it.
        </h2>
        <p className="gt-body-lg" style={{ margin: 0, color: 'var(--gt-fg-on-dark-2)' }}>
          The diagnostic is free because we&rsquo;re only interested in the operators we can move. If the audit is wrong, you owe us nothing. If we don&rsquo;t hit the projected lift in 90 days, we work for free until we do. That&rsquo;s the whole offer.
        </p>
      </div>

      <div style={{
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 20, padding: 28
    }}>
        {[
      ['Free 30-minute live diagnostic', 'No discovery call. No qualifier form.'],
      ['Written audit in 5 days', 'Yours to keep — even if you walk.'],
      ['90-day lift guarantee', 'We work free until projected lift lands.'],
      ['Three operators per month', 'Hard cap. We say no to most.']].
      map(([t, d]) =>
      <div key={t} style={{
        display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
            <span style={{
          width: 24, height: 24, borderRadius: '50%', background: 'var(--gt-blue)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0
        }}><Icon name="check" size={14} /></span>
            <div>
              <div style={{ color: '#fff', fontSize: 15, fontWeight: 500, marginBottom: 2 }}>{t}</div>
              <div style={{ color: 'var(--gt-fg-on-dark-2)', fontSize: 13 }}>{d}</div>
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


Object.assign(window, { HomeProcess, HomePromise });