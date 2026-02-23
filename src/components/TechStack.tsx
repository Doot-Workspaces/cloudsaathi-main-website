import { useState } from 'react';
import { COLORS } from '../constants';
import Reveal from './Reveal';

const CATEGORIES = [
  { label: 'Cloud', tools: ['AWS', 'GCP', 'Azure'] },
  { label: 'Orchestration', tools: ['Kubernetes', 'Docker', 'Helm'] },
  { label: 'IaC', tools: ['Terraform', 'Pulumi', 'ArgoCD'] },
  { label: 'CI/CD', tools: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
  { label: 'Monitoring', tools: ['Prometheus', 'Grafana', 'Datadog'] },
  { label: 'Security', tools: ['Vault', 'OPA', 'Trivy'] },
];

export default function TechStack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: '120px 0',
        background: COLORS.bg,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Label */}
        <Reveal>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              color: COLORS.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 16,
            }}
          >
            Our Toolkit
          </p>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              color: COLORS.text,
              margin: '0 0 16px 0',
              lineHeight: 1.2,
            }}
          >
            We speak your stack.
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.15}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.85rem',
              color: COLORS.textSoft,
              maxWidth: 560,
              lineHeight: 1.7,
              margin: '0 0 64px 0',
            }}
          >
            Battle-tested tools we use daily to build, deploy, and optimize your
            infrastructure.
          </p>
        </Reveal>

        {/* Category Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {CATEGORIES.map((category, idx) => (
            <Reveal key={category.label} delay={0.2 + idx * 0.08}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 32,
                  flexWrap: 'wrap',
                }}
                className="techstack-row"
              >
                {/* Category Label */}
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    color: COLORS.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    minWidth: 110,
                    flexShrink: 0,
                  }}
                >
                  {category.label}
                </span>

                {/* Tool Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                >
                  {category.tools.map((tool) => {
                    const key = `${category.label}-${tool}`;
                    const isHovered = hovered === key;

                    return (
                      <span
                        key={key}
                        onMouseEnter={() => setHovered(key)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          background: COLORS.bgCard,
                          border: `1px solid ${
                            isHovered ? COLORS.borderHover : COLORS.border
                          }`,
                          borderRadius: 8,
                          padding: '10px 20px',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.75rem',
                          color: isHovered ? '#ffffff' : COLORS.textSoft,
                          cursor: 'default',
                          transition: 'border 0.25s ease, color 0.25s ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .techstack-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
