import { useLanguage } from '../../i18n/LanguageContext';

interface AlliancesProps {}

const Alliances: React.FC<AlliancesProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="alliances" id="alianzas">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">{t.alliances.tag}</div>
          <h2>{t.alliances.title}</h2>
          <p>{t.alliances.description}</p>
        </div>
        <div className="logos-row">
          <div className="logo-chip">CAF</div>
          <div className="logo-chip">IFC</div>
          <div className="logo-chip">BID</div>
          <div className="logo-chip">USAID</div>
          <div className="logo-chip">UNCTAD</div>
          <div className="logo-chip">Global Alliance for Trade Facilitation</div>
          <div className="logo-chip">MINCETUR</div>
          <div className="logo-chip">PROMPERÚ</div>
          <div className="logo-chip">SUNAT</div>
          <div className="logo-chip">SENASA</div>
          <div className="logo-chip">IICA</div>
          <div className="logo-chip">TFO Canada</div>
          <div className="logo-chip">CEPAL</div>
          <div className="logo-chip">UN/CEFACT</div>
        </div>

        {t.alliances.projects.map((item) => (
          <div className="partner-highlight">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>)
        )}
      </div>
    </section>
  )
}

export default Alliances;
