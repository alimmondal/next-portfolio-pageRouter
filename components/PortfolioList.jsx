import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/PortfolioList.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioList({ img, link }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 3000,
      easing: 'ease',
    });
  });
  return (
    <div className={styles.p} data-aos="fade">
      <div className={styles.pBrowser}>
        <div className={styles.pCircle}></div>
        <div className={styles.pCircle}></div>
        <div className={styles.pCircle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={img}
          width="340"
          height="800"
          objectFit="responsive"
          alt=""
          className={styles.pImg}
        />
      </a>
    </div>
  );
}

export default PortfolioList;
