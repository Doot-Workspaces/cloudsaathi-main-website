import { Award, Shield, Users, Globe, CheckCircle2, Building2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function TrustSignals() {
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

  const credentials = [
    {
      icon: Award,
      title: 'Cloud Certifications',
      items: ['AWS Certified', 'Azure Certified', 'GCP Certified', 'Kubernetes Certified'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      items: ['Security Hardening', 'SOC 2, GDPR, HIPAA', 'Incident Response', 'Security Audits'],
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: 'Real Experience',
      items: ['Tech Mahindra', 'Language & Learning Foundation', 'Startups & NGOs', 'Global Teams'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      items: ['India-based', 'Works across time zones', 'International compliance', 'Cost-efficient pricing'],
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Why Trust CloudSaathi
            </span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Here's why teams trust us with their infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-emerald-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex bg-gradient-to-br ${credential.gradient} p-4 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      {credential.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {credential.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
