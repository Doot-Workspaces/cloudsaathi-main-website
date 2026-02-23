import { useState, useEffect, useRef } from 'react'
import { COLORS } from '../constants'

interface TerminalLine {
  text: string
  delay: number
  type: 'cmd' | 'output' | 'success'
}

const LINES: TerminalLine[] = [
  { text: 'cloudsaathi audit --target prod-cluster', delay: 0, type: 'cmd' },
  { text: 'Scanning 47 resources across 3 AWS regions...', delay: 800, type: 'output' },
  { text: 'Found 12 overprovisioned EC2 instances', delay: 1400, type: 'output' },
  { text: 'Found 3 unattached EBS volumes ($840/mo waste)', delay: 2000, type: 'output' },
  { text: 'CI/CD pipeline: 23min avg \u2192 optimizable to 8min', delay: 2600, type: 'output' },
  { text: 'Estimated savings: $4,200/month', delay: 3200, type: 'success' },
  { text: 'cloudsaathi deploy --fix-all --dry-run', delay: 4200, type: 'cmd' },
  { text: 'Generating Terraform plan...', delay: 4800, type: 'output' },
  { text: '18 resources to modify, 3 to destroy, 0 to create', delay: 5400, type: 'output' },
  { text: 'Plan saved. Ready for review.', delay: 6000, type: 'success' },
]

const PREFIX: Record<TerminalLine['type'], string> = {
  cmd: '$ ',
  output: '\u2192 ',
  success: '\u2713 ',
}

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((line) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
      }, line.delay)
      timeouts.push(t)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [visibleLines])

  const getLineColor = (type: TerminalLine['type']): string => {
    switch (type) {
      case 'cmd':
        return COLORS.text
      case 'output':
        return COLORS.textSoft
      case 'success':
        return COLORS.accent
    }
  }

  return (
    <div
      style={{
        background: COLORS.bgTerminal,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 16px',
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#ff5f57',
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#febc2e',
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#28c840',
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: '0.7rem',
            color: COLORS.textMuted,
          }}
        >
          cloudsaathi — infra-audit
        </span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        style={{
          padding: '16px',
          maxHeight: 280,
          overflowY: 'auto',
        }}
      >
        {visibleLines.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: getLineColor(line.type),
              fontWeight: line.type === 'cmd' ? 700 : 400,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {PREFIX[line.type]}
            {line.text}
          </div>
        ))}

        {/* Blinking cursor */}
        <span className="terminal-cursor" style={{ color: COLORS.accent, fontSize: '0.8rem' }}>
          ▊
        </span>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  )
}
