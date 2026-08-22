import { useLanguage } from '../../i18n/LanguageContext';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();

  interface AnchorClickEvent extends React.MouseEvent<HTMLAnchorElement> {
    currentTarget: HTMLAnchorElement;
  }

  const handleAnchorClick = (event: AnchorClickEvent): void => {
    const href = event.currentTarget.getAttribute('href');

    if (!href?.startsWith('#')) return;

    const target = document.querySelector(href) as HTMLElement | null;

    if (!target) return;

    event.preventDefault();

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
    <section className="hero">
      <div className="wrap hero-flex">
        <div className="hero-inner">
          <h1>{t.hero.title}<br /><em>{t.hero.subtitle}</em></h1>
          <p>{t.hero.description}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#soluciones" onClick={handleAnchorClick}>{t.hero.primaryButton}</a>
            <a className="btn btn-ghost" href="#contacto" onClick={handleAnchorClick}>{t.hero.secondaryButton}</a>
          </div>
        </div>
        <span className="signal-ping" style={{ left: '76%', top: '16%', animationDelay: '0s' }}></span>
        <span className="signal-ping" style={{ left: '86%', top: '20%', animationDelay: '.5s' }}></span>
        <span className="signal-ping" style={{ left: '101%', top: '44%', animationDelay: '1s' }}></span>
        <span className="signal-ping" style={{ left: '84%', top: '27%', animationDelay: '1.5s' }}></span>
        <span className="signal-ping" style={{ left: '92%', top: '24%', animationDelay: '.85s' }}></span>
      </div>
    </section>
  )
}

export default Hero;
