import React from 'react';
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/AboutIcon.module.scss';

const AboutIcon = () => {
  return (
    <div className={styles.stageCubeCont}>
      <div className={styles.cubespinner}>
        <div className={styles.face1}>
          <FontAwesomeIcon icon={faWordpress} color="#DD0031" />
        </div>
        <div className={styles.face2}>
          <FontAwesomeIcon icon={faReact} color="#F06529" />
        </div>
        <div className={styles.face3}>
          <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
        </div>
        <div className={styles.face4}>
          <FontAwesomeIcon icon={faWordpress} color="#28649A" />
        </div>
        <div className={styles.face5}>
          <FontAwesomeIcon icon={faHtml5} color="#EFD81D" />
        </div>
        <div className={styles.face6}>
          <FontAwesomeIcon icon={faReact} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

export default AboutIcon;
