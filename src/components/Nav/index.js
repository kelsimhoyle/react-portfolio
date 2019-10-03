import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../CustomHooks/UseWindowDimensions";
import logo from "../../khlogo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";
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


  const { width } = useWindowDimensions();
  const [smallScreen, setSmallScreen] = useState(false);


  const [showNav, setShowNav] = useState(false);
  const handleNavClick = () => {
    if(smallScreen) {
      setShowNav(showNav => !showNav)
    }
  }

  useEffect(() => {
    if (width < 768) {
      setSmallScreen(true)
    } else if (width > 768){
        setSmallScreen(false)
    }
}, [width, smallScreen])

  return (
    <nav 
    className={`nav ${isSmaller ? ' small' : "large"} ${smallScreen ? "small-screen" : ""}`}
     id="navbar">
      <div className="nav-content">
      <img src={logo} alt="Kelsi Hoyle" onClick={scrollToTop} className="logo" />
      
        <ul className={` ${smallScreen ? ""  : "float-right"} `}>
        {smallScreen ? (
          <li>{!showNav ? <MdMenu onClick={() => handleNavClick()}  className="nav-control" /> : <MdClose onClick={() => handleNavClick()} className="nav-control" />}</li>
        ) : null}
        <div className={` nav-items ${!showNav ? "hide" : ""}`}>
          <li className="nav-item" >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick()}
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
              onClick={() => handleNavClick()}
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
              onClick={() => handleNavClick()}
            >
              Contact
            </Link>
          </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;