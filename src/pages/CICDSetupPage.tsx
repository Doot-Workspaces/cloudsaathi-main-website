import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "ProfessionalService", "name": "CloudSaathi", "url": "https://cloudsaathi.com" },
  "name": "CI/CD Pipeline Setup",
  "description": "Professional CI/CD pipeline setup and automation for startups. GitHub Actions, GitLab CI, Jenkins — configured for your stack.",
  "areaServed": "Worldwide",
  "serviceType": "CI/CD Pipeline Setup",
};

export default function CICDSetupPage() {
  return (
    <>
      <SEOHead
        title="CI/CD Pipeline Setup for Startups | CloudSaathi — DevOps Consulting"
        description="Professional CI/CD pipeline setup and automation for startups. GitHub Actions, GitLab CI, Jenkins — configured for your stack. Fractional DevOps from CloudSaathi, New Delhi."
        path="/services/cicd-setup"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Link to="/services" style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none", marginBottom: 20, display: "inline-block" }}>← all services</Link>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>service</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            CI/CD Pipeline Setup
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final copy */}
            Every commit should move you closer to production. We set up automated build, test, and deploy pipelines
            that turn your code pushes into reliable releases — without manual intervention.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 24 }}>What we set up</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "Build Pipelines", d: "Automated builds triggered on every push or PR. Docker multi-stage builds, caching, and artifact management configured for speed." },
              { t: "Automated Testing", d: "Unit tests, integration tests, and E2E tests integrated into every pipeline. Fail fast, fix early." },
              { t: "Deployment Automation", d: "Blue-green, canary, or rolling deploys to staging and production. Zero-downtime releases as the default." },
              { t: "Environment Management", d: "Isolated staging, QA, and production environments. Infrastructure-as-code so environments are reproducible." },
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
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>Tools we work with</h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, ArgoCD — we configure whatever fits your stack. We don't prescribe tools;
            we configure the right one for your team size, deployment targets, and budget. Every pipeline is documented with
            runbooks your team can follow at 2am without calling anyone.
          </p>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16, marginTop: 32 }}>What you get</h2>
          <ul style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 2, fontWeight: 300, paddingLeft: 20 }}>
            <li>Production-ready CI/CD pipelines configured in 3–5 days</li>
            <li>Automated test integration with clear pass/fail gates</li>
            <li>Deployment runbooks and documentation</li>
            <li>Slack/Teams notifications for build and deploy status</li>
            <li>Cost-optimized runner configuration</li>
          </ul>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Ready to automate your deployments?</h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            30-minute call. We'll review your current setup and recommend next steps.
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
