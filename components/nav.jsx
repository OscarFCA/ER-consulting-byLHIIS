// NAV COMPONENT — Elías Rico Portfolio
// Transparent on top, glass blur on scroll. ES/EN toggle. WhatsApp CTA.

function NavLogo() {
  return (
    <a href="#" className="nav-logo" aria-label="Elías Rico">
      <img src="uploads/Logo.PNG" alt="<=> logo" style={{ width: '36px', height: '36px', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.6))', borderRadius: "6px" }} />
      <span className="nav-name">Elías Rico</span>
    </a>);

}

function Nav({ lang, setLang }) {
  const t = {
    es: { links: [['Proyectos', '#proyectos'], ['Blog', '#blog'], ['Sobre mí', '#sobre-mi'], ['Ecosistema', '#ecosistema']], cta: 'Hablemos' },
    en: { links: [['Projects', '#proyectos'], ['Blog', '#blog'], ['About', '#sobre-mi'], ['Ecosystem', '#ecosistema']], cta: "Let's Talk" }
  };
  const tx = t[lang];

  React.useEffect(() => {
    const nav = document.getElementById('main-nav');
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, anchor) => {
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) el.scrollTop = 0 || el.parentElement.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    // fallback: scroll the outer page container
    const container = document.getElementById('page-root');
    if (container && el) {
      container.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <nav id="main-nav" className="nav">
      <div className="nav-inner">
        <NavLogo />
        <div className="nav-links">
          {tx.links.map(([label, href]) =>
          <a key={href} href={href} className="nav-link" onClick={(e) => handleNav(e, href)}>{label}</a>
          )}
        </div>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-divider">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <a href="https://wa.me/5215531650560" target="_blank" rel="noopener" className="btn-primary nav-cta">
            {tx.cta}
          </a>
        </div>
      </div>
    </nav>);

}

Object.assign(window, { Nav });