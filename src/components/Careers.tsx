import { Briefcase, Users, Heart, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Careers() {
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

  const benefits = [
    {
      icon: Briefcase,
      title: 'Remote Work',
      description: 'Work from anywhere in the world',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Global Team',
      description: 'Collaborate with experts worldwide',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Impact-Driven',
      description: 'Help organizations make a difference',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="careers" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-teal-50/30 to-emerald-50/30 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wider bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200">
              Careers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Empower organizations with fractional DevOps expertise
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 reveal">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-hd hover:shadow-hd-lg transition-all duration-300 transform hover:-translate-y-2 border border-green-100 text-center"
              >
                <div className={`inline-flex bg-gradient-to-br ${benefit.gradient} p-4 rounded-2xl mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-hd-lg border border-green-100 text-center">
            <div className="inline-flex bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl mb-6">
              <Briefcase className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Open Positions Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Looking for DevOps engineers, cloud architects, and infrastructure experts. 
              Passionate about helping organizations succeed? We'd love to hear from you.
            </p>
            <a
              href="mailto:connect@cloudsaathi.com?subject=Career%20Inquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span>Send Us Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

