import React from 'react';
// import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
// import { Suspense, lazy, useEffect } from 'react';
// const Home = lazy(() => import('./pages/home/Home'));
// const Nosotros = lazy(() => import('./pages/nosotros/Nosotros'));
// const Noticias = lazy(() => import('./pages/noticias/Noticias'));
// const Eventos = lazy(() => import('./pages/eventos/Eventos'));
// const Contacto = lazy(() => import('./pages/contacto/Contacto'));
// const Soluciones = lazy(() => import('./pages/soluciones/Soluciones'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// import { LanguageProvider, useLanguage } from './context/LanguageContext';
// import InternalPageWrapper from './components/InternalPageWrapper';
// import { slugify } from './utils';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
// import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Areas from './components/Areas/Areas';
import Solution from './components/Solution/Solution';
import Alliances from './components/Alliances/Alliances';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

// const NewsRoute: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const { setLanguage } = useLanguage();

//   useEffect(() => {
//     import('./pages/noticias/data').then((data) => {
//       const dataNoticias = data.dataNoticias;
//       if (slug) {
//         const itemEs = dataNoticias['ES'].items.find((item) => item && slugify(item.title) === slug);
//         const itemEn = dataNoticias['EN'].items.find((item) => item && slugify(item.title) === slug);

//         if (itemEs && itemEn) {
//           if (slug === slugify(itemEs.title)) {
//             setLanguage('ES');
//           } else if (slug === slugify(itemEn.title)) {
//             setLanguage('EN');
//           }
//         }
//       }
//     });
//   }, [slug, setLanguage]);

//   return <InternalPageWrapper type="news" />;
// };

// const EventRoute: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const { setLanguage } = useLanguage();

//   useEffect(() => {
//     import('./pages/eventos/data').then((data) => {
//       const eventosData = data.eventosData;
//       if (slug) {
//         const itemEs = eventosData['ES'].items.find((item) => item && slugify(item.title) === slug);
//         const itemEn = eventosData['EN'].items.find((item) => item && slugify(item.title) === slug);

//         if (itemEs && itemEn) {
//           if (slug === slugify(itemEs.title)) {
//             setLanguage('ES');
//           } else if (slug === slugify(itemEn.title)) {
//             setLanguage('EN');
//           }
//         }
//       }
//     });
//   }, [slug, setLanguage]);

//   return <InternalPageWrapper type="event" />;
// };

const App: React.FC = () => {
  return (
    
    <div>
      <Header />
      <Hero />
      {/* <Stats /> */}
      <About />
      <Areas />
      <Solution />
      <Alliances />
      <Team />
      <Contact />
      <Footer />
    </div>
    // <LanguageProvider>
    //   <BrowserRouter>
    //     <Suspense fallback={<div className="loader"></div>}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/nosotros" element={<Nosotros />} />
    //         <Route path="/eventos" element={<Eventos />} />
    //         <Route path="/noticias" element={<Noticias />} />
    //         <Route path="/contacto" element={<Contacto />} />
    //         <Route path="/noticia/:slug" element={<NewsRoute />} />
    //         <Route path="/evento/:slug" element={<EventRoute />} />
    //         <Route path="/soluciones" element={<Soluciones />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </Suspense>
    //   </BrowserRouter>
    // </LanguageProvider>
  );
};

export default App;
