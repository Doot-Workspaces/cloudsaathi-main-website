import { useEffect, useRef } from 'react';

const CATEGORIES = [
  { label: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
  { label: 'Containers', items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'] },
  { label: 'IaC', items: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'] },
  { label: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'] },
  { label: 'Monitoring', items: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'] },
  { label: 'Security', items: ['Vault', 'Trivy', 'Snyk', 'AWS Security Hub'] },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('active'));
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Technologies We Work With
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="reveal">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-4">
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm hover:border-teal-500/30 hover:text-teal-400 border border-transparent transition-colors"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
