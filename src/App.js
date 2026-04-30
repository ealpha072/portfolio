import { useState, useEffect, useRef } from "react";
import styles from "./styles";

// ─── Data ───────────────────────────────────────────────────────────────────

const navLinks = ["about", "experience", "projects", "skills", "github", "contact"];

const skillCards = [
  { icon: "📊", title: "Data & Analytics", items: "Python · SQL · Pandas\nNumPy · Tableau · EViews" },
  { icon: "💹", title: "Finance", items: "DCF · 3-Statement\nScenario Analysis\nDue Diligence" },
  { icon: "🔬", title: "Research", items: "Market Sizing · Survey\nDesign · Policy Research\nInvestment Memos" },
  { icon: "⚙️", title: "Tech Stack", items: "React · JavaScript\nMongoDB · Git\nQuickBooks" },
];

const experiences = [
  {
    period: "May 2022 — Present",
    role: "Research, Data & Investment Analyst",
    company: "Maitri Capital · Nairobi, Kenya",
    bullets: [
      <>Analyzed large-scale datasets across trade, health, and financial sectors using <strong>Python and SQL</strong>, generating investment-relevant insights for 10+ client engagements.</>,
      "Designed and executed sector and market research engagements for global development partners (USAID, FCDO, World Bank, GIZ), translating complex data into clear narratives.",
      <>Built <strong>integrated financial models</strong> — 3-statement, DCF, scenario analysis — supporting capital raising across healthcare, FMCG, manufacturing, and agriculture.</>,
      "Led preparation of investment memoranda, teasers, and pitch decks for SMEs and project sponsors with competitor benchmarking and industry structure analysis.",
      "Performed commercial and financial due diligence, evaluating business models, unit economics, regulatory risks, and growth strategies.",
    ],
    tags: ["Python", "SQL", "DCF Modelling", "Due Diligence", "Market Research", "USAID", "World Bank", "FCDO"],
    delay: "",
  },
  {
    period: "Jan 2022 — Apr 2022",
    role: "Finance & Accounting Intern",
    company: "Kisumu County Referral Hospital · Kisumu, Kenya",
    bullets: [
      "Supported billing, insurance claims processing (NHIF), and accounts bookkeeping within a high-volume public health facility.",
      "Handled patient financial clearance, developing a strong grounding in healthcare finance and public sector accounting.",
    ],
    tags: ["Healthcare Finance", "Bookkeeping", "NHIF"],
    delay: "reveal-delay-2",
  },
];

const projects = [
  {
    num: "PROJECT 01", client: "FCDO · 2024",
    title: "Unlocking Trade Potential: Priority Sectors for Kenya",
    desc: "Assessed 13 tradeable sectors using import, export, and production data to identify manufacturing and import substitution opportunities. Built quantitative market sizing models and company-level investment case studies.",
    impact: "Findings directly shaped FCDO's investment and industrial policy priorities for Kenya.",
    delay: "",
  },
  {
    num: "PROJECT 02", client: "GIZ · 2024",
    title: "Unlocking Capital for Female Investment Vehicle Managers in Africa",
    desc: "Designed and analyzed a pan-African survey of 51 investment vehicle managers, assessing fundraising constraints, ticket sizes, and LP requirements across geographies and fund strategies.",
    impact: "Outputs guided GIZ program design and capital allocation to support women-led investment vehicles.",
    delay: "reveal-delay-1",
  },
  {
    num: "PROJECT 03", client: "USAID LISA",
    title: "Health Sector Landscape Assessment — Private Sector Engagement",
    desc: "Led data analysis for a national health sector landscape assessment identifying pipeline-ready private sector partners. Developed a scoring and ranking framework to assess commercial readiness, scalability, and impact potential.",
    impact: "Evidence-based shortlists supported investor and donor engagement strategies nationwide.",
    delay: "reveal-delay-2",
  },
  {
    num: "PROJECT 04", client: "Inteleos",
    title: "Maternal and Neonatal Healthcare Studies",
    desc: "Led survey design, field data cleaning, and statistical analysis for studies on ultrasound adoption, service availability, and healthcare delivery gaps in maternal and neonatal care.",
    impact: "Insights informed program design and targeted health system interventions across the region.",
    delay: "reveal-delay-1",
  },
  {
    num: "PROJECT 05", client: "USAID",
    title: "Health Manufacturing Baseline Assessment",
    desc: "Designed and implemented baseline surveys on health manufacturing in Kenya. Cleaned and analyzed facility-level data, translating findings into high-impact infographics and evidence briefs for non-technical audiences.",
    impact: "Actionable insights for industry stakeholders across the health manufacturing value chain.",
    delay: "reveal-delay-2",
  },
  {
    num: "PROJECT 06", client: "Transaction Support",
    title: "Commercial Due Diligence — Education Sector",
    desc: "Led commercial due diligence reporting and data analysis, assessing market demand, competitive landscape, pricing dynamics, and key risks for an education sector transaction.",
    impact: "Report used to inform transaction structuring and final investment decision-making.",
    delay: "reveal-delay-3",
  },
];

