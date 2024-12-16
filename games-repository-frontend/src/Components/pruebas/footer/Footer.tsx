import React from 'react';
import styles from './footer.module.scss'; // Cambia según el nombre de tu archivo

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <ul className={styles.menu}>
          <li><a href="/" className={styles.link}>Home</a></li>
          <li><a href="/about" className={styles.link}>About</a></li>
          <li><a href="/contact" className={styles.link}>Contact</a></li>
        </ul>
      </div>

      {/* Segunda columna */}
      <div className={styles.column}>
        <button className={styles.button}>Subscribe</button>
        <button className={styles.button}>Learn More</button>
      </div>

      {/* Tercera columna */}
      <div className={styles.column}>
        <p>1234 Example Street</p>
        <p>City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;