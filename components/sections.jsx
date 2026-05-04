// SECTIONS: Ecosistema, Propuesta de Valor, Proyectos, Blog, Sobre Mí, Para Quién, FAQ, CTA, Footer

// ── ECOSISTEMA ──────────────────────────────────────────────────────────────
function Ecosistema({ lang }) {
  const t = {
    es: {
      eyebrow: 'Ecosistema',
      title: 'Con quienes construyo',
      sub: 'Me muevo en mundos distintos porque los problemas reales no respetan industrias.'
    },
    en: {
      eyebrow: 'Ecosystem',
      title: 'Who I build with',
      sub: "I move across different worlds because real problems don't respect industry boundaries."
    }
  };
  const tx = t[lang];

  const row1 = [
  { name: 'LHIIS', abbr: 'LH' },
  { name: 'HyperBeard', abbr: 'HB' },
  { name: 'Yabem Vehu', abbr: 'YV' },
  { name: 'BOi', abbr: 'BO' },
  { name: 'Marmolejo Villa', abbr: 'MV' }];


  const row2 = [
  { name: 'Por Ti Mujer', abbr: 'PT' },
  { name: 'Garibaldi', abbr: 'GA' },
  { name: 'Bohemio Crew', abbr: 'BC' },
  { name: 'UNAM', abbr: 'UN' },
  { name: 'FILCO', abbr: 'FC' }];


  // Duplicate each row for seamless infinite loop
  const r1 = [...row1, ...row1, ...row1];
  const r2 = [...row2, ...row2, ...row2];

  const Chip = ({ name, abbr }) =>
  <div className="logo-chip glass-card-subtle">
      <div className="logo-abbr mono-label">{abbr}</div>
      <div className="logo-name">{name}</div>
    </div>;


  return (
    <section className="section ecosistema" id="ecosistema">
      <div className="section-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-sub">{tx.sub}</p>
      </div>
      <div className="marquee-wrapper">
        {/* Row 1 — scrolls left */}
        <div className="marquee-track marquee-left">
          <div className="marquee-inner">
            {r1.map(({ name, abbr }, i) => <Chip key={`r1-${i}`} name={name} abbr={abbr} />)}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="marquee-track marquee-right">
          <div className="marquee-inner">
            {r2.map(({ name, abbr }, i) => <Chip key={`r2-${i}`} name={name} abbr={abbr} />)}
          </div>
        </div>
      </div>
    </section>);

}

