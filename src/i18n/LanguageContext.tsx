import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

import { es } from './es';
import { en } from './en';

type Language = 'es' | 'en';

const LANGUAGE_STORAGE_KEY = 'ifcom-language';

const translations = {
  es,
  en,
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof es;
}

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage === 'es' || savedLanguage === 'en') {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('en')) {
    return 'en';
  }

  return 'es';
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({
  children,
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(
    getInitialLanguage,
  );
  const t = translations[language];

  const changeLanguage = (language: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage debe utilizarse dentro de LanguageProvider',
    );
  }

  return context;
};
