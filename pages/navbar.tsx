import {Link, animateScroll} from "react-scroll";
import React from "react";
import styles from '../styles/Home.module.css';

export default function Navbar() {
  const handleScrollTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <nav className={styles.nav} id="navbar">
      <div className={styles.navContent}>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleScrollTop}>
            Home
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
