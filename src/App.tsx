import React from 'react';
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Noticias from './pages/noticias/Noticias';
import Eventos from './pages/eventos/Eventos';
import Contacto from './pages/contacto/Contacto';
import Soluciones from './pages/soluciones/Soluciones';
import InternalPageWrapper from './components/InternalPageWrapper';
import { slugify } from './utils';

const NewsRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    import('./pages/noticias/data').then((data) => {
      const dataNoticias = data.dataNoticias;
      if (slug) {
        const itemEs = dataNoticias['ES'].items.find((item) => item && slugify(item.title) === slug);
        const itemEn = dataNoticias['EN'].items.find((item) => item && slugify(item.title) === slug);

        if (itemEs && itemEn) {
          if (slug === slugify(itemEs.title)) {
            setLanguage('ES');
          } else if (slug === slugify(itemEn.title)) {
            setLanguage('EN');
          }
        }
      }
    });
  }, [slug, setLanguage]);

  return <InternalPageWrapper type="news" />;
};

const EventRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    import('./pages/eventos/data').then((data) => {
      const eventosData = data.eventosData;
      if (slug) {
        const itemEs = eventosData['ES'].items.find((item) => item && slugify(item.title) === slug);
        const itemEn = eventosData['EN'].items.find((item) => item && slugify(item.title) === slug);

        if (itemEs && itemEn) {
          if (slug === slugify(itemEs.title)) {
            setLanguage('ES');
          } else if (slug === slugify(itemEn.title)) {
            setLanguage('EN');
          }
        }
      }
    });
  }, [slug, setLanguage]);

  return <InternalPageWrapper type="event" />;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/noticia/:slug" element={<NewsRoute />} />
          <Route path="/evento/:slug" element={<EventRoute />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
