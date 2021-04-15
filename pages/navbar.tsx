import { ScrollLink } from "react-scroll";
import { Navbar as BNavbar, Nav } from "react-bootstrap";

const Link = ScrollLink(Nav.Link);

export default function Navbar() {
  // const handleScrollTop = () => {
  //   animateScroll.scrollToTop();
  // };
  return (
      <BNavbar
        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
        expand={true}
        fixed="top"
        className="d-flex justify-content-center align-items-center">
        <Nav>
          <Link
            to="home"
            spy={true}
          >
            Home
          </Link>
          <Link
            to="cerimony"
            spy={true}
          >
            Cerimonia
          </Link>
          <Link
            to="party"
            spy={true}
          >
            Ricevimento
          </Link>
          <Link
            to="accomodation"
            spy={true}
          >
            Alloggio
          </Link>
          <Link
            to="wedding-list"
            spy={true}
          >
            Lista nozze
          </Link>
        </Nav>
      </BNavbar>
  );
}

/*
<nav className={styles.nav} id="navbar">
      <div className={styles.navContent}>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleScrollTop}>
            Home
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass={styles.active}
              to="cerimony"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              Cerimonia
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass={styles.active}
              to="accomodation"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              Alloggio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass={styles.active}
              to="party"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              Ricevimento
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass={styles.active}
              to="wedding-list"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              Lista nozze
            </Link>
          </li>
        </ul>
      </div>
    </nav>
*/
