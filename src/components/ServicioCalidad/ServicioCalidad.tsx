import styles from './ServicioCalidad.module.scss'
import listCheck from '../../assets/Home/listCheckNoBg.svg'

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
    <div className={styles['servicio-calidad']}>
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
                <img src={listCheck} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['servicio-calidad__image-container']}>
          <img
            src="https://eticare.com.pe/ifics/pictures/servicioCalidad1.webp"
            className={styles['servicio-calidad__image-1']}
          />
          <img
            src="https://eticare.com.pe/ifics/pictures/servicioCalidad2.webp"
            className={styles['servicio-calidad__image-2']}
          />
        </div>
      </div>
    </div>
  )
}
