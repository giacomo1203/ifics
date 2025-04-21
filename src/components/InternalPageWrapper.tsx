import React from 'react';
import { useParams } from 'react-router-dom';
import InternalPage from '../pages/internal-page/Internal-Page';
import { dataNoticias } from '../pages/noticias/data';
import { eventosData } from '../pages/eventos/data';
import { useLanguage } from '../context/LanguageContext';
import { slugify } from '../utils';
import Layout from './Layout';

interface InternalPageWrapperProps {
    type: 'news' | 'event';
}

const InternalPageWrapper: React.FC<InternalPageWrapperProps> = ({ type }) => {
    const { slug } = useParams<{ slug: string }>();
    const { currentLanguage } = useLanguage();

    let item;
    let data;

    if (type === 'news') {
        data = dataNoticias[currentLanguage].items;
    } else {
        data = eventosData[currentLanguage].items;
    }

    if (data) {
        item = data.find((item) => slugify(item.title) === slug);
    }

    if (!item) {
        return (
            <Layout title="Página no encontrada" description="">
                <h1 className='not-found'>{currentLanguage === 'ES' ? `${type === "event" ? "Evento no encontrado" : "Noticia no encontrada"}` : `${type === "event" ? "Event not found" : "News not found"}`}</h1>
            </Layout>
        );
    }


    return (
        <InternalPage
            title={item.title}
            description={item.description}
            image={item.image}
            type={type}
            date={type === 'event' && 'date' in item ? item.date : undefined}
            htmlContent={type === 'news' && 'content' in item ? item.content : undefined}
        />
    );
};

export default InternalPageWrapper;