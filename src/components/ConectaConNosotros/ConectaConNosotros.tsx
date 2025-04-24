import React from 'react';
import styles from './ConectaConNosotros.module.scss'
import calendar from '../../assets/Home/calendar.svg'
import { useLanguage } from '../../context/LanguageContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { slugify } from '../../utils';

interface ConectaConNosotrosProps {
  title: string
  description: string
  items: {
    title: string
    description: string
    image: string
    date: {
      day: string
      month: string
    }
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
    <section className={styles.conectaConNosotros}>
      <div className={styles.conectaConNosotros__container}>
        <h2 className={styles.conectaConNosotros__title}>
          {title.split(' ').map((word, index) => {
            if (index === 0) {
              return <span key={index} className={styles.orange}>{word} </span>;
            } else {
              return <span key={index} className={styles.blue}>{word} </span>;
            }
          })}
        </h2>
        <p className={styles.conectaConNosotros__description}>{description}</p>
      </div>

      <div className={styles.conectaConNosotros__items}>
        {items.slice(0, visibleItems).map((item, index) => (
          <a href={`evento/${slugify(item.title)}`} key={index}>
            <div className={styles.conectaConNosotros__item}>
              <div className={styles.conectaConNosotros__imageContainer}>
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  className={styles.conectaConNosotros__image}
                  effect="blur"
                />
              </div>
              <div className={styles.conectaConNosotros__itemSection}>
                <div className={styles.conectaConNosotros__dateContainer}>
                  <LazyLoadImage
                    src={calendar}
                    alt="Calendar Icon"
                    className={styles.conectaConNosotros__calendarIcon}
                    effect="blur"
                  />
                  <div className={styles.conectaConNosotros__date}>
                    <span className={styles.conectaConNosotros__date__day}>{item.date.day}</span>
                    <span className={styles.conectaConNosotros__date__month}>{item.date.month.slice(0, 3)}</span>
                  </div>
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
          </a>
        ))}
      </div>

      {hasMore && (
        <button onClick={loadMore} className={`${styles.conectaConNosotros__callToAction} cursor-pointer`}>
          {currentLanguage === "ES" ? "Ver más eventos" : "Load more"}
        </button>
      )}
    </section>
  );
}
