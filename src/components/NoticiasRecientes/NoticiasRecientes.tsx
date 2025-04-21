import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { dataNoticias } from '../../pages/noticias/data'
import { Card } from '../Card/Card'
import styles from './NoticiasRecientes.module.scss'
import React from 'react'
import { eventosData } from '../../pages/eventos/data'

interface NoticiasRecientesProps {
  title: string
  type: "news" | "event"
}

export const NoticiasRecientes = ({ title, type }: NoticiasRecientesProps) => {
  const { currentLanguage } = useLanguage()
  const [currentPage] = useState(1)
  const maxItemsPerPage = 3
  const noticiaRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className={styles.noticiasRecientes}>
      <div className={styles.noticiasRecientesContainer}>
        <Card
          items={type === 'news' ? dataNoticias[currentLanguage].items : eventosData[currentLanguage].items}
          currentPage={currentPage}
          maxItemsPerPage={maxItemsPerPage}
          ref={noticiaRef}
          title={title}
          noPaddingTop
          type={type}
        />
      </div>
    </div>
  )
}
