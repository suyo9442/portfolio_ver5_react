import React from "react";
import './Skills.css';
import DiamondLine from '../component/DiamondLine';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Skills() {
    return (
        <div id="skills" className="section">
            <div className="container">
                <div className="row">
                    <DiamondLine />
                    <article id="subject2">
                        <div className="wrap shadow2">
                            <div className="list list1">
                                <span>Skills&nbsp;</span>
                                <span><img src={process.env.PUBLIC_URL + "/play.png"} alt="play" /></span>
                            </div>
                            <div className="list list2">Level</div>
                        </div>
                    </article>
                    <article id="skillCont">
                        <ul>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/html.png"} alt="html" />
                                </div>
                                <div className="desc">
                                    <p>웹표준성과 웹접근성을 고려하여 마크업합니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>95%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/css.png"} alt="css" />
                                </div>
                                <div className="desc">
                                    <p>크로스브라우징을 고려한 스타일시트를 작성합니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>95%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/js.png"} alt="js" />
                                </div>
                                <div className="desc">
                                    <p>JS의 기초 지식과 객체지향에 대한 개념을 파악하고 활용합니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>90%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/react.png"} alt="react" />
                                </div>
                                <div className="desc">
                                    <p>UI를 컴포넌트 단위 별로 관리하여 사용성을 높입니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>85%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/nodejs.png"} alt="renodejsact" />
                                </div>
                                <div className="desc">
                                    <p>데이터베이스와 연동하여 서버가 필요한 서비스를 제작합니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>85%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/github.png"} alt="github" />
                                </div>
                                <div className="desc">
                                    <p>기록과 협업을 위해 Github를 적극적으로 활용합니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>90%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/photoshop.png"} alt="photoshop" />
                                </div>
                                <div className="desc">
                                    <p>웹 서비스에 활용할 UI를 직접 구성할 수 있습니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>90%</p>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/xd.png"} alt="xd" />
                                </div>
                                <div className="desc">
                                    <p>기본적인 웹 기획을 위해 디자인툴을 사용할 수 있습니다.</p>
                                    <span>
                                        <em></em>
                                    </span>
                                </div>
                                <div className="percent">
                                    <p>95%</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <PrevBtn dataId={"1"} />
                    <NextBtn dataId={"3"} />
                </div>
            </div>
        </div>
    )
}

export default Skills;
