import React from 'react';
import styles from '../styles/footer.module.css';
import n7Logo from '../assets/Mask.png';
import ellipseImg from '../assets/Ellipse.png';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.mainGrid}>

        {/* Logo */}
        <div className={styles.logo}>
          <img src={n7Logo} alt="N7 Logo" />
        </div>

        {/* Row 1: Address Blocks */}
        <div className={styles.addressBlock}>
          <h3>London</h3>
          <p>Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.</p>
        </div>

        <div className={styles.addressBlock}>
          <h3>Dubai</h3>
          <p>Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.</p>
        </div>

        <div className={styles.addressBlock}>
          <h3>India</h3>
          <p>Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.</p>
        </div>

        {/* Logo column filler for row 2 */}
        <div className={styles.logoSpacer} />

        {/* Row 2: Link Sections */}
        <div className={styles.linkContainer}>
          <h3>Solutions</h3>
          <ul className={styles.linkList}>
            <li>Core Banking CB7 <span>→</span></li>
            <li>Digital Banking N7 <span>→</span></li>
            <li>Open Banking <span>→</span></li>
            <li>Loan Origination System <span>→</span></li>
            <li>Loan Management System <span>→</span></li>
            <li>Digital Transformation <span>→</span></li>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          <h3>N7 Banking</h3>
          <ul className={styles.linkList}>
            <li>About Us <span>→</span></li>
            <li>Solutions <span>→</span></li>
            <li>Contact <span>→</span></li>
            <li>Company <span>→</span></li>
            <li>Careers <span>→</span></li>
            <li>Insights <span>→</span></li>
            <li>Core Team <span>→</span></li>
            <li>Brand Center <span>→</span></li>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          <h3>Our Socials</h3>
          <ul className={styles.linkList}>
            <li>LinkedIn <span>→</span></li>
            <li>X <span>→</span></li>
          </ul>
        </div>

        {/* Copyright */}
        <div 
          className={styles.copyright}
          style={{ backgroundImage: `url(${ellipseImg})` }}
        >
          <p>Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;