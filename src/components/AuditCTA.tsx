import { Reveal } from './Reveal';

const details = [
  '30-minute call',
  'No commitment',
  'Written report',
  'Actionable insights',
];

export function AuditCTA() {
  return (
    <section id="audit" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="relative rounded-2xl border border-border bg-gradient-to-b from-card/80 to-bg overflow-hidden">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div className="px-6 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
                Get a free infrastructure audit.
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto">
                We&apos;ll review your current setup, identify quick wins, and give you a
                prioritized roadmap — no strings attached.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {details.map((d) => (
                  <span key={d} className="text-sm text-muted flex items-center gap-1.5">
                    <span className="text-accent">&#10003;</span> {d}
                  </span>
                ))}
              </div>

              <a
                href="https://calendly.com/connect-cloudsaathi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center px-8 py-3.5 bg-accent text-bg font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                Book Your Free Audit &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
