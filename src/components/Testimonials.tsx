import { Quote, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "CloudSaathi helped us secure our infrastructure and make it more resilient. Their security expertise was exactly what we needed.",
      author: "Sana Masroor",
      role: "Language and Learning Foundation",
      rating: 5,
    },
    {
      quote: "We needed to optimize our infrastructure for better security and cost-efficiency. CloudSaathi delivered a solution that exceeded our expectations.",
      author: "MSB Sudheer Babu",
      role: "Tech Mahindra",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Real feedback from real clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative reveal bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-emerald-200 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-emerald-600 mb-4 opacity-50" />
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
