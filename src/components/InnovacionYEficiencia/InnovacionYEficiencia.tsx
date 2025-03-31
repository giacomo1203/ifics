import React from 'react'
import styles from './InnovacionYEficiencia.module.scss'

export interface InnovacionYEficienciaProps {
  titleOne: string
  titleTwo: string
  text: string[]
  image1: string
  image2: string
}

const InnovacionYEficiencia: React.FC<InnovacionYEficienciaProps> = ({
  titleOne,
  titleTwo,
  text,
  image1,
  image2,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {titleOne}{' '}
            <span className={styles['title--accent']}>{titleTwo}</span>
          </h1>

          <div className={styles.text}>
            {text.map((val, i) => (
              <p key={i}>{val}</p>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <img className={styles['image--1']} src={image1} />
          <img className={styles['image--2']} src={image2} />
        </div>
      </div>
    </div>
  )
}

export default InnovacionYEficiencia
