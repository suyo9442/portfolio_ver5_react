import React from "react";
import './DiamondLine.css';

function DiamondLine() {
    return (
        <div id="diamond">
            <span className="line"></span>
            <img className="rotate-center" src={process.env.PUBLIC_URL + "/diamond.svg"} alt="diamond" />
            <span className="line"></span>
        </div>
    )
}

export default DiamondLine;