import React from 'react';
import styles from '../styles/digitalbanking.module.css';
import beltImg from '../assets/trustbelt.png';
import phone1 from '../assets/iPhone1.png';
import phone2 from '../assets/iPhone2.png';
import phone3 from '../assets/iPhone3.png';
import cb7Image from '../assets/CB7.png';
import n7Image from '../assets/N7.png';
import vectorImg from '../assets/Vector.png'; 
import sevenImg from '../assets/7.png'; 

const DigitalBanking = () => {
  return (
    <div className={styles.container}>
      {/* Belt Image */}
      <section className={styles.beltSection}>
        <img src={beltImg} alt="Belt" className={styles.beltImage} />
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src={n7Image} alt="N7 Logo Background" className={styles.n7Watermark} />

        <div className={styles.heroText}>
          <h4>Digital banking <br></br>out-of-the-box</h4>
          <p>N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
          <div className={styles.btnGroup}>
            <button className={styles.btnPrimary}>REQUEST DEMO</button>
            <a href="#" className={styles.learnMore}>LEARN MORE →</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={phone1} alt="Banking App" className={styles.phoneImage} />
        </div>

        <div className={styles.heroRight}>
          <h3>Fully-compliant with regulatory <br />requirement</h3>
          <p>The governance of risk management with regulators is achieved by our risk management framework.</p>
          <div className={styles.checkList}>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Pre-Integrated Security System</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Fully Compliant With Regulatory Requirement</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Digitally-Connected Core</div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 (SHIFTED RIGHT) */}
      <section className={`${styles.featureRow} ${styles.shiftRight}`}>
        <img src={vectorImg} alt="Vector Graphic Background" className={styles.vectorWatermark} />

        <div className={styles.textContent}>
          <h3>No legacy IT systems</h3>
          <p>Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation.</p>
          <div className={styles.checkList}>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Adaptive &amp; Intelligent API monetization</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Ambient User Experience</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Cloud-native With lower TCO</div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img src={phone2} alt="Banking App" className={styles.phoneImage} />
        </div>
      </section>

      {/* Feature Section 3 (REVERSED) */}
      <section className={`${styles.featureRow} ${styles.reverse}`}>
        <img src={sevenImg} alt="7 Graphic Background" className={styles.sevenWatermark} />

        <div className={styles.imageContent}>
          <img src={phone3} alt="Banking App" className={styles.phoneImage} />
        </div>
        <div className={styles.textContent}>
          <h3>No traditional branches</h3>
          <p>Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks.</p>
          <div className={styles.checkList}>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Branchless &amp; Paperless Banking</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Digital Transformation Capability</div>
            <div className={styles.checkItem}><span className={styles.checkIcon}>✓</span> Optimized, Adaptable and Scalable</div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className={styles.banner}>
         <img src={cb7Image} alt="CB7 Watermark" className={styles.cb7Watermark} />
         
         <div className={styles.bannerContent}>
           <h2 className={styles.bannerTitle}>Take the full advantage of<br /> going paper-less now.</h2>
           <p className={styles.bannerSubtitle}>
             CB7 helps your financial institution improve the client experience, 
             automate and optimize procedures, simplify banking operations.
           </p>
         </div>
 
         <div className={styles.btnGroupBanner}>
           <button className={styles.btnSecondaryBanner}>CONTACT US</button>
           <button className={styles.btnPrimaryBanner}>REQUEST DEMO</button>
         </div>
       </section>
    </div>
  );
};

export default DigitalBanking;