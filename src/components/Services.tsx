import { Reveal } from './Reveal';

const services = [
  {
    tag: 'Core Service',
    title: 'Fractional DevOps',
    description:
      'A senior DevOps engineer embedded in your team — available when you need them, without the overhead of a full-time hire. We handle your infrastructure so your developers can focus on product.',
    tools: ['AWS', 'GCP', 'Terraform', 'GitHub Actions', 'Docker'],
  },
  {
    tag: 'High ROI',
    title: 'Cloud Cost Optimization',
    description:
      'We audit your cloud spend, right-size resources, implement reserved instances, and set up automated cost alerts. Most clients save 30–40% within the first month.',
    tools: ['FinOps', 'AWS Cost Explorer', 'Kubecost', 'Infracost'],
  },
  {
    tag: 'Platform',
    title: 'Kubernetes & Platform Engineering',
    description:
      'Production-grade Kubernetes clusters with GitOps workflows, policy enforcement, observability, and self-service developer platforms that scale with your team.',
    tools: ['Kubernetes', 'Helm', 'ArgoCD', 'OPA', 'Prometheus'],
  },
  {
    tag: 'Modernization',
    title: 'IaC Migration & CI/CD',
    description:
      'Migrate from ClickOps to Infrastructure as Code. Set up robust CI/CD pipelines with automated testing, security scanning, and zero-downtime deployments.',
    tools: ['Terraform', 'Pulumi', 'GitLab CI', 'ArgoCD'],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight max-w-2xl">
            Production-grade DevOps, without the full-time cost.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="rounded-xl border border-border bg-card/50 p-6 md:p-8 h-full flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70">
                  {s.tag}
                </span>
                <h3 className="mt-3 text-xl font-display text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
