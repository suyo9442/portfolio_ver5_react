import React from "react";
import './Favorability.css';
import DiamondLine from '../component/DiamondLine';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Favorability() {
    return (
        <div id="favorability" className="section">
            <div className="container">
                <div className="row">
                    <DiamondLine />
                    <article id="hobbies" className="sec contBox shadow">
                        <div className="tit">hobbies</div>
                        <ul className="content_wrap">
                            <li>
                                <span>
                                    <img src={process.env.PUBLIC_URL + "/Popcorn.png"} alt="movies" />
                                </span>
                                <strong>Watching Movies</strong>
                            </li>
                            <li>
                                <span>
                                    <img src={process.env.PUBLIC_URL + "/VideoGameController.png"} alt="games" />
                                </span>
                                <strong>Playing Mobile Games</strong>
                            </li>
                            <li>
                                <span>
                                    <img src={process.env.PUBLIC_URL + "/FryingPanEggs.png"} alt="cooking" />
                                </span>
                                <strong>Cooking</strong>
                            </li>
                            <li>
                                <span>
                                    <img src={process.env.PUBLIC_URL + "/Palette.png"} alt="drawing" />
                                </span>
                                <strong>Drawing</strong>
                            </li>
                        </ul>
                    </article>
                    <article id="favor" className="sec contBox shadow">
                        <div className="tit">likes / dislikes</div>
                        <div className="content_wrap">
                            <div className="content">
                                <div className="like favor">
                                    <div className="thumbs thumbs1">
                                        <p>👍</p>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li><img src={process.env.PUBLIC_URL + "/Cat.png"} alt="Cat" /></li>
                                            <li><img src={process.env.PUBLIC_URL + "/Penguin.png"} alt="Penguin" /></li>
                                            <li><img src={process.env.PUBLIC_URL + "/SproutSoil.png"} alt="Nature" /></li>
                                            <li><img src={process.env.PUBLIC_URL + "/Palette.png"} alt="drawing" /></li>
                                            <li className="plus1"><img src={process.env.PUBLIC_URL + "/plus.svg"} alt="add" /></li>
                                            <li className="plus1"><img src={process.env.PUBLIC_URL + "/plus.svg"} alt="add" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dislike favor">
                                    <div className="thumbs thumbs2">
                                        <p>👎</p>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li><img src={process.env.PUBLIC_URL + "/BeetleRed.png"} alt="BeetleRed" /></li>
                                            <li><img src={process.env.PUBLIC_URL + "/Treasure.png"} alt="Treasure" /></li>
                                            <li className="plus2"><img src={process.env.PUBLIC_URL + "/plus.svg"} alt="add" /></li>
                                            <li className="plus2"><img src={process.env.PUBLIC_URL + "/plus.svg"} alt="add" /></li>
                                            <li className="plus2"><img src={process.env.PUBLIC_URL + "/plus.svg"} alt="add" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <PrevBtn dataId={"2"} />
                    <NextBtn dataId={"4"} />
                </div>
            </div>
        </div>
    )
}

export default Favorability;