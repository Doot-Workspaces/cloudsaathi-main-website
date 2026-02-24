import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

/* --- One-Time Engagements --- */
interface OneTimeService {
  title: string
  price: string
  duration: string
  bullets: string[]
  tag?: string
}

const ONE_TIME_SERVICES: OneTimeService[] = [
  {
    title: 'Infrastructure Audit',
    price: '$2,500 - $5,000',
    duration: '3-5 days',
    bullets: [
      '5 quick wins + 5 strategic recommendations',
      'Risk heatmap & cloud spend analysis',
      'Upsell-free written report',
    ],
    tag: 'Most Popular',
  },
  {
    title: 'Cloud Cost Optimization',
    price: '20% of savings or $5K-$10K',
    duration: '2-4 weeks',
    bullets: [
      'Rightsizing, RI/SP, idle cleanup',
      'Requires $10K+/mo cloud spend',
      'Minimum fee $3,000 (floor)',
    ],
    tag: 'High ROI',
  },
  {
    title: 'Cloud Migration',
    price: '$8,000 - $25,000',
    duration: '4-12 weeks',
    bullets: [
      'On-prem → AWS/GCP, or cloud-to-cloud',
      'Monolith → containers / K8s',
      'IaC, runbook & monitoring included',
    ],
  },
  {
    title: 'Infra Upgrade & Modernization',
    price: '$5,000 - $15,000',
    duration: '2-6 weeks',
    bullets: [
      'CI/CD overhaul (GitHub Actions, GitLab CI)',
      'Docker & Kubernetes from scratch',
      'Terraform / Pulumi adoption',
    ],
  },
  {
    title: 'Security & Compliance',
    price: '$5,000 - $12,000',
    duration: '2-4 weeks',
    bullets: [
      'SOC 2, HIPAA, PCI-DSS readiness',
      'IAM, encryption, secrets management',
      'Policy-as-code (OPA/Kyverno)',
    ],
  },
  {
    title: 'Architecture Review',
    price: '$3,000 - $6,000',
    duration: '1-2 weeks',
    bullets: [
      'Well-Architected Framework assessment',
      'Technical due diligence for investors',
      'Prioritized risk scoring & diagrams',
    ],
  },
]

/* --- Continuous Plans --- */
interface ContinuousPlan {
  tier: string
  name: string
  tagline: string
  basePrice: string
  pctLabel: string
  hours: string
  sla: string
  comms: string
  features: string[]
  excluded: string[]
  example: string
  cta: string
  featured?: boolean
}

const PLANS: ContinuousPlan[] = [
  {
    tier: 'SILVER',
    name: 'Your DevOps Safety Net',
    tagline: 'For teams that need reliable infrastructure support without a full-time hire.',
    basePrice: '$2,500',
    pctLabel: '+ 3% of cloud spend',
    hours: '~15 hrs/month',
    sla: '4-hour response (business hours)',
    comms: 'Shared Slack · Monthly sync · Monthly report',
    features: [
      'CI/CD pipeline maintenance',
      'Basic monitoring & alerting',
      'Monthly infrastructure review',
      'Cloud spend visibility dashboard',
      'Slack support (business hours)',
      'Incident response (business hours)',
    ],
    excluded: [
      'IaC management (Terraform/Pulumi)',
      'Kubernetes cluster management',
      'Cloud cost optimization sprints',
      'Security hardening & compliance',
    ],
    example: "Your infra costs $20K → you pay $2K. That's it.",
    cta: 'Start with Free Audit',
    featured: false,
  },
  {
    tier: 'GOLD',
    name: 'Your Embedded DevOps Team',
    tagline: 'For growing teams that need a full infrastructure partner.',
    basePrice: '$5,000',
    pctLabel: '+ 5% of cloud spend',
    hours: '~35 hrs/month',
    sla: '2-hour response · After-hours P0/P1 on-call',
    comms: 'Shared Slack · Weekly sync · Weekly reports · Quarterly business review',
    featured: true,
    features: [
      'Everything in Silver, plus:',
      'Full IaC management (Terraform/Pulumi)',
      'Kubernetes cluster management (dev + prod)',
      'Cloud cost optimization (quarterly sprints)',
      'Security hardening & patch management',
      'Extended-hours Slack support',
      'Architecture advisory (2 hrs/mo)',
    ],
    excluded: [
      'Major migrations (billed separately)',
      'SOC 2 / HIPAA compliance (billed separately)',
      '24/7 NOC-style coverage',
    ],
    example: 'Server bill is $5K/mo → you pay $500/mo. Scales with you.',
    cta: 'Book a Free Call →',
  },
]

