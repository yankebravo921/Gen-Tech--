export default function Book() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || ''

  return (
    <section style={{ background: 'var(--gt-bg)', minHeight: '80vh', padding: '48px 24px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <h1 className="gt-display-md" style={{ margin: '0 0 24px' }}>Book the Revenue Leak Diagnostic</h1>
        <p className="gt-body-lg" style={{ margin: '0 0 48px', color: 'var(--gt-fg-2)' }}>
          30 minutes. We map your funnel live. You walk away knowing exactly where the leak is.
        </p>
        {bookingUrl ? (
          <iframe
            src={bookingUrl}
            style={{ width: '100%', height: 700, border: 'none', borderRadius: 16 }}
            title="Book a diagnostic call"
          />
        ) : (
          <div style={{
            padding: 48, background: 'var(--gt-bg-soft)', borderRadius: 16,
            border: '1px solid var(--gt-border)',
          }}>
            <p className="gt-body" style={{ margin: 0, color: 'var(--gt-fg-3)' }}>
              Booking calendar loading... Set <code>VITE_BOOKING_URL</code> in <code>.env.local</code> to enable.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
