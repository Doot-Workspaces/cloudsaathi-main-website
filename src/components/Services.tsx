import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const SERVICE_CARDS = [
  {
    tag: 'Core',
    tagColor: COLORS.accent,
    title: 'Fractional DevOps',
    desc: 'A senior DevOps engineer embedded in your team part-time. We handle CI/CD, infra, monitoring, and incident response so your developers focus on product.',
    tools: ['AWS', 'GCP', 'Terraform', 'GitHub Actions', 'Docker'],
  },
  {
    tag: 'High ROI',
    tagColor: COLORS.warm,
    title: 'Cloud Cost Optimization',
    desc: 'We audit your cloud spend line by line. Right-sizing, reserved instances, spot fleets, unused resources. Clients save 30\u201340% on average.',
    tools: ['FinOps', 'Cost Explorer', 'Kubecost', 'Infracost'],
  },
  {
    tag: 'Platform',
    tagColor: COLORS.blue,
    title: 'Kubernetes & Platform Eng',
    desc: 'Production Kubernetes clusters, service meshes, GitOps workflows, developer platforms. We build the foundation your engineering team runs on.',
    tools: ['Kubernetes', 'Helm', 'ArgoCD', 'OPA', 'Prometheus'],
  },
  {
    tag: 'Modernize',
    tagColor: COLORS.accent,
    title: 'IaC Migration & CI/CD',
    desc: 'From manual deployments to fully automated infrastructure. Terraform, Pulumi, GitOps pipelines. Version-controlled, repeatable, auditable.',
    tools: ['Terraform', 'Pulumi', 'GitLab CI', 'ArgoCD'],
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)

  return (
    <section
      id="services"
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
        {/* Label */}
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
          What We Do
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: COLORS.text,
            marginBottom: 16,
          }}
        >
          Production-grade DevOps.<br />
          No full-time cost.
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '1.05rem',
            color: COLORS.textSoft,
            maxWidth: 520,
            marginBottom: 56,
            lineHeight: 1.6,
          }}
        >
          Every engagement starts with a free audit. We find quick wins, build the roadmap, and execute — embedded in your team.
        </p>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {SERVICE_CARDS.map((card, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: hoveredIndex === index ? COLORS.bgCardHover : COLORS.bgCard,
                  border: `1px solid ${hoveredIndex === index ? COLORS.borderHover : COLORS.border}`,
                  borderRadius: 14,
                  padding: '32px 28px',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Tag */}
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: card.tagColor,
                  }}
                >
                  {card.tag}
                </span>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: COLORS.text,
                    marginTop: 14,
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: COLORS.textSoft,
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {card.desc}
                </p>

                {/* Tool Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                  }}
                >
                  {card.tools.map((tool) => {
                    const badgeKey = `${index}-${tool}`
                    return (
                      <span
                        key={tool}
                        onMouseEnter={() => setHoveredBadge(badgeKey)}
                        onMouseLeave={() => setHoveredBadge(null)}
                        style={{
                          background: COLORS.surface,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: 5,
                          padding: '4px 10px',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.65rem',
                          color: hoveredBadge === badgeKey ? '#ffffff' : COLORS.textMuted,
                          transition: 'color 0.3s ease',
                          cursor: 'default',
                        }}
                      >
                        {tool}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
