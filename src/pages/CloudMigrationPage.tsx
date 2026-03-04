import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { C, F, CALENDLY_URL } from '../design';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "ProfessionalService", "name": "CloudSaathi", "url": "https://cloudsaathi.com" },
  "name": "Cloud Migration Services",
  "description": "Seamless cloud migration for startups — from on-premise to AWS, GCP, or Azure. Zero-downtime migration strategies.",
  "areaServed": "Worldwide",
  "serviceType": "Cloud Migration",
};

export default function CloudMigrationPage() {
  return (
    <>
      <SEOHead
        title="Cloud Migration Services for Startups | CloudSaathi"
        description="Seamless cloud migration for startups — from on-premise to AWS, GCP, or Azure. Zero-downtime strategies with fractional DevOps support. Cloud infrastructure consulting from India."
        path="/services/cloud-migration"
        schema={SCHEMA}
      />

      <section style={{ padding: "110px 32px 60px", background: C.bg }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <Link to="/services" style={{ fontFamily: F.m, fontSize: 11, color: C.green, textDecoration: "none", marginBottom: 20, display: "inline-block" }}>← all services</Link>
          <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>service</p>
          <h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 400, color: C.ink, lineHeight: 1.15, marginBottom: 20 }}>
            Cloud Migration
          </h1>
          <p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 560, fontWeight: 300 }}>
            {/* TODO: REPLACE with final copy */}
            Moving to the cloud — or between clouds — shouldn't mean weeks of downtime and crossed fingers.
            We plan, execute, and validate every migration with zero-downtime strategies.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.bgW }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 24 }}>Migration scenarios we handle</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "On-Premise to Cloud", d: "Lift-and-shift or re-architecture — we assess your workloads and choose the right strategy for each component. AWS, GCP, or Azure." },
              { t: "Cloud-to-Cloud", d: "Moving from one provider to another. We handle VPC setup, data migration, DNS cutover, and service continuity." },
              { t: "Monolith to Microservices", d: "Break apart your monolith into containerised microservices. Gradual migration with the strangler fig pattern." },
              { t: "Database Migration", d: "Postgres, MySQL, MongoDB, Redis — migrated with minimal downtime using replication, CDC, and dual-write strategies." },
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
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 16 }}>Our migration process</h2>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300, marginBottom: 14 }}>
            Every cloud migration starts with discovery. We map your existing infrastructure, identify dependencies, and create a
            detailed migration plan with rollback strategies. Our AI-native tools accelerate the assessment phase — scanning resources,
            flagging risks, and generating documentation.
          </p>
          <p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, maxWidth: 600, fontWeight: 300 }}>
            Then we execute in phases. Each phase is tested, validated, and documented before moving to the next. Your team
            stays informed at every step. Cloud infrastructure consulting should be transparent — we make it so.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: C.greenL }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 12 }}>Planning a migration?</h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>
            Free 30-minute assessment. We'll map your path to the cloud.
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
