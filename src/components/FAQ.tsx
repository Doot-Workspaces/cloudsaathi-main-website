import { useState } from 'react'
import { COLORS } from '../constants'
import Reveal from './Reveal'

const FAQ_ITEMS = [
  {
    question: 'How is this different from an Upwork freelancer?',
    answer:
      'Freelancers are task-executors. We are a structured DevOps practice: discovery, audit, roadmap, execution, ongoing support. You get process, documentation, and knowledge transfer - not just someone running commands.',
  },
  {
    question: 'How does the hour-pack pricing work?',
    answer:
      'You buy a pack of DevOps hours each month. Starter is 5 hrs at $149/mo ($29/hr), Growth is 15 hrs at $399/mo ($26/hr), and Scale is 40 hrs at $899/mo ($22/hr). Extra hours are billed at your pack rate. Unused hours roll over for 1 month. No cloud-spend percentages, no hidden fees.',
  },
  {
    question: 'Can I switch packs or cancel?',
    answer:
      'Yes. All packs are month-to-month. You can upgrade, downgrade, or cancel anytime with 30-day notice. You can also start with pay-as-you-go ($49/hr) and switch to a pack later when you see the value.',
  },
  {
    question: 'What if I need more hours than my pack?',
    answer:
      'Extra hours are billed at your pack rate - $29/hr for Starter, $26/hr for Growth, $22/hr for Scale. No surprise markups. We will always notify you before exceeding your pack so you stay in control.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer:
      'No. You can start with pay-as-you-go at $49/hr with zero monthly commitment. Or try a one-time engagement like our free mini-audit. All packs are month-to-month - cancel anytime.',
  },
  {
    question: 'What timezone do you operate in?',
    answer:
      'We are based in New Delhi, India (IST) with a 4-6 hour overlap with US East business hours. Scale pack includes after-hours on-call for P0/P1 incidents. Infrastructure work runs 24/7, so your CI/CD pipelines and monitoring are maintained around the clock.',
  },
  {
    question: 'Do you embed with our team?',
    answer:
      'Yes. We join your Slack, attend standups, use your Git workflow, and document everything in your systems. When the engagement ends, you own everything we built.',
  },
  {
    question: 'How fast can you start?',
    answer:
      'Typical onboarding is 3-5 business days. For urgent production issues, we can start within 48 hours. Every engagement starts with a free 30-minute discovery call and a 1-page mini-audit.',
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
