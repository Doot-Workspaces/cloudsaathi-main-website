import { BookOpen, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Blog() {
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
    <section id="blog" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wider bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200">
              Blog
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              DevOps Insights
            </span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Latest trends. Expert insights. Practical tutorials.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-hd-lg border border-green-100 text-center">
            <div className="inline-flex bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl mb-6">
              <BookOpen className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              DevOps content. Tutorials. Industry insights. Cloud migration. CI/CD. Infrastructure automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://medium.com/@ankitjangir.1690"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <span>Visit Our Medium Blog</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

