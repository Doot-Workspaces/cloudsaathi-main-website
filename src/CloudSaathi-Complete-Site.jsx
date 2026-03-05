import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { C, F } from "./design";

/* ═══════════════════════════════════════════════════════════════════
   CLOUDSAATHI — COMPLETE SITE v3
   Landing · Philosophy · AI-Native · Products & Pricing
   React state routing — all buttons functional
   
   [PRICE] — search this to edit pricing
   [CALENDLY] — search this to add your Calendly link
   [CONNECT] — search this to add social/contact links
   ═══════════════════════════════════════════════════════════════════ */

// C and F design constants imported from ./design
// Fonts loaded from index.html <link> for better LCP
const inr = (n) => "₹" + n.toLocaleString("en-IN");

/* [CALENDLY] — REPLACE THIS WITH YOUR ACTUAL CALENDLY LINK */
const CALENDLY_URL = "https://calendly.com/connect-cloudsaathi/30min";

/* [CONNECT] — REPLACE THESE WITH YOUR ACTUAL LINKS */
const LINKS = {
  email: "mailto:connect@cloudsaathi.com",
  linkedin: "https://linkedin.com/company/cloudsaathi",
  github: "https://github.com/cloudsaathi",
};

// ─── ROUTING CONTEXT ─────────────────────────────
const NavCtx = createContext({ page: "", go: () => {} });
function useNav() { return useContext(NavCtx); }

// Internal nav link — onClick sets page state
function NL({ to, children, style = {}, onMouseEnter, onMouseLeave }) {
  return (
    <Link to={to ? `/${to}` : '/'}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{ cursor: "pointer", display: "inline-block", textDecoration: "none", color: "inherit", ...style }}
    >{children}</Link>
  );
}

// External link — Calendly, email, social
function EL({ href, children, style = {} }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", ...style }}>{children}</a>;
}

// ─── SHARED UI ───────────────────────────────────
function useReveal(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.unobserve(el); } }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, []);
  return [ref, v];
}

function Rv({ children, delay = 0, s = {} }) {
  const [ref, v] = useReveal();
  return (<div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`, ...s }}>{children}</div>);
}

function DvH({ en, dv, style = {}, ds = {} }) {
  const [h, setH] = useState(false);
  return (<span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative", display: "inline-block", cursor: "default", ...style }}><span style={{ opacity: h ? 0 : 1, transition: "opacity 0.35s" }}>{en}</span><span style={{ position: "absolute", left: 0, top: 0, opacity: h ? 1 : 0, transition: "opacity 0.35s", fontFamily: F.dv, whiteSpace: "nowrap", ...ds }}>{dv}</span></span>);
}

// CTA → Products page
function BtnProducts({ label, dvLabel }) {
  const [h, setH] = useState(false);
  return (
    <Link to="/products"
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, letterSpacing: 0.5, position: "relative", display: "inline-block", overflow: "hidden", transition: "all 0.3s", background: h ? C.greenD : C.green, color: C.bgW, cursor: "pointer", textDecoration: "none" }}>
      <span style={{ opacity: h ? 0 : 1, transition: "opacity 0.35s" }}>{label}</span>
      <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: h ? 1 : 0, transition: "opacity 0.35s", fontFamily: F.dv, fontSize: 13, fontWeight: 500 }}>{dvLabel}</span>
    </Link>
  );
}

// CTA → Calendly [CALENDLY]
function BtnCalendly({ label, dvLabel }) {
  const [h, setH] = useState(false);
  return (
    <EL href={CALENDLY_URL}
      style={{ fontFamily: F.m, padding: "12px 24px", fontSize: 12, borderRadius: 3, letterSpacing: 0.5, position: "relative", display: "inline-block", overflow: "hidden", transition: "all 0.3s", background: h ? C.greenD : C.green, color: C.bgW, cursor: "pointer" }}>
      <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "inline-block", position: "relative", width: "100%", height: "100%" }}>
        <span style={{ opacity: h ? 0 : 1, transition: "opacity 0.35s" }}>{label}</span>
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: h ? 1 : 0, transition: "opacity 0.35s", fontFamily: F.dv, fontSize: 13, fontWeight: 500 }}>{dvLabel}</span>
      </span>
    </EL>
  );
}

function Phulkari({ opacity = 0.03, color = C.ink }) {
  return (<div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}><defs><pattern id="pk" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M60 10 L80 30 L60 50 L40 30 Z" fill="none" stroke={color} strokeWidth="0.5" /><path d="M60 70 L80 90 L60 110 L40 90 Z" fill="none" stroke={color} strokeWidth="0.5" /><line x1="60" y1="10" x2="60" y2="0" stroke={color} strokeWidth="0.3" /><line x1="60" y1="50" x2="60" y2="70" stroke={color} strokeWidth="0.3" /><circle cx="60" cy="10" r="1.5" fill={color} /><circle cx="60" cy="50" r="1.5" fill={color} /><circle cx="40" cy="30" r="1" fill={color} /><circle cx="80" cy="30" r="1" fill={color} /><line x1="50" y1="20" x2="70" y2="20" stroke={color} strokeWidth="0.25" strokeDasharray="2 3" /><line x1="50" y1="40" x2="70" y2="40" stroke={color} strokeWidth="0.25" strokeDasharray="2 3" /></pattern></defs><rect width="100%" height="100%" fill="url(#pk)" /></svg></div>);
}

function DvWatermark({ opacity = 0.02 }) {
  const lines = ['const सत्य = "truth";', 'let नींव = buildFoundation();', '// धर्म: what sustains', 'const tool = ai.withConstraint(privacy);', 'await संरचना.deploy();', '// साथी: one who walks with', 'return विश्वास.verify();', 'let उन्नति = upgrade(self);'];
  return (<div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", opacity }}><div style={{ position: "absolute", top: -20, left: -60, right: -60, bottom: -20, transform: "rotate(-3deg)" }}>{lines.map((l, i) => (<div key={i} style={{ fontFamily: F.m, fontSize: 11, color: C.ink, lineHeight: "50px", whiteSpace: "nowrap", paddingLeft: (i % 3) * 140 }}>{Array(5).fill(l).join("            ")}</div>))}</div></div>);
}

function Pill({ dv, en }) {
  const [h, setH] = useState(false);
  return (<div style={{ textAlign: "center", cursor: "default" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}><div style={{ position: "relative", height: 26, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 3 }}><span style={{ fontFamily: F.dv, fontSize: 18, color: C.warm, opacity: h ? 0 : 0.7, transition: "opacity 0.35s", position: "absolute" }}>{dv}</span><span style={{ fontFamily: F.d, fontSize: 16, color: C.green, fontStyle: "italic", opacity: h ? 1 : 0, transition: "opacity 0.35s", position: "absolute" }}>{en}</span></div><p style={{ fontFamily: F.m, fontSize: 9, color: h ? C.green : C.inkM, letterSpacing: 3, textTransform: "uppercase", transition: "color 0.3s" }}>{en}</p></div>);
}

function SL({ text }) {
  return <p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 4, color: C.green, textTransform: "uppercase", marginBottom: 14 }}>{text}</p>;
}

// ─── NAV BAR ─────────────────────────────────────
function NavLink({ en, dv, route, active }) {
  const [h, setH] = useState(false);
  return (
    <Link to={`/${route}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ borderBottom: active ? `1px solid ${C.green}` : "none", paddingBottom: 2, cursor: "pointer", display: "inline-block", textDecoration: "none" }}>
      <span style={{ fontFamily: F.b, fontSize: 12.5, fontWeight: active ? 500 : 400, color: active ? C.green : C.inkS, position: "relative", display: "inline-block" }}>
        <span style={{ opacity: h ? 0 : 1, transition: "opacity 0.35s" }}>{en}</span>
        <span style={{ position: "absolute", left: 0, top: 0, opacity: h ? 1 : 0, transition: "opacity 0.35s", fontFamily: F.dv, fontSize: 13, fontWeight: 500, color: C.green, whiteSpace: "nowrap" }}>{dv}</span>
      </span>
    </Link>
  );
}

