import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Nav, CircleBg, Quarter, NavItems } from "../../styled";
import { useSpring, animated as a } from "react-spring";

import { Link } from "react-scroll";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const contentProps = useSpring({
        opacity: showNav ? 1 : 0,
        marginTop: showNav ? 0 : -500
    });

    return (
        <>
            <Nav>
                {!showNav ? (
                    <CircleBg>
                        <MdMenu onClick={() => setShowNav(!showNav)} />
                    </CircleBg>
                ) : (
                        <a.div style={contentProps}>
                            <MdClose onClick={() => setShowNav(!showNav)} />
                            <NavItems>
                                <ul>

                                    <li className="nav-item" >
                                        <Link
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => setShowNav(!showNav)
                                            }
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
                                            onClick={() => setShowNav(!showNav)
                                            }
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
                                            onClick={() => setShowNav(!showNav)
                                            }
                                        >
                                            Contact
          </Link>
                                    </li>
                                </ul>
                            </NavItems>
                        </a.div>
                    )}

            </Nav>
            {showNav ? (<Quarter />) : null}
        </>
    )
}

export default NavBar;