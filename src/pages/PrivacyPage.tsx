import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — CloudSaathi",
  "url": "https://cloudsaathi.com/privacy",
  "publisher": {
    "@type": "Organization",
    "name": "CloudSaathi",
    "url": "https://cloudsaathi.com",
  },
};

const S = {
  section: { padding: "60px 32px", maxWidth: 820, margin: "0 auto" } as const,
  h2: { fontFamily: F.d, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 14, marginTop: 36 } as const,
  h3: { fontFamily: F.b, fontSize: 16, fontWeight: 600, color: C.ink, marginBottom: 8, marginTop: 24 } as const,
  p: { fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.85, fontWeight: 300, marginBottom: 12 } as const,
  ul: { fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.85, fontWeight: 300, marginBottom: 12, paddingLeft: 24 } as const,
  li: { marginBottom: 6 } as const,
};

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — CloudSaathi"
        description="CloudSaathi privacy policy. Learn how we collect, use, and protect your data. Privacy is our constraint — your data never trains external models."
        path="/privacy"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 40px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>legal</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: F.m, fontSize: 12, color: C.inkS, opacity: 0.6 }}>
            Last updated: 8 March 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "20px 32px 80px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>

          <p style={S.p}>
            CloudSaathi ("we", "us", or "our") operates the website <strong>cloudsaathi.com</strong> (the "Site").
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site
            or engage our services. Privacy is a core constraint in our architecture — not an afterthought.
          </p>

          <h2 style={S.h2}>1. Information We Collect</h2>

          <h3 style={S.h3}>Information you provide</h3>
          <ul style={S.ul}>
            <li style={S.li}>Name and email address when you fill out our contact form or book a call</li>
            <li style={S.li}>Company name and project details shared during consultations</li>
            <li style={S.li}>Any other information you voluntarily provide via email or messaging</li>
          </ul>

          <h3 style={S.h3}>Information collected automatically</h3>
          <ul style={S.ul}>
            <li style={S.li}>Browser type, operating system, and device information</li>
            <li style={S.li}>IP address (anonymised where possible)</li>
            <li style={S.li}>Pages visited, time spent, and referral sources</li>
            <li style={S.li}>Cookies and similar tracking technologies (see Section 5)</li>
          </ul>

          <h2 style={S.h2}>2. How We Use Your Information</h2>
          <ul style={S.ul}>
            <li style={S.li}>To respond to your enquiries and schedule consultations</li>
            <li style={S.li}>To deliver and improve our DevOps services</li>
            <li style={S.li}>To send relevant updates about our services (only with your consent)</li>
            <li style={S.li}>To analyse Site usage and improve performance</li>
            <li style={S.li}>To comply with legal obligations</li>
          </ul>

          <h2 style={S.h2}>3. Data Sharing</h2>
          <p style={S.p}>
            We do not sell, rent, or trade your personal information. We may share data with:
          </p>
          <ul style={S.ul}>
            <li style={S.li}><strong>Service providers</strong> — hosting, analytics, and scheduling tools (e.g., Calendly) that help us operate the Site</li>
            <li style={S.li}><strong>Legal authorities</strong> — when required by law or to protect our rights</li>
          </ul>

          <h2 style={S.h2}>4. AI and Your Data</h2>
          <p style={S.p}>
            AI is central to how we work, but privacy is our constraint. Your infrastructure data, code, and configurations
            shared during engagements are never used to train external AI models. All AI-assisted processes are scoped to your
            engagement and governed by your service agreement.
          </p>

          <h2 style={S.h2}>5. Cookies</h2>
          <p style={S.p}>
            We use essential cookies to ensure the Site functions correctly and analytics cookies to understand how visitors
            interact with our Site. You can control cookie preferences through your browser settings. Disabling cookies may
            affect certain features of the Site.
          </p>

          <h2 style={S.h2}>6. Data Retention</h2>
          <p style={S.p}>
            We retain personal information only as long as necessary for the purposes outlined in this policy or as required
            by law. Contact and consultation data is retained for the duration of the engagement plus 12 months, unless you
            request earlier deletion.
          </p>

          <h2 style={S.h2}>7. Your Rights</h2>
          <p style={S.p}>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={S.ul}>
            <li style={S.li}>Access, correct, or delete your personal data</li>
            <li style={S.li}>Object to or restrict processing of your data</li>
            <li style={S.li}>Withdraw consent at any time</li>
            <li style={S.li}>Request data portability</li>
          </ul>
          <p style={S.p}>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:connect@cloudsaathi.com" style={{ color: C.green, textDecoration: "none" }}>connect@cloudsaathi.com</a>.
          </p>

          <h2 style={S.h2}>8. Security</h2>
          <p style={S.p}>
            We implement appropriate technical and organisational measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but we
            continuously review and improve our safeguards.
          </p>

          <h2 style={S.h2}>9. Third-Party Links</h2>
          <p style={S.p}>
            Our Site may contain links to third-party websites (e.g., Calendly, LinkedIn). We are not responsible for the
            privacy practices of these external sites and encourage you to review their privacy policies.
          </p>

          <h2 style={S.h2}>10. Changes to This Policy</h2>
          <p style={S.p}>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last
            updated" date. Continued use of the Site after changes constitutes acceptance of the revised policy.
          </p>

          <h2 style={S.h2}>11. Contact Us</h2>
          <p style={S.p}>
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p style={{ ...S.p, fontFamily: F.m, fontSize: 13 }}>
            CloudSaathi<br />
            New Delhi, India<br />
            <a href="mailto:connect@cloudsaathi.com" style={{ color: C.green, textDecoration: "none" }}>connect@cloudsaathi.com</a>
          </p>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.bdr}` }}>
            <Link to="/" style={{ fontFamily: F.m, fontSize: 12, color: C.green, textDecoration: "none", letterSpacing: 0.5 }}>
              ← back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
