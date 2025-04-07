import styles from './Noticia.module.scss'
import calendarWhite from '../../assets/calendar.svg'
import calendarBlack from '../../assets/Home/calendar.svg'
import { useEffect, useState } from 'react'

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
}

export const Noticia = ({
    items,
}: NoticiaProps) => {
    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return width;
    }

    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth >= 992;

    return (
        <div className={styles.noticia}>
            <div className={styles.noticia__items}>
                {items?.map((item, index) => (
                    <div key={index} className={styles.noticia__item}>
                        <div className={`${styles.noticia__imageContainer} ${item.date && item.date.month && item.date.day && styles.opacity}`}>
                            <a href={item.href}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.noticia__image}
                                />
                            </a>
                        </div>
                        <div className={styles.noticia__content}>
                            {
                                item.date && item.date.month && item.date.day &&
                                <div className={styles.noticia__calendar}>
                                    <picture>
                                        <source media="(min-width: 992px)" srcSet={calendarWhite} />
                                        <source media="(min-width: 768px)" srcSet={calendarBlack} />
                                        <img src={calendarBlack} alt="calendar" />
                                    </picture>
                                    <span className={styles.noticia__calendar__day}>{item.date?.day}</span>
                                    <span className={styles.noticia__calendar__month}>{isDesktop ? item.date?.month.slice(0, 3) : item.date?.month}</span>
                                </div>
                            }
                            <div className={styles.noticia__itemSection}>
                                <div
                                    className={
                                        styles.noticia__itemTitleDescriptionContainer
                                    }
                                >
                                    <h3 className={styles.noticia__itemTitle}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.noticia__itemDescription}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
