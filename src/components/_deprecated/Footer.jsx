// Footer — dark, multi-column, leaf texture in corner.
// CTASection — dark closer with the diagnostic offer.

const CTASection = ({ spotsLeft = 1, month = 'May' }) =>
<section className="gt-on-dark" style={{
  background: 'var(--gt-ink)', padding: '120px 24px', textAlign: 'center',
  position: 'relative', overflow: 'hidden'
}}>
    <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'url(assets/dark-mesh.png)', backgroundSize: 'cover', opacity: "0.01"
  }} />
    <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto' }}>
      <Eyebrow>The diagnostic</Eyebrow>
      <h2 className="gt-display-lg" style={{ margin: '14px auto 24px', color: '#fff' }}>
        Book the call. Find the leak. Decide later.
      </h2>
      <p className="gt-body-lg" style={{ margin: '0 auto 36px', maxWidth: 600, color: 'var(--gt-fg-on-dark-2)' }}>
        Thirty minutes. We map your funnel live. You walk away with a written audit in five days. Pay nothing unless you want us to fix it.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" size="lg" href="index.html#book">
          Book the free diagnostic <Icon name="arrow-right" size={16} />
        </Button>
        <ScarcityCounter remaining={spotsLeft} total={3} month={month}
      style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', color: '#fff' }} />
      </div>
    </div>
  </section>;


const Footer = () => {
  const cols = [
  ['Offer', [
  ['The diagnostic', 'index.html'],
  ['UX & conversion', 'ux-conversion.html'],
  ['AI support agents', 'ai-support.html'],
  ['Lead & revenue systems', 'lead-revenue.html']]],

  ['Proof', [
  ['Case studies', '#'],
  ['Benchmarks', '#'],
  ['Recent audits', '#']]],

  ['Company', [
  ['About', '#'],
  ['Process', '#'],
  ['Contact', '#']]]];


  return (
    <footer className="gt-on-dark" style={{
      background: 'var(--gt-ink)', color: '#fff', padding: '72px 24px 36px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', left: -20, bottom: -40, width: 260, height: 280,
        backgroundImage: 'url(assets/leaf-texture.png)', backgroundSize: 'cover', opacity: 0.35,
        mixBlendMode: 'screen'
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(3, 1fr)', gap: 32 }}>
          <div>
            <img src="assets/gentech-logo.svg" alt="Gen Tech +" style={{ height: 28, filter: 'invert(1)' }} />
            <p style={{ fontSize: 14, color: 'var(--gt-fg-on-dark-2)', marginTop: 18, lineHeight: 1.55, maxWidth: 280 }}>
              We find the exact spot in your funnel where money is leaking. Then we fix it. Three operators a month, no exceptions.
            </p>
            <div style={{ marginTop: 24 }}>
              <ScarcityCounter remaining={1} total={3} month="May"
              style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', color: '#fff' }} />
            </div>
          </div>
          {cols.map(([title, items]) =>
          <div key={title}>
              <div style={{ fontSize: 12, color: 'var(--gt-fg-on-dark-2)', marginBottom: 14, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(([item, href]) =>
              <li key={item}>
                    <a href={href} style={{
                  color: '#fff', fontSize: 14, textDecoration: 'none'
                }}>{item}</a>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 64, paddingTop: 24, borderTop: '1px solid #2C2D31', fontSize: 12, color: 'var(--gt-fg-on-dark-2)' }}>
          <span>© 2026 Gen Tech +. All rights reserved.</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>);

};

Object.assign(window, { CTASection, Footer });