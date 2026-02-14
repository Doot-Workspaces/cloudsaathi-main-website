import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cloudsaathi_cookie_consent';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setAccepted(stored === 'true');
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setAccepted(true);
  };

  if (accepted === true) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-slate-900/95 backdrop-blur border-t border-white/10"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-300 text-sm">
          We use cookies to improve your experience. By continuing you agree to our{' '}
          <a href="/cookie-policy.html" className="text-teal-400 hover:underline">
            Cookie Policy
          </a>
          .
        </p>
        <button
          onClick={accept}
          className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
