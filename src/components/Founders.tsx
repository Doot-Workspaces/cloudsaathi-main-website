import { useState } from 'react';
import { COLORS } from '../constants';
import Reveal from './Reveal';

const founders = [
  {
    name: 'Ankit Jangir',
    role: 'Co-founder & DevOps Architect',
    initials: 'AJ',
    linkedin: 'https://www.linkedin.com/in/ankit-jangir-devops/',
    bio: '8+ years building and scaling cloud infrastructure. Previously led DevOps at high-growth startups. Specializes in Kubernetes, Terraform, and cloud cost optimization.',
    specialties: ['Kubernetes', 'Terraform', 'AWS', 'Cost Optimization'],
  },
  {
    name: 'Nihaan Mohammed',
    role: 'Co-founder & Platform Engineer',
    initials: 'NM',
    linkedin: 'https://www.linkedin.com/in/nihaan-mohammed/',
    bio: '7+ years in platform engineering and CI/CD automation. Built developer platforms serving hundreds of engineers. Passionate about making infrastructure invisible.',
    specialties: ['CI/CD', 'Platform Eng', 'GCP', 'GitOps'],
  },
];

function FounderCard({
  founder,
  delay,
}: {
  founder: (typeof founders)[number];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: COLORS.bgCard,
          border: `1px solid ${hovered ? COLORS.borderHover : COLORS.border}`,
          borderRadius: 14,
          padding: '36px 32px',
          transition: 'border 0.3s ease, background 0.3s ease',
          ...(hovered ? { background: COLORS.bgCardHover } : {}),
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: COLORS.accentDim,
            border: `2px solid ${COLORS.accent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: COLORS.accent,
            marginBottom: 18,
          }}
        >
          {founder.initials}
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            color: COLORS.text,
            marginBottom: 4,
          }}
        >
          {founder.name}
        </div>

        {/* Role */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8rem',
            color: COLORS.textMuted,
            marginBottom: 0,
          }}
        >
          {founder.role}
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: '0.88rem',
            color: COLORS.textSoft,
            lineHeight: 1.7,
            marginTop: 16,
            marginBottom: 20,
          }}
        >
          {founder.bio}
        </p>

        {/* Specialty badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 20,
          }}
        >
          {founder.specialties.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.65rem',
                background: COLORS.bgCardHover,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 5,
                padding: '4px 10px',
                color: COLORS.textMuted,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* LinkedIn link */}
        <a
          href={founder.linkedin}
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
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </Reveal>
  );
}

export default function Founders() {
  return (
    <section
      id="founders"
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: '100px 24px',
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: COLORS.accent,
              marginBottom: 12,
            }}
          >
            Who We Are
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: COLORS.text,
              lineHeight: 1.25,
              marginBottom: 16,
            }}
          >
            Built by engineers who've been in your shoes.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            style={{
              fontSize: '1rem',
              color: COLORS.textSoft,
              lineHeight: 1.7,
              maxWidth: 640,
              marginBottom: 48,
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
            maxWidth: 780,
          }}
        >
          {founders.map((founder, i) => (
            <FounderCard
              key={founder.initials}
              founder={founder}
              delay={0.2 + i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
