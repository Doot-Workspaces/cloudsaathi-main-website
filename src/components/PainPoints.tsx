import { Reveal } from './Reveal';

const cards = [
  {
    title: 'Months spent searching for the right DevOps hire',
    body: 'Senior DevOps engineers in the US command $180K–$250K salaries, take 3–6 months to hire, and often leave within a year. Meanwhile, your infrastructure stalls.',
  },
  {
    title: 'Your developers are doing DevOps part-time',
    body: 'Context-switching between feature work and infrastructure kills velocity. Your best engineers are debugging CI pipelines instead of shipping product.',
  },
  {
    title: 'Your cloud bill grows faster than your revenue',
    body: 'Overprovisioned instances, idle resources, and no FinOps strategy. Most startups overspend 30–40% on cloud without realizing it.',
  },
  {
    title: 'Technical debt compounds silently',
    body: 'No IaC, manual deployments, no monitoring, no incident runbooks. Everything works — until it doesn\'t, and nobody knows how to fix it at 2 AM.',
  },
];

export function PainPoints() {
  return (
    <section id="pain" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight max-w-xl">
            DevOps is eating your engineering bandwidth.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="group relative rounded-xl border border-border bg-card/50 p-6 md:p-8 hover:border-amber/30 transition-colors h-full">
                {/* Amber gradient top border on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber/60 transition-all duration-500 rounded-t-xl" />
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
