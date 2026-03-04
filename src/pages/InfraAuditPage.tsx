import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "ProfessionalService", "name": "CloudSaathi", "url": "https://cloudsaathi.com" },
  "name": "Infrastructure Audit",
  "description": "Comprehensive infrastructure audit for your cloud environment. Identify waste, security gaps, and optimization opportunities.",
  "areaServed": "Worldwide",
  "serviceType": "Infrastructure Audit",
};

export default function InfraAuditPage() {
  return (
    <>
      <SEOHead
        title="Infrastructure Audit for Startups — From ₹9,999 | CloudSaathi"
        description="Comprehensive infrastructure audit for your cloud. Identify waste, security gaps, and optimization opportunities. Starting at ₹9,999. CloudSaathi — fractional DevOps from India."
        path="/services/infra-audit"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Link to="/services" style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none", marginBottom: 20, display: "inline-block" }}>← all services</Link>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>service</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Infrastructure Audit
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final copy */}
            We look at everything in your cloud and tell you exactly what's working, what's wasted, and what's at risk.
            One clear document with a prioritised action plan — not a 200-page report.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 24 }}>What the audit covers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "Cost Analysis", d: "Every resource mapped to function and cost. Unused instances, oversized databases, forgotten snapshots — we find what you're paying for but not using." },
              { t: "Security Assessment", d: "IAM policies, network exposure, encryption at rest and in transit, secrets management. We identify gaps before attackers do." },
              { t: "Architecture Review", d: "Is your architecture right for your scale? We assess single points of failure, scalability bottlenecks, and disaster recovery readiness." },
              { t: "Compliance Check", d: "SOC 2, HIPAA, DPDPA — we map your current state against compliance requirements and identify gaps." },
            ].map((item, i) => (
              <div key={i} style={{ padding: 22, background: C.bg, borderRadius: 6, border: `1px solid ${C.bdr}` }}>
                <h3 style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{item.t}</h3>
                <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>How it works</h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            Our AI-accelerated audit scans your entire cloud environment in hours, not weeks. We use automated discovery
            to map every resource, then our engineers review findings and prioritise by business impact. The result is a
            clear, actionable document your team can execute immediately.
          </p>
          <div style={{ padding: "16px 20px", background: C.greenL, borderRadius: 4, border: `1px solid ${C.green}33`, marginTop: 20 }}>
            <p style={{ fontFamily: F.b, fontSize: 14, color: C.ink, lineHeight: 1.7, fontWeight: 300 }}>
              <span style={{ fontWeight: 600 }}>Starting at ₹9,999.</span> Most audits complete in 3–5 days. Typical finding: 30–45% in recoverable cloud spend.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Get your free mini-audit</h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            30-minute call. We'll do a quick assessment and show you what a full audit uncovers.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: C.green, color: C.bgW, textDecoration: "none", display: "inline-block", letterSpacing: 0.5 }}>
            book a call →
          </a>
        </div>
      </section>
    </>
  );
}
