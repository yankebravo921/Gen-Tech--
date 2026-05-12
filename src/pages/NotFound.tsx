// 404 page
import { Button, Icon } from '@/components/anyflow/Atoms'

export default function NotFound() {
  return (
    <section style={{
      background: 'var(--gt-bg)', minHeight: '70vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '48px 24px', textAlign: 'center',
    }}>
      <div>
        <div className="gt-metric" style={{ fontSize: 120, color: 'var(--gt-fg-3)', marginBottom: 16 }}>404</div>
        <h1 className="gt-display-sm" style={{ margin: '0 0 16px' }}>Page not found</h1>
        <p className="gt-body-lg" style={{ margin: '0 0 36px', color: 'var(--gt-fg-2)' }}>
          This page doesn{'\u2019'}t exist. Maybe the leak is here too.
        </p>
        <Button variant="primary" href="/">
          Back to the diagnostic <Icon name="arrow-right" size={16} />
        </Button>
      </div>
    </section>
  )
}
