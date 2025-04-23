import React from 'react'
import { content } from '../../config/content';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './Internal-Page.module.scss';
import { NoticiasRecientes } from '../../components/NoticiasRecientes/NoticiasRecientes';

interface InternalPageProps {
    title: string;
    description: string;
    image: string;
    thumbnail: string;
    date?: {
        day: string;
        month: string;
    };
    type: "news" | "event";
    htmlContent?: any;
}

const InternalPage: React.FC<InternalPageProps> = ({ title, description, image, date, type, htmlContent, thumbnail }) => {
    return (
        <Layout
            title={content.meta.title}
            description={content.meta.description}
            keywords={content.meta.keywords}
            image={content.meta.image}
        >
            <>
                <PageHeader
                    bg={image}
                    text={title}
                />
                {
                    type === "event" ?
                        <div className={styles.wysiwygContainer}>
                            {/* <img className={styles.image} src={image} alt={title} />
                            <h3>{title}</h3> */}
                            <p>{description}</p>
                        </div> :
                        <div className={styles.wysiwygContainer}>
                            <div className={styles.wysiwygContainer} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        </div>
                }


                <NoticiasRecientes type={type} title={`${type === "event" ? "Eventos" : "Noticias"} recientes`} />
            </>
        </Layout>
    );
};

export default InternalPage
