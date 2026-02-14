import { Quote, Heart, Users, TrendingUp, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ImpactStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // If on home page, just scroll to contact
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then scroll
      navigate('/#contact');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const stories = [
    {
      quote: "CloudSaathi scanned our application, removed miscellaneous code, and implemented proper security practices. They helped us secure our infrastructure and make it more resilient. Their security expertise was exactly what we needed to protect our organization's data and operations.",
      author: "Sana Masroor",
      role: "Language and Learning Foundation",
      icon: Heart,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      quote: "We needed to set up our infrastructure to be more secure and cost-effective. CloudSaathi helped us optimize our cloud setup, implement proper security measures, and reduce our monthly costs significantly. Their expertise in infrastructure auditing and security configuration was exactly what we needed.",
      author: "MSB Sudheer Babu",
      role: "Tech Mahindra",
      icon: TrendingUp,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      quote: "Working on more success stories. Your organization could be next.",
      author: "Coming Soon",
      role: "More Case Studies",
      icon: Users,
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
    },
  ];

  const impactMetrics = [
    { number: "Cloud", label: "Certified Experts", icon: Users, color: "text-green-600" },
    { number: "Global", label: "Reach & Standards", icon: Globe, color: "text-emerald-600" },
    { number: "Multi", label: "Sector Expertise", icon: TrendingUp, color: "text-teal-600" },
    { number: "Expert", label: "Team Credentials", icon: Heart, color: "text-cyan-600" },
  ];

  return (
    <section id="impact-stories" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-green-50/30 to-emerald-50/30 relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-green-200/20 rounded-full blur-3xl"></div>
      
      {/* Organic Blob Shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-100/20 rounded-full blur-2xl animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wider bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200">
              Impact Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            <span className="text-gradient-impact" itemProp="name">Real Impact, Real Stories</span>
          </h2>
          <div className="divider-unique w-24 sm:w-32 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Real stories. Real organizations. Fractional DevOps over full-time hires.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 reveal">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-hd hover:shadow-hd-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-green-100 text-center touch-manipulation"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-extrabold ${metric.color} mb-2`}>
                  {metric.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full bg-gradient-to-br ${story.bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-hd-lg hover:shadow-hd-xl transition-all duration-500 transform hover:-translate-y-2 active:scale-95 border border-green-100 overflow-hidden touch-manipulation`}>
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className={`w-24 h-24 text-green-600`} />
                  </div>
                  
                  {/* Icon Badge */}
                  <div className={`relative z-10 inline-flex bg-gradient-to-br ${story.gradient} p-4 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Quote */}
                  <div className="relative z-10 mb-6">
                    <Quote className="w-8 h-8 text-green-600 mb-4 opacity-50" />
                    <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="relative z-10 border-t border-green-200 pt-6">
                    <div className="font-bold text-gray-900 text-lg">{story.author}</div>
                    <div className="text-gray-600 text-sm">{story.role}</div>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${story.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center reveal px-4 sm:px-0">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-hd-xl text-white max-w-4xl w-full">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Ready to Get the Same Results?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-green-50 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the same DevOps expertise these teams did—without the full-time cost. Let's talk about how we can help you achieve your goals.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white text-green-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto w-full sm:w-auto touch-manipulation"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Start Your Impact Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

