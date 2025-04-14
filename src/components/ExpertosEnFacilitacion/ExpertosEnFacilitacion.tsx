import styles from './ExpertosEnFacilitacion.module.scss'
import expertosMobile from '../../assets/expertos-mobile.png'
import expertosTablet from '../../assets/expertos-tablet.png'
import expertosDesktop from '../../assets/expertos-desktop.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'


interface ExpertosEnFacilitacionProps {
    title: string
    titleTwo: string
    description: string
    descriptionTwo: string
}

export const ExpertosEnFacilitacion = ({
    title,
    titleTwo,
    description,
    descriptionTwo
}: ExpertosEnFacilitacionProps) => {
    return (
        <div className={styles.ExpertosEnFacilitacion}>
            <div className={styles.ExpertosEnFacilitacion__container}>
                <div className={styles.ExpertosEnFacilitacion__heading}>
                    <h2 className={styles.ExpertosEnFacilitacion__title}>{title}</h2>
                    <h2 className={styles.ExpertosEnFacilitacion__titleTwo}>{titleTwo}</h2>
                    <p className={styles.ExpertosEnFacilitacion__description}>
                        {description}
                    </p>
                    <p className={styles.ExpertosEnFacilitacion__description}>
                        {descriptionTwo}
                    </p>
                </div>
                <div className={styles.ExpertosEnFacilitacion__image}>
                    <picture>
                        <source media="(min-width: 992px)" srcSet={expertosDesktop} />
                        <source media="(min-width: 768px)" srcSet={expertosTablet} />
                        <LazyLoadImage
                            className="top-4 right-4 text-gray-500"
                            src={expertosMobile}
                            alt="Expertos en Facilitación"
                        />
                    </picture>
                </div>

            </div>
        </div>
    )
}