function Nav({ page }) {
  const { go } = useNav();
  const [sc, setSc] = useState(false);
  const [logoH, setLogoH] = useState(false);
  const [beginH, setBeginH] = useState(false);
  useEffect(() => { const h = () => setSc(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: sc ? "rgba(245,241,232,0.88)" : "transparent", backdropFilter: sc ? "blur(20px)" : "none", borderBottom: sc ? `1px solid ${C.bdr}` : "1px solid transparent", transition: "all 0.5s", padding: "0 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo → Landing */}
        <NL to="" onMouseEnter={() => setLogoH(true)} onMouseLeave={() => setLogoH(false)}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, transition: "transform 0.3s", transform: logoH ? "scale(1.3)" : "scale(1)" }} />
            <span style={{ fontFamily: F.d, fontSize: 18, color: C.ink, fontWeight: 500 }}>cloud<span style={{ position: "relative", display: "inline-block" }}><span style={{ opacity: logoH ? 0 : 1, transition: "opacity 0.4s" }}>saathi</span><span style={{ position: "absolute", left: 0, top: 0, opacity: logoH ? 1 : 0, transition: "opacity 0.4s", fontFamily: F.dv, fontSize: 17, fontWeight: 500, color: C.green }}>साथी</span></span></span>
          </div>
        </NL>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <NavLink en="Philosophy" dv="दर्शन" route="philosophy" active={page === "philosophy"} />
          <NavLink en="AI-Native" dv="बुद्धि" route="ai-native" active={page === "ai-native"} />
          <NavLink en="Products" dv="उत्पाद" route="products" active={page === "products"} />
          <NavLink en="Services" dv="सेवाएं" route="services" active={page.startsWith("services")} />
          {/* begin_ → Products */}
          <NL to="products" onMouseEnter={() => setBeginH(true)} onMouseLeave={() => setBeginH(false)}
            style={{ fontFamily: F.m, fontSize: 11, fontWeight: 500, color: C.bgW, background: beginH ? C.greenD : C.green, padding: "7px 16px", borderRadius: 3, letterSpacing: 0.5, transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
            <span style={{ opacity: beginH ? 0 : 1, transition: "opacity 0.35s" }}>begin_</span>
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: beginH ? 1 : 0, transition: "opacity 0.35s", fontFamily: F.dv, fontSize: 12, fontWeight: 500 }}>आरम्भ_</span>
          </NL>
        </div>
      </div>
    </nav>
  );
}

