import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const CHIPS = [
  { label: '30-min call', check: '\u2713' },
  { label: 'No commitment', check: '\u2713' },
  { label: '1-page written report', check: '\u2713' },
  { label: '3 quick wins', check: '\u2713' },
]

export default function AuditCTA() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section
      id="audit"
      style={{
        padding: '120px 0',
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '56px 48px',
            borderRadius: 20,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${COLORS.accentDim} 0%, ${COLORS.warmDim} 100%)`,
            border: '1px solid rgba(0,229,160,0.12)',
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '18%',
              right: '18%',
              height: 2,
              background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)`,
            }}
          />

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400,
              color: COLORS.text,
              marginBottom: 16,
            }}
          >
            Get a free infrastructure audit.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.05rem',
              color: COLORS.textSoft,
              maxWidth: 480,
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            3 quick wins you can implement this week. 3 strategic recommendations
            for next quarter. This is how every client relationship starts  -  no strings attached.
          </p>

          {/* Detail chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 16,
            }}
          >
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  color: COLORS.textMuted,
                }}
              >
                {chip.label}{' '}
                <span style={{ color: COLORS.accent }}>{chip.check}</span>
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://calendly.com/connect-cloudsaathi/30min"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              marginTop: 36,
              display: 'inline-block',
              background: COLORS.accent,
              color: '#06080a',
              fontWeight: 700,
              padding: '16px 36px',
              borderRadius: 10,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'box-shadow 0.3s ease',
              boxShadow: btnHovered
                ? '0 0 30px rgba(0,229,160,0.25)'
                : 'none',
            }}
          >
            Book Your Free Audit &rarr;
          </a>
        </div>
      </Reveal>
    </section>
  )
}
