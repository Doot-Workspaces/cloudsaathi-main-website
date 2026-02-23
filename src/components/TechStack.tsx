import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const TOOLS = [
  'AWS',
  'GCP',
  'Azure',
  'Kubernetes',
  'Terraform',
  'Pulumi',
  'Docker',
  'GitHub Actions',
  'GitLab CI',
  'ArgoCD',
  'Helm',
  'Prometheus',
  'Grafana',
  'Datadog',
  'Vault',
  'PostgreSQL',
  'Redis',
  'Nginx',
]

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
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
          Our Toolkit
        </p>

        <Reveal>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            {TOOLS.map((tool, index) => (
              <span
                key={tool}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  padding: '10px 20px',
                  background: COLORS.bgCard,
                  border: `1px solid ${hoveredIndex === index ? COLORS.borderHover : COLORS.border}`,
                  borderRadius: 8,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  color: hoveredIndex === index ? '#ffffff' : COLORS.textMuted,
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
