import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import logo from "../../khlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.scss";


const Nav = () => {
const  scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isSmaller, setSmaller] = useState(false)

  function useScroll() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();
  
    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "up" : "down");
      setLastScrollTop(-bodyOffset.top);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
  
    return {
      scrollY,
      scrollX,
      scrollDirection
    };
  }

  const { scrollDirection } = useScroll();

  useEffect(() => {
    if (scrollDirection === "down") setSmaller(true);
    if (scrollDirection === "up") setSmaller(false);
  }, [scrollDirection])

  return (
    <nav className={`nav ${isSmaller ? ' small' : "large"}`} id="navbar">
      <div className="nav-content">
      <img src={logo} alt="Kelsi Hoyle" onClick={scrollToTop} className="logo" />
        <ul className="nav-items float-right">
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
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;