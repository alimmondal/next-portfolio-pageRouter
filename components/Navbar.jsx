import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
import logo from '../public/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.topbar} ` + (menuOpen && `${styles.active}`)}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro">
            <Image
              src={logo}
              width="45"
              height="45"
              objectFit="contain"
              alt=""
              className={styles.LogoIcon}
            />
          </a>
          <a href="#intro" className={styles.logoText}>
            GeniusTec.
          </a>

          <div className={styles.itemContainer}>
            <a href="#contact">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: 20, color: '#009587' }}
              />
              <span>+8801860060068</span>
            </a>
          </div>
          <div className={styles.itemContainer}>
            <a href="#contact">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: 20, color: '#ffd700', marginRight: '5' }}
              />
              <span>italimbd@gmail.com</span>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
