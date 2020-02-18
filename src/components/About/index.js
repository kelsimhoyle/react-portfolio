import React from "react";
import { Heading, LightBackground, Blurb, ClearFix, FloatLeft, FloatRight } from "../../styled"

const About = () => {
    return (
        <div id="about">
            <Heading>about me.</Heading>
            <LightBackground>
                <ClearFix>
                    <FloatRight>
                        <img src="images/portrait.jpg" alt="portrait" style={{ width: "100%", height: "auto" }} />
                    </FloatRight>
                    <FloatLeft>
                        <Blurb>
                            <h4>Educator turned developer.</h4>
                            <p>I am a full stack web developer with a background in education. I jumped into the field of web devolopment
                                because I love challenges and learning, and there isn't a better place for me to be! I spend most of my days working on my side projects. I also enjoy volunteering with Code for Denver and working on civic projects.</p>
                            <p>I am in my element when I am being challenged. I also love to lean a little into my education background and teach my new skills to my friends!</p>
                        </Blurb>
                        <Blurb>
                            <h4>Technologies:</h4>
                            <p>JavaScript, TypeScript, Node, React, React Hooks,  HTML5, CSS3, BootStrap, Materialize, JQuery, Express, MySQL, MongoDB, NoSQL,
                                Sequelize, GraphQL, Apollo, Handlebars Templating, and always adding more to my skills. I am currently learning GoLang!</p>
                        </Blurb>
                    </FloatLeft>
                </ClearFix>
            </LightBackground>

        </div>
    )
}

export default About;