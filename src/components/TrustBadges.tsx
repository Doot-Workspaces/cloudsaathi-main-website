import { useEffect, useRef } from 'react';

export default function TrustBadges() {
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

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Certified & Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* AWS Badge */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">AWS</div>
              <span className="text-xs text-gray-500">Certified</span>
            </div>
            
            {/* Azure Badge */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">Azure</div>
              <span className="text-xs text-gray-500">Certified</span>
            </div>
            
            {/* GCP Badge */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500">GCP</div>
              <span className="text-xs text-gray-500">Certified</span>
            </div>
            
            {/* Kubernetes Badge */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700">K8s</div>
              <span className="text-xs text-gray-500">Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
