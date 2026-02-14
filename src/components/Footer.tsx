import { Linkedin, Twitter, Mail, Github, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-slate-900 border-t border-white/10 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png"
                alt="CloudSaathi"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-white">CloudSaathi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              Fractional DevOps Experts | On-Demand DevOps Services
            </p>
            <p className="text-slate-500 text-xs mb-4">
              Co-founders:{' '}
              <a href="https://www.linkedin.com/in/ankit-jangir-devops/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">Ankit Jangir</a>
              {' · '}
              <a href="https://www.linkedin.com/in/nihaan-mohammed/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">Nihaan Mohammed</a>
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/ankit-jangir-devops/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/ankitjangir1690" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="Twitter/X">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/ankittjangir1690" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {['CI/CD Pipelines', 'Infrastructure as Code', 'Kubernetes', 'Cloud Migration', 'DevSecOps', 'Monitoring'].map((name, i) => (
                <li key={i}>
                  <button onClick={() => location.pathname !== '/' ? navigate('/#services') : scrollToSection('#services')} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Careers</Link></li>
              <li><button onClick={() => scrollToSection('#contact')} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-slate-500 text-sm text-center">
            &copy; 2025 CloudSaathi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-teal-400 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
