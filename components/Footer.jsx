import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Phone from '../public/img/phone.png';
import Email from '../public/img/email.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  return (
    <div className={styles.footerCmp}>
      <div className={styles.fContact}>
        <div className={styles.fCl}>
          <div className={styles.fIcon}>
            <span data-aos="zoom-in-right">
              <FontAwesomeIcon
                icon={faMugHot}
                style={{ fontSize: 60, color: '#690d0d' }}
              />
            </span>

            <span className={styles.cContact}>Start work with us</span>
          </div>
          <p>Let&apos;s have coffee and talk business.</p>
          <a className={styles.a} href="#contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send us email
          </a>
        </div>
        <div className={styles.fCr}>
          <div className={styles.fIcon}>
            <span data-aos="zoom-in-right">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ fontSize: 60, color: '#4BF17B', fontWeight: '700' }}
              />
            </span>

            <span className={styles.cContact}>Want to chat first</span>
          </div>
          <p>Chat with us via WhatsApp.</p>
          <a className={styles.a} href="#contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            +880175133773
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.cInfoItem}>
          <Image
            src={Email}
            width="30"
            height="30"
            objectFit="cover"
            alt=""
            className={styles.cIcon}
            data-aos="zoom-in-down"
          />
          <a href="#contact" data-aos="fade">
            <span className={styles.cContact}>italimbd@gmail.com</span>
          </a>
        </div>
        <div className={styles.cInfoItem}>
          <Image
            src={Phone}
            width="30"
            height="30"
            objectFit="cover"
            alt=""
            className={styles.cIcon}
            data-aos="zoom-in-up"
          />
          <span className={styles.cContact} data-aos="fade">
            +8801860060068
          </span>
        </div>
        <div className={styles.cInfoItem} data-aos="slide-up">
          <ul>
            <li className={styles.footerIcons}>
              <a
                href="https://www.facebook.com/profile.php?id=100022439445805"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{
                    fontSize: 25,
                    padding: '7px',
                    backgroundColor: '#0D88F0',
                    color: '#fff',
                  }}
                  className={styles.faceB}
                />
              </a>
            </li>
            <li className={styles.footerIcons}>
              <a
                href="https://twitter.com/Alim47989954"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    fontSize: 25,
                    padding: '7px',
                    backgroundColor: '#fff',
                    color: '#1D9BF0',
                  }}
                />
              </a>
            </li>
            <li className={styles.footerIcons}>
              <a
                href="https://www.linkedin.com/in/md-alim-1822631a6/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    fontSize: 25,
                    padding: '7px',
                    backgroundColor: '#0077B5',
                    color: '#fff',
                  }}
                />
              </a>
            </li>
            <li className={styles.footerIcons}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    padding: '7px',
                    backgroundColor: 'crimson',
                    color: '#fff',
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <hr className={styles.paragraphFooter} />
      <div className={styles.paragraphFooter}>
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved |
          GeniusTec
        </p>
      </div>
    </div>
  );
};

export default Footer;
