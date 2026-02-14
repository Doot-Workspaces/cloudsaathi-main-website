import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      heroRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-[#0F172A]"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(20, 184, 166, 0.25) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white reveal" itemProp="headline">
              Your DevOps Team — Without the Full-Time Hire
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 reveal">
              Production-grade cloud infrastructure, managed by senior engineers, for a fraction of the cost. Stop burning engineering hours on infrastructure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal">
              <a
                href="https://calendly.com/connect-cloudsaathi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-6 py-4 rounded-lg transition-colors"
              >
                Book a Free Intro Call
              </a>
              <button
                onClick={() => scrollTo('#how-we-work')}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-teal-500/50 text-white font-medium px-6 py-4 rounded-lg transition-colors"
              >
                See How We Work
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="reveal flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur p-6 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-teal-400">$</span> terraform apply<br />
                  <span className="text-slate-500"># zero-downtime deploy</span><br />
                  <span className="text-teal-400">$</span> kubectl rollout status<br />
                  <span className="text-slate-500"># CI/CD · IaC · K8s</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
