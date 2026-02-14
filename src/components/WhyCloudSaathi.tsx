import { Clock, DollarSign, Layers } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ITEMS = [
  {
    icon: Clock,
    title: '2-Week Onboarding',
    description:
      'Start executing your DevOps roadmap within 2 weeks. No 3-month hiring process.',
  },
  {
    icon: DollarSign,
    title: '60% Cost Savings',
    description:
      'Senior DevOps expertise at a fraction of a full-time salary. Pay only for what you need.',
  },
  {
    icon: Layers,
    title: 'Full Team, Not One Person',
    description:
      "Access our entire team's expertise — Kubernetes, security, CI/CD, cloud architecture — not just one hire's skill set.",
  },
];

export default function WhyCloudSaathi() {
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
            Why Teams Choose CloudSaathi
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center hover:border-teal-500/20 transition-colors"
              >
                <div className="inline-flex p-4 rounded-2xl bg-teal-500/10 text-teal-400 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
