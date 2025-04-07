import React from 'react'
import { content } from '../../config/content'
import { eventosData } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Noticia } from '../../components/Noticia/Noticia'

const Eventos: React.FC = () => {
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
                    bg={eventosData[currentLanguage].pageHeader.bg}
                    text={eventosData[currentLanguage].pageHeader.text}
                />
                <Noticia
                    items={eventosData[currentLanguage].items}
                />
            </>
        </Layout>
    )
}

export default Eventos
