import { useState, useEffect } from 'react'
import { ArrowUpRight, Linkedin, Mail, Menu, X } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { siteMeta } from '../content/siteContent'

// ---------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------

const Shell = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: clip;
`

const Ambient = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(22px);
    opacity: 0.6;
  }

  &::before {
    top: 8rem;
    left: -6rem;
    width: 18rem;
    height: 18rem;
    background: rgba(14, 143, 131, 0.16);
  }

  &::after {
    right: -5rem;
    bottom: 10rem;
    width: 20rem;
    height: 20rem;
    background: rgba(231, 167, 94, 0.16);
  }
`

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: rgba(248, 243, 236, 0.72);
  border-bottom: 1px solid rgba(17, 32, 51, 0.05);
`

const HeaderInner = styled.div`
  width: var(--container);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.85rem 0;
`

const Brand = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.98rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  flex-shrink: 0;
  z-index: 50;
`

const Monogram = styled.span`
  display: grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
`

const MonogramImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

/* ── Desktop nav ──────────────────────────────────────────── */

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    color 180ms ease,
    background 180ms ease,
    transform 180ms ease;

  &:hover,
  &.active {
    color: var(--text);
    background: rgba(255, 255, 255, 0.65);
    transform: translateY(-1px);
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
`

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  font-size: 0.86rem;
  color: var(--text);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.06);

  &::before {
    content: '';
    flex-shrink: 0;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 0 5px rgba(14, 143, 131, 0.15);
  }

  @media (max-width: 920px) {
    display: none;
  }
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.78rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.06);
  color: var(--text-muted);
  transition:
    transform 180ms ease,
    color 180ms ease,
    border-color 180ms ease;

  &:hover {
    color: var(--text);
    border-color: rgba(17, 32, 51, 0.14);
    transform: translateY(-1px);
  }

  @media (max-width: 680px) {
    display: none;
  }
`

/* ── Hamburger button ─────────────────────────────────────── */

const HamburgerBtn = styled.button<{ $open: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 14px;
  border: 1px solid rgba(17, 32, 51, 0.1);
  background: ${(p) => p.$open ? 'var(--surface-dark)' : 'rgba(255,255,255,0.78)'};
  color: ${(p) => p.$open ? 'white' : 'var(--text)'};
  cursor: pointer;
  transition: background 200ms ease, color 200ms ease, border-color 200ms ease;
  z-index: 50;
  flex-shrink: 0;

  @media (max-width: 680px) {
    display: inline-flex;
  }
`

/* ── Mobile drawer overlay ────────────────────────────────── */

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(248, 243, 236, 0.97);
  backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 3rem;
  overflow-y: auto;
  animation: mobileOverlayIn 220ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @keyframes mobileOverlayIn {
    from {
      opacity: 0;
      transform: translateY(-0.75rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
`

const MobileNavItem = styled.div`
  opacity: 0;
  transform: translateX(-0.85rem);
  animation: mobileNavItemIn 220ms cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @keyframes mobileNavItemIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.2rem;
  border-radius: var(--radius-lg);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: background 160ms ease, color 160ms ease;

  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.85);
    color: var(--text);
  }

  &.active {
    color: var(--accent);
  }
`

const MobileNavNumber = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(17, 32, 51, 0.2);
  letter-spacing: 0.06em;
`

const MobileSocials = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(17, 32, 51, 0.08);
  margin-top: 2rem;
  opacity: 0;
  animation: mobileSocialsIn 220ms ease forwards;
  animation-delay: 220ms;

  @keyframes mobileSocialsIn {
    to { opacity: 1; }
  }
`

const MobileSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(17, 32, 51, 0.08);
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 160ms ease, border-color 160ms ease;

  &:hover {
    color: var(--text);
    border-color: rgba(17, 32, 51, 0.18);
  }
`

/* ── Page layout ──────────────────────────────────────────── */

const Main = styled.main`
  width: var(--container);
  margin: 0 auto;
  padding: 2rem 0 4rem;

  @media (max-width: 680px) {
    padding: 1.5rem 0 3rem;
  }
`

const Footer = styled.footer`
  width: var(--container);
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 0 0 3rem;

  @media (max-width: 680px) {
    padding: 0 0 2.5rem;
  }
`

const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-soft);

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const FooterText = styled.div`
  display: grid;
  gap: 0.35rem;

  strong { font-size: 1rem; }
  span { color: var(--text-muted); font-size: 0.96rem; }
`

const FooterAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.95rem 1.25rem;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #0d776e);
  transition: opacity 180ms ease, transform 180ms ease;
  white-space: nowrap;

  &:hover { opacity: 0.88; transform: translateY(-1px); }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const FooterMeta = styled.div`
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
  opacity: 0.72;
`

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact',   label: 'Contact' },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SiteLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <Shell>
      <Ambient />

      <Header>
        <HeaderInner>
          <Brand to="/">
            <Monogram>
              <MonogramImage src="/favicon.svg" alt={`${siteMeta.name} logo`} />
            </Monogram>
            {siteMeta.name}
          </Brand>

          {/* Desktop nav */}
          <Nav>
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavItem>
            ))}
          </Nav>

          {/* Desktop socials */}
          <Meta>
            <StatusPill>Open to impactful data and product work</StatusPill>
            <SocialLink href={`mailto:${siteMeta.email}`} aria-label="Email Bilal Ahmad">
              <Mail size={16} />
            </SocialLink>
            <SocialLink href={siteMeta.linkedin} target="_blank" rel="noreferrer" aria-label="Bilal Ahmad on LinkedIn">
              <Linkedin size={16} />
            </SocialLink>
          </Meta>

          {/* Mobile hamburger */}
          <HamburgerBtn
            $open={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </HamburgerBtn>
        </HeaderInner>
      </Header>

      {/* Mobile drawer */}
      {isOpen && (
          <MobileOverlay>
            <MobileNavList>
              {navLinks.map((link, i) => (
                <MobileNavItem
                  key={link.to}
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  <MobileNavLink to={link.to} end={link.to === '/'} onClick={() => setIsOpen(false)}>
                    {link.label}
                    <MobileNavNumber>0{i + 1}</MobileNavNumber>
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavList>

            <MobileSocials>
              <MobileSocialLink href={`mailto:${siteMeta.email}`}>
                <Mail size={15} /> Email
              </MobileSocialLink>
              <MobileSocialLink href={siteMeta.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn
              </MobileSocialLink>
            </MobileSocials>
          </MobileOverlay>
        )}

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <FooterCard>
          <FooterText>
            <strong>{siteMeta.name}</strong>
            <span>{siteMeta.role}</span>
          </FooterText>
          <FooterAction href={siteMeta.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <ArrowUpRight size={16} />
          </FooterAction>
        </FooterCard>
        <FooterMeta>© {new Date().getFullYear()} {siteMeta.name} · Crafted with curiosity, coffee &amp; clean code</FooterMeta>
      </Footer>
    </Shell>
  )
}
