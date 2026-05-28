import React from 'react';
import styles from '../styles/cloudbased.module.css';

// Importing your images
import laptop1 from '../assets/laptop.png';
import laptop2 from '../assets/laptop2.png';
import cb7Image from '../assets/CB7.png';

const features = [
  "Customer On-Boarding", "CRM Activities",
  "Managing deposits and withdrawals", "Configuring New Banking Products",
  "Transaction management", "Loan dispersal and Loan management",
  "Interest Calculation", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
 
];

const CloudBased = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h3 className={styles.heroTitle}>A complete cloud-based<br /> core banking.</h3>
          <p className={styles.heroText}>Faster time to market with our cloud-based core banking services.</p>
          <button className={styles.btnPrimary}>REQUEST DEMO</button>
          <p style={{ marginTop: '20px', color: '#00B4FD', cursor: 'pointer' }}>LEARN MORE →</p>
        </div>
        <div className={styles.laptopContainer}>
          <img src={laptop1} alt="Dashboard" className={styles.laptopImg} />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.laptopContainer}>
          <img src={laptop2} alt="Features Dashboard" className={styles.laptopImg} />
        </div>
        <div className={styles.featuresContent}>
          <h2 className={styles.featureTitle}>Run a more efficient, flexible, and digitally connected corebanking system</h2>
          <h3 className={styles.subtitle}>What you will get:</h3>
          <div className={styles.featuresGrid}>
            {features.map((item, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA with Gradient Background */}
      <section className={styles.banner}>
        <img src={cb7Image} alt="CB7 Watermark" className={styles.cb7Watermark} />
        
        <div className={styles.bannerText}>
          <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Take the full advantage of<br /> going paper-less now.</h2>
          <p style={{ color: '#a0a0a0', maxWidth: '450px' }}>
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

export default CloudBased;