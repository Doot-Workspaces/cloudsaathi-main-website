import { useState, useMemo } from 'react'
import { COLORS, CALENDLY_URL } from '../constants'
import Reveal from './Reveal'

/* --- Hour Packs (Fractional Model) --- */
interface HourPack {
  name: string
  tagline: string
  hours: number
  price: number
  perHour: number
  sla: string
  features: string[]
  recommended?: boolean
  cta: string
}

const HOUR_PACKS: HourPack[] = [
  {
    name: 'Starter',
    tagline: 'For seed-stage startups getting off the ground.',
    hours: 5,
    price: 149,
    perHour: 29,
    sla: 'Next business day',
    features: [
      'CI/CD pipeline setup & fixes',
      'Basic monitoring & alerting',
      'Slack support (business hours)',
      'Monthly infra health check',
      'Unused hours roll over 1 month',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    tagline: 'Your go-to DevOps partner as you scale.',
    hours: 15,
    price: 399,
    perHour: 26,
    sla: '4-hour response',
    features: [
      'Everything in Starter, plus:',
      'Terraform / IaC management',
      'Kubernetes cluster ops',
      'Cloud cost optimization',
      'Weekly sync + written report',
      'Unused hours roll over 1 month',
    ],
    recommended: true,
    cta: 'Start with Growth',
  },
  {
    name: 'Scale',
    tagline: 'Near full-time coverage at a fraction of the cost.',
    hours: 40,
    price: 899,
    perHour: 22,
    sla: '2-hour response + on-call',
    features: [
      'Everything in Growth, plus:',
      'Security hardening & compliance',
      'Architecture advisory',
      'After-hours P0/P1 on-call',
      'Quarterly infra review',
      'Unused hours roll over 1 month',
    ],
    cta: 'Start with Scale',
  },
]

const PAYG_RATE = 49 // pay-as-you-go hourly rate

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
    price: 'FREE - $299',
    duration: '3-5 days',
    bullets: [
      'Free mini-audit: 3 quick wins (30-min call)',
      'Full audit: risk heatmap + spend analysis',
      'Written report with actionable roadmap',
    ],
    tag: 'Start Here',
    tagColor: COLORS.accent,
  },
  {
    title: 'Cloud Cost Optimization',
    price: '15% of savings found',
    duration: '2-4 weeks',
    bullets: [
      'Rightsizing, RI/SP, idle cleanup',
      'You keep 85% of savings',
      'No savings = no charge',
    ],
    tag: 'High ROI',
    tagColor: COLORS.warm,
  },
  {
    title: 'Cloud Migration',
    price: '$999 - $2,999',
    duration: '4-12 weeks',
    bullets: [
      'On-prem to AWS/GCP, cloud-to-cloud',
      'Monolith to containers / K8s',
      'IaC, runbook & monitoring included',
    ],
  },
  {
    title: 'Infra Upgrade',
    price: '$499 - $1,499',
    duration: '2-6 weeks',
    bullets: [
      'CI/CD overhaul (GitHub Actions, GitLab CI)',
      'Docker & Kubernetes from scratch',
      'Terraform / Pulumi adoption',
    ],
  },
  {
    title: 'Security & Compliance',
    price: '$799 - $1,999',
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
    price: '$299 - $699',
    duration: '1-2 weeks',
    bullets: [
      'Well-Architected Framework assessment',
      'Technical due diligence for investors',
      'Prioritized risk scoring & diagrams',
    ],
  },
]

/* --- Hours Calculator --- */
const SLIDER_MIN = 1
const SLIDER_MAX = 60
const SLIDER_STEP = 1

function getBestPack(hours: number): { pack: HourPack | null; cost: number; savings: number } {
  const paygCost = hours * PAYG_RATE

  // Find the cheapest option
  let bestPack: HourPack | null = null
  let bestCost = paygCost

  for (const pack of HOUR_PACKS) {
    if (hours <= pack.hours) {
      if (pack.price < bestCost) {
        bestCost = pack.price
        bestPack = pack
      }
    } else {
      // Hours exceed pack - add extra at pack rate
      const extra = hours - pack.hours
      const totalCost = pack.price + extra * pack.perHour
      if (totalCost < bestCost) {
        bestCost = totalCost
        bestPack = pack
      }
    }
  }

  return {
    pack: bestPack,
    cost: bestCost,
    savings: paygCost - bestCost,
  }
}

