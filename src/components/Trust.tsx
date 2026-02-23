import { COLORS } from '../constants'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    quote:
      'They joined our Slack, understood our codebase in 48 hours, and fixed a deployment pipeline broken for months. Felt like hiring a senior engineer overnight.',
    author: 'Engineering Lead',
    role: 'Series A SaaS \u00b7 San Francisco',
  },
  {
    quote:
      'We were spending $14K/month on AWS with zero visibility. Their audit found $5K/month in savings in the first week. Retainer paid for itself on day one.',
    author: 'CTO & Co-founder',
    role: 'Series B FinTech \u00b7 New York',
  },
  {
    quote:
      'What sets them apart is communication. Weekly syncs, clear docs, proactively flagging problems before we notice. That\u2019s rare in DevOps consulting.',
    author: 'VP Engineering',
    role: 'HealthTech Startup \u00b7 Austin',
  },
]

export default function Trust() {
  return (
    <section
      id="trust"
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
          Why Teams Trust Us
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: COLORS.text,
            marginBottom: 56,
          }}
        >
          We become part of your team.
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={index} delay={index * 120}>
              <div
                style={{
                  background: COLORS.bgCard,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 14,
                  padding: '32px 28px',
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '3rem',
                    color: COLORS.accent,
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: COLORS.textSoft,
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  {testimonial.quote}
                </p>

                {/* Author name */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: COLORS.text,
                    marginBottom: 2,
                  }}
                >
                  {testimonial.author}
                </p>

                {/* Author role */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: COLORS.textMuted,
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
