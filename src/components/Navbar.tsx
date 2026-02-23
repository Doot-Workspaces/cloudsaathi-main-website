import { useState, useEffect } from 'react'
import { COLORS } from '../constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [mobileCtaHovered, setMobileCtaHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(6,8,10,0.92)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 700,
            fontSize: '1.3rem',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#ffffff' }}>cloud</span>
          <span style={{ color: COLORS.accent }}>saathi</span>
        </a>

        {/* Desktop Links */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                color: hoveredLink === link.href ? '#ffffff' : COLORS.textSoft,
                transition: 'all 0.3s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#06080a',
              background: COLORS.accent,
              padding: '9px 22px',
              borderRadius: 8,
              transition: 'all 0.3s ease',
              boxShadow: ctaHovered ? '0 0 20px rgba(0,229,160,0.3)' : 'none',
            }}
          >
            Free Audit →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: COLORS.text,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: COLORS.text,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: COLORS.text,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className="nav-mobile-menu"
        style={{
          display: 'none',
          maxHeight: mobileOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          background: 'rgba(6,8,10,0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: mobileOpen ? `1px solid ${COLORS.border}` : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '12px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLinkClick}
              onMouseEnter={() => setHoveredLink(`mobile-${link.href}`)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                color: hoveredLink === `mobile-${link.href}` ? '#ffffff' : COLORS.textSoft,
                padding: '10px 0',
                transition: 'all 0.3s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={handleMobileLinkClick}
            onMouseEnter={() => setMobileCtaHovered(true)}
            onMouseLeave={() => setMobileCtaHovered(false)}
            style={{
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#06080a',
              background: COLORS.accent,
              padding: '9px 22px',
              borderRadius: 8,
              textAlign: 'center',
              marginTop: 8,
              transition: 'all 0.3s ease',
              boxShadow: mobileCtaHovered ? '0 0 20px rgba(0,229,160,0.3)' : 'none',
            }}
          >
            Free Audit →
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .nav-desktop {
          display: flex !important;
        }
        .nav-mobile {
          display: none !important;
        }
        .nav-mobile-menu {
          display: none !important;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile {
            display: flex !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  )
}
