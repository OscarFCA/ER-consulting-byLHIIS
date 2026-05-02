// NAV COMPONENT — Elías Rico Portfolio
// Desktop: links + lang toggle + WhatsApp CTA
// Mobile: hamburger button + slide-in drawer

function NavLogo() {
  return (
    <a href="#" className="nav-logo" aria-label="Elías Rico">
      <img src="uploads/Logo.PNG" alt="<=> logo" style={{ width: '36px', height: '36px', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.6))', borderRadius: "6px" }} />
      <span className="nav-name">Elías Rico</span>
    </a>
  );
}

function Nav({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const t = {
    es: { links: [['Proyectos', '#proyectos'], ['Blog', '#blog'], ['Sobre mí', '#sobre-mi'], ['Ecosistema', '#ecosistema']], cta: 'Hablemos' },
    en: { links: [['Projects', '#proyectos'], ['Blog', '#blog'], ['About', '#sobre-mi'], ['Ecosystem', '#ecosistema']], cta: "Let's Talk" }
  };
  const tx = t[lang];

  // Nav background on scroll
  React.useEffect(() => {
    const nav = document.getElementById('main-nav');
    const root = document.getElementById('page-root');
    const onScroll = () => {
      const scrolled = (root ? root.scrollTop : window.scrollY) > 50;
      nav.classList.toggle('nav-scrolled', scrolled);
    };
    const container = root || window;
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (anchor) => {
    setMenuOpen(false);
    const container = document.getElementById('page-root');
    const el = document.querySelector(anchor);
    if (container && el) {
      setTimeout(() => container.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' }), 150);
    }
  };

  const handleNav = (e, anchor) => {
    e.preventDefault();
    scrollTo(anchor);
  };

  return (
    <nav id="main-nav" className="nav">
      <div className="nav-inner">
        <NavLogo />

        {/* Desktop links */}
        <div className="nav-links">
          {tx.links.map(([label, href]) =>
            <a key={href} href={href} className="nav-link" onClick={(e) => handleNav(e, href)}>{label}</a>
          )}
        </div>

        <div className="nav-actions">
          {/* Lang toggle — siempre visible */}
          <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-divider">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          {/* CTA desktop */}
          <a href="https://wa.me/5215531650560" target="_blank" rel="noopener" className="btn-primary nav-cta"
            onClick={() => gtag('event', 'cta_click', { cta_location: 'nav', cta_label: 'whatsapp' })}>
            {tx.cta}
          </a>

          {/* Hamburger — solo móvil */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className="ham-bar"></span>
            <span className="ham-bar"></span>
            <span className="ham-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-drawer" role="dialog" aria-modal="true">
          <div className="nav-drawer-overlay" onClick={() => setMenuOpen(false)} />
          <div className="nav-drawer-panel">
            <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">✕</button>

            <div className="drawer-links">
              {tx.links.map(([label, href]) =>
                <a key={href} href={href} className="drawer-link" onClick={(e) => handleNav(e, href)}>
                  {label}
                </a>
              )}
            </div>

            <div className="drawer-footer">
              <div className="drawer-lang">
                <button className={`drawer-lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
                <button className={`drawer-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              </div>
              <a href="https://wa.me/5215531650560" target="_blank" rel="noopener" className="btn-primary btn-halo drawer-cta"
                onClick={() => gtag('event', 'cta_click', { cta_location: 'nav_mobile', cta_label: 'whatsapp' })}>
                {tx.cta} →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { Nav });