// ─── FOOTER ──────────────────────────────────────
function Footer() {
  const { go } = useNav();
  const [lh, setLh] = useState(false);
  return (
    <footer style={{ padding: "36px 32px 24px", background: C.bg, borderTop: `1px solid ${C.bdr}` }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 24 }}>
          <div>
            <NL to="" onMouseEnter={() => setLh(true)} onMouseLeave={() => setLh(false)} style={{ marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green }} />
                <span style={{ fontFamily: F.d, fontSize: 16, color: C.ink, fontWeight: 500 }}>cloud<span style={{ position: "relative", display: "inline-block" }}><span style={{ opacity: lh ? 0 : 1, transition: "opacity 0.4s" }}>saathi</span><span style={{ position: "absolute", left: 0, top: 0, opacity: lh ? 1 : 0, transition: "opacity 0.4s", fontFamily: F.dv, fontSize: 15, fontWeight: 500, color: C.green }}>साथी</span></span></span>
              </div>
            </NL>
            <p style={{ fontFamily: F.b, fontSize: 11, color: C.inkM, maxWidth: 240, lineHeight: 1.6, fontWeight: 300 }}>AI-native infrastructure shaped with product thinking. New Delhi, India. Global clients.</p>
            <p style={{ fontFamily: F.dv, fontSize: 11, color: C.warm, marginTop: 6, opacity: 0.5 }}>सूक्ष्मता · स्पष्टता · विस्तार</p>
          </div>
          <div style={{ display: "flex", gap: 36 }}>
            {/* Pages — internal nav */}
            <div>
              <p style={{ fontFamily: F.m, fontSize: 8, color: C.inkM, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Pages</p>
              {[["Philosophy", "philosophy"], ["AI-Native", "ai-native"], ["Products & Pricing", "products"], ["Services", "services"], ["About", "about"], ["Contact", "contact"]].map(([label, route]) => (
                <NL key={route} to={route} style={{ fontFamily: F.b, fontSize: 12, color: C.inkS, marginBottom: 5, fontWeight: 300, display: "block" }}>{label}</NL>
              ))}
            </div>
            {/* Connect — external [CONNECT] */}
            <div>
              <p style={{ fontFamily: F.m, fontSize: 8, color: C.inkM, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Connect</p>
              <EL href={LINKS.email} style={{ display: "block", fontFamily: F.b, fontSize: 12, color: C.inkS, marginBottom: 5, fontWeight: 300 }}>Email</EL>
              <EL href={LINKS.linkedin} style={{ display: "block", fontFamily: F.b, fontSize: 12, color: C.inkS, marginBottom: 5, fontWeight: 300 }}>LinkedIn</EL>
              <EL href={LINKS.github} style={{ display: "block", fontFamily: F.b, fontSize: 12, color: C.inkS, marginBottom: 5, fontWeight: 300 }}>GitHub</EL>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: `1px solid ${C.bdr}` }}>
          <span style={{ fontFamily: F.b, fontSize: 10, color: C.inkM, fontWeight: 300 }}>© 2026 CloudSaathi</span>
          <div style={{ display: "flex", gap: 12 }}>
            <span style={{ fontFamily: F.b, fontSize: 10, color: C.inkM }}>Privacy</span>
            <span style={{ fontFamily: F.b, fontSize: 10, color: C.inkM }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE 1: LANDING
   ═══════════════════════════════════════════════════════════ */
function TerminalPhilosophy() {
  const [ref, visible] = useReveal(0.25);
  const [lines, setLines] = useState([]);
  const [cl, setCl] = useState(0);
  const [cc, setCc] = useState(0);
  const [started, setStarted] = useState(false);
  const code = [
    { t: "#!/usr/bin/env cloudsaathi", y: "dim" }, { t: "", y: "b" },
    { t: "# We do not appear in your system.", y: "c" },
    { t: "# We shape it. We structure it.", y: "c" }, { t: "", y: "b" },
    { t: "const दर्शन = {", y: "k" },
    { t: '  // सत्य — infrastructure is a product', y: "c" },
    { t: '  truth: "product_thinking",', y: "k" }, { t: "", y: "b" },
    { t: '  // नींव — logic before law', y: "c" },
    { t: '  foundation: "logic_before_law",', y: "k" }, { t: "", y: "b" },
    { t: '  // शांति — precision towards solution', y: "c" },
    { t: '  method: "precision",', y: "k" }, { t: "", y: "b" },
    { t: "  tool: ai.withConstraint(privacy),", y: "a" },
    { t: "};", y: "k" }, { t: "", y: "b" },
    { t: "// You focus on your destination.", y: "c" },
    { t: "// We shape every path to get you there.", y: "c" },
    { t: "दर्शन.deploy();", y: "k" },
  ];
  useEffect(() => { if (visible && !started) setStarted(true); }, [visible]);
  useEffect(() => {
    if (!started || cl >= code.length) return;
    const ln = code[cl];
    if (ln.y === "b") { const x = setTimeout(() => { setLines(p => [...p, { ...ln, d: "" }]); setCl(l => l + 1); setCc(0); }, 50); return () => clearTimeout(x); }
    if (cc < ln.t.length) { const x = setTimeout(() => setCc(c => c + 1), ln.y === "c" ? 18 : ln.y === "a" ? 26 : 12); return () => clearTimeout(x); }
    else { setLines(p => [...p, { ...ln, d: ln.t }]); const x = setTimeout(() => { setCl(l => l + 1); setCc(0); }, ln.y === "a" ? 500 : 80); return () => clearTimeout(x); }
  }, [started, cl, cc]);
  const clr = y => y === "c" ? C.warm : y === "dim" ? "#555" : y === "a" ? C.teal : "#7DCEA0";
  return (
    <div ref={ref} style={{ fontFamily: F.m, fontSize: 12, lineHeight: 1.8, background: C.bgDark, borderRadius: 6, padding: "22px 26px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ display: "flex", gap: 5, marginBottom: 16 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
        <span style={{ marginLeft: 8, fontSize: 10, color: "rgba(255,255,255,0.18)", fontFamily: F.m, letterSpacing: 1 }}>दर्शन.config</span>
      </div>
      {lines.map((l, i) => <div key={i} style={{ color: clr(l.y), minHeight: l.y === "b" ? 8 : "auto", opacity: l.y === "b" ? 0 : 1 }}>{l.d}</div>)}
      {cl < code.length && code[cl].y !== "b" && <div style={{ color: clr(code[cl].y) }}>{code[cl].t.slice(0, cc)}<span style={{ animation: "tb 1s step-end infinite", borderLeft: "2px solid rgba(255,255,255,0.6)", marginLeft: 1 }}>&nbsp;</span></div>}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.005) 2px, rgba(255,255,255,0.005) 4px)", pointerEvents: "none" }} />
    </div>
  );
}

function LandingPage() {
  return (<>
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "110px 32px 70px", position: "relative", overflow: "hidden", background: C.bg }}>
      <Phulkari opacity={0.03} /><DvWatermark opacity={0.018} />
      <div style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 1 }}>
        <Rv><p style={{ fontFamily: F.m, fontSize: 10, letterSpacing: 5, color: C.green, textTransform: "uppercase", marginBottom: 28 }}>fractional devops · cloud · ci/cd · kubernetes</p></Rv>
        <Rv delay={0.1}><h1 style={{ fontFamily: F.d, fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, color: C.ink, lineHeight: 1.14, marginBottom: 8 }}>We shape your infrastructure.<br /><em style={{ color: C.green }}>You reach your destination.</em></h1></Rv>
        <Rv delay={0.12}><p style={{ fontFamily: F.m, fontSize: 11, color: C.inkM, letterSpacing: 1, marginBottom: 18 }}>CloudSaathi — cloudsaathi.com</p></Rv>
        <Rv delay={0.2}><p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.8, maxWidth: 450, margin: "0 auto 6px", fontWeight: 300 }}>Fractional DevOps for startups — CI/CD pipelines, Kubernetes, and cloud infrastructure. Upgraded, not just managed.</p><p style={{ fontFamily: F.b, fontSize: 14, color: C.inkM, lineHeight: 1.7, maxWidth: 470, margin: "0 auto 36px", fontWeight: 300 }}>An AI-native DevOps outsourcing team applying product thinking to your cloud infrastructure consulting needs. From New Delhi, India — delivered globally.</p></Rv>
        <Rv delay={0.3}><div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <BtnProducts label="start_upgrade →" dvLabel="आरम्भ →" />
          <NL to="philosophy" style={{ fontFamily: F.m, padding: "12px 24px", background: "transparent", color: C.ink, fontSize: 12, borderRadius: 3, border: `1px solid ${C.bdr}`, letterSpacing: 0.5 }}>read_दर्शन</NL>
        </div></Rv>
        <Rv delay={0.45}><div style={{ display: "flex", justifyContent: "center", gap: 52, marginTop: 64 }}>{[{ dv: "सूक्ष्मता", en: "Precision" }, { dv: "स्पष्टता", en: "Clarity" }, { dv: "विस्तार", en: "Scale" }].map(i => <Pill key={i.en} {...i} />)}</div></Rv>
      </div>
    </section>
    <section style={{ padding: "80px 32px", background: C.bgW }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Rv><SL text="दर्शन.config" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: "clamp(24px, 3.2vw, 38px)", fontWeight: 400, color: C.ink, lineHeight: 1.2, marginBottom: 14, maxWidth: 520 }}>Infrastructure is not a task.<br />It is a <em style={{ color: C.green }}>product</em>.</h2></Rv>
        <Rv delay={0.12}><p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.8, maxWidth: 500, marginBottom: 36, fontWeight: 300 }}>The industry sells checklists and vendors. We deliver fractional DevOps as a product — AI-accelerated CI/CD pipeline setup, Kubernetes managed services, and cloud infrastructure consulting, all structured around the user.</p></Rv>
        <Rv delay={0.2}><TerminalPhilosophy /></Rv>
      </div>
    </section>
    <section style={{ padding: "80px 32px", background: C.bg, position: "relative", overflow: "hidden" }}>
      <Phulkari opacity={0.02} color={C.green} />
      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><SL text="the_upgrade" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: C.ink, marginBottom: 40 }}>From cluttered to <em style={{ color: C.green }}>composed</em>.</h2></Rv>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[{ lb: "before", cl: C.inkM, bg: C.bgW, bd: C.bdr, ic: "—", items: ["Cloud spend without visibility into purpose", "Policies scattered across departments", "Incidents without root cause visibility", "Security treated as auxiliary", "AI adopted without privacy governance"] },
            { lb: "after", cl: C.green, bg: C.greenL, bd: C.green + "44", ic: "✓", items: ["Every resource mapped to function and cost", "One structured source of truth", "AI-accelerated incident response with SOPs", "Security built on logic — compliance follows", "AI-native workflows with zero data exposure"] }].map((col, ci) => (
            <Rv key={ci} delay={0.12 + ci * 0.08}><div style={{ padding: 24, borderRadius: 6, background: col.bg, border: `1px solid ${col.bd}` }}>
              <p style={{ fontFamily: F.m, fontSize: 9, letterSpacing: 3, color: col.cl, textTransform: "uppercase", marginBottom: 16 }}>{col.lb}</p>
              {col.items.map((it, j) => <div key={j} style={{ display: "flex", gap: 8, marginBottom: 10 }}><span style={{ fontFamily: F.m, color: col.cl, fontSize: 11, lineHeight: "18px", flexShrink: 0 }}>{col.ic}</span><span style={{ fontFamily: F.b, fontSize: 13, color: ci === 0 ? C.inkM : C.ink, lineHeight: 1.6, fontWeight: ci === 0 ? 300 : 400 }}>{it}</span></div>)}
            </div></Rv>))}
        </div>
      </div>
    </section>
    <section style={{ padding: "80px 32px", background: C.bgW }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Rv><SL text="मार्ग — approach" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: C.ink, marginBottom: 40 }}>Four movements. <em style={{ color: C.green }}>One transformation.</em></h2></Rv>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[{ n: "१", t: "Listen", d: "Your business reality first. AI maps your landscape — humans make decisions." },
            { n: "२", t: "Map", d: "AI-accelerated audit. Every resource mapped to purpose." },
            { n: "३", t: "Structure", d: "Infrastructure designed as a product. AI generates documentation that speaks to users." },
            { n: "४", t: "Sustain", d: "Embedded as your partner. AI-powered monitoring. Privacy-constrained by architecture." }].map((s, i) => (
            <Rv key={i} delay={0.1 + i * 0.05}><div style={{ padding: 24, borderRadius: 6, border: `1px solid ${C.bdr}`, background: C.bg }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ fontFamily: F.dv, fontSize: 24, color: C.warm, opacity: 0.4 }}>{s.n}</span><span style={{ fontFamily: F.d, fontSize: 17, fontWeight: 500, color: C.ink }}>{s.t}</span></div>
              <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{s.d}</p>
            </div></Rv>))}
        </div>
      </div>
    </section>
    {/* CTA — book a call [CALENDLY] */}
    <section style={{ padding: "80px 32px", background: C.bg, position: "relative", overflow: "hidden" }}>
      <DvWatermark opacity={0.01} />
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Rv><div style={{ padding: "44px 32px", background: C.greenL, borderRadius: 8, border: `1px solid ${C.green}33`, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg, transparent, ${C.green}, transparent)` }} />
          <h2 style={{ fontFamily: F.d, fontSize: 26, fontWeight: 400, color: C.ink, marginBottom: 12 }}><DvH en="Begin your upgrade." dv="आरम्भ करें।" style={{ fontFamily: F.d }} ds={{ fontFamily: F.dv, fontSize: 24, fontWeight: 500, color: C.green }} /></h2>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px", fontWeight: 300 }}>30-minute call. Honest assessment. No sales pitch.</p>
          <BtnCalendly label="book a call →" dvLabel="बात करें →" />
        </div></Rv>
      </div>
    </section>
  </>);
}

/* ═══════════════════════════════════════════════════════════
   PAGE 2: PHILOSOPHY
   ═══════════════════════════════════════════════════════════ */
function PhilosophyPage() {
  const pillars = [
    { dv: "सत्य", en: "Truth", n: "१", title: "Infrastructure is a product.", body: ["The industry treats infrastructure as a task list. Servers to provision. Security boxes to check. The result is a cluttered room — policy documents nobody reads, hidden costs compounding, vendors profiting from confusion.", "We treat infrastructure as a product. Every component has a user. Every process has a purpose. We don't write SOPs — we write READMEs. The difference is intent: one exists for compliance, the other exists for the human who needs it at 2am when something breaks."] },
    { dv: "नींव", en: "Foundation", n: "२", title: "Logic before law.", body: ["Most organisations start with the regulation — SOC 2, HIPAA, DPDPA — and work backwards. The result is compliance built on paperwork, not principle.", "We start with logic. When the foundation is sound, compliance becomes documentation — not a separate project. SOC 2 stops being a project and becomes a 2-day exercise on an already-sound system."] },
    { dv: "शांति", en: "Calm", n: "३", title: "Precision towards solution.", body: ["The DevOps industry runs on urgency. War rooms. Fire drills. This is not excellence — it's a symptom of poor structure.", "We bring calm precision. Every system gets a routine tracker, clear escalation paths, automated responses. Documentation that a new engineer can follow at 2am without calling anyone. Not panic towards patch — precision towards solution."] },
  ];
  return (<>
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", padding: "110px 32px 60px", position: "relative", overflow: "hidden", background: C.bg }}>
      <Phulkari opacity={0.03} /><DvWatermark opacity={0.015} />
      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><p style={{ fontFamily: F.dv, fontSize: 26, color: C.warm, opacity: 0.4, marginBottom: 6 }}>दर्शन</p><h1 style={{ fontFamily: F.d, fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 400, color: C.ink, lineHeight: 1.12, marginBottom: 20 }}>We do not appear in your system.<br />We <em style={{ color: C.green }}>shape</em> it.</h1></Rv>
        <Rv delay={0.12}><p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>CloudSaathi exists because organisations are lost in their own cloud. Vendors create bureaucracy. Cloud providers profit from complexity. We believe there is a simpler, sharper way.</p></Rv>
      </div>
    </section>
    <section style={{ padding: "60px 32px 80px", background: C.bgW }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Rv><SL text="three pillars" /></Rv>
        {pillars.map((p, i) => (<Rv key={i} delay={0.05 + i * 0.03}><div style={{ marginBottom: i < pillars.length - 1 ? 52 : 0, paddingBottom: i < pillars.length - 1 ? 52 : 0, borderBottom: i < pillars.length - 1 ? `1px solid ${C.bdr}` : "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}><span style={{ fontFamily: F.dv, fontSize: 32, color: C.warm, opacity: 0.3 }}>{p.n}</span><div><span style={{ fontFamily: F.dv, fontSize: 14, color: C.warm, opacity: 0.5, display: "block" }}>{p.dv}</span><span style={{ fontFamily: F.m, fontSize: 9, color: C.inkM, letterSpacing: 3, textTransform: "uppercase" }}>{p.en}</span></div></div>
          <h2 style={{ fontFamily: F.d, fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 400, color: C.ink, lineHeight: 1.2, marginBottom: 18 }}>{p.title}</h2>
          {p.body.map((para, j) => <p key={j} style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.85, fontWeight: 300, marginBottom: j < p.body.length - 1 ? 14 : 0, maxWidth: 600 }}>{para}</p>)}
        </div></Rv>))}
      </div>
    </section>
    <section style={{ padding: "60px 32px 80px", background: C.bg }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Rv><SL text="structural advantage" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: 28, fontWeight: 400, color: C.ink, marginBottom: 32 }}>Three disciplines. <em style={{ color: C.green }}>One intersection.</em></h2></Rv>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[{ l: "DevSecOps", dv: "कार्य", d: "Cloud architecture, security hardening, CI/CD, IaC, monitoring." },
            { l: "Product Thinking", dv: "दृष्टि", d: "Every component has a user. Documentation written to be understood." },
            { l: "AI-Native", dv: "बुद्धि", d: "AI woven into every step. Constrained by privacy. Validated by engineers." }].map((item, i) => (
            <Rv key={i} delay={0.1 + i * 0.05}><div style={{ padding: 24, borderRadius: 6, background: C.bgW, border: `1px solid ${C.bdr}` }}>
              <p style={{ fontFamily: F.dv, fontSize: 14, color: C.warm, opacity: 0.5, marginBottom: 3 }}>{item.dv}</p>
              <p style={{ fontFamily: F.m, fontSize: 10, color: C.green, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>{item.l}</p>
              <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{item.d}</p>
            </div></Rv>))}
        </div>
      </div>
    </section>
    <section style={{ padding: "50px 32px 70px", background: C.bgW }}>
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <Rv><div style={{ padding: "40px 28px", background: C.greenL, borderRadius: 8, border: `1px solid ${C.green}33`, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg, transparent, ${C.green}, transparent)` }} />
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 10 }}>See how we think — up close.</h2>
          <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, maxWidth: 340, margin: "0 auto 18px", fontWeight: 300 }}>30-minute call. No sales pitch. Just structure.</p>
          <BtnCalendly label="book a call →" dvLabel="बात करें →" />
        </div></Rv>
      </div>
    </section>
  </>);
}

