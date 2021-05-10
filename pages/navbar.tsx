import { ScrollLink } from "react-scroll";
import { Navbar as BNavbar, Nav } from "react-bootstrap";
import useSiteScopeContext from "../services/useSiteScopeContext";

const Link = ScrollLink(Nav.Link);

export default function Navbar() {
  // const handleScrollTop = () => {
  //   animateScroll.scrollToTop();
  // };
  const siteScope = useSiteScopeContext();
  return (
      <BNavbar
        expand={true}
        // fixed="top"
        sticky="top"
        className="d-flex justify-content-center align-items-center navbar">
        <Nav>
          <Link
            to="home"
            spy={false}
            offset={-100}
          >
            Home
          </Link>
          <Link
            to="cerimony"
            spy={false}
          >
            Cerimonia
          </Link>
          {siteScope === 'ricevimento'
            ? <>
                <Link
                  to="party"
                  spy={false}
                >
                  Ricevimento
                </Link>
                <Link
                  to="accomodation"
                  spy={false}
                >
                  Alloggio
                </Link>
              </>
            : <Link
                to="cake"
                spy={false}
              >
                Taglio della torta
              </Link>
          }
          <Link
            to="wedding-list"
            spy={false}
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
