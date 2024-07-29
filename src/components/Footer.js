import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Mon Portfolio © 2024</p>
      <a href="https://github.com/OthmaneLamzara">GitHub</a> | 
      <a href="https://www.linkedin.com/in/OthmaneLamzara">LinkedIn</a>
    </footer>
  );
};

export default Footer;
