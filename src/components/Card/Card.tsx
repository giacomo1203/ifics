import styles from './Card.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import calendarWhite from '../../assets/calendar.svg'
import calendarBlack from '../../assets/Home/calendar.svg'
import { forwardRef } from 'react'
import { useWindowWidth, slugify } from '../../utils'

interface CardDate {
  day: string
  month: string
}

interface CardProps {
  items: {
    title: string
    description: string
    image?: string
    thumbnail?: string
    date?: CardDate
    content?: string
  }[]
  currentPage: number
  maxItemsPerPage: number
  title?: string
  noPaddingTop?: boolean
  type: 'news' | 'event';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { items, currentPage, maxItemsPerPage, title, noPaddingTop, type }: CardProps,
    ref
  ) => {
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth >= 992;
    const startIndex = (currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;
    const itemsToRender = items?.slice(startIndex, endIndex);

    return (
      <div
        className={`${styles.noticia} ${noPaddingTop ? '!pt-0' : ''}`}
        ref={ref}
      >
        {title && <h2 className={styles.noticiasRecientesTitle}>{title}</h2>}
        <div className={styles.noticia__items}>
          {itemsToRender?.map((item, index) => {
            const slug = slugify(item.title);
            const url = type === 'news' ? `/noticia/${slug}` : `/evento/${slug}`;
            return (
              <div key={index} className={styles.noticia__item}>
                <div
                  className={`${styles.noticia__imageContainer} ${item.date && item.date.month && item.date.day && styles.opacity}`}
                >
                  <a href={url}>
                    <LazyLoadImage
                      src={item.thumbnail}
                      alt={item.title}
                      className={styles.noticia__image}
                      wrapperClassName="w-full block"
                      effect="blur"
                    />
                  </a>
                </div>
                <div className={styles.noticia__content}>
                  {item.date && item.date.month && item.date.day && (
                    <div className={styles.noticia__calendar}>
                      <picture>
                        <source
                          media="(min-width: 992px)"
                          srcSet={calendarWhite}
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet={calendarBlack}
                        />
                        <img src={calendarBlack} alt="calendar" />
                      </picture>
                      <span className={styles.noticia__calendar__day}>
                        {item.date?.day}
                      </span>
                      <span className={styles.noticia__calendar__month}>
                        {isDesktop
                          ? item.date?.month.slice(0, 3)
                          : item.date?.month}
                      </span>
                    </div>
                  )}
                  <div className={styles.noticia__itemSection}>
                    <div
                      className={styles.noticia__itemTitleDescriptionContainer}
                    >
                      <h3
                        className={`${styles.noticia__itemTitle} line-clamp-2-title`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`${styles.noticia__itemDescription} line-clamp-2-description`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
)
