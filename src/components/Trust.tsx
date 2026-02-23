import { Reveal } from './Reveal';

const testimonials = [
  {
    quote:
      'CloudSaathi joined our Slack on Monday and had our broken CI/CD pipeline fixed by Wednesday. They feel like part of the team — not an outside vendor.',
    author: 'Engineering Lead',
    context: 'Series A SaaS, San Francisco',
  },
  {
    quote:
      'They found $5K/month in wasted AWS spend we didn\'t even know about. The engagement paid for itself in the first two weeks.',
    author: 'CTO & Co-founder',
    context: 'Series B FinTech, New York',
  },
  {
    quote:
      'What impressed me most was the communication. Weekly updates, clear Terraform PRs, and they actually documented everything. That\'s rare.',
    author: 'VP Engineering',
    context: 'HealthTech, Austin',
  },
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            Why Teams Trust Us
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            We become part of your team.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8 h-full flex flex-col">
                <blockquote className="text-base font-display italic text-white/90 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-white">{t.author}</p>
                  <p className="text-xs text-muted mt-0.5">{t.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