/* --- Cloud Spend Calculator examples --- */
const SPEND_EXAMPLES = [
  { spend: '$10K', silver: '$2,800', gold: '$5,500' },
  { spend: '$25K', silver: '$3,250', gold: '$6,250' },
  { spend: '$50K', silver: '$4,000', gold: '$7,500' },
  { spend: '$100K', silver: '$5,500', gold: '$10,000' },
]

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)
  const [hoveredOTBtn, setHoveredOTBtn] = useState<number | null>(null)

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
        {/* --- Section header --- */}
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
            Two ways to work with us.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p
            style={{
              fontSize: '1.05rem',
              color: COLORS.textSoft,
              maxWidth: 600,
              marginBottom: 72,
              lineHeight: 1.6,
            }}
          >
            Start with a one-time project. Stay for the partnership. No lock-in, no surprises.
          </p>
        </Reveal>

        {/* ----------------------------------------------- */}
        {/* SECTION A -- One-Time Engagements               */}
        {/* ----------------------------------------------- */}
        <Reveal delay={200}>
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: COLORS.text,
              marginBottom: 8,
            }}
          >
            Start with a quick win.
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: COLORS.textSoft,
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Fixed-price projects with clear deliverables. No retainer commitment required.
          </p>
        </Reveal>

        <div
          className="ot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 16,
            marginBottom: 96,
          }}
        >
          {ONE_TIME_SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={240 + i * 80}>
              <div
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === i ? COLORS.bgCardHover : COLORS.bgCard,
                  border: `1px solid ${hoveredCard === i ? COLORS.borderHover : COLORS.border}`,
                  borderRadius: 14,
                  padding: '28px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === i ? 'translateY(-3px)' : 'translateY(0)',
                }}
              >
                {/* Tag */}
                {svc.tag && (
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: svc.tag === 'High ROI' ? COLORS.warm : COLORS.accent,
                      marginBottom: 12,
                    }}
                  >
                    {svc.tag}
                  </span>
                )}

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: COLORS.text,
                    marginBottom: 10,
                    marginTop: svc.tag ? 0 : 4,
                  }}
                >
                  {svc.title}
                </h4>

                {/* Price + duration */}
                <div style={{ marginBottom: 16 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: COLORS.accent,
                    }}
                  >
                    {svc.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.75rem',
                      color: COLORS.textMuted,
                      marginLeft: 10,
                    }}
                  >
                    {svc.duration}
                  </span>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: '0.85rem',
                        color: COLORS.textSoft,
                        lineHeight: 1.9,
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
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://calendly.com/connect-cloudsaathi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredOTBtn(i)}
                  onMouseLeave={() => setHoveredOTBtn(null)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    padding: '12px 0',
                    width: '100%',
                    borderRadius: 8,
                    marginTop: 20,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: 'transparent',
                    border: `1px solid ${hoveredOTBtn === i ? COLORS.accent : COLORS.borderHover}`,
                    color: hoveredOTBtn === i ? COLORS.accent : COLORS.textSoft,
                  }}
                >
                  Book a Call
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ----------------------------------------------- */}
        {/* SECTION B -- Continuous Plans (Silver | Gold)    */}
        {/* ----------------------------------------------- */}
        <Reveal delay={200}>
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: COLORS.text,
              marginBottom: 8,
            }}
          >
            Scale with a partner, not a vendor.
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: COLORS.textSoft,
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Month-to-month. No lock-in. Pause or cancel anytime.
          </p>
        </Reveal>

        <div
          className="plans-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 20,
          }}
        >
          {PLANS.map((plan, i) => (
            <Reveal key={plan.tier} delay={240 + i * 120}>
              <div
                onMouseEnter={() => setHoveredPlan(i)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  position: 'relative',
                  background: plan.featured
                    ? `linear-gradient(180deg, ${COLORS.accentDim} 0%, ${COLORS.bgCard} 40%)`
                    : COLORS.bgCard,
                  border: `1px solid ${plan.featured ? COLORS.accent : COLORS.border}`,
                  borderRadius: 14,
                  padding: '40px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  transform: hoveredPlan === i ? 'translateY(-3px)' : 'translateY(0)',
                }}
              >
                {/* Badge */}
                {plan.featured && (
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
                    RECOMMENDED
                  </span>
                )}

                {/* Tier label */}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: COLORS.textMuted,
                    letterSpacing: '0.12em',
                    marginBottom: 4,
                  }}
                >
                  {plan.tier}
                </p>

                {/* Plan name */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: COLORS.text,
                    marginBottom: 6,
                  }}
                >
                  {plan.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: COLORS.textSoft,
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Pricing formula */}
                <div style={{ marginBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    {plan.basePrice}
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
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.8rem',
                    color: COLORS.accent,
                    marginBottom: 8,
                  }}
                >
                  {plan.pctLabel}
                </p>

                {/* Hours & SLA */}
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    flexWrap: 'wrap',
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.7rem',
                      color: COLORS.textMuted,
                    }}
                  >
                    {plan.hours}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    color: COLORS.textMuted,
                    marginBottom: 4,
                  }}
                >
                  SLA: {plan.sla}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    color: COLORS.textMuted,
                    marginBottom: 20,
                  }}
                >
                  {plan.comms}
                </p>

                <div
                  style={{
                    borderTop: `1px solid ${COLORS.border}`,
                    margin: '0 0 20px',
                  }}
                />

                {/* Included features */}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: COLORS.accent,
                    marginBottom: 12,
                  }}
                >
                  Included
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px',
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '0.85rem',
                        color: COLORS.textSoft,
                        lineHeight: 2,
                      }}
                    >
                      <span
                        style={{
                          color: COLORS.accent,
                          marginRight: 8,
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        &#x2713;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Not included */}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: COLORS.textMuted,
                    marginBottom: 12,
                  }}
                >
                  Not Included
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 24px',
                    flex: 1,
                  }}
                >
                  {plan.excluded.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '0.82rem',
                        color: COLORS.textMuted,
                        lineHeight: 2,
                      }}
                    >
                      <span
                        style={{
                          marginRight: 8,
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        &mdash;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
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
                    fontWeight: plan.featured ? 700 : 600,
                    fontSize: '0.95rem',
                    padding: '14px 0',
                    width: '100%',
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    ...(plan.featured
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
                  {plan.featured ? 'Start with Free Audit \u2192' : 'Start with Free Audit'}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* --- Effective cost examples --- */}
        <Reveal delay={480}>
          <div
            style={{
              marginTop: 48,
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: '28px 32px',
              overflowX: 'auto',
            }}
          >
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.textMuted,
                marginBottom: 16,
              }}
            >
              What you actually pay &mdash; by cloud spend
            </p>

            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
              }}
            >
              <thead>
                <tr>
                  {['Cloud Spend/mo', 'Silver', 'Gold'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '8px 16px 8px 0',
                        color: COLORS.textMuted,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        borderBottom: `1px solid ${COLORS.border}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEND_EXAMPLES.map((row) => (
                  <tr key={row.spend}>
                    <td
                      style={{
                        padding: '10px 16px 10px 0',
                        color: COLORS.textSoft,
                        borderBottom: `1px solid ${COLORS.border}`,
                      }}
                    >
                      {row.spend}
                    </td>
                    <td
                      style={{
                        padding: '10px 16px 10px 0',
                        color: COLORS.textSoft,
                        borderBottom: `1px solid ${COLORS.border}`,
                      }}
                    >
                      {row.silver}/mo
                    </td>
                    <td
                      style={{
                        padding: '10px 16px 10px 0',
                        color: COLORS.accent,
                        fontWeight: 600,
                        borderBottom: `1px solid ${COLORS.border}`,
                      }}
                    >
                      {row.gold}/mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* --- Bottom note --- */}
        <Reveal delay={560}>
          <p
            style={{
              textAlign: 'center',
              color: COLORS.textMuted,
              fontSize: '0.85rem',
              marginTop: 48,
              lineHeight: 1.7,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            All plans month-to-month. The cloud spend percentage ensures we scale with
            you&thinsp;&mdash;&thinsp;as your infrastructure grows, so does our investment in your
            success. Not sure which fits?{' '}
            <a
              href="https://calendly.com/connect-cloudsaathi/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLORS.accent, textDecoration: 'none' }}
            >
              Start with a free audit
            </a>
            .
          </p>
        </Reveal>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 720px) {
          .ot-grid, .plans-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
