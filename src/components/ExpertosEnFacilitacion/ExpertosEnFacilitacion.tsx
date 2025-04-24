import styles from './ExpertosEnFacilitacion.module.scss'
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
        <section className={styles.ExpertosEnFacilitacion}>
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
                    {/* <picture>
                        <source media="(min-width: 992px)" srcSet="https://ifics.com.pe/pictures/expertos.webp" />
                        <source media="(min-width: 768px)" srcSet="https://ifics.com.pe/pictures/expertos.webp" /> */}
                    <LazyLoadImage
                        className="top-4 right-4 text-gray-500 w-full"
                        src="https://ifics.com.pe/pictures/expertos.webp"
                        alt="Expertos en Facilitación"
                    />
                    {/* </picture> */}
                </div>

            </div>
        </section>
    )
}
