import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Seo } from './components/Seo'
import { SiteLayout } from './components/SiteLayout'
import { ScrollToTop } from './components/ScrollToTop'
import { BeyondPage } from './pages/BeyondPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { ContactPage } from './pages/ContactPage'
import { AquaPulsePage } from './pages/AquaPulsePage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { SalesFunnelPage } from './pages/SalesFunnelPage'
import { SamsungCQCPage } from './pages/SamsungCQCPage'
import { GlobalStyle } from './styles/theme'

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Seo />
      <ScrollToTop />
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </>
  )
}

export default App
