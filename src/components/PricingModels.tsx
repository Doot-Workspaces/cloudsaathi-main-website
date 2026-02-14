import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

const INCLUDED = [
  'Dedicated senior DevOps engineer',
  'Weekly progress reports',
  'Slack/Teams integration',
  'Infrastructure documentation',
];

const PLANS = [
  { name: 'Starter', hours: '10 hrs/week', bestFor: 'Early-stage startups, small infra needs', price: 'Starting at $[X]/mo', cta: 'Get Started', featured: false, extra: [] as string[] },
  { name: 'Growth', hours: '20 hrs/week', bestFor: 'Scaling teams, complex infra', price: 'Starting at $[X]/mo', cta: 'Most Popular — Get Started', featured: true, extra: ['On-call support'] },
  { name: 'Enterprise', hours: 'Dedicated team', bestFor: 'Large-scale, 24/7 coverage', price: 'Custom Pricing', cta: 'Talk to Us', featured: false, extra: ['On-call support', 'SLA guarantee'] },
];

export default function PricingModels() {
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
    <section id="pricing" ref={sectionRef} className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">No hidden fees. No long-term contracts. Scale up or down anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl border p-6 sm:p-8 ${plan.featured ? 'border-teal-500/50 bg-teal-500/5 ring-1 ring-teal-500/20' : 'border-white/10 bg-white/5 backdrop-blur'}`}
            >
              {plan.featured && (
                <div className="inline-block text-xs font-bold text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full mb-4">Most Popular</div>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{plan.hours}</p>
              <p className="text-slate-500 text-sm mt-2">{plan.bestFor}</p>
              <p className="text-2xl font-bold text-white mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {INCLUDED.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
                {plan.extra.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={plan.name === 'Enterprise' ? '#contact' : 'https://calendly.com/connect-cloudsaathi/30min'}
                target={plan.name === 'Enterprise' ? '_self' : '_blank'}
                rel={plan.name === 'Enterprise' ? undefined : 'noopener noreferrer'}
                className={`mt-8 block w-full text-center font-semibold py-3 rounded-lg transition-colors ${plan.featured ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
