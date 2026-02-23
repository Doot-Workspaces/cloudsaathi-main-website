import React, { useEffect, useState, useRef, useCallback } from 'react';
import { COLORS } from '../constants';

interface TerminalLine {
  text: string;
  type: 'cmd' | 'output' | 'success';
  delay: number;
}

const LINES: TerminalLine[] = [
  { text: 'cloudsaathi audit --target prod-cluster', type: 'cmd', delay: 0 },
  { text: 'Scanning 47 resources across 3 AWS regions...', type: 'output', delay: 800 },
  { text: 'Found 12 overprovisioned EC2 instances', type: 'output', delay: 1400 },
  { text: 'Found 3 unattached EBS volumes ($840/mo waste)', type: 'output', delay: 2000 },
  { text: 'CI/CD pipeline: 23min avg → optimizable to 8min', type: 'output', delay: 2600 },
  { text: 'Estimated savings: $4,200/month', type: 'success', delay: 3200 },
  { text: 'cloudsaathi deploy --fix-all --dry-run', type: 'cmd', delay: 4200 },
  { text: 'Generating Terraform plan...', type: 'output', delay: 4800 },
  { text: '18 resources to modify, 3 to destroy, 0 to create', type: 'output', delay: 5400 },
  { text: 'Plan saved. Ready for review.', type: 'success', delay: 6000 },
];

const PAUSE_BEFORE_RESTART = 3000;
const FADE_OUT_DURATION = 600;

const PREFIX_MAP: Record<TerminalLine['type'], string> = {
  cmd: '$ ',
  output: '→ ',
  success: '✓ ',
};

const COLOR_MAP: Record<TerminalLine['type'], string> = {
  cmd: COLORS.text,
  output: COLORS.textSoft,
  success: COLORS.accent,
};

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cycleRef = useRef(0);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const startCycle = useCallback(() => {
    const currentCycle = cycleRef.current;

    // Schedule each line to appear
    LINES.forEach((line, index) => {
      const timer = setTimeout(() => {
        if (cycleRef.current !== currentCycle) return;
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
      timersRef.current.push(timer);
    });

    // After last line delay + pause, begin fade-out then restart
    const lastDelay = LINES[LINES.length - 1].delay;
    const fadeOutTimer = setTimeout(() => {
      if (cycleRef.current !== currentCycle) return;
      setIsFadingOut(true);
    }, lastDelay + PAUSE_BEFORE_RESTART);
    timersRef.current.push(fadeOutTimer);

    const restartTimer = setTimeout(() => {
      if (cycleRef.current !== currentCycle) return;
      setIsFadingOut(false);
      setVisibleLines([]);
      cycleRef.current += 1;
      clearTimers();
      startCycle();
    }, lastDelay + PAUSE_BEFORE_RESTART + FADE_OUT_DURATION);
    timersRef.current.push(restartTimer);
  }, [clearTimers]);

  useEffect(() => {
    startCycle();
    return () => {
      clearTimers();
      cycleRef.current += 1;
    };
  }, [startCycle, clearTimers]);

  return (
    <div
      style={{
        background: COLORS.bgTerminal,
        border: `1px solid ${COLORS.border}`,
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '13px',
        lineHeight: 1.7,
        width: '100%',
        opacity: isFadingOut ? 0 : 1,
        transition: `opacity ${FADE_OUT_DURATION}ms ease`,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '12px 16px',
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#ff5f57',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#febc2e',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#28c840',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            marginLeft: '8px',
            color: COLORS.textMuted,
            fontSize: '11px',
            userSelect: 'none',
          }}
        >
          cloudsaathi — terminal
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: '16px', minHeight: '260px' }}>
        {LINES.map((line, index) => {
          const isVisible = visibleLines.includes(index);
          return (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease',
                color: COLOR_MAP[line.type],
                whiteSpace: 'pre-wrap',
                display: isVisible ? 'block' : 'none',
              }}
            >
              <span style={{ color: COLORS.textMuted }}>{PREFIX_MAP[line.type]}</span>
              {line.text}
              {/* Blinking cursor on the last visible line */}
              {isVisible && index === visibleLines[visibleLines.length - 1] && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '15px',
                    background: COLORS.accent,
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    animation: 'terminalBlink 1s step-end infinite',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Keyframes for blinking cursor */}
      <style>{`
        @keyframes terminalBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Terminal;
