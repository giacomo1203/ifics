
import React, { useState } from 'react'
import { content } from '../../config/content'
import { dataNoticias } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Card } from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination'
import styles from './Noticias.module.scss'

const Noticias: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { currentLanguage } = useLanguage();
    const maxItemsPerPage = 9;
    const totalPages = Math.ceil(dataNoticias[currentLanguage].items.length / maxItemsPerPage);
    const noticiaRef = React.useRef<HTMLDivElement>(null);
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
                <div className={styles.container}>
                    <Card
                        items={dataNoticias[currentLanguage].items}
                        currentPage={currentPage}
                        maxItemsPerPage={maxItemsPerPage}
                        ref={noticiaRef}
                        type="news"
                    />
                </div>
                {totalPages > 1 ? (

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page: number) => {
                            setCurrentPage(page);
                            noticiaRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    />
                ) : null}
            </>
        </Layout >
    )
}

export default Noticias
