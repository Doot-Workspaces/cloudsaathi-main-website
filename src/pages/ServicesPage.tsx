import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "ProfessionalService",
    "name": "CloudSaathi",
    "url": "https://cloudsaathi.com",
  },
  "name": "Fractional DevOps Services",
  "description": "Fractional DevOps for startups — CI/CD pipeline setup, Kubernetes managed services, cloud migration, and infrastructure audits.",
  "areaServed": "Worldwide",
};

const SERVICES = [
  {
    title: "CI/CD Pipeline Setup",
    dv: "निर्माण",
    route: "/services/cicd-setup",
    summary: "Automated build, test, and deploy pipelines configured for your stack. GitHub Actions, GitLab CI, or Jenkins — production-ready in days, not weeks.",
  },
  {
    title: "Kubernetes Management",
    dv: "संचालन",
    route: "/services/kubernetes-management",
    summary: "Cluster setup, monitoring, scaling, and maintenance. Managed Kubernetes services without a full-time DevOps hire.",
  },
  {
    title: "Cloud Migration",
    dv: "प्रवास",
    route: "/services/cloud-migration",
    summary: "Seamless migration from on-premise or between cloud providers. Zero-downtime strategies for AWS, GCP, and Azure.",
  },
  {
    title: "Infrastructure Audit",
    dv: "परीक्षण",
    route: "/services/infra-audit",
    summary: "Comprehensive audit of your cloud environment. Identify waste, security gaps, and optimization opportunities. Starting at ₹9,999.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="DevOps Services for Startups — CI/CD, Kubernetes, Cloud | CloudSaathi"
        description="Explore CloudSaathi's fractional DevOps services — CI/CD pipeline setup, Kubernetes management, cloud migration, and infrastructure audits. India-based DevOps outsourcing, globally delivered."
        path="/services"
        schema={SCHEMA}
      />

      <section style={{ minHeight: "55vh", display: "flex", alignItems: "center", padding: "110px 32px 60px", background: C.bg, position: "relative" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>our services</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Fractional DevOps services<br />for startups that <em style={{ color: C.green }}>ship</em>.
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final services overview copy */}
            CloudSaathi provides fractional DevOps consulting for early-stage startups. We handle your CI/CD pipeline setup,
            Kubernetes managed services, cloud migration, and infrastructure audits — so you can focus on building your product.
            DevOps outsourcing from India, delivered globally.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px 80px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 28 }}>what we do</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {SERVICES.map((svc) => (
              <Link
                key={svc.route}
                to={svc.route}
                style={{ textDecoration: "none", padding: 28, borderRadius: 6, background: C.bg, border: `1px solid ${C.bdr}`, transition: "border-color 0.3s", display: "block" }}
              >
                <p style={{ fontFamily: F.dv, fontSize: 14, color: C.warm, opacity: 0.5, marginBottom: 4 }}>{svc.dv}</p>
                <h2 style={{ fontFamily: F.d, fontSize: 20, fontWeight: 400, color: C.ink, marginBottom: 10 }}>{svc.title}</h2>
                <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300, marginBottom: 12 }}>{svc.summary}</p>
                <span style={{ fontFamily: F.m, fontSize: 11, color: C.green }}>learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>
            Why fractional DevOps?
          </h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            A full-time DevOps engineer costs ₹12–20 LPA. Most early-stage startups don't need — or can't afford — that.
            Fractional DevOps gives you a senior, AI-native team at a fraction of the cost. You get the same cloud infrastructure
            consulting, the same CI/CD expertise, the same Kubernetes management — without the overhead of a full-time hire.
          </p>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300 }}>
            CloudSaathi is based in New Delhi, India and serves startups globally. We embed with your team, join your Slack,
            use your Git workflow, and document everything in your systems.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>
            Not sure which service you need?
          </h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            Start with a free 30-minute discovery call. We'll assess your stack and recommend a path.
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
