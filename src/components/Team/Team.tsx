import { useLanguage } from '../../i18n/LanguageContext';

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="team" id="equipo">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">{t.team.tag}</div>
          <h2>{t.team.title}</h2>
          <p>{t.team.description}</p>
        </div>
        <div className="team-grid">
          
          {t.team.items.map((item, index) => (
            <div key={index} className="team-card">
              <div className={`team-photo ${item.pic}`}></div>
              <div className="team-body">
                <h4>{item.name}</h4>
                <div className="role">{item.rol}</div>
                <p>{item.description}</p>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>
  )
}

export default Team;