// ── PROPUESTA DE VALOR ───────────────────────────────────────────────────────
function PropuestaValor({ lang }) {
  const t = {
    es: {
      eyebrow: 'Cómo trabajo',
      title: 'No solo recomiendo.\nImplemento.',
      sub: 'Dos cosas que raramente vienen juntas: claridad estratégica para saber qué herramienta implementar en tu etapa, y un equipo técnico que lo construye y lo deja funcionando.',
      blocks: [
      { icon: '◎', label: 'DIAGNÓSTICO', title: 'Sabes que algo puede mejorar. Yo encuentro exactamente qué.', desc: 'Identifico tu etapa de crecimiento, stack actual y nivel de digitalización. Apoyándome en ImpactX, Scaling Up e ISO, defino qué implementar primero y por qué.', ai: false },
      { icon: '⬡', label: 'DISEÑO', title: 'Diseño del sistema', desc: 'Antes de tocar una herramienta, defino la arquitectura: qué automatizar, cómo lo adopta tu equipo y cómo se mide el resultado.', ai: false },
      { icon: '⟳', label: 'IMPLEMENTACIÓN', title: 'Implementación con el equipo', desc: 'No entrego un manual. Me siento con tu equipo, implemento en vivo y resuelvo los problemas que aparecen en el camino. Uso agentes de IA donde reducen fricción real.', ai: true },
      { icon: '◆', label: 'AUTONOMÍA', title: 'Operación autónoma', desc: 'El objetivo es que no me necesiten. El sistema corre, el equipo lo domina y la empresa opera distinto. Ese es el cierre.', ai: false },
      { icon: '⬕', label: 'LHIIS · ALCANCE', title: '¿Necesitas software? Primero definimos qué construir.', desc: 'Si el diagnóstico revela desarrollo tecnológico, el equipo de LHIIS define el alcance. Antes de una línea de código, tienes claridad total.', ai: true },
      { icon: '⬙', label: 'LHIIS · BUILD', title: 'LHIIS construye. Yo implemento con tu equipo.', desc: 'LHIIS desarrolla el software, chatbot o agente de IA. Yo acompaño la implementación del lado del cliente para asegurar adopción e impacto.', ai: true }]

    },
    en: {
      eyebrow: 'How I work',
      title: "I don't just recommend.\nI implement.",
      sub: 'Two things that rarely come together: strategic clarity to know which tool to implement at your stage, and a technical team that builds it and leaves it running.',
      blocks: [
      { icon: '◎', label: 'DIAGNOSIS', title: 'You know something can improve. I find exactly what.', desc: 'I identify what growth stage your company is at, your current stack and real digitalization level. Drawing from ImpactX, Scaling Up and ISO, I define what to implement first and why.', ai: false },
      { icon: '⬡', label: 'DESIGN', title: 'System design', desc: "Before touching any tool, I define the architecture: what to automate, how your team adopts it and how results are measured. The system has to work for the people using it — not just on paper.", ai: false },
      { icon: '⟳', label: 'IMPLEMENTATION', title: 'Implementation with your team', desc: "I don't hand over a manual. I sit with your team, implement live and solve the problems that come up. I use AI agents where they reduce real friction, not to impress.", ai: true },
      { icon: '◆', label: 'AUTONOMY', title: 'Autonomous operation', desc: "The goal is that they no longer need me. The system runs, the team owns it and the company operates differently. That's the close.", ai: false },
      { icon: '⬕', label: 'LHIIS · SCOPE', title: "Need software? First, let's define what to build.", desc: "If the diagnosis reveals tech development, the LHIIS team defines the scope. Before a single line of code, you have full clarity.", ai: true },
      { icon: '⬙', label: 'LHIIS · BUILD', title: 'LHIIS builds. I implement with your team.', desc: "LHIIS develops the software, chatbot or AI agent. I accompany the implementation on the client side to ensure adoption and expected impact.", ai: true }]

    }
  };
  const tx = t[lang];

  return (
    <section className="section propuesta" id="propuesta">
      <div className="section-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>{tx.title}</h2>
        <p className="section-sub">{tx.sub}</p>
        <div className="bento-grid bento-3col">
          {tx.blocks.map((b, i) =>
          <div key={i} className={`bento-card glass-card ${b.ai ? 'bento-ai' : ''}`}>
              <div className="bento-icon mono-label">{b.icon}</div>
              <div className="bento-label mono-label">{b.label}</div>
              <h3 className="bento-title">{b.title}</h3>
              <p className="bento-desc">{b.desc}</p>
              {b.ai && <div className="ai-halo-badge mono-label">AI</div>}
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── PROYECTOS ────────────────────────────────────────────────────────────────
function AnimatedBar({ height, delay }) {
  const [h, setH] = React.useState(20);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setH(Math.floor(Math.random() * 60) + 20);
    }, 1200 + delay * 300);
    return () => clearInterval(interval);
  }, [delay]);
  return <div className="anim-bar" style={{ height: `${h}%`, transitionDelay: `${delay * 0.1}s` }}></div>;
}

function ProjectCard({ cat, title, desc, ctaLabel, ctaHref, lang, metric, metricLabel, gaLabel }) {
  return (
    <div className="project-card glass-card">
      <div className="project-chart" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => <AnimatedBar key={i} height={30 + i * 10} delay={i} />)}
      </div>
      <div className="project-meta">
        <span className="project-cat mono-label">{cat}</span>
        {metric && <span className="project-metric grad-text">{metric} <span className="mono-label" style={{ fontSize: '11px' }}>{metricLabel}</span></span>}
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <a href={ctaHref || 'https://substack.com/@heliosrc'} target="_blank" rel="noopener" className="btn-secondary btn-sm"
        onClick={() => gtag('event', 'cta_click', { cta_location: 'proyectos', cta_label: gaLabel || ctaHref })}>
        {ctaLabel} →
      </a>
    </div>);

}

