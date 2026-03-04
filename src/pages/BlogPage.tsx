import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="CloudSaathi Blog — DevOps, Cloud Infrastructure & Startup Engineering"
        description="Insights on fractional DevOps, CI/CD best practices, Kubernetes management, cloud migration strategies, and startup infrastructure from the CloudSaathi team."
        path="/blog"
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>blog</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Insights on DevOps,<br />cloud, and <em style={{ color: C.green }}>startup infrastructure</em>.
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            Practical guides on CI/CD pipeline setup, Kubernetes management, cloud cost optimization,
            and everything else we learn while shaping infrastructure for startups.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px 80px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          {/* TODO: REPLACE with actual blog posts when available */}
          <div style={{ padding: "60px 32px", borderRadius: 8, background: C.bg, border: `1px solid ${C.bdr}` }}>
            <p style={{ fontFamily: F.dv, fontSize: 32, color: C.warm, opacity: 0.3, marginBottom: 12 }}>शीघ्र</p>
            <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Coming soon.</h2>
            <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 24px", fontWeight: 300 }}>
              We're writing guides on fractional DevOps for startups, cloud infrastructure best practices,
              and DevOps outsourcing done right. Subscribe to be notified when we publish.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, background: C.green, color: C.bgW, textDecoration: "none", display: "inline-block", letterSpacing: 0.5 }}>
              talk to us in the meantime →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
