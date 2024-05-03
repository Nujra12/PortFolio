//import React from 'react';
import { getImageUrl } from './../../utils'; // Importing getImageUrl function
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:Arjunraaz0@gmail.com">Arjunraaz0@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/arjun-timsina-bb732b306/">Arjun Timsina</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/Nujra12">Arjun Timsina</a>
        </li>
        <li className={styles.linkb}>
          <img src={getImageUrl("contact/Phone5.png")} alt="Phone Icon" />
          <a>+977 9817059920</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
