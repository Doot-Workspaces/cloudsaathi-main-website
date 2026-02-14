import { Phone, Map, Users, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';

const STEPS = [
  { icon: Phone, num: '01', title: 'Discovery Call', description: 'We learn about your stack, team, and pain points. No sales pitch — just a technical conversation.' },
  { icon: Map, num: '02', title: 'Roadmap & Team Match', description: 'We create a custom DevOps roadmap and assign a senior engineer matched to your tech stack.' },
  { icon: Users, num: '03', title: 'Sprint Integration', description: 'Our engineer joins your standups, Slack, and PRs. We work as an extension of your team, not outsiders.' },
  { icon: Rocket, num: '04', title: 'Continuous Delivery', description: 'Weekly progress updates, knowledge transfer, documentation. Your infra improves every single week.' },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-we-work" ref={sectionRef} className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">How We Work</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">From first call to production — in under 2 weeks</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="reveal relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-14 h-14 rounded-full border-2 border-teal-500/50 bg-slate-800 flex items-center justify-center text-teal-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 mb-2">{step.num}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
