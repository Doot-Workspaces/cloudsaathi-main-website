import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ITEMS = [
  {
    q: 'What exactly is Fractional DevOps?',
    a: 'Senior DevOps expertise on a part-time retainer basis — like having a full team without the full-time cost. You get production-grade support when you need it, without hiring a full-time engineer.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Within 2 weeks of our first call, we will have a matched engineer integrated into your workflow.',
  },
  {
    q: 'What cloud platforms do you support?',
    a: 'AWS, Azure, and GCP. We are cloud-agnostic and work with whatever your team uses.',
  },
  {
    q: 'Do you replace our existing team?',
    a: 'No, we augment. We work alongside your developers, handle the infra, and transfer knowledge so your team grows stronger.',
  },
  {
    q: 'What if we need to scale up or down?',
    a: 'Completely flexible. Upgrade, downgrade, or pause anytime with 30 days notice.',
  },
  {
    q: 'How do you handle security and compliance?',
    a: 'Security is built into everything we do. We follow DevSecOps practices and can help with SOC2, HIPAA, and ISO 27001 compliance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white font-medium hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ${
                  openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
