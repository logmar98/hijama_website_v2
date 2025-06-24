import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './BenefitsSection.module.css';

const BenefitsSection = () => {
  const { t, dir } = useContext(LanguageContext);
  return (
    <section className={styles.benefits} dir={dir}>
      <h2>{t.benefits.title}</h2>
      <div className={styles.cards}>
        {t.benefits.items.map((benefit, i) => (
          <div className={styles.card} key={i}>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection; 