/* ═══════════════════════════════════════════════════════════
   PAGE 3: AI-NATIVE
   ═══════════════════════════════════════════════════════════ */
function AINativePage() {
  const stages = [
    { n: "01", lb: "SCAN", t: "Infrastructure Discovery", h: "Define scope, access, business context.", a: "Automated topology scan. Resource mapping. Cost attribution.", out: "Complete infrastructure map", tm: "Hours, not weeks" },
    { n: "02", lb: "ANALYZE", t: "Pattern Recognition", h: "Validate AI findings. Prioritise by impact.", a: "Waste detection. Security gaps. Compliance mapping.", out: "Prioritised findings with impact scores", tm: "AI flags, humans judge" },
    { n: "03", lb: "DOCUMENT", t: "Product-Grade Docs", h: "Review. Ensure docs speak to the user.", a: "Generate SOPs, runbooks, READMEs from infra state.", out: "Documentation engineers actually use", tm: "Draft in minutes" },
    { n: "04", lb: "BUILD", t: "Infrastructure as Code", h: "Architecture decisions. Tech selection. Validation.", a: "Generate Terraform/Pulumi configs. CI/CD scaffolding.", out: "Reproducible infrastructure", tm: "3x faster" },
    { n: "05", lb: "OPTIMIZE", t: "Continuous Improvement", h: "Monthly review. Strategic decisions.", a: "Cost anomaly detection. Right-sizing. Security monitoring.", out: "Always improving infrastructure", tm: "Always-on" },
  ];
  return (<>
    <section style={{ minHeight: "55vh", display: "flex", alignItems: "center", padding: "110px 32px 50px", background: C.bg, position: "relative", overflow: "hidden" }}>
      <DvWatermark opacity={0.015} />
      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><p style={{ fontFamily: F.dv, fontSize: 26, color: C.warm, opacity: 0.4, marginBottom: 6 }}>बुद्धि</p><h1 style={{ fontFamily: F.d, fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 400, color: C.ink, lineHeight: 1.12, marginBottom: 18 }}>AI is our method.<br /><em style={{ color: C.green }}>Privacy is our constraint.</em></h1></Rv>
        <Rv delay={0.12}><p style={{ fontFamily: F.b, fontSize: 16, color: C.inkS, lineHeight: 1.85, maxWidth: 540, fontWeight: 300 }}>Every vendor will say "AI-powered" by next quarter. The difference is whether AI is a feature bolted on — or a method woven into every step. We are the latter.</p></Rv>
        <Rv delay={0.2}><div style={{ marginTop: 24, padding: "12px 18px", background: C.bgDark, borderRadius: 4, display: "inline-block" }}><code style={{ fontFamily: F.m, fontSize: 13, color: C.teal }}>const tool = ai.withConstraint(privacy);</code></div></Rv>
      </div>
    </section>
    <section style={{ padding: "50px 32px 80px", background: C.bgW }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Rv><SL text="the pipeline" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: 28, fontWeight: 400, color: C.ink, marginBottom: 36 }}>AI at every step. <em style={{ color: C.green }}>Humans at every gate.</em></h2></Rv>
        {stages.map((s, i) => (<Rv key={i} delay={0.03 + i * 0.02}>
          <div style={{ position: "relative" }}>
            {i < stages.length - 1 && <div style={{ position: "absolute", left: 25, top: "100%", width: 1, height: 24, background: `linear-gradient(${C.green}, ${C.bdr})` }} />}
            <div style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: 16, paddingBottom: i < stages.length - 1 ? 24 : 0 }}>
              <div style={{ display: "flex", justifyContent: "center" }}><div style={{ width: 52, height: 52, borderRadius: "50%", background: C.greenL, border: `2px solid ${C.green}44`, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontFamily: F.m, fontSize: 9, color: C.green, fontWeight: 500 }}>{s.n}</span></div></div>
              <div style={{ padding: 24, background: C.bg, borderRadius: 6, border: `1px solid ${C.bdr}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}><span style={{ fontFamily: F.m, fontSize: 10, color: C.teal, letterSpacing: 2, fontWeight: 500 }}>{s.lb}</span><span style={{ fontFamily: F.d, fontSize: 18, fontWeight: 400, color: C.ink }}>{s.t}</span></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 12 }}>
                  <div style={{ padding: "10px 12px", background: C.bgW, borderRadius: 4, borderLeft: `3px solid ${C.warm}` }}><p style={{ fontFamily: F.m, fontSize: 8, color: C.warm, letterSpacing: 2, marginBottom: 4, textTransform: "uppercase" }}>human</p><p style={{ fontFamily: F.b, fontSize: 12, color: C.inkS, lineHeight: 1.6, fontWeight: 300 }}>{s.h}</p></div>
                  <div style={{ padding: "10px 12px", background: C.bgW, borderRadius: 4, borderLeft: `3px solid ${C.teal}` }}><p style={{ fontFamily: F.m, fontSize: 8, color: C.teal, letterSpacing: 2, marginBottom: 4, textTransform: "uppercase" }}>ai</p><p style={{ fontFamily: F.b, fontSize: 12, color: C.inkS, lineHeight: 1.6, fontWeight: 300 }}>{s.a}</p></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontFamily: F.b, fontSize: 12, color: C.ink }}><span style={{ fontFamily: F.m, color: C.green, fontSize: 10, marginRight: 5 }}>→</span>{s.out}</span><span style={{ fontFamily: F.m, fontSize: 10, color: C.inkM }}>{s.tm}</span></div>
              </div>
            </div>
          </div>
        </Rv>))}
      </div>
    </section>
    <section style={{ padding: "60px 32px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
      <Phulkari opacity={0.02} color={C.green} />
      <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><SL text="गोपनीयता — privacy" /></Rv>
        <Rv delay={0.08}><h2 style={{ fontFamily: F.d, fontSize: 28, fontWeight: 400, color: C.ink, marginBottom: 32 }}>Privacy is not a policy. <em style={{ color: C.green }}>It is an architecture.</em></h2></Rv>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[{ t: "Zero data exposure", d: "Your data never trains external models. Every AI operation runs within pre-defined boundaries." },
            { t: "Auditable AI workflows", d: "Every AI output is traceable — what went in, what came out, what humans changed." },
            { t: "Human gates everywhere", d: "AI generates. Humans validate. No automated action touches production without review." },
            { t: "Your boundary only", d: "We work within your cloud, not ours. DPDPA compliant. Nothing leaves your perimeter." }].map((p, i) => (
            <Rv key={i} delay={0.1 + i * 0.04}><div style={{ padding: 22, background: C.bgW, borderRadius: 6, border: `1px solid ${C.bdr}` }}>
              <p style={{ fontFamily: F.b, fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6 }}>{p.t}</p>
              <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{p.d}</p>
            </div></Rv>))}
        </div>
      </div>
    </section>
    <section style={{ padding: "50px 32px 70px", background: C.bgW }}>
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <Rv><div style={{ padding: "40px 28px", background: C.greenL, borderRadius: 8, border: `1px solid ${C.green}33`, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg, transparent, ${C.green}, transparent)` }} />
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 10 }}>See how AI-native actually works.</h2>
          <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, maxWidth: 340, margin: "0 auto 18px", fontWeight: 300 }}>30-minute walkthrough. Real examples. No fluff.</p>
          <BtnCalendly label="book a call →" dvLabel="बात करें →" />
        </div></Rv>
      </div>
    </section>
  </>);
}

