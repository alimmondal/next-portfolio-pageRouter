import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from '../styles/Call.module.css';
import Image from 'next/image';
import web from '../public/img/web-person.png';
import { useTransition, animated } from '@react-spring/web';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CallToAction() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 60, innerHeight: 60 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#ffd700' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () => set(['Need any website?', 'Then, why late!', 'Lets get started']),
        2000
      )
    );
    ref.current.push(
      setTimeout(() => set(['Need any website?', 'Lets get started']), 5000)
    );
    ref.current.push(
      setTimeout(
        () => set(['Need any website?', 'Then, why late!', 'Lets get started']),
        8000
      )
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className={styles.calCon}>
      <div className={styles.cTa}>
        <div className={styles.cTd}>
          <div className={styles.cImg} data-aos="fade-down-right">
            <Image
              src={web}
              width="250"
              height="250"
              alt=""
              className={styles.cImg}
            />
          </div>
          <div className={styles.callText}>
            <div className={styles.container}>
              <div className={styles.main}>
                {transitions(({ innerHeight, ...rest }, item) => (
                  <animated.div
                    className={styles.transitionsItem}
                    style={rest}
                    onMouseOver={reset}
                  >
                    <animated.div
                      style={{ overflow: 'hidden', height: innerHeight }}
                    >
                      {item}
                    </animated.div>
                  </animated.div>
                ))}
                <a className={styles.a} href="#contact">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
