import { useLanguage } from '../../i18n/LanguageContext';
import { AreaIcons } from './icons'

interface AreasProps {}

const Areas: React.FC<AreasProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">{t.areas.tag}</div>
          <h2>{t.areas.title}</h2>
          <p>{t.areas.description}</p>
        </div>
        <div className="grid-3">
        {t.areas.items.map((item) => (
            <div className="card" key={item.icon}>
              <div className="num-badge">
                {AreaIcons[item.icon]}
              </div>

              <h3>{item.title}</h3>

              <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Areas;
