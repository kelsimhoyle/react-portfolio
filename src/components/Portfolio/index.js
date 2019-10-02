import React from "react";
import PortfolioItem from "../PortfolioItem";
import portfolioData from "../../portfolioData";
import "./style.scss";

const Portfolio = () => {

    return (
        <div id="portfolio-display">
        <div className="content">
            <div id="portfolio">
                <h2>Portfolio</h2>
                <div id="portfolio-items">
                    {portfolioData.map(project => <PortfolioItem key={project.name} name={project.name} image={project.image} deployed={project.deployed} github={project.github} description={project.description} />)}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;