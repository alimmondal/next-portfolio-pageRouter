import React from 'react';
import styles from '../styles/About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import AboutIcon from './AboutIcon';

function About() {
  return (
    <div className={styles.a} id="works">
      <div className={styles.aLeft}>
        <AboutIcon />
      </div>

      <div className={styles.aRight}>
        <h1 className={styles.aTitle}>About Me</h1>
        <p className={styles.aSub} data-aos="zoom-out-down">
          I&apos;m a professional web developer on <b>WordPress,</b> React js
          and Next js.
        </p>
        <p className={styles.aDesc} data-aos="zoom-out-down">
          I am the master of HTML, CSS, Bootstrap, Tailwind CSS, Material UI,
          Javascript and most popular Javascript library called <b>React JS</b>,
          React framework<b> Next JS</b>. I know everything needed to make a
          website function, efficient. I even know the deployment, server and
          security. I will give you 100% web solution.
        </p>
        <div className={styles.aAward}>
          <FontAwesomeIcon
            icon={faReact}
            className="fa-spin"
            style={{ fontSize: 120, color: '#009587', marginRight: '5' }}
          />
          <div className={styles.aAwardText}>
            <h4 className={styles.aAwardTitle}>We develop mobile app too!</h4>
            <p data-aos="fade-right">
              We also build mobile app on React Native which is highly popular
              in the world. We can also turn a WordPress website into web app.
            </p>
            <a className={styles.b} href="#contact">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