export default function Pricing() {
  const [hoveredPack, setHoveredPack] = useState<number | null>(null)
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredOTBtn, setHoveredOTBtn] = useState<number | null>(null)
  const [neededHours, setNeededHours] = useState(15)

  const calcResult = useMemo(() => getBestPack(neededHours), [neededHours])
  const paygTotal = neededHours * PAYG_RATE
  const fullTimeHireCost = 15000

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
            Truly Fractional Pricing
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
            Buy hours, not headcount.
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
            Senior DevOps engineers at a per-hour rate. No retainers, no cloud-spend
            percentages, no hidden fees. Use only what you need.
          </p>
        </Reveal>

        {/* ============================================= */}
        {/* SECTION A - Hour Packs                        */}
        {/* ============================================= */}

        {/* --- Interactive Hours Calculator --- */}
        <Reveal delay={200}>
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.accentDim} 0%, ${COLORS.purpleDim} 100%)`,
              border: '1px solid rgba(0,229,160,0.12)',
              borderRadius: 16,
              padding: '32px 36px',
              marginBottom: 40,
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
                  Hours you need per month
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: COLORS.text,
                  }}
                >
                  {neededHours}<span style={{ fontSize: '0.85rem', color: COLORS.textMuted }}> hrs/mo</span>
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
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Best option</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.accent }}>
                    ${calcResult.cost.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span>
                  </p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.accent, marginTop: 2 }}>
                    {calcResult.pack ? `${calcResult.pack.name} Pack` : 'Pay As You Go'}
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Pay-as-you-go</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.textSoft }}>
                    ${paygTotal.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span>
                  </p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, marginTop: 2 }}>
                    ${PAYG_RATE}/hr
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Full-time hire</p>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: COLORS.textMuted, textDecoration: 'line-through' }}>
                    ${fullTimeHireCost.toLocaleString()}<span style={{ fontSize: '0.7rem' }}>/mo</span>
                  </p>
                </div>
              </div>
            </div>

            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              step={SLIDER_STEP}
              value={neededHours}
              onChange={(e) => setNeededHours(Number(e.target.value))}
              style={{ width: '100%' }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8,
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: COLORS.textMuted }}>{SLIDER_MIN} hr</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: COLORS.textMuted }}>{SLIDER_MAX} hrs</span>
            </div>

            {calcResult.savings > 0 && (
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  color: COLORS.accent,
                  marginTop: 16,
                  textAlign: 'center',
                }}
              >
                You save ${calcResult.savings.toLocaleString()}/mo with {calcResult.pack?.name} vs pay-as-you-go
              </p>
            )}
          </div>
        </Reveal>

        {/* --- Pay As You Go callout --- */}
        <Reveal delay={220}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: '24px 28px',
              marginBottom: 24,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: COLORS.warm,
                  marginBottom: 6,
                }}
              >
                No commitment needed
              </p>
              <p style={{ fontSize: '1rem', color: COLORS.text, fontWeight: 600 }}>
                Pay As You Go
              </p>
              <p style={{ fontSize: '0.85rem', color: COLORS.textSoft, marginTop: 4 }}>
                ${PAYG_RATE}/hr for ad-hoc tasks. No monthly fee. No minimum. Perfect for one-off fixes.
              </p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                padding: '12px 24px',
                borderRadius: 8,
                border: `1px solid ${COLORS.borderHover}`,
                color: COLORS.textSoft,
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Call
            </a>
          </div>
        </Reveal>

        {/* --- Pack Cards --- */}
        <div
          className="packs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
            marginBottom: 96,
          }}
        >
          {HOUR_PACKS.map((pack, i) => (
            <Reveal key={pack.name} delay={260 + i * 120}>
              <div
                onMouseEnter={() => setHoveredPack(i)}
                onMouseLeave={() => setHoveredPack(null)}
                style={{
                  position: 'relative',
                  background: pack.recommended
                    ? `linear-gradient(180deg, ${COLORS.accentDim} 0%, ${COLORS.bgCard} 40%)`
                    : COLORS.bgCard,
                  border: `1px solid ${pack.recommended ? 'rgba(0,229,160,0.25)' : COLORS.border}`,
                  borderRadius: 14,
                  padding: '40px 28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  transform: hoveredPack === i ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: pack.recommended && hoveredPack === i
                    ? '0 8px 40px rgba(0,229,160,0.08)'
                    : 'none',
                }}
              >
                {/* Badge */}
                {pack.recommended && (
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

                {/* Pack name */}
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
                  {pack.name}
                </p>

                {/* Hours */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: COLORS.text,
                    marginBottom: 6,
                  }}
                >
                  {pack.hours} hours / month
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: COLORS.textSoft,
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  {pack.tagline}
                </p>

                {/* Price */}
                <div style={{ marginBottom: 6 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '2.2rem',
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    ${pack.price}
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
                  ${pack.perHour}/hr effective rate
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
                  Extra hours at ${pack.perHour}/hr
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.65rem',
                      color: COLORS.textMuted,
                      background: COLORS.surface,
                      padding: '3px 10px',
                      borderRadius: 4,
                    }}
                  >
                    {pack.sla}
                  </span>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${COLORS.border}`,
                    margin: '0 0 20px',
                  }}
                />

                {/* Features */}
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
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {pack.features.map((f) => (
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
                    fontWeight: pack.recommended ? 700 : 600,
                    fontSize: '0.95rem',
                    padding: '14px 0',
                    width: '100%',
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    ...(pack.recommended
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
                  {pack.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ============================================= */}
        {/* SECTION B - One-Time Engagements              */}
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
            Or start with a one-time project.
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: COLORS.textSoft,
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Fixed-price engagements with clear deliverables. No retainer required.
          </p>
        </Reveal>

        <div
          className="ot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 16,
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
                  transition: 'all 0.3s ease',
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
            All packs are month-to-month. Unused hours roll over for 1 month.
            No cloud-spend percentages, no hidden fees. Need a custom scope?{' '}
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
          .ot-grid, .packs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
