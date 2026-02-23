import React from 'react';
import { COLORS } from '../constants';
import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      '30 minutes. We learn your stack, pain points, goals. Honest assessment of fit.',
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Free Infra Audit',
    description:
      'We assess your setup. You get a 1-page report: 3 quick wins + 3 strategic moves.',
    duration: 'Day 2–3',
  },
  {
    number: '03',
    title: 'Work Plan',
    description:
      'Clear roadmap. Deliverables, timelines, costs. Reviewed together and adjusted.',
    duration: 'Day 4–5',
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'We join your Slack, attend standups, and ship. Weekly syncs. Full transparency.',
    duration: 'Ongoing',
  },
];

const Process: React.FC = () => {
  return (
    <>
      <style>{`
        .process-timeline {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          position: relative;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          max-width: 260px;
          text-align: center;
        }

        .process-connector {
          display: flex;
          align-items: center;
          height: 40px;
          flex: 0 0 60px;
          position: relative;
        }

        .process-connector-line {
          width: 100%;
          height: 2px;
          background: rgba(0, 229, 160, 0.2);
        }

        .process-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${COLORS.accent};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem;
          font-weight: 600;
          color: ${COLORS.bg};
          flex-shrink: 0;
        }

        .process-step-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: ${COLORS.text};
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .process-step-desc {
          font-size: 0.85rem;
          color: ${COLORS.textSoft};
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .process-step-badge {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          color: ${COLORS.textMuted};
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        @media (max-width: 767px) {
          .process-timeline {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            padding-left: 20px;
            position: relative;
          }

          .process-timeline::before {
            content: '';
            position: absolute;
            left: 39px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: rgba(0, 229, 160, 0.2);
          }

          .process-connector {
            display: none;
          }

          .process-step {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
            max-width: 100%;
            gap: 20px;
            padding-bottom: 36px;
            position: relative;
          }

          .process-circle {
            position: relative;
            z-index: 1;
          }

          .process-step-content {
            flex: 1;
          }

          .process-step-title {
            margin-top: 0;
          }
        }
      `}</style>

      <section
        id="process"
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          padding: '120px 0',
        }}
      >
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
          {/* Section header */}
          <Reveal>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: COLORS.accent,
                marginBottom: 12,
              }}
            >
              How It Works
            </p>
          </Reveal>

          <Reveal delay={50}>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 700,
                color: COLORS.text,
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              From call to code in 5 days.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p
              style={{
                fontSize: '1.05rem',
                color: COLORS.textSoft,
                maxWidth: 520,
                lineHeight: 1.6,
                marginBottom: 72,
              }}
            >
              No long onboarding. No bureaucracy. We get to work fast.
            </p>
          </Reveal>

          {/* Timeline */}
          <div className="process-timeline">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Connector line (between steps, not before first) */}
                {index > 0 && (
                  <div className="process-connector">
                    <div className="process-connector-line" />
                  </div>
                )}

                {/* Step */}
                <Reveal delay={index * 150}>
                  <div className="process-step">
                    <div className="process-circle">{step.number}</div>
                    <div className="process-step-content">
                      <div className="process-step-title">{step.title}</div>
                      <div className="process-step-desc">
                        {step.description}
                      </div>
                      <div className="process-step-badge">{step.duration}</div>
                    </div>
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
