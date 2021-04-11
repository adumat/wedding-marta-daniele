// import { Link, animateScroll } from "react-scroll";
import { Navbar as BNavbar, Nav } from "react-bootstrap";

export default function Navbar() {
  // const handleScrollTop = () => {
  //   animateScroll.scrollToTop();
  // };
  return (
      <BNavbar style={{ backgroundColor: "rgba(255,255,255,0.8)" }} expand="lg" fixed="top" className="d-flex justify-content-center align-items-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#cerimony">Cerimonia</Nav.Link>
          <Nav.Link href="#accomodation">Alloggio</Nav.Link>
          <Nav.Link href="#party">Ricevimento</Nav.Link>
          <Nav.Link href="#wedding-list">Lista nozze</Nav.Link>
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
