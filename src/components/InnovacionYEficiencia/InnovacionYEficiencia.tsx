import React from 'react'
import styles from './InnovacionYEficiencia.module.scss'

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
    <div
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
              <img className={styles['bgBox--1']} src={image1} />
              <div
                  className={`${styles[`bgBox--bg`]} ${styles[`bgBox--bg--${secondBg}`]}`}
                ></div>
            </div>
          ) : (
            <div className={styles.image}>
              <img className={styles['image--1']} src={image1} />
              <img className={styles['image--2']} src={image2} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default InnovacionYEficiencia
