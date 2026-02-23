import { Reveal } from './Reveal';

const tools = [
  'AWS',
  'GCP',
  'Azure',
  'Kubernetes',
  'Terraform',
  'Pulumi',
  'Docker',
  'GitHub Actions',
  'GitLab CI',
  'ArgoCD',
  'Helm',
  'Prometheus',
  'Grafana',
  'Datadog',
  'Vault',
  'Nginx',
  'PostgreSQL',
  'Redis',
];

export function TechStack() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4 text-center">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-center">
            Tools we work with every day.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm font-mono px-4 py-2 rounded-lg bg-card/70 border border-border text-muted hover:text-white hover:border-accent/30 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
