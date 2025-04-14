import React, { createContext, useContext, ReactNode, useState } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || 'ES'
  );

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage: setCurrentLanguage,
  };

  React.useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};