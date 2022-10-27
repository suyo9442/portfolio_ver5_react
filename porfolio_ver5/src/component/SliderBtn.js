import React from "react";
import './SliderBtn.css';
import App from '../App';



function PrevBtn(dataId) {
    const prevFunc = (e) => {
        e.preventDefault();
        const wrap = document.querySelector('#wrap');
        let order = parseInt(dataId.dataId);
        let moveX = -100;
        let moving = order * moveX;

        wrap.style.transform = `translateX(${moving}%)`
    }
    return (
        <input
            className="prev"
            data-id={dataId}
            type="button"
            value="prev"
            onClick={prevFunc}
        />
    )
}

function NextBtn(dataId) {
    const nextFunc = (e) => {
        e.preventDefault();
        const wrap = document.querySelector('#wrap');
        let order = parseInt(dataId.dataId);
        let moveX = -100;
        let moving = order * moveX;

        wrap.style.transform = `translateX(${moving}%)`
    }
    return (
        <input
            className="next"
            data-id={dataId}
            type="button"
            value="next"
            onClick={nextFunc}
        />
    )
}

export { PrevBtn, NextBtn };
