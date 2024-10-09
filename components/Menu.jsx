import React from 'react';
import styles from '../styles/Menu.module.scss';
import Image from 'next/image';
import sideBarLogo from '../public/img/sideBarLogo.png';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.menu} ` + (menuOpen && `${styles.active}`)}>
      <ul>
        <li>
          <a href="#intro">
            <Image src={sideBarLogo} width="90" height="100" alt="" />
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
