import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TiMail } from "react-icons/ti";


const Contact = () => {
    return(
        <div id="contact">
                    <div className="content">
                        <h2>Contact</h2>
                        <p>If you have any questions, suggestions, or proposals for me, please reach out!</p>
                        <div className="contact-buttons">
                            <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener" class="contact">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/kelsi-hoyle-983266186/" target="_blank" rel="noopener"
                                class="contact">
                                <FaLinkedinIn />
                            </a>
                            <a href="mailto:kelsimhoyle@gmail.com" target="_blank" rel="noopener" class="contact">
                            <TiMail /> </a>
                        </div>
                    </div>
                </div>
    )
}

export default Contact;