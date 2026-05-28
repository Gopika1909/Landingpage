import React from 'react';
import styles from '../styles/header.module.css';

// Importing your vector assets
import shells from '../assets/vector/shells.png';
import smartFinder from '../assets/vector/smartfinder.png';
import zoomerr from '../assets/vector/zommer.png';
import artVenue from '../assets/vector/artvenue.png';
import kontrastr from '../assets/vector/kontrastr.png';
import waves from '../assets/vector/waves.png';

// Importing your main image
import mainImg from '../assets/mainnn.png';
import bgImg from '../assets/bg.png';

const Homepage = () => {
  const companies = [
    { name: "SHELLS", src: shells },
    { name: "SmartFinder", src: smartFinder },
    { name: "Zoomerr", src: zoomerr },
    { name: "ArtVenue", src: artVenue },
    { name: "Kontrastr", src: kontrastr },
    { name: "WAVESMARATHON", src: waves },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>N7</div>
        <div className={styles.navLinks}>
          <span>Solutions ▾</span>
          <span>Resources ▾</span>
          <span>About Us</span>
        </div>
        <button className={styles.navBtn}>REQUEST DEMO</button>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>The new foundation <br />of modern banking</h1>
          <p className={styles.description}>
            We drive innovation and growth, provide seamless customer experience and operational excellence.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary}>REQUEST DEMO</button>
            <button className={styles.btnSecondary}>CONTACT US</button>
          </div>
        </div>

        {/* Visual Element with Background Image */}
        <div className={styles.rightContent}>
          <img
            src={bgImg}
            alt=""
            className={styles.bgImage}
          />
          <img
            src={mainImg}
            alt="Banking Interface"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <div className={styles.trustedSection}>
        <span className={styles.trustedLabel}>Trusted By:</span>
        <div className={styles.trustedList}>
          {companies.map((comp) => (
            <div key={comp.name} className={styles.companyItem}>
              <img src={comp.src} alt={comp.name} />
              <span>{comp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;