import styles from './ServicioCalidad.module.scss'
import listCheck from '../../assets/Home/listCheckNoBg.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface ServicioCalidadProps {
  title: string
  description?: string
  items: string[]
}

export const ServicioCalidad = ({
  title,
  description,
  items,
}: ServicioCalidadProps) => {
  return (
    <section className={styles['servicio-calidad']}>
      <div className={styles['servicio-calidad__container']}>
        <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
          <div className={styles['servicio-calidad__title_container']}>
            <h2 className={styles['servicio-calidad__title']}>{title}</h2>
            <p className={styles['servicio-calidad__description']}>
              {description}
            </p>
          </div>
          <ul className={styles['servicio-calidad__items']}>
            {items.map((item, index) => (
              <li key={index} className={styles['servicio-calidad__item']}>
                <img src={listCheck} alt={index+'.-'} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['servicio-calidad__image-container']}>
          <LazyLoadImage
            src="/pictures/servicioCalidad1.webp"
            className={styles['servicio-calidad__image']}
            height="100%"
            width="100%"
            alt="Servicio de Calidad para Empresas y Entidades Públicas"
            effect="blur"
            wrapperClassName={`${styles['servicio-calidad__image-1']} h-auto w-full`}
          />
          <LazyLoadImage
            src="/pictures/servicioCalidad2.webp"
            className={styles['servicio-calidad__image']}
            alt="Servicio de Calidad para Empresas y Entidades Públicas"
            effect="blur"
            wrapperClassName={`${styles['servicio-calidad__image-2']} h-auto w-full`}
          />
        </div>
      </div>
    </section>
  )
}
