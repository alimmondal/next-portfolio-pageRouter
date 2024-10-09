import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/FunFacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartCircleExclamation,
  faMugHot,
  faClock,
  faAward,
  faMugSaucer,
} from '@fortawesome/free-solid-svg-icons';

const FunFacts = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <div className={styles.funFact}>
      <h1 className={styles.funTitle}>Fun Facts</h1>
      <div className={styles.funRow}>
        <div className={styles.funFlex}>
          <div className={styles.fun}>
            <FontAwesomeIcon
              icon={faHeartCircleExclamation}
              style={{ fontSize: 70, color: '1877F2' }}
            />
            <h5 data-aos="zoom-out-down">Happy Clients</h5>
            <h2>578</h2>
          </div>
          <div className={styles.fun}>
            <FontAwesomeIcon
              icon={faClock}
              style={{ fontSize: 70, color: '1877F2' }}
            />
            <h5 data-aos="zoom-out-down">Working Hours</h5>
            <h2>578</h2>
          </div>
          <div className={styles.fun}>
            <FontAwesomeIcon
              icon={faAward}
              style={{ fontSize: 70, color: '1877F2' }}
            />
            <h5 data-aos="zoom-out-down">Awards Won</h5>
            <h2>15</h2>
          </div>
          <div className={styles.fun}>
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{ fontSize: 70, color: '1877F2' }}
            />
            <h5 data-aos="zoom-out-down">Coffee Consumed</h5>
            <h2>1,286</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
