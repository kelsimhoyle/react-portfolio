import React from "react";
import { PortfolioItem, PortfolioParent } from "../../styled";

const Project = ({ name, deployed, github, image, description, background }) => {

    return (
        <PortfolioParent>
        <PortfolioItem background={background} >
        <div className="darkBg">
        <h4>{name}</h4>

        <div className="content">
            {/* <img src={image} alt={name} /> */}
            <p>{description}</p>
            <p>
            <a href={github} target="_blank" rel="noopener noreferrer">
                View code on Github.
            </a>
            </p>
            <p>
            <a href={deployed} target="_blank" rel="noopener noreferrer">
                Check it out!
            </a>
            </p>
            </div>
            </div>
        </PortfolioItem>
        
        </PortfolioParent>
    )
}

export default Project;