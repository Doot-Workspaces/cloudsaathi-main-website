import { useState, useMemo } from 'react'
import { COLORS, CALENDLY_URL } from '../constants'
import Reveal from './Reveal'

/* --- One-Time Engagements --- */
interface OneTimeService {
  title: string
  price: string
  duration: string
  bullets: string[]
  tag?: string
  tagColor?: string
}

const ONE_TIME_SERVICES: OneTimeService[] = [
  {
    title: 'Infrastructure Audit',
    price: '$499 - $1,999',
    duration: '3-5 days',
    bullets: [
      '5 quick wins + 5 strategic recommendations',
      'Risk heatmap & cloud spend analysis',
      'Upsell-free written report',
    ],
    tag: 'Start Here',
    tagColor: COLORS.accent,
  },
  {
    title: 'Cloud Cost Optimization',
    price: '15% of savings or $1,999 - $4,999',
    duration: '2-4 weeks',
    bullets: [
      'Rightsizing, RI/SP, idle cleanup',
      'Min $5K/mo cloud spend',
      'Min fee $999 (floor)',
    ],
    tag: 'High ROI',
    tagColor: COLORS.warm,
  },
  {
    title: 'Cloud Migration',
    price: '$2,999 - $9,999',
    duration: '4-12 weeks',
    bullets: [
      'On-prem to AWS/GCP, cloud-to-cloud',
      'Monolith to containers / K8s',
      'IaC, runbook & monitoring included',
    ],
  },
  {
    title: 'Infra Upgrade & Modernization',
    price: '$1,999 - $5,999',
    duration: '2-6 weeks',
    bullets: [
      'CI/CD overhaul (GitHub Actions, GitLab CI)',
      'Docker & Kubernetes from scratch',
      'Terraform / Pulumi adoption',
    ],
  },
  {
    title: 'Security & Compliance',
    price: '$1,999 - $4,999',
    duration: '2-4 weeks',
    bullets: [
      'SOC 2, HIPAA, PCI-DSS readiness',
      'IAM, encryption, secrets management',
      'Policy-as-code (OPA/Kyverno)',
    ],
    tag: 'Compliance',
    tagColor: COLORS.purple,
  },
  {
    title: 'Architecture Review',
    price: '$999 - $2,499',
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
  basePrice: number
  pctRate: number
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
    tagline: 'Reliable infrastructure support without a full-time hire.',
    basePrice: 999,
    pctRate: 0.02,
    pctLabel: '+ 2% of cloud spend',
    hours: '~12 hrs/month',
    sla: '4-hour response (business hours)',
    comms: 'Shared Slack / Monthly sync / Monthly report',
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
    example: "$10K cloud spend = $1,199/mo total",
    cta: 'Start with Free Audit',
    featured: false,
  },
  {
    tier: 'GOLD',
    name: 'Your Embedded DevOps Team',
    tagline: 'A full infrastructure partner that scales with you.',
    basePrice: 2499,
    pctRate: 0.04,
    pctLabel: '+ 4% of cloud spend',
    hours: '~30 hrs/month',
    sla: '2-hour response / After-hours P0/P1 on-call',
    comms: 'Shared Slack / Weekly sync / Weekly reports / Quarterly review',
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
    example: "$25K cloud spend = $3,499/mo total",
    cta: 'Start with Free Audit',
  },
]

/* --- Cloud Spend Calculator --- */
const SLIDER_MIN = 5000
const SLIDER_MAX = 100000
const SLIDER_STEP = 1000

