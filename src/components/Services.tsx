import { Cloud, GitBranch, Settings, Lock, Database, Zap, ArrowRight, Wrench, Shield, FileCheck, AlertTriangle, GraduationCap, MessageSquare, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Services() {
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

  const services = [
    {
      icon: Wrench,
      title: 'One-Time DevOps Setup',
      problem: 'Starting from scratch? Worried about doing it wrong?',
      outcome: 'Production-ready infrastructure. No guesswork.',
      bestFor: 'New products, MVPs, first-time cloud setup',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-50 to-green-50',
      glowColor: 'emerald',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration (Zero Downtime)',
      problem: 'Scared of breaking production during migration?',
      outcome: 'Move to AWS/Azure/GCP without downtime.',
      bestFor: 'Legacy apps, teams moving to cloud',
      caseStudy: 'See how we helped a startup move to AWS with zero downtime',
      caseStudyMetrics: {
        time: '3 weeks',
        downtime: '0 minutes',
        scalability: 'Increased 3x'
      },
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      glowColor: 'teal',
    },
    {
      icon: FileCheck,
      title: 'Infrastructure & Security Audit',
      problem: 'Cloud bills increasing? Security unclear?',
      outcome: 'Know what\'s broken. Clear fix roadmap with cost savings.',
      bestFor: 'Growing infrastructure, compliance needs',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      glowColor: 'blue',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Recovery & On-Call Support',
      problem: 'Production down at 2 AM? No one knows what to do?',
      outcome: 'We\'re in when you need us. Fast recovery.',
      bestFor: 'Business-critical systems, teams without 24/7 coverage',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      glowColor: 'red',
    },
    {
      icon: Shield,
      title: 'Compliance & Security Hardening',
      problem: 'Need SOC 2, GDPR, HIPAA? Security feels overwhelming?',
      outcome: 'Enterprise-grade security without enterprise cost.',
      bestFor: 'Regulated industries, startups scaling to enterprise',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      glowColor: 'purple',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 relative overflow-hidden">
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300/50 mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" itemProp="name">
              Our Services
            </span>
          </h2>
          <div className="divider-unique w-32 sm:w-40 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Real DevOps services. Real results. No fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Unique Authentic Card Design */}
                <div className="relative h-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover-unique border-2 border-gray-100 hover:border-emerald-200 overflow-hidden group-hover:border-opacity-100 glow-unique">
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                  
                  {/* Decorative Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with Unique Design */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className={`relative bg-gradient-to-br ${service.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-white/50`}>
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        {/* Sparkle Effect */}
                        <Sparkles className={`absolute -top-1 -right-1 w-4 h-4 text-${service.glowColor}-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-4 group-hover:text-gradient-unique transition-all duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Problem */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Problem</div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                        {service.problem}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">Outcome</div>
                      <p className="text-gray-800 leading-relaxed text-sm sm:text-base font-semibold">
                        {service.outcome}
                      </p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Best for</div>
                      <div className="text-sm font-semibold text-emerald-600">{service.bestFor}</div>
                    </div>

                    {/* Case Study Link with Metrics */}
                    {(service as any).caseStudy && (
                      <div className="pt-4 border-t border-gray-200 mb-4 space-y-3">
                        <a
                          href="/case-studies"
                          className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 group"
                        >
                          <span>{(service as any).caseStudy}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        {(service as any).caseStudyMetrics && (
                          <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Results</div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div>
                                <div className="text-gray-500">Time</div>
                                <div className="font-bold text-gray-900">{(service as any).caseStudyMetrics.time}</div>
                              </div>
                              <div>
                                <div className="text-gray-500">Downtime</div>
                                <div className="font-bold text-gray-900">{(service as any).caseStudyMetrics.downtime}</div>
                              </div>
                              <div>
                                <div className="text-gray-500">Scalability</div>
                                <div className="font-bold text-gray-900">{(service as any).caseStudyMetrics.scalability}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Unique Learn More Button - Clickable */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="flex items-center gap-2 text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 cursor-pointer hover:text-teal-600"
                      aria-label={`Learn more about ${service.title}`}
                      type="button"
                    >
                      <span className="text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Learn More</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-emerald-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unique CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center reveal px-4 sm:px-0">
          <div className="relative inline-block bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl text-white max-w-4xl w-full overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 pattern-grid opacity-10"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold text-sm">Ready to Get Started?</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">
                Ready to Get DevOps Help?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a call. Get a clear estimate in 30 minutes. No sales pitch. Honest advice.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-600 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 touch-manipulation inline-flex items-center gap-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
