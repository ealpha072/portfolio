const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --bg: #0a0a0f;
    --bg2: #0f0f1a;
    --bg3: #141420;
    --surface: #1a1a2e;
    --surface2: #22223a;
    --border: rgba(255,255,255,0.07);
    --border2: rgba(255,255,255,0.12);
    --accent: #c8a96e;
    --accent2: #e8c98e;
    --accent3: #f0d8a8;
    --teal: #4ecdc4;
    --teal2: #7eddd6;
    --text: #f0ede8;
    --text2: #b8b4ae;
    --text3: #7a7670;
    --font-display: 'Playfair Display', serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'DM Mono', monospace;
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }

  [data-theme="light"] {
    --bg: #f8f6f2;
    --bg2: #f2efe9;
    --bg3: #ece8e0;
    --surface: #ffffff;
    --surface2: #f5f2ec;
    --border: rgba(0,0,0,0.07);
    --border2: rgba(0,0,0,0.12);
    --text: #1a1814;
    --text2: #4a4640;
    --text3: #8a8680;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    transition: background 0.4s, color 0.4s;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.4;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,15,0.7);
    transition: background 0.4s;
  }
  [data-theme="light"] nav { background: rgba(248,246,242,0.8); }

  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
    align-items: center;
  }
  .nav-links a {
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text2);
    text-decoration: none;
    transition: color 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: var(--accent);
    transition: width 0.3s var(--ease);
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-links a:hover::after { width: 100%; }
  .nav-links a.active { color: var(--accent); }

  .theme-toggle {
    width: 36px; height: 36px;
    border: 1px solid var(--border2);
    border-radius: 50%;
    background: var(--surface);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: border-color 0.2s, transform 0.2s;
    flex-shrink: 0;
  }
  .theme-toggle:hover { border-color: var(--accent); transform: rotate(20deg); }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
  }
  .hamburger span {
    display: block;
    width: 22px; height: 1.5px;
    background: var(--text);
    transition: all 0.3s;
  }

  #hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 48px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .orb1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%);
    top: -100px; right: -100px;
    animation: orbFloat 8s ease-in-out infinite;
  }
  .orb2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(78,205,196,0.08) 0%, transparent 70%);
    bottom: 0px; left: -80px;
    animation: orbFloat 10s ease-in-out infinite reverse;
  }
  @keyframes orbFloat {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(20px, -30px); }
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    opacity: 0;
    animation: fadeUp 0.8s var(--ease) 0.1s forwards;
  }
  .hero-eyebrow-line { width: 40px; height: 1px; background: var(--accent); }
  .hero-eyebrow-text {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    font-family: var(--font-mono);
  }

  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 700;
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    opacity: 0;
    animation: fadeUp 0.9s var(--ease) 0.2s forwards;
  }
  .hero-name em { font-style: italic; color: var(--accent); }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    font-weight: 400;
    color: var(--text2);
    margin-bottom: 32px;
    font-style: italic;
    opacity: 0;
    animation: fadeUp 0.9s var(--ease) 0.3s forwards;
  }

  .hero-desc {
    max-width: 560px;
    font-size: 1rem;
    color: var(--text2);
    line-height: 1.7;
    margin-bottom: 48px;
    opacity: 0;
    animation: fadeUp 0.9s var(--ease) 0.4s forwards;
  }

  .hero-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.9s var(--ease) 0.5s forwards;
  }

  .btn-primary {
    padding: 14px 32px;
    background: var(--accent);
    color: #0a0a0f;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, transform 0.2s;
    font-family: var(--font-body);
  }
  .btn-primary:hover { background: var(--accent3); transform: translateY(-2px); }

  .btn-outline {
    padding: 14px 32px;
    background: transparent;
    color: var(--text);
    font-weight: 500;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    border: 1px solid var(--border2);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: border-color 0.2s, transform 0.2s, color 0.2s;
    font-family: var(--font-body);
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

  .hero-stats {
    position: absolute;
    right: 48px;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    opacity: 0;
    animation: fadeLeft 1s var(--ease) 0.7s forwards;
  }
  .hero-stat {
    text-align: right;
    border-right: 1px solid var(--accent);
    padding-right: 16px;
  }
  .hero-stat-num {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
  }
  .hero-stat-label {
    font-size: 0.72rem;
    color: var(--text3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 2px;
  }

  section { padding: 100px 48px; }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 64px;
  }
  .section-num {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.1em;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }
  .section-line {
    flex: 1;
    height: 1px;
    background: var(--border);
    margin-left: 8px;
  }

  #about { background: var(--bg2); }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  .about-text p {
    color: var(--text2);
    margin-bottom: 20px;
    font-size: 1.05rem;
    line-height: 1.8;
  }
  .about-text p strong { color: var(--text); font-weight: 600; }
  .about-text p em { color: var(--accent); font-style: normal; }

  .about-skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .skill-card {
    padding: 20px;
    border: 1px solid var(--border);
    background: var(--surface);
    position: relative;
    transition: border-color 0.3s, transform 0.3s;
    cursor: default;
  }
  .skill-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 2px; height: 0;
    background: var(--accent);
    transition: height 0.3s var(--ease);
  }
  .skill-card:hover { border-color: var(--border2); transform: translateY(-2px); }
  .skill-card:hover::before { height: 100%; }
  .skill-card-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .skill-card-title {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .skill-card-items {
    font-size: 0.78rem;
    color: var(--text3);
    line-height: 1.6;
    font-family: var(--font-mono);
  }

  #experience { background: var(--bg); }
  .timeline { position: relative; padding-left: 24px; }
  .timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 1px;
    background: var(--border);
  }
  .timeline-item { position: relative; padding-left: 40px; padding-bottom: 56px; }
  .timeline-item:last-child { padding-bottom: 0; }
  .timeline-dot {
    position: absolute;
    left: -28px; top: 6px;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--accent);
    transition: background 0.3s, transform 0.3s;
  }
  .timeline-item:hover .timeline-dot { background: var(--accent); transform: scale(1.3); }
  .timeline-period {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .timeline-role {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .timeline-company {
    font-size: 0.9rem;
    color: var(--text2);
    margin-bottom: 20px;
    font-style: italic;
  }
  .timeline-bullets { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .timeline-bullets li {
    font-size: 0.9rem;
    color: var(--text2);
    padding-left: 16px;
    position: relative;
    line-height: 1.6;
  }
  .timeline-bullets li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 700;
  }
  .timeline-bullets li strong { color: var(--text); font-weight: 500; }

  .exp-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
  .exp-tag {
    padding: 4px 10px;
    background: var(--surface);
    border: 1px solid var(--border);
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--text3);
    font-family: var(--font-mono);
    transition: border-color 0.2s, color 0.2s;
  }
  .exp-tag:hover { border-color: var(--accent); color: var(--accent); }

  #projects { background: var(--bg2); }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
  }
  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 32px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
    cursor: default;
  }
  .project-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(200,169,110,0.06) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .project-card:hover { border-color: var(--border2); transform: translateY(-4px); }
  .project-card:hover::after { opacity: 1; }
  .project-num {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text3);
    letter-spacing: 0.1em;
    margin-bottom: 20px;
  }
  .project-client {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    font-family: var(--font-mono);
    margin-bottom: 8px;
  }
  .project-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 12px;
  }
  .project-desc {
    font-size: 0.88rem;
    color: var(--text2);
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .project-impact {
    padding: 12px 16px;
    background: var(--bg3);
    border-left: 2px solid var(--accent);
    font-size: 0.82rem;
    color: var(--text2);
    line-height: 1.5;
    margin-top: auto;
  }
  .project-impact strong { color: var(--accent); }

  #skills { background: var(--bg); }
  .skills-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
  .skills-group-title {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    font-family: var(--font-mono);
    margin-bottom: 28px;
  }
  .skill-bar-item { margin-bottom: 20px; }
  .skill-bar-header { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .skill-bar-name { font-size: 0.88rem; color: var(--text2); }
  .skill-bar-pct { font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); }
  .skill-bar-track { height: 2px; background: var(--surface2); position: relative; }
  .skill-bar-fill {
    position: absolute;
    top: 0; left: 0; bottom: 0;
    background: linear-gradient(90deg, var(--accent), var(--teal));
    width: 0;
    transition: width 1.2s var(--ease);
  }
  .skill-bar-fill.animate { width: var(--pct); }

  .cert-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
  .cert-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 16px;
    border: 1px solid var(--border);
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .cert-item:hover { border-color: var(--border2); }
  .cert-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
  .cert-title { font-size: 0.9rem; font-weight: 500; margin-bottom: 2px; }
  .cert-issuer { font-size: 0.76rem; color: var(--text3); font-family: var(--font-mono); }

  #github { background: var(--bg2); }
  .github-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .repo-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 24px;
    text-decoration: none;
    color: var(--text);
    display: block;
    transition: border-color 0.3s, transform 0.3s;
    position: relative;
  }
  .repo-card:hover { border-color: var(--border2); transform: translateY(-3px); }
  .repo-card-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--teal);
    margin-bottom: 8px;
    font-family: var(--font-mono);
  }
  .repo-card-desc { font-size: 0.82rem; color: var(--text3); line-height: 1.5; margin-bottom: 16px; }
  .repo-card-meta { display: flex; gap: 16px; align-items: center; }
  .repo-lang-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  .repo-meta-text { font-size: 0.72rem; color: var(--text3); font-family: var(--font-mono); }

  #contact { background: var(--bg); }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
  }
  .contact-intro {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 24px;
  }
  .contact-intro em { color: var(--accent); font-style: italic; }
  .contact-body { font-size: 0.95rem; color: var(--text2); line-height: 1.7; margin-bottom: 40px; }
  .contact-links { display: flex; flex-direction: column; gap: 16px; }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--text2);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 16px;
    border: 1px solid var(--border);
    background: var(--surface);
    transition: border-color 0.2s, color 0.2s, transform 0.2s;
  }
  .contact-link:hover { border-color: var(--accent); color: var(--accent); transform: translateX(4px); }
  .contact-link-icon { font-size: 1.2rem; flex-shrink: 0; }
  .contact-link-label { font-size: 0.72rem; color: var(--text3); font-family: var(--font-mono); letter-spacing: 0.06em; }
  .contact-link-value { font-size: 0.88rem; margin-top: 2px; }

  .contact-form { display: flex; flex-direction: column; gap: 20px; }
  .form-group { position: relative; }
  .form-label {
    display: block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text3);
    font-family: var(--font-mono);
    margin-bottom: 8px;
  }
  .form-input, .form-textarea {
    width: 100%;
    padding: 14px 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
  }
  .form-input:focus, .form-textarea:focus { border-color: var(--accent); }
  .form-input::placeholder, .form-textarea::placeholder { color: var(--text3); }

  footer {
    padding: 32px 48px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--text3);
    font-family: var(--font-mono);
    background: var(--bg2);
  }
  .footer-logo { font-family: var(--font-display); font-size: 1rem; color: var(--accent); text-decoration: none; cursor: pointer; }
  .footer-copy { letter-spacing: 0.04em; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    .nav-links {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: var(--bg);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      z-index: 99;
    }
    .nav-links.open { display: flex; }
    .nav-links a { font-size: 1.2rem; }
    .hamburger { display: flex; z-index: 101; }
    #hero { padding: 100px 24px 60px; }
    .hero-stats { display: none; }
    section { padding: 72px 24px; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .about-skills-grid { grid-template-columns: 1fr 1fr; }
    .skills-two-col { grid-template-columns: 1fr; gap: 48px; }
    .contact-grid { grid-template-columns: 1fr; gap: 48px; }
    footer { flex-direction: column; gap: 8px; text-align: center; padding: 24px; }
    .section-line { display: none; }
  }

  @media (max-width: 600px) {
    .projects-grid { grid-template-columns: 1fr; }
    .github-cards { grid-template-columns: 1fr; }
    .about-skills-grid { grid-template-columns: 1fr; }
    .hero-ctas { flex-direction: column; }
    .btn-primary, .btn-outline { text-align: center; justify-content: center; }
  }
`;

export default styles