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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8056939599205!2d-7.4784329!3d33.5843939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb207eaa2711%3A0x6e6de484a6a19fec!2zSGlqYW1hIENhc2FibGFuY2EgLSDZhdix2YPYsiDYp9mE2LPZhNin2YXYqSDZhNmE2K3YrNin2YXYqQ!5e0!3m2!1sen!2snl!4v1778605914473!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
