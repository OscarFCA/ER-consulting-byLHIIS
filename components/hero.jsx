// HERO SECTION — glassmorphism chat widget + animated radial glow

function HeroGlow() {
  return (
    <div className="hero-glow-container" aria-hidden="true">
      <div className="hero-glow glow-magenta"></div>
      <div className="hero-glow glow-purple"></div>
      <div className="hero-glow glow-violet"></div>
    </div>);

}

function HeroChatWidget({ lang }) {
  const messages = {
    es: [
    { role: 'user', text: '¿Por dónde empezamos a implementar IA?' },
    { role: 'ai', text: 'Primero identificamos tu etapa. ¿Estás en Startup, Growth o Scale?' },
    { role: 'user', text: 'Somos 12 personas, CEO no puede delegar.' },
    { role: 'ai', text: 'Etapa 2. Diagnóstico primero — en días tienes claridad total.' }],

    en: [
    { role: 'user', text: 'Where do we start with AI?' },
    { role: 'ai', text: 'First we identify your stage. Startup, Growth or Scale?' },
    { role: 'user', text: "We're 12 people, CEO can't delegate." },
    { role: 'ai', text: "Stage 2. Diagnosis first — you'll have full clarity in days." }]

  };

  const [visible, setVisible] = React.useState(1);
  const msgs = messages[lang];

  React.useEffect(() => {
    setVisible(1);
    const timers = [
    setTimeout(() => setVisible(2), 900),
    setTimeout(() => setVisible(3), 2000),
    setTimeout(() => setVisible(4), 3100)];

    return () => timers.forEach(clearTimeout);
  }, [lang]);

  // Loop the animation
  React.useEffect(() => {
    const loop = setInterval(() => {
      setVisible(0);
      setTimeout(() => setVisible(1), 100);
      setTimeout(() => setVisible(2), 1000);
      setTimeout(() => setVisible(3), 2100);
      setTimeout(() => setVisible(4), 3200);
    }, 6000);
    return () => clearInterval(loop);
  }, [lang]);

  return (
    <div className="hero-chat-widget glass-card">
      <div className="chat-header">
        <div className="chat-dot chat-dot-green"></div>
        <span className="chat-title mono-label">AI · Elías Rico</span>
        <div className="chat-pulse"></div>
      </div>
      <div className="chat-messages">
        {msgs.map((m, i) =>
        <div
          key={`${lang}-${i}`}
          className={`chat-msg chat-msg-${m.role} ${visible > i ? 'chat-msg-visible' : ''}`}>
          
            {m.role === 'ai' &&
          <div className="chat-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="107.425781 57.601562 361.5 460.5" width="14" height="14">
                  <defs>
                    <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#sparkle-grad)" d="M 288 57.601562 C 318.308594 191.773438 334.226562 257.683594 468.398438 287.996094 C 334.234375 318.308594 318.320312 384.21875 288 518.394531 C 257.6875 384.21875 241.769531 318.308594 107.597656 287.996094 C 241.769531 257.683594 257.6875 191.773438 288 57.601562 Z" />
                </svg>
              </div>
          }
            <div className="chat-bubble">{m.text}</div>
          </div>
        )}
      </div>
      <div className="chat-input-bar">
        <div className="chat-input-fake mono-label">
          {lang === 'es' ? 'Escribe tu situación...' : 'Describe your situation...'}
        </div>
        <div className="chat-send-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </div>
    </div>);

}

function Hero({ lang }) {
  const t = {
    es: {
      eyebrow: 'AI & Innovation Strategist · Ciudad de México',
      h1a: 'Tu empresa ya está',
      h1b: 'lista para la IA.',
      h1c: '... el problema es que nadie te ha dicho por dónde empezar.',
      sub: 'Cada etapa de tu empresa tiene dolores distintos y herramientas distintas que los resuelven. Yo identifico cuáles son las tuyas y tengo el equipo técnico que las implementa.',
      bullets: ['Costos operativos más bajos', 'Escala sin contratar más personas', 'Tu competencia sigue adivinando. Tú ya no.'],
      cta1: 'Hablemos',
      cta2: 'Ver proyectos'
    },
    en: {
      eyebrow: 'AI & Innovation Strategist · Mexico City',
      h1a: 'Your company is already',
      h1b: 'ready for AI.',
      h1c: '... the problem is nobody has told you where to start.',
      sub: 'Every stage of your company has different pains and different tools that solve them. I identify which ones are yours and have the technical team that implements them.',
      bullets: ['Lower operational costs', 'Scale without hiring more people', "Your competition keeps guessing. You won't."],
      cta1: "Let's talk",
      cta2: 'See projects'
    }
  };
  const tx = t[lang];

  return (
    <section className="hero" id="hero">
      <HeroGlow />
      <div className="hero-grid">
        <div className="hero-content">
          <div className="eyebrow">{tx.eyebrow}</div>
          <h1 className="hero-h1" style={{ maxWidth: "580px" }}>
            <span>{tx.h1a} </span>
            <span className="grad-text">{tx.h1b}</span>
            <br />
            <span className="hero-h1-sub" style={{ fontWeight: "300", lineHeight: "1.5", fontSize: "18px" }}>{tx.h1c}</span>
          </h1>
          <div className="hero-bullets glass-card-subtle">
            <p className="hero-sub" style={{ fontFamily: "Lato", fontSize: "16px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{tx.sub}</p>
            {tx.bullets.map((b, i) =>
            <div key={i} className="hero-bullet">
                <span className="bullet-dot"></span>
                <span className={i === 2 ? 'bullet-highlight' : ''}>{b}</span>
              </div>
            )}
          </div>
          <div className="hero-ctas">
            <a href="https://wa.me/5215531650560" target="_blank" rel="noopener" className="btn-primary btn-halo">
              {tx.cta1} →
            </a>
            <a href="#proyectos" className="btn-secondary">
              {tx.cta2}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img
              src="uploads/PortafolioPhoto.PNG"
              alt="Elías Rico"
              className="hero-photo"
              loading="eager" />
            
            <div className="hero-photo-glow"></div>
          </div>
          <HeroChatWidget lang={lang} />
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero });