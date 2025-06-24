import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './FinalCTASection.module.css';

const phoneNumber = '+212626606648';

const FinalCTASection = () => {
  const { t, dir, language } = useContext(LanguageContext);
  const waMsg = language === 'ar'
    ? 'أرغب في معرفة المزيد عن الخدمة'
    : "Je souhaite en savoir plus sur le service";
  const whatsappLink = `https://wa.me/212626606648?text=${encodeURIComponent(waMsg)}`;
  return (
    <section className={styles.finalCta} dir={dir}>
      <p>{t.finalCta.text}</p>
      <div className={styles.actions}>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.bookBtn}>{t.hero.cta}</button>
        </a>
        <a href={whatsappLink} className={styles.wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">🟢 WhatsApp</a>
        <a href={`tel:${phoneNumber}`} className={styles.phone} aria-label="Phone">📞 {phoneNumber}</a>
      </div>
    </section>
  );
};

export default FinalCTASection; 