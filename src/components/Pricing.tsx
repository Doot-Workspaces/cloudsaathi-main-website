import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const models = [
  {
    label: 'ONE-TIME PROJECTS',
    name: 'Build & Ship',
    rate: '10%',
    basis: 'of your infrastructure cost',
    description:
      'Migrations, setups, architecture overhauls — scoped and delivered. You pay a flat 10% of the infrastructure spend involved.',
    includes: [
      'Cloud migration & setup',
      'CI/CD pipeline builds',
      'Infrastructure-as-Code (Terraform / Pulumi)',
      'Architecture design & review',
      'Security hardening & compliance',
    ],
    example: 'Your infra costs $20K → you pay $2K. That's it.',
    cta: 'Start with Free Audit',
    featured: false,
  },
  {
    label: 'MANAGED / CONTINUOUS',
    name: 'Run & Scale',
    rate: '10%',
    basis: 'of your monthly server cost',
    description:
      'Ongoing DevOps support, monitoring, optimization — billed monthly as a percentage of your running infrastructure.',
    includes: [
      'Cloud cost optimization',
      'Monitoring, alerting & incident response',
      'Kubernetes & container management',
      'Continuous deployment pipelines',
      'Weekly syncs + Slack support',
      'Dedicated engineer for your stack',
    ],
    example: 'Server bill is $5K/mo → you pay $500/mo. Scales with you.',
    cta: 'Book a Free Call →',
    featured: true,
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
            Simple Pricing
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
            10% of your infra cost. That's it.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            style={{
              fontSize: '1.05rem',
              color: COLORS.textSoft,
              maxWidth: 560,
              marginBottom: 56,
              lineHeight: 1.6,
            }}
          >
            No fixed tiers. No guesswork. Whether it's a one-time project or
            ongoing support, you pay 10% of your infrastructure spend —
            nothing more.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
            maxWidth: 860,
          }}
        >
          {models.map((model, i) => (
            <Reveal key={model.label} delay={200 + i * 140}>
              <div
                style={{
                  position: 'relative',
                  background: model.featured
                    ? `linear-gradient(180deg, ${COLORS.accentDim} 0%, ${COLORS.bgCard} 40%)`
                    : COLORS.bgCard,
                  border: `1px solid ${model.featured ? COLORS.accent : COLORS.border}`,
                  borderRadius: 14,
                  padding: '40px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {model.featured && (
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
                  {model.label}
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
                  {model.name}
                </h3>

                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '2.8rem',
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    {model.rate}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.8rem',
                    color: COLORS.textMuted,
                    marginBottom: 16,
                  }}
                >
                  {model.basis}
                </p>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: COLORS.textSoft,
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {model.description}
                </p>

                <div
                  style={{
                    borderTop: `1px solid ${COLORS.border}`,
                    margin: '0 0 20px',
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
                  {model.includes.map((item) => (
                    <li
                      key={item}
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
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    background: `${COLORS.accent}08`,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                    marginTop: 24,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.78rem',
                      color: COLORS.accent,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {model.example}
                  </p>
                </div>

                <a
                  href="https://calendly.com/connect-cloudsaathi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredBtn(i)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: model.featured ? 700 : 600,
                    fontSize: '0.95rem',
                    padding: '14px 0',
                    width: '100%',
                    borderRadius: 10,
                    marginTop: 24,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    ...(model.featured
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
                  {model.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <p
            style={{
              textAlign: 'center',
              color: COLORS.textMuted,
              fontSize: '0.85rem',
              marginTop: 48,
              fontFamily: "'IBM Plex Mono', monospace",
              lineHeight: 1.7,
            }}
          >
            No retainer lock-ins. No hidden fees. Month-to-month for managed
            services.
            <br />
            Minimum project size: $500. Custom scope? Let&rsquo;s talk.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
