import { useEffect, useRef, useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  interface AnchorClickEvent extends React.MouseEvent<HTMLAnchorElement> {
    currentTarget: HTMLAnchorElement;
  }

  const handleAnchorClick = (event: AnchorClickEvent): void => {
    const href = event.currentTarget.getAttribute('href');

    if (!href?.startsWith('#')) return;

    const target = document.querySelector(href) as HTMLElement | null;

    if (!target) return;

    event.preventDefault();

    setMenuOpen(false);

    const offset = parseFloat(
      getComputedStyle(target).paddingTop,
    ) || 0;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', href);
  };

  return (
    <header>
      <div className="nav wrap">
        <div className="logo">
          <svg className="logo-badge" viewBox="0 0 160 73" xmlns="http://www.w3.org/2000/svg">
            <path d="M159.853 0.841797L14.8624 72.8418L0 18.1842L159.853 0.841797Z" fill="var(--navy-light)"/>
            <text x="82" y="50" fontFamily="'Roboto Slab',serif" fontWeight="700" fontSize="32" fill="#FFF" textAnchor="middle">IFCOM</text>
          </svg>
          <div className="sub">Instituto de Facilitación del Comercio Sostenible</div>
        </div>
        <nav>
          <ul ref={menuRef} className={menuOpen ? 'is-open' : ''}>
            <li><a href="#nosotros" onClick={handleAnchorClick}>Nosotros</a></li>
            <li><a href="#areas" onClick={handleAnchorClick}>Áreas de Trabajo</a></li>
            <li><a href="#soluciones" onClick={handleAnchorClick}>Soluciones</a></li>
            <li><a href="#alianzas" onClick={handleAnchorClick}>Alianzas</a></li>
            <li><a href="#equipo" onClick={handleAnchorClick}>Equipo</a></li>
            <li><a href="#contacto" onClick={handleAnchorClick}>Contacto</a></li>
            <li>
              <div className="language-switcher" aria-label="Selector de idioma">
                <a href="/es/" className="is-active" lang="es">ES</a>
                <span aria-hidden="true">|</span>
                <a href="/en/" lang="en">EN</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="language-switcher" aria-label="Selector de idioma">
          <a href="/es/" className="is-active" lang="es">ES</a>
          <span aria-hidden="true">|</span>
          <a href="/en/" lang="en">EN</a>
        </div>
       
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header

