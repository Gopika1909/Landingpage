import React from 'react';
import styles from '../styles/casestudy.module.css';
import casestudyImg from '../assets/casestudy.png'; 
import caseImg from '../assets/case.png';
import zoomerrLogo from '../assets/logo/zommerlogo.png';
import circleImg from '../assets/circle.png'; 

const Casestudy = () => {
  return (
    <div className={styles.container}>
      
      {/* 1. Insights Section */}
      <section className={styles.insightsSection}>
        {/* Added circle background here */}
        <div 
          className={styles.leftColumn} 
          style={{ backgroundImage: `url(${circleImg})` }}
        >
          <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
          <button className={styles.btnOutline}>INSIGHTS</button>
        </div>

        <div className={styles.rightColumn}>
          {/* Featured Card - image left, content right */}
          <div className={styles.featuredCard}>
            <div className={styles.cardImage}>
              <img src={casestudyImg} alt="Fintech" />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.label}>GETTING STARTED</span>
              <h3>How to transition from a traditional to a digital bank</h3>
              <p className={styles.meta}>David Grohl &nbsp; 17/08/24</p>
              <button className={styles.btnReadMore}>READ MORE</button>
            </div>
          </div>

          {/* Bottom two small cards - no image, text only */}
          <div className={styles.bottomCardsGrid}>
            {[1, 2].map((i) => (
              <div key={i} className={styles.smallCard}>
                <span className={styles.label}>GETTING STARTED</span>
                <h3>How to transition from a traditional to a digital bank</h3>
                <p className={styles.meta}>David Grohl &nbsp; 17/08/24</p>
                <button className={styles.btnReadMore}>READ MORE</button>
              </div>
            ))}
          </div>

          <div className={styles.footerLink}>
            <a href="#">READ ALL INSIGHTS →</a>
          </div>
        </div>
      </section>

      {/* 2. Case Studies Section */}
      <section 
        className={styles.caseStudySection}
        style={{ backgroundImage: `url(${caseImg})` }}
      >
        <h2>Our Case Studies</h2>
        <div className={styles.mainCaseCard}>
          <div className={styles.bigIcon}>
            <img src={caseImg} alt="Case Study" />
          </div>
          <div className={styles.caseContent}>
            <span className={styles.label}>GETTING STARTED</span>
            <h3>How we help brand reach out to more people</h3>
            <div className={styles.zoomerrContainer}>
              <img src={zoomerrLogo} alt="Zoomerr Logo" className={styles.zoomerrIcon} />
            </div>
            <button className={styles.btnOutline}>READ MORE</button>
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.arrow}>←</div>
          <div className={styles.pagination}>
            <span className={styles.dot}></span>
            <span className={styles.dotActive}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.arrow}>→</div>
          <a href="#" className={styles.viewAll}>
            <span className={styles.underlineText}>VIEW</span> ALL →
          </a>
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h2 className={styles.bannerTitle}>Take the full advantage of<br /> going paper-less now.</h2>
          <p className={styles.bannerSubtitle}>
            CB7 helps your financial institution improve the client experience, 
            automate and optimize procedures, simplify banking operations.
          </p>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btnSecondary}>CONTACT US</button>
          <button className={styles.btnPrimary}>REQUEST DEMO</button>
        </div>
      </section>
    </div>
  );
};

export default Casestudy;