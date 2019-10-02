import React from "react";
import { MdTerrain, MdWhatshot, MdTrendingUp } from "react-icons/md";
import "./style.scss";

const About = () => {
    return (
        <div id="about">
            <div className="content">
                <h2>About Me</h2>
                <ul>
                    <li className="describe">
                        <MdWhatshot className="list-icon" />
                        <h5>Passionate</h5>
                        <p>I invest myself in projects and building my knowledge.</p>
                    </li>
                    <li className="describe">
                        <MdTerrain className="list-icon" />
                        <h5>Adventerous</h5>
                        <p>I am in my element when I am facing a challenging problem.</p>
                    </li>
                    <li className="describe">
                        <MdTrendingUp className="list-icon" />
                        <h5>Always Growing</h5>
                        <p>I actively seek opportunities to broaden my knowledge and skills.</p>
                    </li>
                </ul>
                <div className="content">
                    <div className="clearfix">
                        <div className="float-right">
                            <img src="images/portrait.jpg" alt="portrait" class="portrait" />
                        </div>
                        <div className="float-left">
                            <p>I am a full stack web developer with a background in education. I started coding as a
                                hobby, and it quickly turned into a passion. I jumped into the field of web devolopment
                                because I love challenges and learning. I am always looking for ways to grow!</p>
                            <h4>Technologies:</h4>
                            <p>HTML5, CSS3, BootStrap, Materialize, JavaScript, JQuery, MySQL, Node.js, Express,
                                Sequelize, Handlebars Templating, and always adding more to my skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default About;