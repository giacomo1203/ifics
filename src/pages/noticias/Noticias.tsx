import React from 'react'
import { content } from '../../config/content'
import { dataNoticias } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Noticia } from '../../components/Noticia/Noticia'

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
                    bg={dataNoticias[currentLanguage].pageHeader.bg}
                    text={dataNoticias[currentLanguage].pageHeader.text}
                />
                <Noticia
                    items={dataNoticias[currentLanguage].items}
                />
            </>
        </Layout>
    )
}

export default Nosotros
