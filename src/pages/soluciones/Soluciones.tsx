import React from 'react'
import { content } from '../../config/content'
import { dataSoluciones } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import InnovacionYEficiencia from '../../components/InnovacionYEficiencia/InnovacionYEficiencia'

const Soluciones: React.FC = () => {
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
                    bg={dataSoluciones[currentLanguage].pageHeader.bg}
                    text={dataSoluciones[currentLanguage].pageHeader.text}
                />
                {
                    dataSoluciones[currentLanguage].innovacionEficiencia?.map((item, index) => (
                        <InnovacionYEficiencia
                            titleOne={item.titleOne}
                            titleTwo={item.titleTwo}
                            text={item.text}
                            image1={item.image1}
                            secondBg={item.color as any}
                            key={index}
                        />
                    ))
                }

            </>
        </Layout>
    )
}

export default Soluciones
