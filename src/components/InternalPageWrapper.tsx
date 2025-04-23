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
    thumbnail?: string;
}

interface InternalPageItem {
    title: string;
    description: string;
    image: string;
    thumbnail: string;
    content?: string;
    date?: { day: string; month: string; };
}

const InternalPageWrapper: React.FC<InternalPageWrapperProps> = ({ type }) => {
    const { slug } = useParams<{ slug: string }>();
    const { currentLanguage } = useLanguage();

    let data;
    let item;

    if (type === 'news') {
        data = dataNoticias;
    } else {
        data = eventosData;
    }

    if (data && data['ES'] && data['EN']) {
        item = (data['ES'].items as any[]).map<InternalPageItem>(item => ({
            title: item.title,
            description: item.description,
            image: item.image,
            thumbnail: item.thumbnail || '',
            content: item.content,
        }))
            .concat((data['EN'].items as any[]).map<InternalPageItem>(item => ({
                title: item.title,
                description: item.description,
                image: item.image,
                thumbnail: item.thumbnail || '',
                content: item.content,
                date: item.date
            })))
            .find((item) => slugify(item.title) === slug);
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
            date={type === 'event' && item?.date ? item.date : undefined}
            htmlContent={type === 'news' && item?.content ? item.content : undefined}
            thumbnail={item.thumbnail}
        />
    );
};

export default InternalPageWrapper;