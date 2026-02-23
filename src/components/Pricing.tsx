import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

interface Tier {
  label: string
  name: string
  price: string
  features: string[]
  featured?: boolean
}

const tiers: Tier[] = [
  {
    label: 'STARTER',
    name: 'Launch',
    price: '$2,000',
    features: [
      '~10 hrs/month of DevOps work',
      'CI/CD pipeline setup & maintenance',
      'Basic monitoring & alerting',
      'Shared Slack channel',
      'Monthly infrastructure review',
    ],
  },
  {
    label: 'GROWTH',
    name: 'Scale',
    price: '$4,000',
    featured: true,
    features: [
      '~25 hrs/month of DevOps work',
      'Full IaC management (Terraform/Pulumi)',
      'Kubernetes cluster management',
      'Cloud cost optimization',
      'Weekly sync + Slack support',
      '4-hour incident response SLA',
    ],
  },
  {
    label: 'ENTERPRISE',
    name: 'Dominate',
    price: '$6,500',
    features: [
      '~40 hrs/month of DevOps work',
      'Everything in Scale, plus:',
      'SOC 2 / HIPAA compliance setup',
      '24/7 on-call coverage',
      'Architecture reviews & roadmap',
      'Dedicated senior engineer',
      '2-hour incident response SLA',
    ],
  },
]

export default function Pricing() {
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)

  return (
    <section
      id="pricing"
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              color: COLORS.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: 16,
            }}
          >
            Transparent Pricing
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: COLORS.text,
              marginBottom: 16,
            }}
          >
            Pay for what you need.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            style={{
              fontSize: '1.05rem',
              color: COLORS.textSoft,
              maxWidth: 520,
              marginBottom: 56,
              lineHeight: 1.6,
            }}
          >
            No retainer lock-ins. No hidden fees. Month-to-month. Pause or cancel anytime.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {tiers.map((tier, i) => (
            <Reveal key={tier.label} delay={200 + i * 120}>
              <div
                style={{
                  position: 'relative',
                  background: tier.featured
                    ? `linear-gradient(180deg, ${COLORS.accentDim} 0%, ${COLORS.bgCard} 40%)`
                    : COLORS.bgCard,
                  border: `1px solid ${tier.featured ? COLORS.accent : COLORS.border}`,
                  borderRadius: 14,
                  padding: '40px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {tier.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -11,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: COLORS.accent,
                      color: '#06080a',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      padding: '4px 14px',
                      borderRadius: 100,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    MOST POPULAR
                  </span>
                )}

                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: COLORS.textMuted,
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  {tier.label}
                </p>

                <h3
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    color: COLORS.text,
                    marginBottom: 20,
                  }}
                >
                  {tier.name}
                </h3>

                <div style={{ marginBottom: 0 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '2.2rem',
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.85rem',
                      color: COLORS.textMuted,
                    }}
                  >
                    /mo
                  </span>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${COLORS.border}`,
                    margin: '24px 0',
                  }}
                />

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        fontSize: '0.9rem',
                        color: COLORS.textSoft,
                        lineHeight: 2,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          color: COLORS.accent,
                          marginRight: 8,
                        }}
                      >
                        &rarr;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#audit"
                  onMouseEnter={() => setHoveredBtn(i)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: tier.featured ? 700 : 600,
                    fontSize: '0.95rem',
                    padding: '14px 0',
                    width: '100%',
                    borderRadius: 10,
                    marginTop: 32,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    ...(tier.featured
                      ? {
                          background: COLORS.accent,
                          color: '#06080a',
                          border: 'none',
                          boxShadow:
                            hoveredBtn === i
                              ? '0 0 30px rgba(0,229,160,0.25)'
                              : 'none',
                        }
                      : {
                          background: 'transparent',
                          border: `1px solid ${
                            hoveredBtn === i ? COLORS.accent : COLORS.borderHover
                          }`,
                          color:
                            hoveredBtn === i ? COLORS.accent : COLORS.textSoft,
                        }),
                  }}
                >
                  Start with Free Audit
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={560}>
          <p
            style={{
              textAlign: 'center',
              color: COLORS.textMuted,
              fontSize: '0.9rem',
              marginTop: 48,
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            All plans month-to-month. Custom scope? Let&rsquo;s talk. Fixed-price projects from $3,000.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
