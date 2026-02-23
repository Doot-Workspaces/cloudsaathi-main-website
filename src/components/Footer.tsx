import { useState } from 'react'
import { COLORS } from '../constants'

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
      { label: 'Kubernetes', href: '#services' },
      { label: 'IaC & CI/CD', href: '#services' },
    ],
  },
  {
    header: 'Company',
    links: [
      { label: 'How It Works', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    header: 'Connect',
    links: [
      { label: 'hello@cloudsaathi.com', href: 'mailto:hello@cloudsaathi.com' },
      {
        label: 'Calendly',
        href: 'https://calendly.com/connect-cloudsaathi/30min',
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
              }}
            >
              Fractional DevOps for startups that ship.
            </p>
          </div>

          {/* Right: Link columns */}
          <div
            style={{
              display: 'flex',
              gap: 64,
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
            &copy; 2026 CloudSaathi
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
