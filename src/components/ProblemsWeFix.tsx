import { AlertTriangle, TrendingDown, Shield, Clock, DollarSign } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ProblemsWeFix() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      problem: 'Cloud setup feels confusing or risky',
      outcome: 'We handle it. You get production-ready infrastructure.',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
    },
    {
      icon: TrendingDown,
      problem: 'Deployments break production',
      outcome: 'Zero-downtime deployments. No more broken releases.',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      icon: DollarSign,
      problem: 'Cloud bills keep increasing',
      outcome: 'We show you where to cut costs. Typically reducing cloud costs by 20-40%. Real savings, not promises.',
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
    },
    {
      icon: Shield,
      problem: 'Security & compliance unclear',
      outcome: 'Enterprise security without enterprise cost. SOC 2, GDPR, HIPAA ready.',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
    },
  ];

  return (
    <section id="problems" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              DevOps Problems We Fix
            </span>
            <span className="block text-gray-900 mt-2">(Fast)</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We fix what's broken. You get real results. No promises we can't keep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-emerald-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex bg-gradient-to-br ${item.gradient} p-4 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-bold text-red-600 mb-2">Problem</div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                        {item.problem}
                      </h3>
                    </div>
                    
                    <div>
                      <div className="text-sm font-bold text-emerald-600 mb-2">Outcome</div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
