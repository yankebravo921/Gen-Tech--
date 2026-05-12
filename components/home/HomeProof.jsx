// HomeProof — bare numbers in the Voiceflow metric style.
// HomeFAQ — short, declarative, sentence-case.

const HomeProof = () => {
  const metrics = [
    { v: '$184k', l: 'avg leak found per audit' },
    { v: '30 min', l: 'live mapping with you' },
    { v: '5 days', l: 'to written audit' },
    { v: '3 / mo', l: 'new operators we accept' },
  ];
  return (
    <section style={{ background: 'var(--gt-bg-soft)', padding: '96px 24px', borderTop: '1px solid var(--gt-border)', borderBottom: '1px solid var(--gt-border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {metrics.map((m, i) => (
            <div key={m.l} style={{
              padding: '0 32px',
              borderRight: i < metrics.length - 1 ? '1px solid var(--gt-border)' : 'none',
            }}>
              <div className="gt-metric" style={{ fontSize: 72 }}>{m.v}</div>
              <div className="gt-metric-label" style={{ marginTop: 10 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeFAQ = () => {
  const [open, setOpen] = React.useState(0);
  const qs = [
    { q: 'Why is the diagnostic free?', a: 'Because we only want the three operators a month we can actually move. If your numbers don\u2019t support a real fix, we tell you that on the call and you walk with notes. If they do, both sides know fast.' },
    { q: 'What do I need before the call?', a: 'Screen-share access to your site, your CRM, and one month of analytics. Thirty minutes on your calendar. That\u2019s it. No questionnaire.' },
    { q: 'What if I don\u2019t want to hire you?', a: 'Keep the audit. Hand it to your team. Hand it to another agency. We mean it \u2014 the document is yours.' },
    { q: 'Why only three new clients per month?', a: 'Because the audit takes real time and the fix takes more. We\u2019d rather do four projects right than forty wrong.' },
    { q: 'How do I know it\u2019s not a sales call?', a: 'You\u2019re sharing your screen for thirty minutes while we point at your funnel. If we start pitching at minute five, hang up. We don\u2019t.' },
  ];
  return (
    <section style={{ background: 'var(--gt-bg)', padding: '120px 24px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>Questions operators ask</Eyebrow>
          <h2 className="gt-display-md" style={{ margin: '14px 0 0' }}>Before you book the call.</h2>
        </div>
        <div>
          {qs.map((it, i) => (
            <div key={it.q} style={{ borderTop: '1px solid var(--gt-border)', borderBottom: i === qs.length - 1 ? '1px solid var(--gt-border)' : 'none' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
                padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
              }}>
                <span style={{ fontFamily: 'var(--gt-font-display)', fontSize: 24, color: 'var(--gt-fg-1)', lineHeight: 1.2 }}>{it.q}</span>
                <span style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'var(--gt-bg-soft)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gt-fg-1)', flexShrink: 0,
                  transition: 'transform 240ms cubic-bezier(.2,.7,.2,1)',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}><Icon name="plus" size={14} /></span>
              </button>
              {open === i && (
                <p className="gt-body" style={{ margin: '0 0 24px', maxWidth: 720 }}>{it.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HomeProof, HomeFAQ });
