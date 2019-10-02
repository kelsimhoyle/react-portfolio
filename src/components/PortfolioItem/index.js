import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "./style.scss";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(0deg) rotateY(0deg) scale(${s})`

const PortfolioItem = props => {
    const [flipped, setFlipped] = useState(false)
    const [properties, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20, clamp: true } }))
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: properties.xys.interpolate(trans) }}>

                {flipped ? <animated.div className="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    <a href={props.deployed}>Deployed</a>
                    <a href={props.github}>Github</a>
                    <MdExpandLess onClick={() => setFlipped(flipped => !flipped)} className="control" />
                </animated.div> 
                :
                <animated.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                    <h5>{props.name}</h5>
                    <img src={props.image} alt={props.name} />
                    <MdExpandMore onClick={() => setFlipped(flipped => !flipped)} className="control" />
                </animated.div> }
        </animated.div>
    )
}

export default PortfolioItem;