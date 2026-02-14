import { Shield, Users, Globe, HandHeart, Sparkles, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function About() {
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

  const features = [
    {
      icon: Zap,
      title: 'Real Experience',
      description: 'Worked with Tech Mahindra, Language & Learning Foundation, startups, and NGOs. Real projects. Real results.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      number: '01',
    },
    {
      icon: Users,
      title: 'Your DevOps Saathi (Partner)',
      description: "You get a dedicated expert, not a ticket-based support desk. We work directly with you. Clear communication. You know exactly who you're working with.",
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      number: '02',
    },
    {
      icon: Globe,
      title: 'Transparent Process',
      description: "Clear scope. Clear pricing. Regular updates. You always know what's happening and why.",
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      number: '03',
    },
  ];


  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-emerald-50/20 relative overflow-hidden">
      {/* Unique Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-100/30 rounded-full blur-2xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300/50 mb-3 sm:mb-4">
            <HandHeart className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" itemProp="name">
              What is Fractional DevOps?
            </span>
          </h2>
          <div className="divider-unique w-32 sm:w-40 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Full-time DevOps costs $100K+/year. Most teams don't need 40 hours/week. We provide senior expertise when you need it—without the full-time cost or commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left Content - Storytelling */}
          <div className="space-y-6 sm:space-y-8 reveal">
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative glass-unique rounded-3xl p-6 sm:p-8 border-2 border-emerald-100/50 shadow-xl glow-unique">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">Why Fractional DevOps Exists</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid gap-3">
                    {[
                      { text: "Set up infrastructure properly", icon: "✓" },
                      { text: "Handle migrations without downtime", icon: "✓" },
                      { text: "Fix incidents when production is down", icon: "✓" },
                      { text: "Audit security and costs", icon: "✓" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">
                          {item.icon}
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-600">
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-semibold mb-2">
                      For:
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Startups • NGOs • SMEs • Teams that can't justify full-time DevOps
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-semibold mb-2">
                      Choose CloudSaathi when:
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      You need DevOps expertise, not full-time. You want senior engineers. You value security-first and transparent pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 sm:space-y-8 reveal">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 active:scale-95 border-2 border-gray-100 hover:border-emerald-200 overflow-hidden touch-manipulation"
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {feature.number}
                  </div>
                  
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                    <div className={`bg-gradient-to-br ${feature.gradient} p-4 sm:p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
