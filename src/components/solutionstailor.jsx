import React from 'react';
import styles from '../styles/solutionstailor.module.css';

// Importing your Frame assets
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';

// Import your new background image
import halfEclipse from '../assets/halfeclipse.png'; 

const solutionsData =[
  { title: "Core Banking CB7", icon: frame1, desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, increase productivity, and ensure full regulatory compliance.", tag: "" },
  { title: "Digital Banking N7", icon: frame2, desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.", tag: "" },
  { title: "Open Banking", icon: frame3, desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, and introduce enhanced credit scoring.", tag: "" },
  { title: "Loan Origination System", icon: frame4, desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.", tag: "NBFC", bgImg: halfEclipse },
  { title: "Loan Management System", icon: frame5, desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.", tag: "NBFC" },
];

const Solutionstailor = () => {
  return (
    <section className={styles.solutionsContainer}>
      {/* Left Text Section */}
      <div className={styles.headerSection}>
        <h3 className={styles.title}>
          All of our solutions are tailor-made to your needs
        </h3>
        <button className={styles.btnPrimary}>REQUEST DEMO</button>
      </div>

      {/* Right Grid Section */}
      <div className={styles.gridSection}>
        {solutionsData.map((item, index) => (
          <div key={index} className={styles.card}>
            
            {/* The conditional background image (will only show if bgImg exists on the object) */}
            {item.bgImg && (
              <img src={item.bgImg} alt="Card Background glow" className={styles.cardBgImage} />
            )}

            <div className={styles.cardHeader}>
              <img src={item.icon} alt={item.title} className={styles.solutionIcon} />
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#" className={styles.learnMore}>LEARN MORE →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutionstailor;