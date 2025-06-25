import React, { useContext } from 'react';
import './App.css';
import { LanguageProvider } from './components/LanguageContext';
import LanguageContext from './components/LanguageContext';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceDetailPage from './components/ServiceDetailPage';
import Navbar from './components/Navbar';

function LanguageToggle() {
  const { language, setLanguage, t } = useContext(LanguageContext);
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

function MainApp() {
  const { dir, t, language } = useContext(LanguageContext);
  const waMsg = language === 'ar'
    ? 'أرغب في معرفة المزيد عن الخدمة'
    : "Je souhaite en savoir plus sur le service";
  const waLink = `https://wa.me/212626606648?text=${encodeURIComponent(waMsg)}`;
  return (
    <div className="App" dir={dir}>
      <header
        className="App-header"
        style={{
          backgroundImage: 'url(/hero_img.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>{t.hero.headline}</h1>
        <p>{t.hero.subtitle}</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          <button className="cta-btn">{t.hero.cta}</button>
        </a>
      </header>
      <PricingSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <section className="map-section">
        <h2 className="mapTitle">{t.footer.location}</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.771068031658!2d-7.4795238999999984!3d33.5852928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb1c9c0ece4f%3A0x31938f35f4430636!2z2YXYsdmD2LIg2KfZhNiz2YTYp9mF2Kkg2YTZhNit2KzYp9mF2Kk!5e0!3m2!1sen!2sma!4v1695651218746!5m2!1sen!2sma"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '18px', width: '100%', maxWidth: '900px', margin: '0 auto', display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map"
        ></iframe>
      </section>
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/service/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
