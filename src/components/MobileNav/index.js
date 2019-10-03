import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const MobileNav = props => {
    return (
        <div className={` nav-items ${!props.showNav ? "hide" : ""}`}>
            <li> <MdClose onClick={() => props.handleNavClick()} className="nav-control" /></li>
            <li className="nav-item" >
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => props.handleNavClick()}
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
                    onClick={() => props.handleNavClick()}
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
                    onClick={() => props.handleNavClick()}
                >
                    Contact
          </Link>
            </li>
        </div>
    )
}

export default MobileNav;