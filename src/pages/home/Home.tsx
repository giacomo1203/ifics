import React from 'react'
import { content } from '../../config/content'
import { dataHome } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import { Hero } from '../../components/Hero/Hero'
import { ComercioInternacional } from '../../components/ComercioInternacional/ComercioInternacional'
import { AreasEspecialidad } from '../../components/AreasEspecialidad/AreasEspecialidad'
import { ServicioCalidad } from '../../components/ServicioCalidad/ServicioCalidad'
import { ConectaConNosotros } from '../../components/ConectaConNosotros/ConectaConNosotros'

const Home: React.FC = () => {
  const { currentLanguage } = useLanguage()

  return (
    <Layout
      title={content.meta.title}
      description={content.meta.description}
      keywords={content.meta.keywords}
      image={content.meta.image}
    >
      <>
        <Hero
          title={dataHome[currentLanguage].hero.title}
          description={dataHome[currentLanguage].hero.description}
          callToAction={dataHome[currentLanguage].hero.callToAction}
          callToActionHref={dataHome[currentLanguage].hero.callToActionHref}
        />
        <ComercioInternacional
          title={dataHome[currentLanguage].comercioInternacional.title}
          titleTwo={dataHome[currentLanguage].comercioInternacional.titleTwo}
          description={
            dataHome[currentLanguage].comercioInternacional.description
          }
          items={dataHome[currentLanguage].comercioInternacional.items}
        />
        <AreasEspecialidad
          title={dataHome[currentLanguage].areaEspecialidad.title}
          titleTwo={dataHome[currentLanguage].areaEspecialidad.titleTwo}
          description={dataHome[currentLanguage].areaEspecialidad.description}
          items={dataHome[currentLanguage].areaEspecialidad.items}
        />
        <ServicioCalidad
          title={dataHome[currentLanguage].servicioCalidad.title}
          description={dataHome[currentLanguage].servicioCalidad.description}
          items={dataHome[currentLanguage].servicioCalidad.items}
        />
        <ConectaConNosotros
          title={dataHome[currentLanguage].conectaConNosotros.title}
          description={dataHome[currentLanguage].conectaConNosotros.description}
          items={dataHome[currentLanguage].conectaConNosotros.items}
        />
      </>
    </Layout>
  )
}

export default Home
