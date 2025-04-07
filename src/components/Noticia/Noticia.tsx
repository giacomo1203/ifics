import styles from './Noticia.module.scss'
import calendar from '../../assets/Home/calendar.svg'

interface NoticiaProps {
    items: {
        title: string
        description: string
        image: string
        href: string
    }[]
}

export const Noticia = ({
    items,
}: NoticiaProps) => {
    return (
        <div className={styles.noticia}>
            <div className={styles.noticia__items}>
                {items?.map((item, index) => (
                    <div key={index} className={styles.noticia__item}>
                        <div className={styles.noticia__imageContainer}>
                            <a href={item.href}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.noticia__image}
                                />
                            </a>
                        </div>
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
                ))}
            </div>
        </div>
    );
}
