import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';
import Phone from '../public/img/phone.png';
import Email from '../public/img/email.png';
import Address from '../public/img/address.png';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_j89t657',
        'template_0io7ptb',
        formRef.current,
        'WUGb_0Ul1O_j8hcf2'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.c} id="contact">
      <div className={styles.cBg}></div>
      <div className={styles.cWrapper}>
        <div className={styles.cLeft}>
          <h1 className={styles.cTitle} data-aos="slide-right">
            Let us discuss our projects
          </h1>
          <div className={styles.cInfo} data-aos="fade">
            <div className={styles.cInfoItem}>
              <Image
                src={Phone}
                width="30"
                height="30"
                objectFit="cover"
                alt=""
                className={styles.cIcon}
              />
              <span className={styles.cContact}>+8801860060068</span>
            </div>
            <div className={styles.cInfoItem}>
              <Image
                src={Email}
                width="30"
                height="30"
                objectFit="cover"
                alt=""
                className={styles.cIcon}
              />
              <span className={styles.cContact}>italimbd@gmail.com</span>
            </div>
            <div className={styles.cInfoItem}>
              <Image
                src={Address}
                width="30"
                height="30"
                objectFit="cover"
                alt=""
                className={styles.cIcon}
              />
              <span className={styles.cContact}>
                245 King Street, Touterie Victoria 8520 Australia
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cRight}>
          <p className={styles.cDesc} data-aos="fade-up">
            <b>Whats your story? </b> Get in touch. Always available for
            freelancing if the right projects come along me.{' '}
          </p>
          <form className={styles.cForm} ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className={styles.cInput}
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
              className={styles.cInput}
              required
              data-aos="fade-up"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className={styles.cInput}
              data-aos="fade-up"
            />
            <textarea
              rows={5}
              placeholder="Message"
              name="message"
              className={styles.cTextarea}
              data-aos="fade-up"
            />
            <div className={styles.cb}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button className={styles.CButton} data-aos="fade-up">
                Submit
              </button>
            </div>
            <div className={styles.cReply} data-aos="fade">
              {done && 'Thank you, we will reply you soon.'}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
