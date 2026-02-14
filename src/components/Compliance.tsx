import { Shield, FileCheck, Lock, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Compliance() {
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

  const complianceStandards = [
    {
      icon: Shield,
      title: 'SOC 2',
      description: 'Security controls, availability, processing integrity. We help you achieve and maintain SOC 2 compliance.',
      items: ['Access controls', 'System monitoring', 'Change management', 'Documentation'],
    },
    {
      icon: Lock,
      title: 'GDPR',
      description: 'EU data protection compliance. We ensure your infrastructure meets GDPR requirements.',
      items: ['Data encryption', 'Access logging', 'Right to deletion', 'Privacy by design'],
    },
    {
      icon: FileCheck,
      title: 'HIPAA',
      description: 'Healthcare data protection. We implement HIPAA-compliant infrastructure for healthcare organizations.',
      items: ['PHI encryption', 'Access controls', 'Audit trails', 'Business associate agreements'],
    },
  ];

  const hardeningPractices = [
    'IAM policies with least privilege access',
    'Network segmentation and firewalls',
    'Encryption at rest and in transit',
    'Regular security audits and penetration testing',
    'Automated compliance monitoring',
    'Incident response procedures',
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Security & Compliance
            </span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We harden servers to meet enterprise security standards. Here's how we do it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {complianceStandards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={index}
                className="group relative reveal bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-emerald-200 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="inline-flex bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {standard.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {standard.description}
                  </p>
                  <ul className="space-y-2">
                    {standard.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-emerald-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Server Hardening Practices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardeningPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
