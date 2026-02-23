import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'How is this different from hiring a freelancer on Upwork?',
    a: 'Freelancers are transactional — they complete a ticket and move on. We embed into your team: we join your Slack, attend standups, write documentation, and care about the long-term health of your infrastructure. Think of us as your DevOps department, not a contractor.',
  },
  {
    q: 'What timezone do you operate in?',
    a: 'We operate primarily in US Eastern and Pacific time zones to maximize overlap with US and EU teams. We also offer async support windows for urgent issues outside core hours.',
  },
  {
    q: 'Can I scale up or down month to month?',
    a: 'Yes. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or pause at the end of any billing cycle with 15 days\' notice.',
  },
  {
    q: 'Do you work with our existing team or independently?',
    a: 'Both. We integrate with your engineering team — attending standups, reviewing PRs, and mentoring junior developers on infra best practices. We also work independently on larger infrastructure projects with regular check-ins.',
  },
  {
    q: 'What if we\'re not happy with the work?',
    a: 'We offer a satisfaction guarantee for the first 30 days. If you\'re not seeing value, we\'ll refund the difference. After that, you can cancel anytime — no questions asked.',
  },
  {
    q: 'How fast can you start?',
    a: 'Typically within one week of signing. We start with a discovery call, run an infrastructure audit, and begin embedded work by day 4–5. For urgent needs, we can accelerate to 48 hours.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            Common questions, straight answers.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border-b border-border">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-sm font-medium text-white group-hover:text-accent transition-colors pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-muted shrink-0 transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-60 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
