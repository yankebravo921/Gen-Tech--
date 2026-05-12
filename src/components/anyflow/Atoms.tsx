import type { CSSProperties, ReactNode } from 'react'

/* ── Icon ─────────────────────────────────────────────────────────── */
interface IconProps {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
}

export const Icon = ({ name, size = 18, color = 'currentColor', strokeWidth = 1.6 }: IconProps) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'arrow-right': return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    case 'arrow-down-right': return <svg {...common}><path d="M7 7l10 10M17 8v9h-9" /></svg>
    case 'check': return <svg {...common}><path d="M5 12l5 5L20 7" /></svg>
    case 'minus': return <svg {...common}><path d="M5 12h14" /></svg>
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>
    case 'crosshair': return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>
    case 'flow': return <svg {...common}><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6" /></svg>
    case 'phone': return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
    case 'message': return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg>
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
    case 'trending': return <svg {...common}><path d="M22 7L13.5 15.5l-5-5L2 17" /><path d="M16 7h6v6" /></svg>
    case 'trending-down': return <svg {...common}><path d="M22 17 13.5 8.5l-5 5L2 7" /><path d="M16 17h6v-6" /></svg>
    case 'zap': return <svg {...common}><path d="M13 2L3 14h9l-1 8 10-12h-9z" /></svg>
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    case 'shield': return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
    case 'filter': return <svg {...common}><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" /></svg>
    case 'route': return <svg {...common}><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M6 16V8a4 4 0 0 1 4-4h2M18 8v8a4 4 0 0 1-4 4h-2" /></svg>
    case 'alert': return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 8v5M12 16h.01" /></svg>
    case 'dollar': return <svg {...common}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    case 'cursor': return <svg {...common}><path d="M3 3l7.07 17 2.51-7.39L20 10.07 3 3z" /></svg>
    default: return null
  }
}

/* ── Eyebrow ──────────────────────────────────────────────────────── */
interface EyebrowProps {
  children: ReactNode
  color?: 'orange' | 'blue' | string
  style?: CSSProperties
}

export const Eyebrow = ({ children, color = 'orange', style }: EyebrowProps) => {
  const c = color === 'orange' ? 'var(--gt-orange)' : color === 'blue' ? 'var(--gt-blue)' : color
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--gt-font-body)', fontWeight: 500, fontSize: 13,
      letterSpacing: '0.02em', color: c, ...style
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: c }} />
      {children}
    </span>
  )
}

/* ── Button ───────────────────────────────────────────────────────── */
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  style?: CSSProperties
}

export const Button = ({ children, variant = 'primary', size = 'md', onClick, href, style }: ButtonProps) => {
  const cls = `gt-btn gt-btn-${variant}` + (size !== 'md' ? ` gt-btn-${size}` : '')
  if (href) return <a href={href} className={cls} onClick={onClick} style={{ textDecoration: 'none', ...style }}>{children}</a>
  return <button className={cls} onClick={onClick} style={style}>{children}</button>
}

/* ── Tag ──────────────────────────────────────────────────────────── */
interface TagProps {
  children: ReactNode
  tone?: 'orange' | 'blue' | 'neutral' | 'dark'
  style?: CSSProperties
}

export const Tag = ({ children, tone = 'orange', style }: TagProps) => {
  const stylesMap: Record<string, { bg: string; fg: string }> = {
    orange: { bg: 'var(--gt-orange-soft)', fg: 'var(--gt-orange)' },
    blue: { bg: 'var(--gt-blue-soft)', fg: 'var(--gt-blue)' },
    neutral: { bg: 'var(--gt-bg-mute)', fg: 'var(--gt-fg-1)' },
    dark: { bg: '#1A1B1E', fg: '#fff' }
  }
  const s = stylesMap[tone] || stylesMap.orange
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500,
      padding: '4px 10px', borderRadius: 999, background: s.bg, color: s.fg,
      fontFamily: 'var(--gt-font-body)', letterSpacing: '0.01em', ...style
    }}>{children}</span>
  )
}

/* ── ScarcityCounter ──────────────────────────────────────────────── */
interface ScarcityCounterProps {
  remaining?: number
  total?: number
  month?: string
  style?: CSSProperties
}

export const ScarcityCounter = ({ remaining = 1, total = 3, month = 'May', style }: ScarcityCounterProps) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    ...style
  }}>
    <span style={{
      width: 8, height: 8, borderRadius: '50%', background: 'var(--gt-green)',
      boxShadow: '0 0 0 4px rgba(47,168,92,0.18)'
    }} />
    <span style={{ fontFamily: 'var(--gt-font-body)', fontSize: 13, color: 'var(--gt-fg-3)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
      {remaining} OF {total} {month} SPOTS LEFT
    </span>
  </div>
)

/* ── HRule ─────────────────────────────────────────────────────────── */
interface HRuleProps {
  label?: string
  style?: CSSProperties
}

export const HRule = ({ label, style }: HRuleProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...style }}>
    <div style={{ flex: 1, height: 1, background: 'var(--gt-border)' }} />
    {label && <span style={{ fontFamily: 'var(--gt-font-mono)', fontSize: 11, color: 'var(--gt-fg-3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</span>}
    {label && <div style={{ flex: 1, height: 1, background: 'var(--gt-border)' }} />}
  </div>
)