/* ═══════════════════════════════════════════════════════════
   PAGE 4: PRODUCTS & PRICING
   [PRICE] markers — edit numbers directly
   ═══════════════════════════════════════════════════════════ */
function ProductsPage() {
  /* [PRICE] — EDIT PRODUCT PRICES HERE — all under ₹1L */
  const products = [
    { title: "Infrastructure Audit", line: "We look at everything in your cloud and tell you exactly what's working, what's wasted, and what's at risk.", price: "₹9,999 – ₹25,000", time: "3–5 days", get: "One clear document with a prioritised action plan — not a 200-page report." },
    { title: "Cloud Cost Restructuring", line: "We restructure your cloud so you stop paying for things you don't use. Typical savings: 30–45%.", price: "₹15,000 – ₹45,000", time: "2–4 weeks", get: "Lower cloud bills, a tracking dashboard, and a structure that stays optimised." },
    { title: "Infrastructure Modernisation", line: "Manual to automated. Scattered to structured. Everything version-controlled and reproducible.", price: "₹35,000 – ₹90,000", time: "4–10 weeks", get: "IaC, CI/CD pipelines, monitoring, and documentation any new engineer can follow." },
    { title: "Security & Compliance", line: "Security built on logic. SOC 2, HIPAA, DPDPA compliance becomes documentation, not a project.", price: "₹15,000 – ₹45,000", time: "2–4 weeks", get: "Secure foundation, compliance-ready docs, and monitoring that alerts before problems hit." },
  ];

  /* [PRICE] — EDIT MONTHLY PRICING HERE */
  const baseFee = 15000;
  const threshold = 50000;
  const sharePercent = 20;

  const [spend, setSpend] = useState(300000);
  const savings = Math.round(spend * 0.35);
  const above = Math.max(0, savings - threshold);
  const share = Math.round(above * sharePercent / 100);
  const csEarns = baseFee + share;
  const youKeep = savings - share;
  const annualNet = (youKeep * 12) - (csEarns * 12);

  return (<>
    <section style={{ padding: "110px 32px 50px", background: C.bg, position: "relative" }}>
      <Phulkari opacity={0.02} />
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><p style={{ fontFamily: F.dv, fontSize: 22, color: C.warm, opacity: 0.4, marginBottom: 6 }}>उत्पाद + मूल्य</p><h1 style={{ fontFamily: F.d, fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 400, color: C.ink, lineHeight: 1.14, marginBottom: 14 }}>We save you money on cloud.<br /><em style={{ color: C.green }}>We earn a share of what we save.</em></h1></Rv>
        <Rv delay={0.1}><p style={{ fontFamily: F.b, fontSize: 15, color: C.inkS, lineHeight: 1.8, maxWidth: 480, fontWeight: 300 }}>Simple. If we don't save you money, we don't earn more than our base fee. Our incentives are fully aligned with yours.</p></Rv>
      </div>
    </section>
    <section style={{ padding: "40px 32px 60px", background: C.bgW }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Rv><SL text="what we do" /></Rv>
        <Rv delay={0.05}><h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 28 }}>Four products. Each one <em style={{ color: C.green }}>complete</em>.</h2></Rv>
        {products.map((p, i) => (<Rv key={i} delay={0.03 + i * 0.02}><div style={{ padding: "22px 0", borderBottom: i < products.length - 1 ? `1px solid ${C.bdr}` : "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
            <h3 style={{ fontFamily: F.d, fontSize: 20, fontWeight: 400, color: C.ink, margin: 0 }}>{p.title}</h3>
            <div style={{ textAlign: "right" }}><span style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: C.ink }}>{p.price}</span><span style={{ fontFamily: F.m, fontSize: 10, color: C.inkM, display: "block" }}>{p.time}</span></div>
          </div>
          <p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.8, fontWeight: 300, marginBottom: 8 }}>{p.line}</p>
          <p style={{ fontFamily: F.b, fontSize: 12.5, color: C.inkS, lineHeight: 1.6, fontWeight: 300 }}><span style={{ fontFamily: F.m, color: C.green, fontSize: 10, marginRight: 5 }}>→</span><span style={{ fontWeight: 400, color: C.green }}>You get:</span> {p.get}</p>
        </div></Rv>))}
      </div>
    </section>
    {/* Pricing model [PRICE] */}
    <section style={{ padding: "60px 32px 20px", background: C.bg, position: "relative", overflow: "hidden" }}>
      <Phulkari opacity={0.02} color={C.green} />
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Rv><SL text="how pricing works" /></Rv>
        <Rv delay={0.05}><h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 10 }}>Three numbers. <em style={{ color: C.green }}>That's it.</em></h2></Rv>
        <Rv delay={0.08}><p style={{ fontFamily: F.b, fontSize: 14, color: C.inkS, lineHeight: 1.8, maxWidth: 460, fontWeight: 300, marginBottom: 28 }}>No hourly billing. No complicated formulas. We earn when you save.</p></Rv>
        <Rv delay={0.12}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {/* [PRICE] — EDIT THESE DISPLAY VALUES */}
            {[{ num: "₹15,000", lb: "/month base", d: "Our commitment. Monitoring, support, reviews. Less than a DevOps intern." },
              { num: "₹50,000", lb: "/month free savings", d: "First ₹50K in monthly cloud savings is 100% yours. We earn nothing on it." },
              { num: "20%", lb: "above ₹50K savings", d: "Beyond ₹50K/month in savings, we take 20%. You keep 80%." }].map((item, i) => (
              <div key={i} style={{ padding: 20, background: C.bgW, borderRadius: 6, border: `1px solid ${C.bdr}` }}>
                <p style={{ fontFamily: F.b, fontSize: 26, fontWeight: 600, color: C.ink, margin: "0 0 2px" }}>{item.num}</p>
                <p style={{ fontFamily: F.m, fontSize: 10, color: C.green, letterSpacing: 1, marginBottom: 10 }}>{item.lb}</p>
                <p style={{ fontFamily: F.b, fontSize: 12, color: C.inkS, lineHeight: 1.7, fontWeight: 300 }}>{item.d}</p>
              </div>))}
          </div>
        </Rv>
        <Rv delay={0.18}><div style={{ marginTop: 20, padding: "14px 20px", background: C.greenL, borderRadius: 4, border: `1px solid ${C.green}33` }}>
          <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, fontWeight: 300, margin: 0 }}><span style={{ fontWeight: 600, color: C.ink }}>For context:</span> A fresher DevOps engineer costs ₹4–6 LPA (₹33–50K/month). CloudSaathi gives you a senior AI-native team for ₹15K/month — and we pay for ourselves through the savings we create.</p>
        </div></Rv>
      </div>
    </section>
    {/* Calculator */}
    <section style={{ padding: "20px 32px 60px", background: C.bg }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Rv><div style={{ padding: 28, background: C.bgDark, borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 18 }}>{["#ff5f57", "#febc2e", "#28c840"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}<span style={{ marginLeft: 8, fontSize: 10, color: "rgba(255,255,255,0.18)", fontFamily: F.m }}>savings.calc</span></div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontFamily: F.m, fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1, display: "block", marginBottom: 8 }}>YOUR MONTHLY CLOUD SPEND</label>
            <input type="range" min={50000} max={3000000} step={25000} value={spend} onChange={e => setSpend(Number(e.target.value))} style={{ width: "100%", accentColor: C.green, cursor: "pointer" }} />
            <p style={{ fontFamily: F.b, fontSize: 32, fontWeight: 600, color: "#fff", marginTop: 6 }}>{inr(spend)}<span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontWeight: 300 }}>/month</span></p>
            <p style={{ fontFamily: F.m, fontSize: 10, color: "rgba(255,255,255,0.2)", marginTop: 2 }}>assuming 35% savings</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ padding: 16, background: "rgba(255,255,255,0.04)", borderRadius: 4 }}>
              <p style={{ fontFamily: F.m, fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: 1, marginBottom: 4 }}>YOU SAVE MONTHLY</p>
              <p style={{ fontFamily: F.b, fontSize: 24, fontWeight: 600, color: "#7DCEA0", margin: 0 }}>{inr(youKeep)}</p>
            </div>
            <div style={{ padding: 16, background: "rgba(255,255,255,0.04)", borderRadius: 4 }}>
              <p style={{ fontFamily: F.m, fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: 1, marginBottom: 4 }}>CLOUDSAATHI COSTS</p>
              <p style={{ fontFamily: F.b, fontSize: 24, fontWeight: 600, color: C.warm, margin: 0 }}>{inr(csEarns)}</p>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: "12px 14px", background: "rgba(45,106,79,0.12)", borderRadius: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div><p style={{ fontFamily: F.m, fontSize: 9, color: C.teal, letterSpacing: 1, marginBottom: 1 }}>YOUR NET GAIN / YEAR</p><p style={{ fontFamily: F.b, fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>{inr(annualNet)}</p></div>
            <div style={{ textAlign: "right" }}><p style={{ fontFamily: F.m, fontSize: 9, color: "rgba(255,255,255,0.2)", marginBottom: 1 }}>NET POSITIVE FROM</p><p style={{ fontFamily: F.b, fontSize: 14, fontWeight: 600, color: C.teal, margin: 0 }}>Month 1</p></div>
          </div>
          <div style={{ marginTop: 12, height: 4, background: "rgba(255,255,255,0.04)", borderRadius: 2, overflow: "hidden", display: "flex" }}>
            <div style={{ width: `${Math.round((youKeep / savings) * 100)}%`, background: C.green, transition: "width 0.3s" }} />
            <div style={{ width: `${Math.round((share / savings) * 100)}%`, background: C.warm, transition: "width 0.3s" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}><span style={{ fontFamily: F.m, fontSize: 9, color: C.green }}>■ you keep</span><span style={{ fontFamily: F.m, fontSize: 9, color: C.warm }}>■ our share</span></div>
        </div></Rv>
      </div>
    </section>
    {/* FAQ */}
    <section style={{ padding: "40px 32px 60px", background: C.bgW }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Rv><h2 style={{ fontFamily: F.d, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 24 }}>No fine print. <em style={{ color: C.green }}>Just clarity.</em></h2></Rv>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[{ q: "How do you verify savings?", a: "Against your actual cloud bills. Before vs after, month over month." },
            { q: "What if savings are less than ₹50K?", a: "You pay only the ₹15K base. We earn nothing extra." },
            { q: "Can I pause or stop?", a: "30 days notice. No lock-in. No exit fees." },
            { q: "What about data privacy?", a: "DPDPA compliant. Your data stays in your cloud. Nothing leaves your perimeter." },
            { q: "Do I still need a DevOps hire?", a: "That's the point — you don't. We are your embedded team." },
            { q: "Just need a one-time project?", a: "Every product above is available as a fixed-price engagement." }].map((item, i) => (
            <Rv key={i} delay={0.02 + i * 0.01}><div style={{ padding: 18, background: C.bg, borderRadius: 4, border: `1px solid ${C.bdr}` }}>
              <p style={{ fontFamily: F.b, fontSize: 12.5, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{item.q}</p>
              <p style={{ fontFamily: F.b, fontSize: 12.5, color: C.inkS, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{item.a}</p>
            </div></Rv>))}
        </div>
      </div>
    </section>
    {/* CTA [CALENDLY] */}
    <section style={{ padding: "50px 32px 70px", background: C.bg }}>
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <Rv><div style={{ padding: "40px 28px", background: C.greenL, borderRadius: 8, border: `1px solid ${C.green}33`, position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg, transparent, ${C.green}, transparent)` }} />
          <h2 style={{ fontFamily: F.d, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 10 }}>See what you could save.</h2>
          <p style={{ fontFamily: F.b, fontSize: 13, color: C.inkS, lineHeight: 1.7, maxWidth: 340, margin: "0 auto 18px", fontWeight: 300 }}>30-minute call. Honest numbers. No sales pitch.</p>
          <BtnCalendly label="book a call →" dvLabel="बात करें →" />
        </div></Rv>
      </div>
    </section>
  </>);
}

/* ═══════════════════════════════════════════════════════════
   ROUTER + APP
   ═══════════════════════════════════════════════════════════ */
import ServicesOverviewPage from "./pages/ServicesPage";
import CICDSetupPage from "./pages/CICDSetupPage";
import KubernetesPage from "./pages/KubernetesPage";
import CloudMigrationPage from "./pages/CloudMigrationPage";
import InfraAuditPage from "./pages/InfraAuditPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

const PAGE_SEO = {
  '': {
    title: 'CloudSaathi — Fractional DevOps for Startups | cloudsaathi.com | Ship Faster Without Hiring',
    description: 'CloudSaathi (cloudsaathi.com) — fractional DevOps for startups: CI/CD pipeline setup, Kubernetes managed services, cloud migration, infrastructure audits. New Delhi, India. Globally delivered.',
    path: '/',
  },
  'philosophy': {
    title: 'Our Philosophy — CloudSaathi | Infrastructure as a Product',
    description: 'CloudSaathi treats infrastructure as a product, not a task list. Built on truth, logic, and precision — our philosophy shapes every cloud deployment.',
    path: '/philosophy',
  },
  'ai-native': {
    title: 'AI-Native DevOps — CloudSaathi | Privacy-First AI Infrastructure',
    description: 'AI woven into every step of your infrastructure — from discovery to deployment. Privacy-constrained by architecture, validated by engineers.',
    path: '/ai-native',
  },
  'products': {
    title: 'Products & Pricing — CloudSaathi | DevOps Services from ₹9,999',
    description: 'Transparent pricing for fractional DevOps services. Infrastructure audits, cloud cost restructuring, modernisation, and security — all under ₹1L.',
    path: '/products',
  },
};

export default function CloudSaathiComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const page = location.pathname === '/' ? '' : location.pathname.replace(/^\//, '');

  const go = useCallback((route) => {
    navigate(route ? `/${route}` : '/');
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [navigate]);

  const seo = PAGE_SEO[page] || PAGE_SEO[''];

  return (
    <NavCtx.Provider value={{ page, go }}>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://cloudsaathi.com${seo.path}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://cloudsaathi.com${seo.path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CloudSaathi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Helmet>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: ${C.bg}; }
        ::selection { background: ${C.green}33; color: ${C.ink}; }
        @keyframes tb { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        input[type="range"] { height: 4px; }
        input[type="range"]::-webkit-slider-thumb { cursor: pointer; }
      `}</style>
      <Nav page={page} />
      {!page && <LandingPage />}
      {page === "philosophy" && <PhilosophyPage />}
      {page === "ai-native" && <AINativePage />}
      {page === "products" && <ProductsPage />}
      {page === "services" && <ServicesOverviewPage />}
      {page === "services/cicd-setup" && <CICDSetupPage />}
      {page === "services/kubernetes-management" && <KubernetesPage />}
      {page === "services/cloud-migration" && <CloudMigrationPage />}
      {page === "services/infra-audit" && <InfraAuditPage />}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "blog" && <BlogPage />}
      <Footer />
    </NavCtx.Provider>
  );
}
