import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../CustomHooks/UseWindowDimensions";
import logo from "../../khlogo.png";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";
import { animateScroll as scroll } from "react-scroll";
import { MdMenu } from "react-icons/md";
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
          <li>{!showNav ? <MdMenu onClick={() => handleNavClick()}  className="nav-control" /> : null }</li>
        ) : null}
          {smallScreen ? <MobileNav showNav={showNav} setShowNav={setShowNav} handleNavClick={handleNavClick} /> : <DesktopNav />}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;