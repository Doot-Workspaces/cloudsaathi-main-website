import { Reveal } from './Reveal';

const proofPoints = [
  { value: '40%', label: 'Avg Cloud Cost Saved' },
  { value: '3x', label: 'Faster Deploy Cycles' },
  { value: '24hr', label: 'Avg Response Time' },
  { value: '0', label: 'Long-Term Contracts' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Accepting New Clients — Q1 2026
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight">
            Your startup needs{' '}
            <em className="text-accent not-italic font-display italic">infrastructure</em>
            , not an infrastructure team.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            CloudSaathi embeds senior DevOps engineers into your team on-demand.
            CI/CD, Kubernetes, Terraform, cloud cost optimization —
            production-grade infrastructure at a fraction of a full-time hire.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#audit"
              className="inline-flex items-center px-6 py-3 bg-accent text-bg font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              Get a Free Infra Audit &rarr;
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center px-6 py-3 border border-border text-white font-medium rounded-lg hover:bg-card/50 transition-colors text-sm"
            >
              See Pricing
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {proofPoints.map((p) => (
              <div key={p.label}>
                <div className="text-2xl md:text-3xl font-display text-white">{p.value}</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-muted">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
