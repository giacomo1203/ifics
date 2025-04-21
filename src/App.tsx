import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Nosotros from './pages/nosotros/Nosotros'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './context/LanguageContext'
import Noticias from './pages/noticias/Noticias'
import Eventos from './pages/eventos/Eventos'
import Contacto from './pages/contacto/Contacto'
import Soluciones from './pages/soluciones/Soluciones'
import InternalPage from './pages/internal-page/Internal-Page'

/**
 * The main application component.
 *
 * @returns {JSX.Element} The App component.
 */
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
          <Route path="/noticia/:slug" element={<InternalPage />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
