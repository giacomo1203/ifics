import { useLanguage } from '../../i18n/LanguageContext';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="nosotros">
      <svg className="about-art" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
        <circle cx="190" cy="190" r="170" fill="none" stroke="#F0DCC8" strokeWidth="1.4"/>
        <circle cx="150" cy="230" r="130" fill="none" stroke="#F6C89A" strokeWidth="1.4"/>
        <circle cx="230" cy="150" r="95" fill="none" stroke="#091242" strokeWidth="1" opacity=".12"/>
      </svg>
      <div className="wrap about-grid">
        <div>
          <div className="kicker">{t.about.tag}</div>
          <h2>{t.about.title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t.about.description}</p>
        </div>
        <div className="quote-card">
          <p>{t.about.quote}</p>
          <div className="src">— {t.about.quoteFooter}</div>
        </div>
      </div>
    </section>
  )
}

export default About;
