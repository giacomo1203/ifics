import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { dataNoticias } from '../../pages/noticias/data'
import { Noticia } from '../Noticia/Noticia'
import styles from './NoticiasRecientes.module.scss'
import React from 'react'

interface NoticiasRecientesProps {
  title: string
}

export const NoticiasRecientes = ({ title }: NoticiasRecientesProps) => {
  const { currentLanguage } = useLanguage()
  const [currentPage] = useState(1)
  const maxItemsPerPage = 3
  const noticiaRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className={styles.noticiasRecientes}>
      <div className={styles.noticiasRecientesContainer}>
        <Noticia
          items={dataNoticias[currentLanguage].items}
          currentPage={currentPage}
          maxItemsPerPage={maxItemsPerPage}
          ref={noticiaRef}
          title={title}
          noPaddingTop
        />
      </div>
    </div>
  )
}
