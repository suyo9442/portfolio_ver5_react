import React from "react";
import './Experience.css';
import DiamondLine from '../component/DiamondLine';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Experience() {

    return (
        <div id="experience" className="section">
            <div className="container">
                <div className="row">
                    <DiamondLine />
                    <article id="experCont">
                        <div className="education">
                            <div id="subject">
                                <h2 className="subBundle">
                                    <span className="circle shadow2"><em></em></span>
                                    <span className="title shadow2">Educations...</span>
                                </h2>
                            </div>
                            <ul>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Book.png"} alt="고등학교" />
                                    <strong>Lincoln High School</strong>
                                    <p>2009.02 - 2012.02</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/line.svg"} alt="line" />
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Book.png"} alt="대학교" />
                                    <strong>Myungji UNIV.</strong>
                                    <p>2012.02 - 2017.08</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/line2.svg"} alt="line" />
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Homework.png"} alt="웹퍼블리싱" />
                                    <strong>웹퍼블리싱 기초역량</strong>
                                    <p>2020.06 - 2020.11</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/line.svg"} alt="line" />
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Homework.png"} alt="UIUX" />
                                    <strong>UIUX 스페셜리스트</strong>
                                    <p>2021.12 - 2022.03</p>
                                </li>
                            </ul>
                        </div>
                        <div className="work">
                            <div id="subject">
                                <h2 className="subBundle">
                                    <span className="circle shadow2"><em></em></span>
                                    <span className="title shadow2">Work Experience...</span>
                                </h2>
                            </div>
                            <ul>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Briefcase.png"} alt="Work" />
                                    <strong>해맑은동물병원</strong>
                                    <p>2017.08 - 2018.02</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/line.svg"} alt="line" />
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/Briefcase5.png"} alt="Work" />
                                    <strong>호박앤컴퍼니</strong>
                                    <p>2021.03 - 2021.05</p>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/line2.svg"} alt="line" />
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/HelpingHands.png"} alt="Work" />
                                    <strong>Your Co-worker☺️</strong>
                                    <p>2022 - </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <PrevBtn dataId={"0"} />
                    <NextBtn dataId={"2"} />
                </div>
            </div>
        </div>
    )
}

export default Experience;