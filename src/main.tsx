import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
)
