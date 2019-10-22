import React from "react";
import "./style.scss";
import { MdPlace } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <p>Kelsi Hoyle 2019</p>
            <p><MdPlace />Denver, Colorado</p>
            <p className="italics">Created with the help lots of coffee. React.js, with React Hooks, some fun Spring.js animation, and deployed on AWS.</p>
        </footer>
    )
}

export default Footer;