import { Routes, Route } from 'react-router-dom'
import TopAnnouncementBar from '@/components/layout/TopAnnouncementBar'
import TopPillNav from '@/components/layout/TopPillNav'
import Home from '@/pages/Home'
import Book from '@/pages/Book'
import AiAgents from '@/pages/v2/AiAgents'
import Systems from '@/pages/v2/Systems'
import Websites from '@/pages/v2/Websites'
import Privacy from '@/pages/v2/Privacy'
import Terms from '@/pages/v2/Terms'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <div style={{ background: 'var(--gt-bg)', fontFamily: 'var(--gt-font-body)', color: 'var(--gt-fg-2)' }}>
      <div className="sticky top-0 z-50 flex flex-col">
        <TopAnnouncementBar />
        <TopPillNav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/ai-agents" element={<AiAgents />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
