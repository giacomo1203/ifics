import React from 'react'
import styles from './Equipo.module.scss'
import Carousel from './Carrousel'

export interface TeamItem {
  img: string
  name: string
  role: string
  desc: string
}
export interface EquipoProps {
  titleOne: string
  titleTwo: string
  sub: string
  team: TeamItem[]
}

const Equipo: React.FC<EquipoProps> = ({ titleOne, titleTwo, sub, team }) => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <h1 className={styles.title}>
          <span className={styles['title--accent']}>{titleOne}</span> {titleTwo}
        </h1>

        <p className={styles.sub}>{sub}</p>
      </div>

      <div className={styles.slider}>
        <Carousel team={team} />
      </div>
    </div>
  )
}

export default Equipo
