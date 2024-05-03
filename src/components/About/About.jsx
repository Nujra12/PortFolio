//import React from 'react';
import styles from "./About.module.css"; // Import CSS module
import { getImageUrl } from '../../utils';

export const About = () => (
  <section className={styles.container}id="about"> {/* Apply styles to the section */}
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <ul className={styles.aboutItems}> {/* Apply styles to the list */}
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I'm deeply passionate about frontend development, where I specialize in creating captivating user experiences. I prioritize writing clean, sophisticated code and stay updated on the latest technologies to ensure optimal results.
              As a dedicated frontend developer, my expertise lies in translating intricate design concepts into seamless, responsive websites.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I'm a backend developer, architecting scalable systems for seamless functionality. My focus is on optimizing performance and delivering robust solutions.
Specializing in backend development, I design and implement efficient data-handling systems. My goal is to create reliable solutions that elevate application performance.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>As a UI designer, I specialize in creating visually stunning and intuitive user interfaces. My passion lies in crafting designs that seamlessly blend aesthetics with usability, ensuring a delightful user experience.
With a focus on UI design, I excel in translating complex concepts into elegant and user-friendly interfaces. I thrive on creating engaging designs that captivate users and enhance overall usability.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
