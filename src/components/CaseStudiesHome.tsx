import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    client: 'Series A SaaS Startup',
    challenge: 'Manual deployments causing 4+ hours of downtime per release',
    solution:
      'Implemented GitHub Actions CI/CD + Terraform IaC + Kubernetes',
    result:
      'Zero-downtime deployments, 90% faster release cycle, 40% cloud cost reduction',
  },
  {
    client: 'Healthcare Tech Company',
    challenge: 'No monitoring, security gaps, failing compliance audits',
    solution:
      'DevSecOps pipeline + Prometheus/Grafana stack + HIPAA compliance automation',
    result: 'Passed SOC2 audit in 6 weeks, 99.99% uptime, zero security incidents',
  },
  {
    client: 'E-commerce Platform',
    challenge: 'Legacy monolith, could not scale during peak traffic',
    solution: 'Microservices migration + Kubernetes + Auto-scaling',
    result: 'Handled 10x traffic spike during sale, reduced infra costs by 35%',
  },
];

export default function CaseStudiesHome() {
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
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Results That Speak
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-teal-500/20 transition-colors"
            >
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">
                {cs.client}
              </div>
              <p className="text-slate-400 text-sm mb-4">
                <span className="text-slate-500">Challenge: </span>
                {cs.challenge}
              </p>
              <p className="text-slate-400 text-sm mb-4">
                <span className="text-slate-500">Solution: </span>
                {cs.solution}
              </p>
              <p className="text-white font-medium text-sm mb-4">
                {cs.result}
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
