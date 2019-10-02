import React from "react";

const LandingPage = () => {
    return(
        <>
        <div id="landing-content" >
            <h2>Hi! I am <span id="i-am"></span></h2>
            <ul id="nav">
                <li className="info" data-type="about">Who am I?</li>
                <li className=" info" data-type="portfolio">What do I do?</li>
                <li className="info" data-type="contact">Get more info!</li>
            </ul>
    </div >
    </>
    )
}

export default LandingPage;