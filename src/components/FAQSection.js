import React, { useContext, useState } from 'react';
import LanguageContext from './LanguageContext';
import styles from './FAQSection.module.css';

const FAQSection = () => {
  const { t, dir } = useContext(LanguageContext);
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.faq} dir={dir}>
      <h2>{t.faq.title}</h2>
      <div className={styles.list}>
        {t.faq.questions.map((q, i) => (
          <div className={styles.item} key={i}>
            <button className={styles.q} onClick={() => setOpen(open === i ? null : i)}>
              {q.q}
              <span className={styles.arrow}>{open === i ? '▲' : '▼'}</span>
            </button>
            {open === i && <div className={styles.a}>{q.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 