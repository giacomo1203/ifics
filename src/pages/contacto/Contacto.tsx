import React from 'react'
import { content } from '../../config/content'
import { dataContacto } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'

const Contacto: React.FC = () => {
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
                    bg={dataContacto[currentLanguage].pageHeader.bg}
                    text={dataContacto[currentLanguage].pageHeader.text}
                />
            </>
        </Layout>
    )
}

export default Contacto
