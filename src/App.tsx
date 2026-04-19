import { Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Seo } from './components/Seo'
import { SiteLayout } from './components/SiteLayout'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { GlobalStyle } from './styles/theme'

const PortfolioPage = lazy(async () => ({ default: (await import('./pages/PortfolioPage')).PortfolioPage }))
const AquaPulsePage = lazy(async () => ({ default: (await import('./pages/AquaPulsePage')).AquaPulsePage }))
const SalesFunnelPage = lazy(async () => ({ default: (await import('./pages/SalesFunnelPage')).SalesFunnelPage }))
const SamsungCQCPage = lazy(async () => ({ default: (await import('./pages/SamsungCQCPage')).SamsungCQCPage }))
const BlogPage = lazy(async () => ({ default: (await import('./pages/BlogPage')).BlogPage }))
const BlogPostPage = lazy(async () => ({ default: (await import('./pages/BlogPostPage')).BlogPostPage }))
const BeyondPage = lazy(async () => ({ default: (await import('./pages/BeyondPage')).BeyondPage }))
const ContactPage = lazy(async () => ({ default: (await import('./pages/ContactPage')).ContactPage }))

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Seo />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/aqua-pulse" element={<AquaPulsePage />} />
              <Route path="/portfolio/sales-funnel" element={<SalesFunnelPage />} />
              <Route path="/portfolio/samsung-cqc" element={<SamsungCQCPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/beyond" element={<BeyondPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  )
}

export default App