const technicalSkills = [
  { name: "Python (Pandas, NumPy, Matplotlib)", pct: "88%" },
  { name: "SQL & Database Management", pct: "85%" },
  { name: "Financial Modelling (DCF, 3-Statement)", pct: "90%" },
  { name: "Excel (Advanced) & EViews", pct: "92%" },
  { name: "Tableau & Data Visualization", pct: "80%" },
  { name: "React & JavaScript", pct: "72%" },
];

const certifications = [
  { icon: "🎓", title: "Masters in Financial Engineering", issuer: "World Quant University · Ongoing" },
  { icon: "🏆", title: "Bachelor of Economics — First Class Honours", issuer: "Kenyatta University, Nairobi · 2017–2021" },
  { icon: "📜", title: "Applied Data Science Lab", issuer: "World Quant University · 2025" },
  { icon: "📜", title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy · 2025" },
  { icon: "📜", title: "Certified Public Accountant (CPA) II", issuer: "KASNEB · 2021" },
  { icon: "📜", title: "Applied Data Science I: Scientific Computing & Python", issuer: "World Quant University · 2021" },
];

const repos = [
  {
    name: "World-Quant-University",
    desc: "Assignments and projects from the WQU Python for Data Science course — scientific computing, statistics, and applied ML.",
    lang: "Python", langColor: "#3572A5",
    url: "https://github.com/ealpha072/World-Quant-University",
    delay: "",
  },
  {
    name: "Student-Management-System",
    desc: "Full-stack system for managing students, courses, and departments with role-based access control and data security.",
    lang: "JavaScript", langColor: "#f1e05a",
    url: "https://github.com/ealpha072/Student-Management-System",
    delay: "reveal-delay-1",
  },
  {
    name: "School-Management-System",
    desc: "Comprehensive school management platform covering administration, academics, and student records.",
    lang: "PHP", langColor: "#4F5D95",
    url: "https://github.com/ealpha072/school-management-system",
    delay: "reveal-delay-2",
  },
  {
    name: "AlphaNote",
    desc: "AlphaEdit — a lightweight, efficient text editor designed for simplicity and productivity.",
    lang: "HTML / JS", langColor: "#e34c26",
    url: "https://github.com/ealpha072/AlphaNote",
    delay: "reveal-delay-1",
  },
  {
    name: "termux_repo",
    desc: "Custom Termux configuration and utility scripts for mobile-first development and automation workflows.",
    lang: "Shell", langColor: "#89e051",
    url: "https://github.com/ealpha072/termux_repo",
    delay: "reveal-delay-2",
  },
];

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.querySelectorAll?.(".skill-bar-fill").forEach((f) => f.classList.add("animate"));
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));

    const skillSection = document.getElementById("skills");
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll(".skill-bar-fill").forEach((f) => f.classList.add("animate"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (skillSection) skillObserver.observe(skillSection);

    return () => { observer.disconnect(); skillObserver.disconnect(); };
  }, []);
}

