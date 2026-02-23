const footerLinks = {
  Services: [
    { label: 'Fractional DevOps', href: '#services' },
    { label: 'Cloud Cost Optimization', href: '#services' },
    { label: 'Kubernetes & Platform', href: '#services' },
    { label: 'IaC Migration & CI/CD', href: '#services' },
  ],
  Company: [
    { label: 'How It Works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Connect: [
    { label: 'Free Infra Audit', href: '#audit' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/cloudsaathi' },
    { label: 'Email Us', href: 'mailto:connect@cloudsaathi.com' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-lg font-semibold tracking-tight">
              <span className="text-white">cloud</span>
              <span className="text-accent">saathi</span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Fractional DevOps for startups that need production-grade infrastructure
              without the full-time hire.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors"
                      {...(link.href.startsWith('http') || link.href.startsWith('mailto')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} CloudSaathi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy.html" className="text-xs text-muted hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms-of-service.html" className="text-xs text-muted hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
