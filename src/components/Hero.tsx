import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'
import Terminal from './Terminal'

const PROOF_POINTS = [
  { value: '40%', label: 'Avg cloud cost saved' },
  { value: '3\u00d7', label: 'Faster deploys' },
  { value: '< 4hr', label: 'Incident response' },
  { value: 'Zero', label: 'Lock-in contracts' },
]

export default function Hero() {
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 100,
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            background:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Green gradient orb */}
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-15%',
            width: 700,
            height: 700,
            background: `radial-gradient(circle, ${COLORS.accentGlow} 0%, transparent 60%)`,
          }}
        />

        {/* Warm gradient orb */}
        <div
          style={{
            position: 'absolute',
            bottom: '-25%',
            left: '-10%',
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(255,138,80,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="hero-inner"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        {/* Left column */}
        <Reveal delay={0} className="hero-left">
          <div>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: COLORS.accentDim,
                border: '1px solid rgba(0,229,160,0.18)',
                borderRadius: 100,
                padding: '8px 18px',
                marginBottom: 28,
              }}
            >
              <span
                className="hero-pulse-dot"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: COLORS.accent,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  color: COLORS.accent,
                  letterSpacing: '0.08em',
                }}
              >
                ACCEPTING CLIENTS · Q1 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: COLORS.text,
                margin: 0,
              }}
            >
              Your startup needs
              <br />
              <em style={{ color: COLORS.accent, fontStyle: 'italic' }}>infrastructure,</em>
              <br />
              not an infrastructure team.
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '1.1rem',
                color: COLORS.textSoft,
                maxWidth: 480,
                lineHeight: 1.7,
                marginTop: 24,
                marginBottom: 0,
              }}
            >
              We embed senior DevOps engineers into your team on-demand. CI/CD, Kubernetes,
              Terraform, cloud cost optimization — at a fraction of a full-time hire.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <a
                href="#audit"
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  background: COLORS.accent,
                  color: COLORS.bg,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '14px 30px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: primaryHovered ? '0 0 30px rgba(0,229,160,0.25)' : 'none',
                }}
              >
                Get a Free Infra Audit →
              </a>
              <a
                href="#pricing"
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  background: 'transparent',
                  color: secondaryHovered ? '#ffffff' : COLORS.textSoft,
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  padding: '14px 30px',
                  borderRadius: 10,
                  border: `1px solid ${secondaryHovered ? '#ffffff' : COLORS.borderHover}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                See Pricing
              </a>
            </div>

            {/* Proof points */}
            <div
              style={{
                display: 'flex',
                gap: 0,
                marginTop: 56,
                flexWrap: 'wrap',
              }}
            >
              {PROOF_POINTS.map((point, i) => (
                <div
                  key={point.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    padding: '0 24px',
                    borderRight:
                      i < PROOF_POINTS.length - 1 ? `1px solid ${COLORS.border}` : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: COLORS.accent,
                    }}
                  >
                    {point.value}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      color: COLORS.textMuted,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right column */}
        <Reveal delay={200} className="hero-right">
          <div>
            <Terminal />
          </div>
        </Reveal>
      </div>

      {/* Responsive + animations */}
      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .hero-pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }
        .hero-left {
          flex: 1 1 480px;
        }
        .hero-right {
          flex: 1 1 400px;
        }
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
          }
          .hero-left,
          .hero-right {
            flex: 1 1 100% !important;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
