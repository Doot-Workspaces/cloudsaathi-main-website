import { Reveal } from './Reveal';

const steps = [
  { num: '01', title: 'Free Discovery Call', time: 'Day 1' },
  { num: '02', title: 'Infrastructure Audit', time: 'Day 2–3' },
  { num: '03', title: 'Work Plan & Kickoff', time: 'Day 4–5' },
  { num: '04', title: 'Embedded Execution', time: 'Ongoing' },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            From call to code in under a week.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.num} className="bg-card/50 p-6 md:p-8">
                <span className="text-xs font-mono text-accent">{s.num}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-muted">
                  {s.time}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
