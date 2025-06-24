import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <button
      className="lang-toggle"
      onClick={() => setLanguage(language === 'ar' ? 'fr' : 'ar')}
      aria-label={language === 'ar' ? 'Switch to French' : 'التبديل إلى العربية'}
    >
      {language === 'ar' ? 'Français' : 'العربية'}
    </button>
  );
}

const Navbar = () => {
  const { dir } = useContext(LanguageContext);
  return (
    <nav className="navbar" dir={dir}>
      <div className="navbar-lang">
        <LanguageToggle />
      </div>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
      </div>
    </nav>
  );
};

export default Navbar; 