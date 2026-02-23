import { COLORS } from '../constants'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: '30 minutes. We learn your stack, pain points, goals. Honest assessment of fit.',
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Free Infra Audit',
    desc: 'We assess your setup. You get a 1-page report: 3 quick wins + 3 strategic moves.',
    duration: 'Day 2\u20133',
  },
  {
    number: '03',
    title: 'Work Plan',
    desc: 'Clear roadmap. Deliverables, timelines, costs. Reviewed together and adjusted.',
    duration: 'Day 4\u20135',
  },
  {
    number: '04',
    title: 'Execution',
    desc: 'We join your Slack, attend standups, and ship. Weekly syncs. Full transparency.',
    duration: 'Ongoing',
  },
]

export default function Process() {
  return (
    <section
      id="process"
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
          How It Works
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
          From call to code in 5 days.
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
          No long onboarding. No bureaucracy. We get to work fast.
        </p>

        {/* Process Steps Grid */}
        <Reveal>
          <div
            className="process-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              background: COLORS.surface,
              borderRadius: 14,
              overflow: 'hidden',
              border: `1px solid ${COLORS.border}`,
            }}
          >
            {STEPS.map((step, index) => (
              <div
                key={index}
                style={{
                  background: COLORS.bgCard,
                  padding: '36px 28px',
                }}
              >
                {/* Step Number */}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: COLORS.accent,
                    marginBottom: 16,
                  }}
                >
                  {step.number}
                </p>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: COLORS.text,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: COLORS.textSoft,
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {step.desc}
                </p>

                {/* Duration */}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    color: COLORS.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {step.duration}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 900px) {
            .process-grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
