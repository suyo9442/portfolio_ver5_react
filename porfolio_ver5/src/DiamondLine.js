import React from "react";
import './DiamondLine.css';

function DiamondLine() {
    return (
        <article id="diamond">
            <span class="line"></span>
            <img src={process.env.PUBLIC_URL + "/diamond.svg"} className="rotate-center" />
            <span class="line"></span>
        </article>
    )
}

export default DiamondLine;