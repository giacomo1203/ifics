import React from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Nosotros from './pages/nosotros/Nosotros'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './context/LanguageContext'

/**
 * The main application component.
 *
 * @returns {JSX.Element} The App component.
 */
const App: React.FC = () => {
  return (
    <LanguageProvider>
      {process.env.NODE_ENV === 'production' ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      )}
    </LanguageProvider>
  )
}

export default App