function formatUSD(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`
  return `$${n.toLocaleString()}`
}

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)
  const [hoveredOTBtn, setHoveredOTBtn] = useState<number | null>(null)
  const [cloudSpend, setCloudSpend] = useState(20000)

  const calcSilver = useMemo(() => {
    return PLANS[0].basePrice + Math.round(cloudSpend * PLANS[0].pctRate)
  }, [cloudSpend])

  const calcGold = useMemo(() => {
    return PLANS[1].basePrice + Math.round(cloudSpend * PLANS[1].pctRate)
  }, [cloudSpend])

  const fullTimeHireCost = 15000 // monthly cost of a full-time DevOps in US

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
            Start with a one-time project. Stay for the partnership.
            No lock-in, no surprises, no hidden fees.
          </p>
        </Reveal>

        {/* ============================================= */}
        {/* SECTION A - One-Time Engagements              */}
        {/* ============================================= */}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 16,
            marginBottom: 96,
          }}
        >
          {ONE_TIME_SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={240 + i * 70}>
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
                  transition: `all ${COLORS.borderHover ? '0.3s' : '0.3s'} ease`,
                  transform: hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: svc.tagColor
                      ? `linear-gradient(90deg, transparent, ${svc.tagColor}, transparent)`
                      : `linear-gradient(90deg, transparent, ${COLORS.border}, transparent)`,
                    opacity: hoveredCard === i ? 1 : 0.4,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Tag */}
                {svc.tag && (
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: svc.tagColor || COLORS.accent,
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
                      fontSize: '0.7rem',
                      color: COLORS.textMuted,
                      marginLeft: 10,
                      background: COLORS.surface,
                      padding: '2px 8px',
                      borderRadius: 4,
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
                          fontSize: '0.7rem',
                        }}
                      >
                        &#x2713;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY_URL}
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

        {/* ============================================= */}
        {/* SECTION B - Continuous Plans                   */}
        {/* ============================================= */}
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
            Month-to-month. No lock-in. 2-week free trial on both plans.
          </p>
        </Reveal>

        {/* --- Interactive Calculator --- */}
        <Reveal delay={240}>
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.accentDim} 0%, ${COLORS.purpleDim} 100%)`,
              border: `1px solid rgba(0,229,160,0.12)`,
              borderRadius: 16,
              padding: '32px 36px',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
                marginBottom: 20,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: COLORS.textMuted,
                    marginBottom: 6,
                  }}
                >
                  Your monthly cloud spend
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: COLORS.text,
                  }}
                >
                  {formatUSD(cloudSpend)}<span style={{ fontSize: '0.85rem', color: COLORS.textMuted }}>/mo</span>
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 32,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Silver</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.textSoft }}>${calcSilver.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span></p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Gold</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.accent }}>${calcGold.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span></p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Full-time hire</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.textMuted, textDecoration: 'line-through' }}>${fullTimeHireCost.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span></p>
                </div>
              </div>
            </div>

            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              step={SLIDER_STEP}
              value={cloudSpend}
              onChange={(e) => setCloudSpend(Number(e.target.value))}
              style={{ width: '100%' }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8,
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: COLORS.textMuted }}>{formatUSD(SLIDER_MIN)}</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: COLORS.textMuted }}>{formatUSD(SLIDER_MAX)}</span>
            </div>

            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                color: COLORS.accent,
                marginTop: 16,
                textAlign: 'center',
              }}
            >
              You save ${(fullTimeHireCost - calcGold).toLocaleString()}/mo vs a full-time hire with Gold
            </p>
          </div>
        </Reveal>

        {/* --- Plan Cards --- */}
        <div
          className="plans-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 20,
          }}
        >
          {PLANS.map((plan, i) => (
            <Reveal key={plan.tier} delay={280 + i * 120}>
              <div
                onMouseEnter={() => setHoveredPlan(i)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  position: 'relative',
                  background: plan.featured
                    ? `linear-gradient(180deg, ${COLORS.accentDim} 0%, ${COLORS.bgCard} 40%)`
                    : COLORS.bgCard,
                  border: `1px solid ${plan.featured ? 'rgba(0,229,160,0.25)' : COLORS.border}`,
                  borderRadius: 14,
                  padding: '40px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  transform: hoveredPlan === i ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: plan.featured && hoveredPlan === i
                    ? '0 8px 40px rgba(0,229,160,0.08)'
                    : 'none',
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
                      fontSize: '2.2rem',
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    ${plan.basePrice.toLocaleString()}
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
                    marginBottom: 4,
                  }}
                >
                  {plan.pctLabel}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    color: COLORS.textMuted,
                    marginBottom: 16,
                    fontStyle: 'italic',
                  }}
                >
                  {plan.example}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  {[plan.hours, plan.sla].map((meta) => (
                    <span
                      key={meta}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.65rem',
                        color: COLORS.textMuted,
                        background: COLORS.surface,
                        padding: '3px 10px',
                        borderRadius: 4,
                      }}
                    >
                      {meta}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
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

                {/* Included */}
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
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '0.85rem',
                        color: COLORS.textSoft,
                        lineHeight: 2,
                      }}
                    >
                      <span style={{ color: COLORS.accent, marginRight: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>&#x2713;</span>
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
                  Add-ons (billed separately)
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {plan.excluded.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: '0.82rem',
                        color: COLORS.textMuted,
                        lineHeight: 2,
                      }}
                    >
                      <span style={{ marginRight: 8, fontFamily: "'IBM Plex Mono', monospace" }}>&mdash;</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY_URL}
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
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* --- Bottom note --- */}
        <Reveal delay={520}>
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
            All plans month-to-month with 2-week free trial. The percentage ensures
            we scale with you - as your infrastructure grows, so does our investment.
            Custom scope?{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLORS.accent, textDecoration: 'none' }}
            >
              Let's talk
            </a>
            .
          </p>
        </Reveal>
      </div>

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
