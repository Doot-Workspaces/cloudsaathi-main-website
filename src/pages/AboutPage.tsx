import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "CloudSaathi",
    "description": "AI-native fractional DevOps team based in New Delhi, India. We treat infrastructure as a product.",
    "url": "https://cloudsaathi.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About CloudSaathi — Fractional DevOps Team from New Delhi, India"
        description="CloudSaathi is an AI-native fractional DevOps team based in New Delhi, India. We treat infrastructure as a product, not a task list. Cloud infrastructure consulting for startups worldwide."
        path="/about"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>about us</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            We shape infrastructure.<br /><em style={{ color: C.green }}>From New Delhi to the world.</em>
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final about copy */}
            CloudSaathi is an AI-native fractional DevOps team based in New Delhi, India. We exist because startups
            deserve world-class cloud infrastructure consulting without the overhead of a full-time DevOps hire.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 28, fontWeight: 400, color: C.ink, marginBottom: 20 }}>What we believe</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            {[
              { dv: "सत्य", en: "Truth", d: "Infrastructure is a product, not a task list. Every component has a user. Every process has a purpose." },
              { dv: "नींव", en: "Foundation", d: "Logic before law. When the foundation is sound, compliance becomes documentation — not a separate project." },
              { dv: "शांति", en: "Calm", d: "Precision towards solution. Not panic towards patch. Every system gets clear escalation paths and automated responses." },
            ].map((p, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 6, background: C.bg, border: `1px solid ${C.bdr}` }}>
                <p style={{ fontFamily: F.dv, fontSize: 14, color: C.warm, opacity: 0.5, marginBottom: 4 }}>{p.dv}</p>
                <p style={{ fontFamily: F.m, fontSize: 10, color: C.green, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>{p.en}</p>
                <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>How we work</h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            We are not an agency. We don't hand you a Slack channel and disappear. We embed with your team — joining your standups,
            using your Git workflow, and documenting everything in your systems. When the engagement ends, you own everything we built.
          </p>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            AI is our method, not our marketing. Every step of our process — from infrastructure discovery to documentation generation —
            is accelerated by AI tools constrained by privacy. Your data never trains external models.
          </p>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300 }}>
            We provide fractional DevOps for startups from seed to Series C. CI/CD pipeline setup, Kubernetes managed services,
            cloud migration, and infrastructure audits — delivered as products, not projects. DevOps outsourcing done right.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Want to know more?</h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            30-minute call. No sales pitch. Just honest answers about how we work.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: C.green, color: C.bgW, textDecoration: "none", display: "inline-block", letterSpacing: 0.5 }}>
              book a call →
            </a>
            <Link to="/services"
              style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: "transparent", color: C.ink, textDecoration: "none", display: "inline-block", letterSpacing: 0.5, border: `1px solid ${C.bdr}` }}>
              view services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
