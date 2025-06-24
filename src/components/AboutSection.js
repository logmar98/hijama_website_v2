import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const { t, dir } = useContext(LanguageContext);
  
  // Convert \n to <br> tags for proper line breaks
  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className={styles.about} dir={dir}>
      <h2>{t.about.title}</h2>
      <div className={styles.content}>
        <img className={styles.avatar} src="/profile.png" alt="practitioner" />
        <p>{formatText(t.about.text)}</p>
      </div>
    </section>
  );
};

export default AboutSection; 