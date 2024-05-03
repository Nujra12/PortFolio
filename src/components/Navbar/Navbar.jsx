import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="Menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
        onClick={() => setMenuOpen(false)}>
          <li>
            <a className={styles.menuItem} href="#about">About</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#experience">Experience</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#projects">Projects</a> 
          </li>
          <li>
            <a className={styles.menuItem} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
