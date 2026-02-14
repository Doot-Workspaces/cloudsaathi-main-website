import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: (typeof NAV_LINKS)[0]) => {
    if ('path' in item && item.path) {
      navigate(item.path);
      setIsMobileMenuOpen(false);
    } else if ('href' in item && item.href) {
      scrollToSection(item.href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png"
              alt="CloudSaathi"
              width="32"
              height="32"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold text-white">CloudSaathi</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://calendly.com/connect-cloudsaathi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book a Free Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] top-16"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="lg:hidden fixed left-0 right-0 top-16 z-[9999] bg-slate-900 border-b border-white/10 shadow-2xl rounded-b-2xl overflow-hidden">
              <div className="p-4 space-y-1">
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="https://calendly.com/connect-cloudsaathi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-teal-500 text-slate-900 font-semibold px-4 py-3 rounded-lg mt-2"
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
