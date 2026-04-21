import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Seo } from './components/Seo'
import { SiteLayout } from './components/SiteLayout'
import { ScrollToTop } from './components/ScrollToTop'
import { GlobalStyle } from './styles/theme'

const HomePage = lazy(async () => ({ default: (await import('./pages/HomePage')).HomePage }))
const PortfolioPage = lazy(async () => ({ default: (await import('./pages/PortfolioPage')).PortfolioPage }))
const AquaPulsePage = lazy(async () => ({ default: (await import('./pages/AquaPulsePage')).AquaPulsePage }))
const SalesFunnelPage = lazy(async () => ({ default: (await import('./pages/SalesFunnelPage')).SalesFunnelPage }))
const SamsungCQCPage = lazy(async () => ({ default: (await import('./pages/SamsungCQCPage')).SamsungCQCPage }))
const BlogPage = lazy(async () => ({ default: (await import('./pages/BlogPage')).BlogPage }))
const BlogPostPage = lazy(async () => ({ default: (await import('./pages/BlogPostPage')).BlogPostPage }))
const BeyondPage = lazy(async () => ({ default: (await import('./pages/BeyondPage')).BeyondPage }))
const ContactPage = lazy(async () => ({ default: (await import('./pages/ContactPage')).ContactPage }))

function App() {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
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
    </>
  )
}

export default App
