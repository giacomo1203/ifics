import { useLanguage } from '../../i18n/LanguageContext';
import { SolutionIcons } from './icons'

interface SolutionProps {}

const Solution: React.FC<SolutionProps> = () => {
  const { t } = useLanguage();

  return (
    <section id="soluciones">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">{t.solutions.tag}</div>
          <h2>{t.solutions.title}</h2>
          <p>{t.solutions.description}</p>
        </div>
        <div className="grid-4">
          {t.solutions.items.map((item) => (
              <div className="card">
                <div className="num-badge" key={item.icon}>
                  {SolutionIcons[item.icon]}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>)
          )}
        </div>
      </div>
    </section>
  )
}

export default Solution;
