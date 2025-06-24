import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './TestimonialsSection.module.css';

const reviews = [
  {
    img: '/image1.png',
    name: 'ADIL LAHMIDI',
    stars: 5,
    comment: {
      fr: 'Bien',
      ar: 'جيد',
      en: 'good',
    },
    link: 'https://maps.app.goo.gl/Yrc9RtdcCKhq2oea8',
  },
  {
    img: '/image2.png',
    name: 'ismail ablouh',
    stars: 5,
    comment: {
      fr: 'Merci beaucoup pour le service',
      ar: 'شكراً جزيلاً على الخدمة',
      en: 'Thank you very much for the service',
    },
    link: 'https://maps.app.goo.gl/yUp6dmc45V7gqf4E8',
  },
  {
    img: '/image3.png',
    name: 'soulaimane elbkraui',
    stars: 5,
    comment: {
      fr: 'Il offre un service de qualité, machaAllah ❤️❤️❤️',
      ar: 'يقدم خدمة في المستوى ما شاء الله ❤️❤️❤️',
      en: 'He serves a service at the level, God willing ❤️❤️❤️',
    },
    link: 'https://maps.app.goo.gl/hmRFnnuoc4Zw7Gqz6',
  },
];

const TestimonialsSection = () => {
  const { t, dir, language } = useContext(LanguageContext);
  return (
    <section className={styles.testimonials} dir={dir}>
      <h2>{t.testimonials.title}</h2>
      <div className={styles.list}>
        {reviews.map((review, i) => (
          <a
            href={review.link}
            key={i}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            aria-label={language === 'ar' ? 'عرض على Google' : 'Voir sur Google'}
          >
            <img className={styles.avatar} src={review.img} alt={review.name} />
            <span className={styles.name}>{review.name}</span>
            <span className={styles.stars}>{'★★★★★'.slice(0, review.stars)}</span>
            <span className={styles.text}>{review.comment[language] || review.comment.en}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 