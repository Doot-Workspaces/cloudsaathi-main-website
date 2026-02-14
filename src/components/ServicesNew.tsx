import {
  GitBranch,
  Server,
  Container,
  Cloud,
  Shield,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Setup',
    description:
      'Automated build, test, and deploy pipelines using GitHub Actions, GitLab CI, or Jenkins. Ship faster with zero manual steps.',
    href: '/#services',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description:
      'Provision and manage cloud resources with Terraform, CloudFormation, or Pulumi. Reproducible, version-controlled infra.',
    href: '/#services',
  },
  {
    icon: Container,
    title: 'Kubernetes & Containers',
    description:
      'Container orchestration, Helm charts, service mesh, and auto-scaling. Production-ready K8s from day one.',
    href: '/#services',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description:
      'Seamless migration to AWS, Azure, or GCP. Lift-and-shift or re-architect — we handle the heavy lifting.',
    href: '/#services',
  },
  {
    icon: Shield,
    title: 'DevSecOps & Compliance',
    description:
      'Security baked into every pipeline. Automated scans, secrets management, SOC2/HIPAA compliance automation.',
    href: '/#services',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Cost Optimization',
    description:
      'Real-time observability with Prometheus, Grafana, Datadog. FinOps practices to cut cloud waste by 30-40%.',
    href: '/#services',
  },
];

export default function ServicesNew() {
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
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            End-to-end DevOps services tailored to your stack and scale
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-teal-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-teal-500/10 text-teal-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
