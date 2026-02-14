import { useEffect, useRef } from 'react';

const STATS = [
  '50+ Deployments',
  '99.9% Uptime SLA',
  '5+ Years Experience',
  'AWS & Azure Certified',
];

const BADGES = ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'];

export default function TrustStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('active'));
      },
      { threshold: 0.1 }
    );
    if (stripRef.current) stripRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={stripRef} className="py-12 border-y border-white/10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-sm font-medium mb-8 reveal">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10 reveal">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-500 text-sm"
            >
              [Client Logo {i}]
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-slate-400 text-sm reveal">
          {STATS.map((stat, i) => (
            <span key={i} className="font-medium">
              {stat}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8 reveal">
          {BADGES.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-slate-300 text-xs font-semibold"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
