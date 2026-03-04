import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL, EMAIL_ADDRESS } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "CloudSaathi",
    "email": "connect@cloudsaathi.com",
    "url": "https://cloudsaathi.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact CloudSaathi — Book a Free DevOps Consultation"
        description="Get in touch with CloudSaathi for fractional DevOps services. Book a free 30-minute consultation. Email: connect@cloudsaathi.com. Based in New Delhi, India."
        path="/contact"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>contact</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Let's talk about your <em style={{ color: C.green }}>infrastructure</em>.
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            Whether you need a one-time infrastructure audit or ongoing fractional DevOps support, we'd love to hear about
            your challenges. Every conversation starts with listening.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px 80px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ padding: 32, borderRadius: 6, background: C.greenL, border: `1px solid ${C.green}33` }}>
              <h2 style={{ fontFamily: F.d, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Book a call</h2>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                Free 30-minute discovery call. We'll assess your current infrastructure, discuss your goals,
                and recommend a clear path forward. No sales pitch.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: C.green, color: C.bgW, textDecoration: "none", display: "inline-block", letterSpacing: 0.5 }}>
                schedule on Calendly →
              </a>
            </div>

            <div style={{ padding: 32, borderRadius: 6, background: C.bg, border: `1px solid ${C.bdr}` }}>
              <h2 style={{ fontFamily: F.d, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Send us an email</h2>
              <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                Prefer email? Write to us with a brief description of your infrastructure and what you're looking for.
                We respond within 24 hours.
              </p>
              <a href={`mailto:${EMAIL_ADDRESS}`}
                style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: "transparent", color: C.green, textDecoration: "none", display: "inline-block", letterSpacing: 0.5, border: `1px solid ${C.green}` }}>
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>

          <div style={{ marginTop: 32, padding: 24, borderRadius: 6, background: C.bg, border: `1px solid ${C.bdr}` }}>
            <h2 style={{ fontFamily: F.d, fontSize: 20, fontWeight: 400, color: C.ink, marginBottom: 10 }}>Where we're based</h2>
            <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>
              <strong style={{ color: C.ink }}>New Delhi, India</strong> — We work in IST (UTC+5:30) with 4–6 hours of overlap
              with US East business hours. Infrastructure work runs 24/7, so your CI/CD pipelines and monitoring are maintained around the clock.
            </p>
            <div style={{ marginTop: 12, display: "flex", gap: 16 }}>
              <a href="https://linkedin.com/company/cloudsaathi" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none" }}>
                LinkedIn →
              </a>
              <a href="https://github.com/cloudsaathi" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none" }}>
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
