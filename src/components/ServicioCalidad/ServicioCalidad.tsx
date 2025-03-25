import React from 'react'
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
        <h2 className={styles['servicio-calidad__title']}>{title}</h2>
        <p className={styles['servicio-calidad__description']}>{description}</p>
      </div>
      <ul className={styles['servicio-calidad__items']}>
        {items.map((item, index) => (
          <li key={index} className={styles['servicio-calidad__item']}>
            <img src={listCheck} />
            {item}
          </li>
        ))}
      </ul>
      <div className={styles['servicio-calidad__image-container']}></div>
    </div>
  )
}
