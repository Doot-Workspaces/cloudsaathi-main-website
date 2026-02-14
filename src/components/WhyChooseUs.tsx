import { Award, Users, Shield, TrendingUp, Sparkles, Globe, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function WhyChooseUs() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Transparent Pricing',
      description: "No surprises. No hidden fees. Clear estimates before we start.",
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Your DevOps Saathi (Partner)',
      description: 'You get a dedicated expert, not a ticket-based support desk. We speak business, not buzzwords. We understand budgets. We deliver outcomes.',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Flexible Engagement',
      description: 'Monthly management, one-time projects, or consulting. Choose what fits your needs.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Award,
      title: 'Real Results',
      description: 'We deliver business outcomes, not just code. Real experience. Real results.',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];


  return (
    <section id="why-us" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wider bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="text-gradient-impact">Why Choose CloudSaathi?</span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We're not freelancers. We're not an agency. We're senior DevOps experts who work with you directly.
          </p>
        </div>


        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-hd-lg hover:shadow-hd-xl transition-all duration-500 card-hover-unique border border-gray-100 overflow-hidden touch-manipulation glow-unique">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${reason.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex bg-gradient-to-br ${reason.gradient} p-4 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {reason.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <CheckCircle className="w-5 h-5" />
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="reveal">
          <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-shimmer"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Transform Your Organization Today</span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-bold mb-6">
                We're Real People. We Deliver Real Results.
              </h3>
              <p className="text-xl mb-10 text-green-50 max-w-2xl mx-auto leading-relaxed">
                Not freelancers—we're a team. Not an agency—we're cost-efficient. Not full-time—we're flexible. We're senior DevOps experts who work directly with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/connect-cloudsaathi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Schedule a Consultation</span>
                  <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.querySelector('#about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 z-10 relative cursor-pointer"
                  aria-label="Learn more about CloudSaathi"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
