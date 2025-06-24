import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import LanguageContext from './LanguageContext';
import styles from './ServiceDetailPage.module.css';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { language, t, dir } = useContext(LanguageContext);
  const details = t.services?.[slug];

  let waMsg = '';
  if (language === 'ar') {
    waMsg = `أرغب في معرفة المزيد عن الخدمة (${details?.title || ''})`;
  } else {
    waMsg = `Je souhaite en savoir plus sur le service (${details?.title || ''})`;
  }
  const whatsappLink = `https://wa.me/212626606648?text=${encodeURIComponent(waMsg)}`;

  if (!details) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '3rem 1rem' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>الخدمة غير موجودة</h2>
        <Link to="/" style={{ marginTop: '2rem', color: '#2563eb', textDecoration: 'underline', fontWeight: 'bold' }}>
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.detailPage} dir={dir}>
      <div style={{ width: '100%', maxWidth: 900, margin: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <button
            onClick={() => window.location.href = '/'}
            className={styles.bookBtn}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 1rem' }}
          >
            <span style={{fontSize:'1.3em', marginLeft: language === 'ar' ? 4 : 0, marginRight: language === 'ar' ? 0 : 4, transform: language === 'ar' ? 'none' : 'scaleX(-1)', display: 'inline-block'}}>
              🡺
            </span>
            {language === 'ar' ? 'الرئيسية' : 'Accueil'}
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          {details.img ? (
            <img
              src={process.env.PUBLIC_URL + '/' + details.img}
              alt={details.title}
              className={styles.img}
            />
          ) : (
            <div className={`${styles.img} ${styles.placeholder}`}>IMG</div>
          )}
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{details.title}</h2>
          <div className={styles.price}>{details.price}</div>
          <div className={styles.sectionTitle}>{t.serviceDetailsDescLabel}</div>
          <pre className={styles.desc}>{details.shortDesc}</pre>
          <div className={styles.sectionTitle}>{t.serviceDetailsLongDescLabel}</div>
          <pre className={styles.longDesc}>{details.longDesc}</pre>
          <a href={whatsappLink} className={styles.bookBtn} target="_blank" rel="noopener noreferrer">
            {language === 'ar' ? 'احجز الآن' : language === 'fr' ? 'Réserver maintenant' : 'Book Now'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage; 