import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const PAIN_CARDS = [
  {
    icon: '\u23F1',
    title: 'Months wasted hiring DevOps',
    desc: 'Senior DevOps engineers cost $180K\u2013$250K in the US. They\u2019re booked for months. Your infra rots while you search.',
    accent: COLORS.warm,
  },
  {
    icon: '\uD83D\uDD00',
    title: 'Devs stuck doing ops work',
    desc: 'Context-switching between features and infrastructure kills velocity. Every incident pulls engineers off product work.',
    accent: COLORS.blue,
  },
  {
    icon: '\uD83D\uDCC8',
    title: 'Cloud bill outpacing revenue',
    desc: 'Overprovisioned instances, idle resources, zero FinOps. You\u2019re burning 30\u201340% of cloud spend on waste.',
    accent: COLORS.warm,
  },
  {
    icon: '\uD83E\uDDF1',
    title: 'Silent technical debt',
    desc: 'No IaC, manual deploys, no monitoring. It works until production goes down at 2 AM and it\u2019s everyone\u2019s problem.',
    accent: COLORS.blue,
  },
]

export default function PainPoints() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="pain"
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
          The Problem
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
          DevOps is eating your engineering bandwidth.
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
          Your developers debug CI pipelines instead of shipping features. Sound familiar?
        </p>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {PAIN_CARDS.map((card, index) => (
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
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent 0%, ${card.accent} 50%, transparent 100%)`,
                    opacity: 0.5,
                  }}
                />

                {/* Icon */}
                <div style={{ fontSize: '1.6rem', marginBottom: 16 }}>
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: COLORS.text,
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
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
