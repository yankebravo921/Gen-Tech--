import { lazy, Suspense, useRef } from 'react'
import { Eyebrow } from '@/components/anyflow/Atoms'
import { useInView } from 'framer-motion'

const BrandMomentLogo = lazy(() => import('@/components/BrandMomentLogo'))

export default function BrandMoment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "300px 0px" })

  return (
    <section 
      id="brand-moment" 
      ref={ref}
      style={{
        background: '#F5F1EA',
        width: '100%',
        minHeight: '80vh',
        maxHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      {/* Eyebrow */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Eyebrow color="orange" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
          BUILT BY OPERATORS, FOR OPERATORS
        </Eyebrow>
      </div>

      {/* 3D Logo — zoomed-in camera variant, fills the frame */}
      <div style={{ width: '100%', maxWidth: 600, height: 480, position: 'relative' }}>
        <Suspense fallback={
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 48, height: 48, border: '2px solid #ccc', borderTopColor: '#A3E635', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          </div>
        }>
          {isInView && <BrandMomentLogo />}
        </Suspense>
      </div>
    </section>
  )
}
