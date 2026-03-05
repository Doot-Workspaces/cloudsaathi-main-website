import { useState } from 'react'
import { COLORS, CALENDLY_URL, EMAIL } from '../constants'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface LinkColumn {
  header: string
  links: FooterLink[]
}

const COLUMNS: LinkColumn[] = [
  {
    header: 'Services',
    links: [
      { label: 'Fractional DevOps', href: '#services' },
      { label: 'Cost Optimization', href: '#services' },
      { label: 'Security & Compliance', href: '#services' },
      { label: 'Kubernetes', href: '#services' },
    ],
  },
  {
    header: 'Pricing',
    links: [
      { label: 'Hour Packs', href: '#pricing' },
      { label: 'Pay As You Go', href: '#pricing' },
      { label: 'One-Time Projects', href: '#pricing' },
      { label: 'Free Audit', href: '#audit' },
    ],
  },
  {
    header: 'Company',
    links: [
      { label: 'How It Works', href: '#process' },
      { label: 'Founders', href: '#founders' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    header: 'Connect',
    links: [
      { label: EMAIL, href: `mailto:${EMAIL}` },
      {
        label: 'Calendly',
        href: CALENDLY_URL,
        external: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/cloudsaathi',
        external: true,
      },
    ],
  },
]

const BOTTOM_LINKS = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredBottom, setHoveredBottom] = useState<string | null>(null)

  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: '64px 0 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Left: Logo + tagline */}
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 700,
                fontSize: '1.1rem',
              }}
            >
              <span style={{ color: '#ffffff' }}>cloud</span>
              <span style={{ color: COLORS.accent }}>saathi</span>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: COLORS.textMuted,
                marginTop: 8,
                maxWidth: 260,
                lineHeight: 1.5,
              }}
            >
              Fractional DevOps for startups that ship. Based in New Delhi, India.
            </p>
          </div>

          {/* Right: Link columns */}
          <div
            style={{
              display: 'flex',
              gap: 56,
              flexWrap: 'wrap',
            }}
          >
            {COLUMNS.map((column) => (
              <div key={column.header}>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: COLORS.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 16,
                  }}
                >
                  {column.header}
                </p>
                {column.links.map((link) => {
                  const linkKey = `${column.header}-${link.label}`
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onMouseEnter={() => setHoveredLink(linkKey)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        color:
                          hoveredLink === linkKey ? '#ffffff' : COLORS.textSoft,
                        textDecoration: 'none',
                        lineHeight: 2,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              color: COLORS.textMuted,
            }}
          >
            &copy; 2026 CloudSaathi &middot; Official site: <a href="https://cloudsaathi.com" style={{ color: 'inherit', textDecoration: 'none' }}>cloudsaathi.com</a>
          </span>

          <div
            style={{
              display: 'flex',
              gap: 24,
            }}
          >
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredBottom(link.label)}
                onMouseLeave={() => setHoveredBottom(null)}
                style={{
                  fontSize: '0.8rem',
                  color:
                    hoveredBottom === link.label
                      ? '#ffffff'
                      : COLORS.textSoft,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
