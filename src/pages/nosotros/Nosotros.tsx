import React from 'react'
import { content } from '../../config/content'
import { dataNosotros } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import { Quote } from '../../components/Quote/Quote'
import PageHeader from '../../components/PageHeader/PageHeader'
import InnovacionYEficiencia from '../../components/InnovacionYEficiencia/InnovacionYEficiencia'
import Equipo from '../../components/Equipo/Equipo'

const Nosotros: React.FC = () => {
  const { currentLanguage } = useLanguage()

  return (
    <Layout
      title={content.meta.title}
      description={content.meta.description}
      keywords={content.meta.keywords}
      image={content.meta.image}
    >
      <>
        <PageHeader
          bg={dataNosotros[currentLanguage].pageHeader.bg}
          text={dataNosotros[currentLanguage].pageHeader.text}
        />

        <InnovacionYEficiencia
          titleOne={dataNosotros[currentLanguage].innovacionEficiencia.titleOne}
          titleTwo={dataNosotros[currentLanguage].innovacionEficiencia.titleTwo}
          text={dataNosotros[currentLanguage].innovacionEficiencia.text}
          image1={dataNosotros[currentLanguage].innovacionEficiencia.image1}
          image2={dataNosotros[currentLanguage].innovacionEficiencia.image2}
        />

        <Equipo
          titleOne={dataNosotros[currentLanguage].team.titleOne}
          titleTwo={dataNosotros[currentLanguage].team.titleTwo}
          sub={dataNosotros[currentLanguage].team.sub}
          team={dataNosotros[currentLanguage].team.team}
        />

        <Quote
          text={dataNosotros[currentLanguage].quote.text}
          sub={dataNosotros[currentLanguage].quote.sub}
        />
      </>
    </Layout>
  )
}

export default Nosotros
