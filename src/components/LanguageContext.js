import React, { createContext, useState, useEffect } from 'react';
import ar from '../locales/ar';
import fr from '../locales/fr';

const LanguageContext = createContext();

const getSystemLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('ar')) return 'ar';
  if (lang.startsWith('fr')) return 'fr';
  return 'fr'; // default to French
};

const translations = { ar, fr };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('lang');
    return stored || getSystemLanguage();
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 