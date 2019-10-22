import React from "react";
import Typist from 'react-typist';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./style.scss";

const LandingPage = () => {

    return (
        <div id="landing-window">
            <div id="landing-content" >
                <h1>Hi! I am
                <Typist>
                        <span>a JavaScript developer.</span>
                        <Typist.Backspace count={23} delay={400} />
                        <span>a full-stack developer.</span>
                        <Typist.Backspace count={23} delay={400} />
                        <span>a continuous learner.</span>
                        <Typist.Backspace count={21} delay={400} />
                        <span>Kelsi.</span>
                    </Typist>
                    </h1>
                    <div className="contact-buttons bottom">
                            <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener noreferrer" className="contact">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/kelsi-hoyle-983266186/" target="_blank" rel="noopener noreferrer"
                                className="contact">
                                <FaLinkedinIn />
                            </a>
                            </div>
            </div>
            </div>
            )
        }
        
export default LandingPage;