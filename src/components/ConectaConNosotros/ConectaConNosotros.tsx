import styles from './ConectaConNosotros.module.scss';
import calendar from '../../assets/Home/calendar.svg';

interface ConectaConNosotrosProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
  callToAction: {
    text: string;
    href: string;
  };
}

export const ConectaConNosotros = ({
  title,
  description,
  items,
  callToAction,
}: ConectaConNosotrosProps) => {
  return (
    <div className={styles.conectaConNosotros}>
      <div className={styles.conectaConNosotros__container}>
        <h2 className={styles.conectaConNosotros__title}>{title}</h2>
        <p className={styles.conectaConNosotros__description}>{description}</p>
      </div>
      <div className={styles.conectaConNosotros__items}>
        {items.map((item, index) => (
          <div key={index} className={styles.conectaConNosotros__item}>
            <div className={styles.conectaConNosotros__imageContainer}>
              <img src={item.image} alt={item.title} className={styles.conectaConNosotros__image} />
            </div>
            <div className={styles.conectaConNosotros__itemSection}>
              <div className={styles.conectaConNosotros__dateContainer}>
                <img
                  src={calendar}
                  alt="Calendar Icon"
                  className={styles.conectaConNosotros__calendarIcon}
                />
                <p className={styles.conectaConNosotros__date}>{item.date}</p>
              </div>
              <div className={styles.conectaConNosotros__itemTitleDescriptionContainer}>
                <h3 className={styles.conectaConNosotros__itemTitle}>{item.title}</h3>
                <p className={styles.conectaConNosotros__itemDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href={callToAction.href} className={styles.conectaConNosotros__callToAction}>{callToAction.text}</a>
    </div>
  );
};