function useActiveSection(sections) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  return active;
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function Nav({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const activeSection = useActiveSection(["hero", ...navLinks]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleHamburger = () => setMenuOpen((v) => !v);

  return (
    <nav id="mainNav">
      <a className="nav-logo" href="#hero">AE. Ochieng</a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
        {navLinks.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
              style={{ textTransform: "capitalize" }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {isMobile && (
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
        )}
        <button
          className="hamburger"
          onClick={toggleHamburger}
          aria-label="Toggle menu"
          style={{ display: isMobile ? "flex" : "none" }}
        >
          <span style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}} />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-orb orb1" />
      <div className="hero-bg-orb orb2" />

      <div className="hero-eyebrow">
        <div className="hero-eyebrow-line" />
        <span className="hero-eyebrow-text">Nairobi, Kenya &nbsp;·&nbsp; Available for Engagements</span>
      </div>

      <h1 className="hero-name">
        Alpha<br /><em>Emmanuel</em>
      </h1>
      <p className="hero-title">Data & Research Analyst · Financial Modelling · Investment Strategy</p>

      <p className="hero-desc">
        Quantitative analyst with 3+ years delivering data-driven insights for global development partners — USAID, FCDO, World Bank & GIZ. Bridging rigorous analytics with strategic investment intelligence across East Africa.
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">View Work &nbsp;→</a>
        <a href="#contact" className="btn-outline">Get In Touch</a>
        <a
          href="https://github.com/ealpha072?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          style={{ borderColor: "rgba(78,205,196,0.3)", color: "var(--teal)" }}
        >
          GitHub ↗
        </a>
      </div>

      <div className="hero-stats">
        {[
          { num: "3+", label: "Years Experience" },
          { num: "10+", label: "Client Engagements" },
          { num: "4", label: "Global Partners" },
        ].map((s) => (
          <div className="hero-stat" key={s.label}>
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div className="section-header reveal">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}

function About() {
  return (
    <section id="about">
      <SectionHeader num="01" title="About" />
      <div className="about-grid">
        <div className="about-text reveal">
          <p>I'm a <strong>Data & Research Analyst</strong> at Maitri Capital, where I combine quantitative rigour with strategic thinking to help investors, donors, and policymakers make decisions that matter.</p>
          <p>My work sits at the intersection of <em>financial analysis</em>, <em>market research</em>, and <em>development economics</em> — building financial models, sizing markets, and authoring advisory briefs for some of the world's most influential development institutions.</p>
          <p>From FCDO's industrial policy in Kenya to GIZ's gender-lens investment programs, my analysis directly shapes capital allocation strategies and policy priorities across East Africa.</p>
          <p>I'm currently completing a <strong>Masters in Financial Engineering</strong> at World Quant University, sharpening my quantitative toolkit for complex financial modelling and derivatives pricing.</p>
        </div>
        <div className="about-skills-grid reveal reveal-delay-2">
          {skillCards.map((card) => (
            <div className="skill-card" key={card.title}>
              <div className="skill-card-icon">{card.icon}</div>
              <div className="skill-card-title">{card.title}</div>
              <div className="skill-card-items" style={{ whiteSpace: "pre-line" }}>{card.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <SectionHeader num="02" title="Experience" />
      <div className="timeline">
        {experiences.map((exp) => (
          <div className={`timeline-item reveal ${exp.delay}`} key={exp.role}>
            <div className="timeline-dot" />
            <div className="timeline-period">{exp.period}</div>
            <div className="timeline-role">{exp.role}</div>
            <div className="timeline-company">{exp.company}</div>
            <ul className="timeline-bullets">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="exp-tags">
              {exp.tags.map((t) => <span className="exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionHeader num="03" title="Key Projects" />
      <div className="projects-grid">
        {projects.map((p) => (
          <div className={`project-card reveal ${p.delay}`} key={p.num}>
            <div className="project-num">{p.num}</div>
            <div className="project-client">{p.client}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-impact"><strong>Impact:</strong> {p.impact}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionHeader num="04" title="Skills & Credentials" />
      <div className="skills-two-col">
        <div>
          <div className="skills-group-title reveal">Technical Proficiency</div>
          {technicalSkills.map((s, i) => (
            <div className={`skill-bar-item reveal reveal-delay-${(i % 3) + 1}`} key={s.name}>
              <div className="skill-bar-header">
                <span className="skill-bar-name">{s.name}</span>
                <span className="skill-bar-pct">{s.pct}</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ "--pct": s.pct }} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="skills-group-title reveal">Certifications & Education</div>
          <ul className="cert-list">
            {certifications.map((c, i) => (
              <li className={`cert-item reveal reveal-delay-${(i % 3) + 1}`} key={c.title}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GitHub() {
  return (
    <section id="github">
      <SectionHeader num="05" title="Open Source" />
      <div className="github-cards">
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className={`repo-card reveal ${r.delay}`}
          >
            <div className="repo-card-name">{r.name}</div>
            <div className="repo-card-desc">{r.desc}</div>
            <div className="repo-card-meta">
              <span className="repo-lang-dot" style={{ background: r.langColor }} />
              <span className="repo-meta-text">{r.lang}</span>
            </div>
          </a>
        ))}
        <a
          href="https://github.com/ealpha072?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="repo-card reveal reveal-delay-3"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 120, borderStyle: "dashed" }}
        >
          <div>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>↗</div>
            <div className="repo-card-name" style={{ color: "var(--accent)" }}>View All Repositories</div>
            <div className="repo-card-desc" style={{ margin: "4px 0 0" }}>Explore more on GitHub</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [btnState, setBtnState] = useState("idle");

  const handleSubmit = () => {
    setBtnState("sent");
    setTimeout(() => setBtnState("idle"), 3000);
  };

  return (
    <section id="contact">
      <SectionHeader num="06" title="Let's Work Together" />
      <div className="contact-grid">
        <div>
          <p className="contact-intro reveal">
            Have a project that requires <em>sharp analytical thinking?</em>
          </p>
          <p className="contact-body reveal reveal-delay-1">
            Whether you need financial modelling support, market research, investment analysis, or data-driven insights for your organization — I'm open to consulting engagements, contract work, and full-time opportunities.
          </p>
          <div className="contact-links">
            {[
              { icon: "✉️", label: "Email", value: "ealpha072@gmail.com", href: "mailto:ealpha072@gmail.com", delay: "reveal-delay-2" },
              { icon: "📞", label: "Phone", value: "+254 798 975 799", href: "tel:+254798975799", delay: "reveal-delay-2" },
              { icon: "🐙", label: "GitHub", value: "github.com/ealpha072", href: "https://github.com/ealpha072", delay: "reveal-delay-3" },
              { icon: "🔗", label: "LinkedIn", value: "Alpha Emmanuel Ochieng", href: "#", delay: "reveal-delay-3" },
            ].map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`contact-link reveal ${link.delay}`}>
                <span className="contact-link-icon">{link.icon}</span>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-value">{link.value}</div>
                </div>
              </a>
            ))}
            <div className="contact-link reveal reveal-delay-4" style={{ cursor: "default" }}>
              <span className="contact-link-icon">📍</span>
              <div>
                <div className="contact-link-label">Location</div>
                <div className="contact-link-value">Nairobi, Kenya &nbsp;·&nbsp; Open to Remote</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form reveal reveal-delay-2">
          {[
            { label: "Name", type: "text", placeholder: "Your full name" },
            { label: "Email", type: "email", placeholder: "your@email.com" },
            { label: "Organization", type: "text", placeholder: "Company / Institution" },
          ].map((f) => (
            <div className="form-group" key={f.label}>
              <label className="form-label">{f.label}</label>
              <input type={f.type} className="form-input" placeholder={f.placeholder} />
            </div>
          ))}
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" rows={5} placeholder="Tell me about your project or engagement..." />
          </div>
          <button
            className="btn-primary"
            onClick={handleSubmit}
            style={{
              width: "100%",
              justifyContent: "center",
              background: btnState === "sent" ? "var(--teal)" : undefined,
            }}
          >
            {btnState === "sent" ? "Message Sent ✓" : "Send Message \u00a0→"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a className="footer-logo" href="#hero">AE</a>
      <span className="footer-copy">© 2026 Alpha Emmanuel Ochieng · Nairobi, Kenya</span>
      <span style={{ color: "var(--text3)" }}>ealpha072@gmail.com</span>
    </footer>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.setAttribute("data-theme", next ? "dark" : "light");
      return next;
    });
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  useReveal();

  return (
    <>
      <style>{styles}</style>
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHub />
      <Contact />
      <Footer />
    </>
  );
}