function Proyectos({ lang }) {
  const t = {
    es: {
      eyebrow: 'Proyectos',
      title: 'Trabajo que genera resultado',
      sub: 'Dos frentes: consultoría estratégica y desarrollo de software.',
      consulting: 'Consultoría',
      consultingDesc: 'Diagnósticos, implementaciones de IA y sistemas de gestión.',
      software: 'Software y Producto',
      softwareTitle: '¿Tu solución requiere desarrollo tecnológico?',
      softwareDesc: 'Si el diagnóstico apunta a construir software, un chatbot o un agente de IA, el equipo de LHIIS entra al proyecto.',
      softwareCta: 'Ver servicios de LHIIS',
      cards: [
      { cat: 'VIDEOJUEGOS · DIAGNÓSTICO', title: 'Cuando un estudio de videojuegos decidió operar con sistemas, no con intuición', desc: 'Diagnóstico completo para estudio mexicano con 80 colaboradores. 9 retos críticos identificados. La empresa creó un rol formal de inteligencia artificial.', metric: '9', metricLabel: 'RETOS CRÍTICOS', ctaLabel: 'Leer caso', ctaHref: 'https://lhiisbc.substack.com/p/hyperbeard-games-diagnostico-organizacional?r=8byzvg', gaLabel: 'caso_hyperbeard' },
      { cat: 'SALUD · VETERINARIA', title: 'Una artesana que construyó todo sola durante 16 años, y lo que encontró cuando se detuvo a mirar', desc: 'Diagnóstico organizacional para clínica especializada en imagenología veterinaria. Propuesta de automatización del proceso comercial con agentes de inteligencia artificial.', metric: '16 AÑOS → 1 SEMANA', metricLabel: '', ctaLabel: 'Leer caso', ctaHref: 'https://lhiisbc.substack.com/p/ecovet-diagnostico-organizacional?r=8byzvg', gaLabel: 'caso_ecovet' },
      { cat: 'SEGURIDAD / SAAS · EN CURSO', title: 'El sector de seguridad privada en México opera sin sistemas. Eso está cambiando.', desc: 'Construcción de plataforma para profesionalizar la operación de empresas de seguridad privada en México, un sector que históricamente ha dependido de procesos manuales.', metric: '∞', metricLabel: 'IMPACTO POTENCIAL', ctaLabel: 'Leer caso', ctaHref: 'https://lhiisbc.substack.com/p/boi-de-una-conversacion-sobre-un?r=8byzvg', gaLabel: 'caso_boi' }]

    },
    en: {
      eyebrow: 'Projects',
      title: 'Work that generates results',
      sub: 'Two fronts: strategic consulting and software development.',
      consulting: 'Consulting',
      consultingDesc: 'Diagnostics, AI implementations and management systems.',
      software: 'Software & Product',
      softwareTitle: 'Does your solution require tech development?',
      softwareDesc: "If the diagnosis points to building software, a chatbot or an AI agent, the LHIIS team joins the project.",
      softwareCta: 'See LHIIS services',
      cards: [
      { cat: 'GAMING · DIAGNOSIS', title: 'When a game studio decided to operate with systems, not intuition', desc: 'Full organizational diagnosis for a Mexican studio with 80 people. 9 critical challenges identified. The company created a formal artificial intelligence role.', metric: '9', metricLabel: 'CRITICAL CHALLENGES', ctaLabel: 'Read case', ctaHref: 'https://lhiisbc.substack.com/p/hyperbeard-games-diagnostico-organizacional?r=8byzvg', gaLabel: 'caso_hyperbeard' },
      { cat: 'HEALTH · VETERINARY', title: 'An artisan who built everything alone for 16 years, and what she found when she stopped to look', desc: 'Organizational diagnosis for a veterinary imaging clinic. Proposal to automate the commercial process with artificial intelligence agents.', metric: '16 YRS → 1 WEEK', metricLabel: '', ctaLabel: 'Read case', ctaHref: 'https://lhiisbc.substack.com/p/ecovet-diagnostico-organizacional?r=8byzvg', gaLabel: 'caso_ecovet' },
      { cat: 'SECURITY / SAAS · IN PROGRESS', title: "Mexico's private security sector runs without systems. That's changing.", desc: "Building a platform to professionalize the operations of private security companies in Mexico, a sector that has historically depended on manual processes.", metric: '∞', metricLabel: 'POTENTIAL IMPACT', ctaLabel: 'Read case', ctaHref: 'https://lhiisbc.substack.com/p/boi-de-una-conversacion-sobre-un?r=8byzvg', gaLabel: 'caso_boi' }]

    }
  };
  const tx = t[lang];

  return (
    <section className="section proyectos" id="proyectos">
      <div className="section-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-sub">{tx.sub}</p>
        <div className="carousel-label mono-label">{tx.consulting} — {tx.consultingDesc}</div>
        <div className="projects-grid">
          {tx.cards.map((c, i) =>
          <ProjectCard key={i} {...c} lang={lang} />
          )}
        </div>
        <div className="lhiis-block glass-card lhiis-gradient-border">
          <div className="lhiis-content">
            <div className="eyebrow">{tx.software}</div>
            <h3 className="lhiis-title">{tx.softwareTitle}</h3>
            <p className="lhiis-desc">{tx.softwareDesc}</p>
            <a href="https://lhiis-brochure-gv3ee74.gamma.site/brochureservicios" target="_blank" rel="noopener" className="btn-primary btn-halo"
              onClick={() => gtag('event', 'cta_click', { cta_location: 'lhiis_block', cta_label: 'brochure_lhiis' })}>
              {tx.softwareCta} →
            </a>
          </div>
          <div className="lhiis-visual" aria-hidden="true">
            <div className="lhiis-logo-wrap" style={{ borderRadius: "327.255px" }}>
              <img src="uploads/LHIISLogo.png" alt="LHIIS" style={{ width: '100px', height: '100px', objectFit: 'contain', filter: 'drop-shadow(0 0 24px rgba(168,85,247,0.7))', borderRadius: "195.404px" }} />
            </div>
            <div className="mono-label" style={{ color: 'rgba(168,85,247,0.7)', marginTop: '12px', fontSize: '11px', textAlign: 'center' }}>LHIIS · BUILD & SCALE</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── BLOG ─────────────────────────────────────────────────────────────────────
function Blog({ lang }) {
  const posts = [
    {
      cat_es: 'CASOS · SALUD', cat_en: 'CASES · HEALTH',
      date: 'MAY 2026',
      title_es: 'Una artesana que decidió escalar, y lo que encontró cuando se detuvo a mirar',
      title_en: 'An artisan who decided to scale, and what she found when she stopped to look',
      img: 'uploads/banner-artesana.png',
      href: 'https://lhiis.substack.com/p/una-artesana-que-decidio-escalar?r=7w4lz',
      ga: 'blog_artesana',
    },
    {
      cat_es: 'INTELIGENCIA ARTIFICIAL', cat_en: 'ARTIFICIAL INTELLIGENCE',
      date: 'MAY 2026',
      title_es: 'La mayoría usa la inteligencia artificial como un buscador glorificado',
      title_en: 'Most people use artificial intelligence like a glorified search engine',
      img: 'uploads/banner-ia-buscador.png',
      href: 'https://lhiis.substack.com/p/la-mayoria-usa-la-inteligencia-artificial?r=7w4lz',
      ga: 'blog_ia_buscador',
    },
    {
      cat_es: 'LIDERAZGO · EMPRESAS', cat_en: 'LEADERSHIP · BUSINESS',
      date: 'MAY 2026',
      title_es: 'El CEO como cuello de botella: cómo los sistemas liberan al fundador',
      title_en: 'The CEO as bottleneck: how systems free the founder',
      img: 'uploads/banner-ceo-cuello.png',
      href: 'https://lhiis.substack.com/p/el-ceo-como-cuello-de-botella-como?r=7w4lz',
      ga: 'blog_ceo_cuello',
    },
  ];

  const t = {
    es: { eyebrow: 'Escritos', title: 'Ideas que no caben en una reunión.', sub: 'Escribo sobre lo que la IA le hace a las personas, a las organizaciones y a la cultura.', cta: 'Ver escritos' },
    en: { eyebrow: 'Writing', title: "Ideas that don't fit in a meeting.", sub: 'I write about what AI does to people, organizations and culture.', cta: 'Read writing' },
  };
  const tx = t[lang];

  return (
    <section className="section blog" id="blog">
      <div className="section-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-sub">{tx.sub}</p>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener" className="blog-card glass-card"
              onClick={() => gtag('event', 'cta_click', { cta_location: 'blog', cta_label: p.ga })}>
              <img src={p.img} alt={lang === 'es' ? p.title_es : p.title_en} className="blog-img" />
              <div className="blog-meta" style={{ padding: '0 20px' }}>
                <span className="blog-cat mono-label">{lang === 'es' ? p.cat_es : p.cat_en}</span>
                <span className="blog-date mono-label">{p.date}</span>
              </div>
              <h3 className="blog-title" style={{ padding: '0 20px' }}>{lang === 'es' ? p.title_es : p.title_en}</h3>
              <span className="blog-read grad-text" style={{ padding: '0 20px' }}>Substack @heliosrc →</span>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://substack.com/@heliosrc" target="_blank" rel="noopener" className="btn-secondary"
            onClick={() => gtag('event', 'cta_click', { cta_location: 'blog', cta_label: 'ver_substack' })}>{tx.cta}</a>
        </div>
      </div>
    </section>);
}

// ── AVATAR FLIP CARD ─────────────────────────────────────────────
function AvatarFlipCard() {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="sobre-photo-col">
      <div
        className={`avatar-flip-wrap ${revealed ? 'avatar-revealed' : ''}`}
        onClick={() => setRevealed((r) => !r)}
        title={revealed ? 'Click para ver pixel art' : 'Click para ver foto real'}>
        
        {/* Pixel art — always the base layer */}
        <img src="uploads/TwitterXPhoto.PNG" alt="Elías Rico pixel art" className="avatar-pixel" />

        {/* Real photo layer — heavily blurred on hover, clear on click */}
        <div className="avatar-real-layer">
          <img src="uploads/PortafolioPhoto.PNG" alt="Elías Rico" className="avatar-real-img" />
        </div>

        {/* Glass hint label */}
        <div className="avatar-hint mono-label">
          {revealed ? 'Click para volver' : 'Ver foto real'}
        </div>
      </div>
    </div>);

}

// ── SOBRE MÍ ─────────────────────────────────────────────────────────────────
function SobreMi({ lang }) {
  const t = {
    es: {
      eyebrow: 'Sobre mí',
      quote: '"Me importa más entender el problema que impresionar con la solución."',
      p1: 'Soy estratega, diseñador y constructor. Trabajo donde la tecnología y las personas chocan, y mi trabajo es que ese choque genere algo bueno.',
      p2: 'Llevo más de cinco años construyendo sistemas digitales para empresas. Empecé desde el diseño de experiencia de usuario y terminé entendiendo que el problema más profundo nunca estaba en la pantalla.',
      p3: 'Opero desde LHIIS. Yo diagnostico y diseño el sistema. Ellos lo construyen y escalan.',
      interestsLabel: 'Intereses',
      stackLabel: 'Stack',
      closing: '',
      interests: ['🎮 Videojuegos indie', '🥾 Hiking', '🎭 Espacios culturales', '🤝 Voluntariado', '📚 Historia y filosofía', '🌎 Problemas sociales', '🎶 Mariachi y cultura Mexa', '🚀 Startups']
    },
    en: {
      eyebrow: 'About',
      quote: '"I care more about understanding the problem than impressing with the solution."',
      p1: "I'm a strategist, designer and builder. I work where technology and people collide — and my job is to make that collision generate something good.",
      p2: "I've spent over five years building digital systems for companies. I started in UX design and ended up realizing the deepest problem was never on the screen.",
      p3: 'I operate from LHIIS. I diagnose and design the system. They build and scale it.',
      interestsLabel: 'Interests',
      stackLabel: 'Stack',
      closing: '',
      interests: ['🎮 Indie gaming', '🥾 Hiking', '🎭 Cultural spaces', '🤝 Volunteering', '📚 History & philosophy', '🌎 Social issues', '🎶 Mariachi & Mexican culture', '🚀 Startups']
    }
  };
  const tx = t[lang];
  const stack = ['Claude', 'Gemini', 'Agentes de IA', 'ImpactX', 'Scaling Up', 'Human-Centered Design', 'Lean UX', 'Figma', 'Google Workspace'];

  return (
    <section className="section sobre-mi" id="sobre-mi">
      <div className="section-inner">
        <div className="sobre-grid">
          <AvatarFlipCard />
          <div className="sobre-text-col">
            <div className="eyebrow">{tx.eyebrow}</div>
            <blockquote className="sobre-quote grad-text">{tx.quote}</blockquote>
            <p className="sobre-p">{tx.p1}</p>
            <p className="sobre-p">{tx.p2}</p>
            <p className="sobre-p">{tx.p3}</p>
            <div className="sobre-section-label mono-label">{tx.interestsLabel}</div>
            <div className="interest-chips">
              {tx.interests.map((chip, i) =>
              <span key={i} className="interest-chip">{chip}</span>
              )}
            </div>
            <div className="sobre-section-label mono-label" style={{ marginTop: '20px' }}>{tx.stackLabel}</div>
            <div className="stack-chips">
              {stack.map((s, i) =>
              <span key={i} className="stack-chip mono-label">{s}</span>
              )}
            </div>
            <div className="sobre-closing mono-label">{tx.closing}</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── PARA QUIÉN CTA ANIMADO ────────────────────────────────────────
function ParaQuienCTA({ lang, cta, closing }) {
  return (
    <div className="pq-cta-wrap">
      <div className="pq-glow-art" aria-hidden="true">
        <div className="pq-orb pq-orb-1"></div>
        <div className="pq-orb pq-orb-2"></div>
        <div className="pq-orb pq-orb-3"></div>
        {/* Sparkle decorations */}
        <svg className="pq-sparkle pq-sparkle-1" xmlns="http://www.w3.org/2000/svg" viewBox="107 57 362 461" width="28" height="28">
          <defs><linearGradient id="sp1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#EC4899"/><stop offset="100%" stopColor="#6D28D9"/></linearGradient></defs>
          <path fill="url(#sp1)" d="M 288 57.601562 C 318.308594 191.773438 334.226562 257.683594 468.398438 287.996094 C 334.234375 318.308594 318.320312 384.21875 288 518.394531 C 257.6875 384.21875 241.769531 318.308594 107.597656 287.996094 C 241.769531 257.683594 257.6875 191.773438 288 57.601562 Z" />
        </svg>
        <svg className="pq-sparkle pq-sparkle-2" xmlns="http://www.w3.org/2000/svg" viewBox="107 57 362 461" width="16" height="16">
          <defs><linearGradient id="sp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#A855F7"/><stop offset="100%" stopColor="#EC4899"/></linearGradient></defs>
          <path fill="url(#sp2)" d="M 288 57.601562 C 318.308594 191.773438 334.226562 257.683594 468.398438 287.996094 C 334.234375 318.308594 318.320312 384.21875 288 518.394531 C 257.6875 384.21875 241.769531 318.308594 107.597656 287.996094 C 241.769531 257.683594 257.6875 191.773438 288 57.601562 Z" />
        </svg>
        <svg className="pq-sparkle pq-sparkle-3" xmlns="http://www.w3.org/2000/svg" viewBox="107 57 362 461" width="12" height="12">
          <defs><linearGradient id="sp3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6D28D9"/><stop offset="100%" stopColor="#A855F7"/></linearGradient></defs>
          <path fill="url(#sp3)" d="M 288 57.601562 C 318.308594 191.773438 334.226562 257.683594 468.398438 287.996094 C 334.234375 318.308594 318.320312 384.21875 288 518.394531 C 257.6875 384.21875 241.769531 318.308594 107.597656 287.996094 C 241.769531 257.683594 257.6875 191.773438 288 57.601562 Z" />
        </svg>
      </div>
      <p className="section-sub pq-closing">{closing}</p>
      <a
        href="https://wa.me/5215531650560"
        target="_blank"
        rel="noopener"
        className="btn-primary btn-halo pq-btn"
        onClick={() => gtag('event', 'cta_click', { cta_location: 'para_quien', cta_label: 'whatsapp' })}
      >
        {cta} →
      </a>
    </div>
  );
}

// ── PARA QUIÉN ES ─────────────────────────────────────────────────────────────
function ParaQuien({ lang }) {
  const t = {
    es: {
      eyebrow: '¿Es para ti?',
      title: 'Reconoces alguno de estos dolores.',
      cta: 'Hablemos',
      stages: [
      { num: '01', tag: 'Etapa 1 — Fundador que hace todo', pain: 'El conocimiento de tu empresa vive solo en tu cabeza. No tienes procesos documentados, el sistema de ventas eres tú, y el tiempo se va en tareas que nadie más puede hacer porque nadie sabe cómo.' },
      { num: '02', tag: 'Etapa 2 — CEO que no puede delegar', pain: 'Ya tienes equipo pero sigues siendo el cuello de botella. Cada mes los ingresos son una sorpresa. Los procesos no están escritos, y cuando alguien sale, se va el conocimiento con él.' },
      { num: '03', tag: 'Etapa 3 — C-suite descoordinado', pain: 'Tienes directores pero cada área va en una dirección distinta. Las decisiones se toman sin datos confiables. El crecimiento está bloqueado porque los sistemas que funcionaban para 10 ya no aguantan 50.' }],

      closing: 'Si te ves en alguna de estas, tenemos mucho de qué hablar.'
    },
    en: {
      eyebrow: 'Is this for you?',
      title: 'You recognize one of these pains.',
      cta: "Let's talk",
      stages: [
      { num: '01', tag: 'Stage 1 — Founder doing everything', pain: "Your company's knowledge lives only in your head. No documented processes, the sales system is you, and time disappears into tasks nobody else can do because nobody knows how." },
      { num: '02', tag: "Stage 2 — CEO who can't delegate", pain: "You have a team but you're still the bottleneck. Every month revenue is a surprise. Processes aren't written down, and when someone leaves, the knowledge goes with them." },
      { num: '03', tag: 'Stage 3 — Uncoordinated C-suite', pain: "You have directors but every area pulls in a different direction. Decisions get made without reliable data. Growth is blocked because the systems that worked for 10 can't handle 50." }],

      closing: "If you recognize yourself in any of these, we have a lot to talk about."
    }
  };
  const tx = t[lang];

  return (
    <section className="section para-quien" id="para-quien">
      <div className="section-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title">{tx.title}</h2>
        <div className="stages-grid">
          {tx.stages.map((s, i) =>
          <div key={i} className={`stage-card glass-card stage-card-${i + 1}`}>
              <div className="stage-num mono-label grad-text">{s.num}</div>
              <div className="stage-tag mono-label">{s.tag}</div>
              <p className="stage-pain">{s.pain}</p>
            </div>
          )}
        </div>
        <div className="para-quien-closing" style={{ textAlign: "left" }}>
          <ParaQuienCTA lang={lang} cta={tx.cta} closing={tx.closing} pains={tx.stages.map(s => s.tag)} />
        </div>
      </div>
    </section>);

}

// ── FAQ / OBJECIONES ──────────────────────────────────────────────────────────
function FAQ({ lang }) {
  const [open, setOpen] = React.useState(null);
  const t = {
    es: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que suelen preguntar antes de escribir.',
      items: [
      { q: '¿Mi empresa es demasiado pequeña para implementar IA?', a: 'Al contrario. En etapas tempranas, un agente que responde clientes 24/7 o automatiza el seguimiento de ventas libera horas del fundador que valen más que cualquier contratación. El tamaño no importa — importa el dolor que tienes hoy.' },
      { q: '¿No es lo mismo que contratar a un proveedor de software?', a: 'No. Un proveedor te vende una herramienta estándar. Yo primero diagnostico tu etapa, tu stack y tus procesos reales. Después definimos qué construir. La herramienta es el último paso.' },
      { q: '¿Cuánto tiempo toma ver resultados?', a: 'La mayoría de implementaciones generan cambios visibles en 4 a 8 semanas. El diagnóstico solo toma días.' },
      { q: '¿Mi equipo va a poder usar lo que implementes?', a: 'Ese es exactamente el objetivo. No entrego sistemas que solo yo entiendo. Me quedo hasta que tu equipo los domina — y el conocimiento ya no vive solo en mi cabeza, ni en la tuya.' }]

    },
    en: {
      eyebrow: 'Common questions',
      title: 'What people usually ask before reaching out.',
      items: [
      { q: 'Is my company too small to implement AI?', a: "The opposite. At early stages, an agent that handles customer inquiries 24/7 or automates sales follow-up frees up founder hours worth more than any hire. Size doesn't matter — the pain you have today does." },
      { q: "Isn't this the same as hiring a software vendor?", a: "No. A vendor sells you a standard tool. I first diagnose your stage, your stack and your real processes. Then we define what to build. The tool is the last step." },
      { q: 'How long does it take to see results?', a: 'Most implementations show visible changes in 4 to 8 weeks. The diagnosis alone takes days.' },
      { q: 'Will my team actually be able to use what you implement?', a: "That's exactly the goal. I don't deliver systems only I understand. I stay until your team owns them — and the knowledge no longer lives only in my head, or yours." }]

    }
  };
  const tx = t[lang];

  return (
    <section className="section faq" id="faq">
      <div className="section-inner faq-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="section-title">{tx.title}</h2>
        <div className="faq-list">
          {tx.items.map((item, i) =>
          <div key={`${lang}-${i}`} className={`faq-item glass-card-subtle ${open === i ? 'faq-open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon mono-label">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && <p className="faq-a">{item.a}</p>}
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── CTA FINAL ─────────────────────────────────────────────────────────────────
function CTAFinal({ lang }) {
  const t = {
    es: {
      eyebrow: '¿Por dónde empezamos?',
      title: 'Cada semana sin un sistema, tu equipo resuelve lo mismo dos veces.',
      sub: '30 minutos. Sin costo. Sin rodeos.',
      btnA: 'Hablemos',
      descA: 'Consultoría de IA y estrategia',
      btnB: 'Ver LHIIS',
      descB: 'Software, chatbots y agentes de IA'
    },
    en: {
      eyebrow: 'Where do we start?',
      title: 'Every week without a system, your team solves the same problem twice.',
      sub: '30 minutes. No cost. No runaround.',
      btnA: "Let's talk",
      descA: 'AI consulting and strategy',
      btnB: 'See LHIIS',
      descB: 'Software, chatbots and AI agents'
    }
  };
  const tx = t[lang];

  return (
    <section className="section cta-final" id="cta">
      <div className="cta-glow" aria-hidden="true"></div>
      <div className="section-inner cta-inner">
        <div className="eyebrow">{tx.eyebrow}</div>
        <h2 className="cta-title grad-text" style={{ fontSize: "46px" }}>{tx.title}</h2>
        <p className="cta-sub">{tx.sub}</p>
        <div className="cta-buttons">
          <div className="cta-option">
            <a href="https://wa.me/5215531650560" target="_blank" rel="noopener" className="btn-primary btn-halo btn-lg"
              onClick={() => gtag('event', 'cta_click', { cta_location: 'cta_final', cta_label: 'whatsapp' })}>{tx.btnA} →</a>
            <p className="cta-desc mono-label">{tx.descA}</p>
          </div>
          <div className="cta-divider mono-label">o</div>
          <div className="cta-option">
            <a href="https://oscarfca.github.io/LHIIS-web/#" target="_blank" rel="noopener" className="btn-secondary btn-lg"
              onClick={() => gtag('event', 'cta_click', { cta_location: 'cta_final', cta_label: 'ver_lhiis' })}>{tx.btnB}</a>
            <p className="cta-desc mono-label">{tx.descB}</p>
          </div>
        </div>
      </div>
    </section>);

}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ lang }) {
  const tagline = lang === 'es' ?
  'Estrategia + Tecnología + Humanidad · Ciudad de México' :
  'Strategy + Technology + Humanity · Mexico City';
  const copy = lang === 'es' ?
  '© 2026 Elías Rico. Todos los derechos reservados.' :
  '© 2026 Elías Rico. All rights reserved.';

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="uploads/Logo.PNG" alt="<=> logo" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(236,72,153,0.5))', borderRadius: "6px" }} />
          <span className="footer-name">Elías Rico</span>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com/in/elias-rc" target="_blank" rel="noopener" className="footer-link">LinkedIn</a>
          <a href="https://twitter.com/_helios_rc" target="_blank" rel="noopener" className="footer-link">Twitter/X</a>
          <a href="https://substack.com/@heliosrc" target="_blank" rel="noopener" className="footer-link">Substack</a>
          <a href="https://oscarfca.github.io/LHIIS-web/#" target="_blank" rel="noopener" className="footer-link">LHIIS</a>
        </div>
        <div className="footer-tagline mono-label">{tagline}</div>
        <div className="footer-copy mono-label">{copy}</div>
      </div>
    </footer>);

}

Object.assign(window, { Ecosistema, PropuestaValor, Proyectos, Blog, SobreMi, ParaQuien, FAQ, CTAFinal, Footer });