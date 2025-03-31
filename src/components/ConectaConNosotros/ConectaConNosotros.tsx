import React from 'react';
import styles from './ConectaConNosotros.module.scss'
import calendar from '../../assets/Home/calendar.svg'
import { useLanguage } from '../../context/LanguageContext';

interface ConectaConNosotrosProps {
  title: string
  description: string
  items: {
    title: string
    description: string
    image: string
    date: string
  }[]
}

export const ConectaConNosotros = ({
  title,
  description,
  items,
}: ConectaConNosotrosProps) => {
  const [visibleItems, setVisibleItems] = React.useState(3);
  const { currentLanguage } = useLanguage()

  const loadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };

  const hasMore = visibleItems < items.length;

  return (
    <div className={styles.conectaConNosotros}>
      <div className={styles.conectaConNosotros__container}>
        <h2 className={styles.conectaConNosotros__title}>{title}</h2>
        <p className={styles.conectaConNosotros__description}>{description}</p>
      </div>

      <div className={styles.conectaConNosotros__items}>
        {items.slice(0, visibleItems).map((item, index) => (
          <div key={index} className={styles.conectaConNosotros__item}>
            <div className={styles.conectaConNosotros__imageContainer}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.conectaConNosotros__image}
              />
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
              <div
                className={
                  styles.conectaConNosotros__itemTitleDescriptionContainer
                }
              >
                <h3 className={styles.conectaConNosotros__itemTitle}>
                  {item.title}
                </h3>
                <p className={styles.conectaConNosotros__itemDescription}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button onClick={loadMore} className={`${styles.conectaConNosotros__callToAction} cursor-pointer`}>
          {currentLanguage === "ES" ? "Ver más eventos" : "Load more"}
        </button>
      )}
    </div>
  );
}
