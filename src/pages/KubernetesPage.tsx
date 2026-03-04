import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "ProfessionalService", "name": "CloudSaathi", "url": "https://cloudsaathi.com" },
  "name": "Kubernetes Managed Services",
  "description": "Managed Kubernetes services for startups — cluster setup, monitoring, scaling, and maintenance without a full-time DevOps hire.",
  "areaServed": "Worldwide",
  "serviceType": "Kubernetes Management",
};

export default function KubernetesPage() {
  return (
    <>
      <SEOHead
        title="Kubernetes Managed Services for Startups | CloudSaathi"
        description="Managed Kubernetes services for startups — cluster setup, monitoring, auto-scaling, and maintenance. Fractional DevOps from CloudSaathi, New Delhi. No full-time hire needed."
        path="/services/kubernetes-management"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Link to="/services" style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none", marginBottom: 20, display: "inline-block" }}>← all services</Link>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>service</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Kubernetes Management
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final copy */}
            Kubernetes gives you superpowers — auto-scaling, self-healing, rolling updates. But it also gives you complexity.
            We manage your clusters so you get the power without the overhead.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 24 }}>What we manage</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "Cluster Setup & Config", d: "EKS, GKE, or AKS — provisioned with Terraform, configured with best practices for security, networking, and resource management." },
              { t: "Monitoring & Alerting", d: "Prometheus, Grafana, and custom dashboards. Real-time visibility into cluster health, resource usage, and application performance." },
              { t: "Auto-scaling", d: "Horizontal Pod Autoscaler, Cluster Autoscaler, and KEDA for event-driven scaling. Your infra grows and shrinks with your traffic." },
              { t: "Security & RBAC", d: "Network policies, pod security standards, secrets management, and role-based access control. Locked down by default." },
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
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>Why startups choose managed Kubernetes</h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            Running Kubernetes in-house requires deep expertise that most early-stage teams don't have. Misconfigurations lead to downtime,
            security vulnerabilities, and runaway cloud costs. Our Kubernetes managed services give you a production-grade cluster
            maintained by engineers who've operated clusters serving millions of requests.
          </p>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300 }}>
            We handle upgrades, patching, monitoring, and incident response. You focus on shipping features.
            This is DevOps outsourcing done right — embedded in your team, transparent in our process, and documented for your future hires.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Need Kubernetes expertise?</h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            30-minute call. We'll review your container strategy and recommend a path.
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
