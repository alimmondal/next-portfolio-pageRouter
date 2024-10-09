import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Portfolio.module.css';
import { products } from '../data';
import PortfolioList from './PortfolioList';

function Portfolio() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <div className={styles.pl} id="portfolio">
      <div className={styles.plTexts}>
        <h1 className={styles.plTitle} data-aos="zoom-in-down">
          <span className={styles.pTititleSpan}>
            Create & inspire. It&apos;s
          </span>{' '}
          Portfolio
        </h1>
        <p className={styles.plDesc}>
          Alim is creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className={styles.plList}>
        {products.map((item) => (
          <PortfolioList key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
