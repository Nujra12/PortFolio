//import React from 'react';
import { getImageUrl } from './../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, It's Me Arjun Timsina</h1>
        <h2 className={styles.description}>
          I'm an aspiring BSc CSIT student passionate about web development and data analytics.
          Constantly learning, my expertise spans web design, front-end development,back-end development and data analytics.
        </h2>
        <a href="mailto:Arjunraaz0@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/Arjun.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
