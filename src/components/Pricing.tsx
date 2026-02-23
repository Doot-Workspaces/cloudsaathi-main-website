import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

interface Tier {
  tag: string;
  name: string;
  price: string;
  hours: string;
  features: string[];
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    tag: 'Starter',
    name: 'Launch',
    price: '$2,000',
    hours: '~10 hrs/mo',
    features: [
      'CI/CD pipeline setup & maintenance',
      'Basic monitoring & alerting',
      'Slack-based communication',
      'Monthly infrastructure review',
    ],
  },
  {
    tag: 'Growth',
    name: 'Scale',
    price: '$4,000',
    hours: '~25 hrs/mo',
    featured: true,
    features: [
      'Full Infrastructure as Code',
      'Kubernetes management',
      'Cloud cost optimization',
      'Weekly sync calls',
      '4-hour incident response SLA',
    ],
  },
  {
    tag: 'Enterprise',
    name: 'Dominate',
    price: '$6,500',
    hours: '~40 hrs/mo',
    features: [
      'Everything in Scale',
      'SOC2 / HIPAA compliance support',
      '24/7 on-call coverage',
      'Architecture reviews',
      'Dedicated engineer',
      '2-hour incident response SLA',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            Pay for what you need. Scale when you're ready.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.tag} delay={i * 100}>
              <div
                className={`relative rounded-xl border p-6 md:p-8 h-full flex flex-col ${
                  tier.featured
                    ? 'border-accent bg-accent/5'
                    : 'border-border bg-card/50'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 text-[10px] font-mono uppercase tracking-widest bg-accent text-bg px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70">
                  {tier.tag}
                </span>
                <h3 className="mt-2 text-2xl font-display text-white">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-display text-white">{tier.price}</span>
                  <span className="text-sm text-muted">/mo</span>
                </div>
                <p className="mt-1 text-xs font-mono text-muted">{tier.hours}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#audit"
                  className={`mt-8 block text-center text-sm font-medium px-4 py-3 rounded-lg transition-colors ${
                    tier.featured
                      ? 'bg-accent text-bg hover:bg-accent/90'
                      : 'border border-border text-white hover:bg-card'
                  }`}
                >
                  Get Started &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-10 text-center text-sm text-muted max-w-2xl mx-auto">
            All plans are month-to-month. Need a custom scope?{' '}
            <a href="#audit" className="text-accent hover:underline">
              Let&apos;s talk.
            </a>{' '}
            We also offer fixed-price projects starting at $3,000.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
