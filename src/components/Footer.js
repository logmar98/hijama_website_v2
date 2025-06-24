import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import styles from './Footer.module.css';

const phoneNumber = '+212626606648';

const Footer = () => {
  const { t, dir } = useContext(LanguageContext);
  return (
    <footer className={styles.footer} dir={dir}>
      <div className={styles.info}>
        <div><strong>{t.footer.contact}:</strong> {phoneNumber}</div>
        <div><strong>{t.footer.location}:</strong> Casablanca, Maroc</div>
      </div>
      <div className={styles.socials}>
        <span>{t.footer.follow}:</span>
        <a href="https://www.facebook.com/profile.php?id=100087663332092&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          {/* Facebook SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#1877F3"/>
            <path d="M16.671 15.273l.438-2.857h-2.73v-1.857c0-.782.383-1.545 1.61-1.545h1.247V6.5S15.5 6.273 14.5 6.273c-2.07 0-3.426 1.257-3.426 3.537v1.806H8.273v2.857h2.801V21h3.305v-5.727h2.292z" fill="#fff"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/center_al_salama_hijjama/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          {/* Instagram SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/>
            <defs>
              <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f58529"/>
                <stop offset="0.5" stopColor="#dd2a7b"/>
                <stop offset="1" stopColor="#515bd4"/>
              </linearGradient>
            </defs>
            <path d="M12 8.4A3.6 3.6 0 1 0 12 15.6 3.6 3.6 0 0 0 12 8.4zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zm4.5-6.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM12 6.2c1.6 0 1.8 0 2.4.03.6.03.9.13 1.1.22.3.12.5.27.72.49.22.22.37.42.49.72.09.2.19.5.22 1.1.03.6.03.8.03 2.4s0 1.8-.03 2.4c-.03.6-.13.9-.22 1.1-.12.3-.27.5-.49.72-.22.22-.42.37-.72.49-.2.09-.5.19-1.1.22-.6.03-.8.03-2.4.03s-1.8 0-2.4-.03c-.6-.03-.9-.13-1.1-.22-.3-.12-.5-.27-.72-.49-.22-.22-.37-.42-.49-.72-.09-.2-.19-.5-.22-1.1C6.2 13.8 6.2 13.6 6.2 12s0-1.8.03-2.4c.03-.6.13-.9.22-1.1.12-.3.27-.5.49-.72.22-.22.42-.37.72-.49.2-.09.5-.19 1.1-.22C10.2 6.2 10.4 6.2 12 6.2zm0-1.2C10.3 5 10.1 5 9.5 5.03c-.7.03-1.2.15-1.6.32-.4.17-.7.38-1.02.7-.32.32-.53.62-.7 1.02-.17.4-.29.9-.32 1.6C5 10.1 5 10.3 5 12c0 1.7 0 1.9.03 2.5.03.7.15 1.2.32 1.6.17.4.38.7.7 1.02.32.32.62.53 1.02.7.4.17.9.29 1.6.32.6.03.8.03 2.5.03s1.9 0 2.5-.03c.7-.03 1.2-.15 1.6-.32.4-.17.7-.38 1.02-.7.32-.32.53-.62.7-1.02.17-.4.29-.9.32-1.6.03-.6.03-.8.03-2.5s0-1.9-.03-2.5c-.03-.7-.15-1.2-.32-1.6-.17-.4-.38-.7-.7-1.02-.32-.32-.62-.53-1.02-.7-.4-.17-.9-.29-1.6-.32C13.9 5 13.7 5 12 5z" fill="#fff"/>
          </svg>
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Hijama. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 