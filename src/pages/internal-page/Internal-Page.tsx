import React from 'react'
import { content } from '../../config/content'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { dataNoticiaPage } from './data'
import styles from './Internal-Page.module.scss'
import { NoticiasRecientes } from '../../components/NoticiasRecientes/NoticiasRecientes'

interface InternalPageProps {
    isEvent?: boolean;
}

const InternalPage: React.FC<InternalPageProps> = ({ isEvent }) => {
    const { currentLanguage } = useLanguage();

    return (
        <Layout
            title={content.meta.title}
            description={content.meta.description}
            keywords={content.meta.keywords}
            image={content.meta.image}
        >
            <>
                <PageHeader
                    bg={dataNoticiaPage[currentLanguage].pageHeader.bg}
                    text={dataNoticiaPage[currentLanguage].pageHeader.text}
                    noOverlay
                />
                {
                    isEvent ? <div>Event!</div> :
                        <div className={styles.wysiwygContainer} dangerouslySetInnerHTML={{ __html: dataNoticiaPage[currentLanguage].content }} />
                }

                <NoticiasRecientes title={dataNoticiaPage[currentLanguage].title} />
            </>
        </Layout >
    )
}

export default InternalPage
