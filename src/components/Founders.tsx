import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const founders = [
  {
    name: 'Ankit Jangir',
    role: 'Co-founder',
    linkedin: 'https://www.linkedin.com/in/ankit-jangir-devops/',
    initials: 'AJ',
  },
  {
    name: 'Nihaan Mohammed',
    role: 'Co-founder',
    linkedin: 'https://www.linkedin.com/in/nihaan-mohammed/',
    initials: 'NM',
  },
]

export default function Founders() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="founders"
      style={{
        padding: '100px 24px',
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: COLORS.accent,
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Who We Are
          </p>
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400,
              color: COLORS.text,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Built by engineers who've been in your shoes.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: COLORS.textSoft,
              maxWidth: 560,
              lineHeight: 1.7,
              marginTop: 18,
              marginBottom: 0,
            }}
          >
            We've scaled infrastructure at startups and enterprises alike.
            CloudSaathi was born from a simple idea: every startup deserves
            production-grade DevOps without the six-figure hire.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            marginTop: 48,
            maxWidth: 640,
          }}
        >
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 120}>
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: COLORS.bgCard,
                  border: `1px solid ${hoveredIndex === i ? COLORS.borderHover : COLORS.border}`,
                  borderRadius: 14,
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  transition: 'border-color 0.3s ease',
                }}
              >
                {/* Initials avatar */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: COLORS.accentDim,
                    border: `1px solid rgba(0,229,160,0.18)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: COLORS.accent,
                    }}
                  >
                    {f.initials}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: COLORS.text,
                      margin: 0,
                    }}
                  >
                    {f.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8rem',
                      color: COLORS.textMuted,
                      margin: '4px 0 0',
                    }}
                  >
                    {f.role}
                  </p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.7rem',
                      color: COLORS.accent,
                      textDecoration: 'none',
                      marginTop: 10,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
