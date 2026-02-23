import { Linkedin } from 'lucide-react';
import { Reveal } from './Reveal';

const founders = [
  {
    name: 'Ankit Jangir',
    role: 'Co-founder',
    linkedin: 'https://www.linkedin.com/in/ankit-jangir-devops/',
    initials: 'AJ',
  },
  {
    name: 'Nihaan Mohammed',
    role: 'Co-founder',
    linkedin: 'https://www.linkedin.com/in/nihaan-mohammed/',
    initials: 'NM',
  },
];

export function Founders() {
  return (
    <section id="founders" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            Built by engineers who&apos;ve been in your shoes.
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            We&apos;ve scaled infrastructure at startups and enterprises alike.
            CloudSaathi was born from a simple idea: every startup deserves
            production-grade DevOps without the six-figure hire.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-4 max-w-2xl">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8 flex items-center gap-5">
                {/* Avatar placeholder with initials */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">{f.initials}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-display text-white">{f.name}</h3>
                  <p className="text-sm text-muted">{f.role}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-accent hover:text-accent/80 transition-colors"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
