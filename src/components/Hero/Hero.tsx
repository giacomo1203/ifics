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
    <section className={styles.hero}>
      <video className={styles.hero__video} autoPlay muted loop playsInline>
        <source src="/pictures/videos/hero_video.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/pictures/videos/hero_video_mobil.mp4" type="video/mp4" media="(max-width: 767px)" />
      </video>
      <div className={`${styles.hero__content}`}>
        <h3 className={styles.hero__title}>{title}</h3>
        <p className={styles.hero__description}>{description}</p>
      </div>
      <a href={callToActionHref} className={styles.hero__callToAction}>
        {callToAction}
      </a>
    </section>
  )
}
