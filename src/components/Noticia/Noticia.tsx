import styles from './Noticia.module.scss'
import calendarWhite from '../../assets/calendar.svg'
import calendarBlack from '../../assets/Home/calendar.svg'
import { forwardRef } from 'react'
import { useWindowWidth } from '../../utils'

interface NoticiaDate {
  day: string
  month: string
}

interface NoticiaProps {
  items: {
    title: string
    description: string
    image: string
    href: string
    date?: NoticiaDate
  }[]
  currentPage: number
  maxItemsPerPage: number
}

export const Noticia = forwardRef<HTMLDivElement, NoticiaProps>(
  ({ items, currentPage, maxItemsPerPage }: NoticiaProps, ref) => {
    const windowWidth = useWindowWidth()
    const isDesktop = windowWidth >= 992
    const startIndex = (currentPage - 1) * maxItemsPerPage
    const endIndex = startIndex + maxItemsPerPage
    const itemsToRender = items?.slice(startIndex, endIndex)

    return (
      <div className={styles.noticia} ref={ref}>
        <div className={styles.noticia__items}>
          {itemsToRender?.map((item, index) => (
            <div key={index} className={styles.noticia__item}>
              <div
                className={`${styles.noticia__imageContainer} ${item.date && item.date.month && item.date.day && styles.opacity}`}
              >
                <a href={item.href}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.noticia__image}
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
          ))}
        </div>
      </div>
    )
  }
)
