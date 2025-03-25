import React from 'react'
import styles from './Hero.module.scss'

interface HeroProps {
  title: string
  description: string
  callToAction: string
  callToActionHref: string
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  callToAction,
  callToActionHref,
}) => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero__content}`}>
        <h3 className={styles.hero__title}>{title}</h3>
        <p className={styles.hero__description}>{description}</p>
      </div>
      <a href={callToActionHref} className={styles.hero__callToAction}>
        {callToAction}
      </a>
    </div>
  )
}
