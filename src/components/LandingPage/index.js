import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ContactButtons, LandingContent } from "../../styled";
import { Parallax } from "react-parallax";
import image from "../../images/bg.jpg"
import self from "../../images/self.JPG"

const LandingPage = () => {

    return (

        <Parallax
            bgImage={image}
            strength={400}
            bgImageSizes="100%"
        >
            <div style={{ height: "100vh", width: "100vw" }}>
                <LandingContent id="landing-content" >
                    <div style={{
                        position: "relative", left: '50%',
                        top: '40%',
                        transform: "translate(-50%,-50%)",
                        width: "300px",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h1 style={{
                            position: "absolute",
                            top: "-1%"
                        }}>Hi! I am Kelsi!</h1>
                        <img src={self} alt="Kelsi" style={{ width: "auto", height: "250px", borderRadius: "50%", margin: "auto" }} />
                        <h4 style={{
                            position: "absolute",
                            bottom: "2%"
                        }}>Full-Stack Web Developer.</h4>
                    </div>

                    <ContactButtons className="bottom">
                        <a href="https://github.com/kelsimhoyle" target="_blank" rel="noopener noreferrer" className="contact">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kelsi-hoyle-983266186/" target="_blank" rel="noopener noreferrer"
                            className="contact">
                            <FaLinkedinIn />
                        </a>
                    </ContactButtons>
                </LandingContent>
            </div>

        </Parallax>
    )
}

export default LandingPage;