import React from "react";
import { DarkBackground, Heading, PortfolioFlex } from "../../styled";
import portfolioData from "../../portfolioData";
import Project from "../Project";

const Portfolio = () => {

    return (
        <div id="portfolio">
        <Heading>portfolio.</Heading>
       <DarkBackground>
                <PortfolioFlex id="portfolio-items">
                    {portfolioData.map(project => <Project key={project.name} name={project.name} image={project.image} deployed={project.deployed} github={project.github} description={project.description} background={project.background} />)}
                </PortfolioFlex>
            </DarkBackground>
            </div>

    )
}

export default Portfolio;