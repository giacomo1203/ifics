import React from 'react'
import styles from './InnovacionYEficiencia.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export interface InnovacionYEficienciaProps {
  titleOne: string
  titleTwo: string
  text: string[]
  image1: string
  image2?: string
  secondBg?: 'blue' | 'orange'
}

const InnovacionYEficiencia: React.FC<InnovacionYEficienciaProps> = ({
  titleOne,
  titleTwo,
  text,
  image1,
  image2,
  secondBg,
}) => {
  return (
    <section
      className={`${styles.section} ${secondBg ? styles[`section--${secondBg}`] : ''}`}
    >
      <div
        className={`${styles.section__container} ${secondBg ? styles[`section__container--${secondBg}`] : ''}`}
      >
        <div className={styles.content}>
          <h1
            className={`${styles.title} ${secondBg ? styles[`title--${secondBg}`] : ''}`}
          >
            {titleOne}{' '}
            <span className={styles['title--accent']}>{titleTwo}</span>
          </h1>

          <div className={styles.text}>
            {text.map((val, i) => (
              <p key={i}>{val}</p>
            ))}
          </div>
        </div>
        {
          secondBg ? (
            <div className={styles.bgBox}>
              <LazyLoadImage
                className={styles['bgBox--1']}
                src={image1}
                effect="blur"
                wrapperClassName='z-1'
                alt={`${titleOne} ${titleTwo}`}
              />
              <div className={`${styles[`bgBox--bg`]} ${styles[`bgBox--bg--${secondBg}`]}`}></div>
            </div>
          ) : (
            <div className={`${styles.image}`}>
              <LazyLoadImage
                src={image1}
                effect="blur"
                className={styles['image--1']}
                alt={`${titleOne} ${titleTwo}`}
              />
              {image2 && (
                <LazyLoadImage
                  src={image2}
                  effect="blur"
                  className={styles['image--2']}
                  alt={`${titleOne} ${titleTwo}`}
                />
              )}
            </div>
          )
        }
      </div>
    </section>
  )
}

export default InnovacionYEficiencia
