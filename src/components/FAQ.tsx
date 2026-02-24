import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const FAQ_ITEMS = [
  {
    question: 'How is this different from an Upwork freelancer?',
    answer:
      'Freelancers are task-executors. We\u2019re a structured DevOps practice: discovery, audit, roadmap, execution, ongoing support. You get process, documentation, and knowledge transfer \u2014 not just someone running commands.',
  },
  {
    question: 'What does the cloud spend percentage cover?',
    answer:
      'The percentage component ensures we scale with you. As your infrastructure grows, so does the complexity we manage. The flat base covers our operational cost; the percentage ensures we\u2019re investing proportionally in your success. For example, at $20K/mo cloud spend, Silver is $1,399/mo and Gold is $3,299/mo - far less than a full-time hire.',
  },
  {
    question: 'Can I switch plans?',
    answer:
      'Yes. All plans are month-to-month. You can upgrade from Silver to Gold anytime, or start with a one-time engagement and move to a retainer later. No penalties, no lock-in.',
  },
  {
    question: 'What happens if my cloud spend changes?',
    answer:
      'Your monthly fee adjusts automatically. If your cloud bill drops (because we optimized it), the percentage component decreases. The flat base stays the same, so we\u2019re never penalized for doing our job well.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer:
      'No long-term commitment required. Plans are month-to-month with 30-day notice to cancel. We also offer a 2-week free trial on Silver and Gold plans so you can evaluate the fit risk-free.',
  },
  {
    question: 'What timezone do you operate in?',
    answer:
      'We\u2019re based in IST with a 4\u20136 hour overlap with US East business hours. Gold plan includes after-hours on-call for P0/P1 incidents. Infrastructure work runs 24/7, so your CI/CD pipelines and monitoring are maintained around the clock.',
  },
  {
    question: 'Do you embed with our team?',
    answer:
      'Yes. We join your Slack, attend standups, use your Git workflow, and document everything in your systems. When the engagement ends, you own everything we built.',
  },
  {
    question: 'How fast can you start?',
    answer:
      'Typical onboarding is 3\u20135 business days. For urgent production issues, we can start within 48 hours. Every engagement starts with a free 30-minute discovery call and a 1-page mini-audit.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
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
        <Reveal>
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
            FAQ
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
            Questions we get every week.
          </h2>

          {/* Accordion */}
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  style={{
                    background: COLORS.bgCard,
                    border: `1px solid ${isOpen ? COLORS.borderHover : COLORS.border}`,
                    borderRadius: 10,
                    marginBottom: 12,
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  {/* Question button */}
                  <button
                    onClick={() => handleToggle(index)}
                    style={{
                      width: '100%',
                      padding: '22px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      color: COLORS.text,
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.question}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        color: COLORS.accent,
                        fontSize: '1.2rem',
                        transition: 'transform 0.35s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        flexShrink: 0,
                        marginLeft: 16,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: isOpen ? 300 : 0,
                      transition: 'max-height 0.35s ease',
                      padding: `0 24px`,
                      paddingBottom: isOpen ? 22 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: COLORS.textSoft,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
