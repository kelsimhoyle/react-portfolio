import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import "./style.scss"

const Contact = () => {
    return(
        <div id="contact">
                    <div className="content contact-content">
                        <h2>Contact</h2>
                        <p>I am currently taking on freelance projects, so please reach out to me with any ideas! I am also open to speaking to companies that have challening opportunities. Do not hesitate to reach out!</p>
                        <div className="contact-buttons">
                            <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener noreferrer" className="contact">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/kelsi-hoyle-983266186/" target="_blank" rel="noopener noreferrer"
                                className="contact">
                                <FaLinkedinIn />
                            </a>
                            <a href="mailto:kelsimhoyle@gmail.com" target="_blank" rel="noopener noreferrer" className="contact">
                            <TiMail /> </a>
                        </div>
                    </div>
                </div>
    )
}

export default Contact;