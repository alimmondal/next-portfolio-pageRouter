import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Intro.module.css';
import Image from 'next/image';
import Me from '../public/img/man.png';

function Intro() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });

  return (
    <div className={styles.intro} id="intro">
      <div className={styles.iLeft}>
        <div className={styles.imgD} data-aos="zoom-in-down">
          <Image
            src={Me}
            width="220"
            height="220"
            objectFit="contain"
            alt=""
            className={styles.iImg}
          />
        </div>
      </div>
      <div className={styles.iRight}>
        <div className={styles.iRightWrapper}>
          <h2 className={styles.iIntro}>Hi, I&apos;m</h2>
          <h1 className={styles.iName}>Alim</h1>
          <div className={styles.iTitle}>
            <div className={styles.iTitleWrapper}>
              <div className={styles.iTitleItem}>Web Developer</div>
              <div className={styles.iTitleItem}>UI/UX Designer</div>
              <div className={styles.iTitleItem}>Photographer</div>
              <div className={styles.iTitleItem}>Graphic Designer</div>
              <div className={styles.iTitleItem}>Content Creator</div>
            </div>
          </div>
          <p className={styles.iDesc} data-aos="flip-left">
            I design and develop websites and web applications for customers of
            all sizes, specializing in creating stylish , modern & beautiful
            websites, web services and online stores on
            <b> WordPress, React js and Next js </b>
          </p>
          <div className={styles.bDiv}>
            <a className={styles.a} href="#contact">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Let&apos;s get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
