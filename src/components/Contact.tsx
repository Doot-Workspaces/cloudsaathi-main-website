import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Sparkles, Zap, Calendar, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Lambda API endpoint - Update this with your actual Lambda URL
const LAMBDA_API_URL = import.meta.env.VITE_LAMBDA_API_URL || 'https://olfffn2jq6hdmsrz27w2yycmv40juvxt.lambda-url.ap-south-1.on.aws/';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    primaryCloudProvider: '',
    monthlyCloudSpendRange: '',
    challenges: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Rate limiting: minimum 60 seconds between submissions
  const RATE_LIMIT_SECONDS = 60;
  
  const getLastSubmissionTime = (): number | null => {
    const lastTime = localStorage.getItem('cloudsaathi_last_submission');
    return lastTime ? parseInt(lastTime, 10) : null;
  };

  const setLastSubmissionTime = (): void => {
    localStorage.setItem('cloudsaathi_last_submission', Date.now().toString());
  };

  const canSubmit = (): boolean => {
    const lastTime = getLastSubmissionTime();
    if (!lastTime) return true;
    const timeSinceLastSubmission = (Date.now() - lastTime) / 1000;
    return timeSinceLastSubmission >= RATE_LIMIT_SECONDS;
  };

  const getTimeUntilNextSubmission = (): number => {
    const lastTime = getLastSubmissionTime();
    if (!lastTime) return 0;
    const timeSinceLastSubmission = (Date.now() - lastTime) / 1000;
    return Math.ceil(RATE_LIMIT_SECONDS - timeSinceLastSubmission);
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit
    if (!canSubmit()) {
      const secondsLeft = getTimeUntilNextSubmission();
      setSubmitStatus({
        type: 'error',
        message: `Please wait ${secondsLeft} second${secondsLeft !== 1 ? 's' : ''} before submitting again. This helps us prevent spam.`,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(LAMBDA_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Origin': window.location.origin,
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          workEmail: formData.workEmail,
          organization: formData.organization,
          primaryCloudProvider: formData.primaryCloudProvider,
          monthlyCloudSpendRange: formData.monthlyCloudSpendRange,
          challenges: formData.challenges,
          // captchaToken is optional - can be added later if needed
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        // Set rate limit timestamp on successful submission
        setLastSubmissionTime();
        
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          fullName: '',
          workEmail: '',
          organization: '',
          primaryCloudProvider: '',
          monthlyCloudSpendRange: '',
          challenges: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'connect@cloudsaathi.com',
      gradient: 'from-emerald-500 to-teal-500',
      href: 'mailto:connect@cloudsaathi.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9643389007',
      gradient: 'from-teal-500 to-cyan-500',
      href: 'tel:+919643389007',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Serving organizations globally',
      gradient: 'from-cyan-500 to-blue-500',
      href: '#',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Stop Worrying About Infrastructure?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Book a free 30-minute call. No commitment, no sales pitch — just a technical conversation about your stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <div className="reveal">
            <a
              href="https://calendly.com/connect-cloudsaathi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-teal-500/50 bg-teal-500/10 p-8 hover:bg-teal-500/15 transition-colors mb-6"
            >
              <span className="text-2xl font-bold text-white">Book Your Free Call</span>
              <p className="mt-2 text-slate-400 text-sm">30 min · No commitment</p>
            </a>
            <p className="text-slate-400 text-sm">hello@cloudsaathi.com</p>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">Or send a message</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Name, Email, Company, Message — we will respond within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                        submitStatus.type === 'success'
                          ? 'bg-teal-500/20 border-teal-500/50 text-teal-200'
                          : 'bg-red-500/20 border-red-500/50 text-red-200'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="group">
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-white/20 rounded-xl focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white placeholder-slate-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="workEmail" className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-white/20 rounded-xl focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white placeholder-slate-500"
                      placeholder="your@workemail.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                      Organization <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-white/20 rounded-xl focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white placeholder-slate-500"
                      placeholder="Your organization"
                    />
                  </div>

                  <div className="rounded-xl p-5 border border-white/10 bg-slate-800/30">
                    <p className="text-sm font-medium text-slate-400 mb-4">Optional</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="primaryCloudProvider" className="block text-xs font-medium text-slate-500 mb-2">
                          Cloud provider
                        </label>
                        <select
                          id="primaryCloudProvider"
                          name="primaryCloudProvider"
                          value={formData.primaryCloudProvider}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white text-sm"
                        >
                          <option value="">Not sure / Multiple</option>
                          <option value="AWS">AWS (Amazon Web Services)</option>
                          <option value="Azure">Azure (Microsoft)</option>
                          <option value="GCP">GCP (Google Cloud)</option>
                          <option value="Other">Other / On-Premise</option>
                        </select>
                      </div>

                      <div className="group">
                        <label htmlFor="monthlyCloudSpendRange" className="block text-xs font-medium text-slate-500 mb-2">
                          Infrastructure scale
                        </label>
                        <select
                          id="monthlyCloudSpendRange"
                          name="monthlyCloudSpendRange"
                          value={formData.monthlyCloudSpendRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white text-sm"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="Under 50000">Just getting started</option>
                          <option value="50000-100000">Small scale</option>
                          <option value="100000-500000">Growing business</option>
                          <option value="500000-1000000">Enterprise level</option>
                          <option value="Above 1000000">Large enterprise</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="challenges" className="block text-sm font-medium text-slate-300 mb-2">
                      Message <span className="text-teal-400">*</span>
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 border border-white/20 rounded-xl focus:border-teal-500 focus:outline-none bg-slate-800/50 text-white placeholder-slate-500 resize-none"
                      placeholder="What's broken, risky, or slowing you down? Tell us your DevOps challenges and we'll give you honest advice."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 flex-shrink-0" />
                        <span>Send It</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    We respect your privacy. No spam, just a direct technical response within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
