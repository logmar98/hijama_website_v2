import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './PricingSection.module.css';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const { language, t } = useContext(LanguageContext);

  const pricingData = [
    {
      img: '/price1.png',
      slug: 'session1'
    },
    {
      img: '/price2.png',
      slug: 'session2'
    },
    {
      img: '/price3.png',
      slug: 'session3'
    },
    {
      img: '/price4.png',
      slug: 'special'
    }
  ];

  return (
    <section className={styles.pricing}>
      <h2>{t.pricing.title}</h2>
      <div className={styles.grid}>
        {pricingData.slice(0, 3).map((item, i) => (
          <div className={styles.card} key={i}>
            <img src={item.img} alt={t.services[item.slug].title} className={styles.imgPlaceholder} />
            <div className={styles.session}>{t.services[item.slug].title}</div>
            <div className={styles.desc}>{t.services[item.slug].shortDesc}</div>
            <div className={styles.price}>{t.services[item.slug].price}</div>
            <Link className={styles.moreBtn} to={`/service/${item.slug}`}>
              {t.pricing.moreButton}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.centerRow}>
        <div className={styles.card}>
          <img src={pricingData[3].img} alt={t.services[pricingData[3].slug].title} className={styles.imgPlaceholder} />
          <div className={styles.session}>{t.services[pricingData[3].slug].title}</div>
          <div className={styles.desc}>{t.services[pricingData[3].slug].shortDesc}</div>
          <div className={styles.price}>{t.services[pricingData[3].slug].price}</div>
          <Link className={styles.moreBtn} to={`/service/${pricingData[3].slug}`}>
            {t.pricing.moreButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 