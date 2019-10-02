import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = () => {
// const  scrollToTop = () => {
//     scroll.scrollToTop();
//   };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;