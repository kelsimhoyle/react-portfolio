import React from "react";
import { Link } from "react-scroll";

const DesktopNav = () => {
return (
    <div className="nav-items">
    <li className="nav-item" >
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
  </div>
)
}

export default DesktopNav;