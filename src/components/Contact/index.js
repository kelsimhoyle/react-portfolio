import React from "react";
import { ContactButtons } from "../../styled";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { LightBackground, Heading, Blurb } from "../../styled";

const Contact = () => {
    return (
        <div id="contact">
            <Heading>contact.</Heading>                        
            <LightBackground>
            <Blurb>
                <p>I am currently taking on freelance projects, so please reach out to me with any ideas! I am also open to speaking to companies that have challening opportunities. Do not hesitate to reach out!</p>
                </Blurb>
                <ContactButtons>
                    <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener noreferrer" className="contact">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kelsihoyle" target="_blank" rel="noopener noreferrer"
                        className="contact">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:kelsimhoyle@gmail.com" target="_blank" rel="noopener noreferrer" className="contact">
                        <TiMail /> </a>
                </ContactButtons>
            </LightBackground>
        </div>
    )
}

export default Contact;