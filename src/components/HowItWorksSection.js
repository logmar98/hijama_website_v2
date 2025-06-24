import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './HowItWorksSection.module.css';

const HowItWorksSection = () => {
  const { t, dir } = useContext(LanguageContext);
  return (
    <section className={styles.howItWorks} dir={dir}>
      <h2>{t.howItWorks.title}</h2>
      <div className={styles.steps}>
        {t.howItWorks.steps.map((step, i) => (
          <div className={styles.step} key={i}>
            <span className={styles.icon}></span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection; 