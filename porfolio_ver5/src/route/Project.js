import React from "react";
import './Project.css';
import DiamondLine from '../component/DiamondLine';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Project() {
    return (
        <div id="project" className="section">
            <div className="container">
                <div className="row">
                    <DiamondLine />
                    <article id="projectList" className="sec contBox shadow">
                        <div className="tit">PROJECTS</div>
                        <ul className="proj_wrap">
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por3.png"} alt="Droptop" />
                                </div>
                                <div className="desc">
                                    <strong>감사일기</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#NodeJS</li>
                                        <li>#MongDB</li>
                                        <li>#바닐라JS</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 발행/수정/삭제 기능을 구현한 일기 프로그램</p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="#">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por0.png"} alt="Sidmool" />
                                </div>
                                <div className="desc">
                                    <strong>시드물</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#SASS</li>
                                        <li>#크로스브라우징</li>
                                        <li>#데이터바인딩</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 검색기능, 데이터 바인딩을 구현한 리뉴얼 사이트</p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/Sidmool/" target="_blank">SITE</a></li>
                                        <li><a href="/sidmool.pdf" download>PROCESS</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por5.png"} alt="Portfolio" />
                                </div>
                                <div className="desc">
                                    <strong>포트폴리오</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#반응형</li>
                                        <li>#메타태그</li>
                                        <li>#디자인</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 직접 디자인한 반응형 포트폴리오 사이트</p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/portfolio_ver4.02/" target="_blank">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por1.png"} alt="Megabox" />
                                </div>
                                <div className="desc">
                                    <strong>메가박스</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#반응형</li>
                                        <li>#메타태그</li>
                                        <li>#HTML5</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 반응형을 고려한 메가박스 클론 사이트</p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/megabox_site/" target="_blank">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por2.png"} alt="Gentium" />
                                </div>
                                <div className="desc">
                                    <strong>젠티움</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#바닐라JS</li>
                                        <li>#HTML5</li>
                                        <li>#CSS3</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 스크롤, 슬라이드 애니메이션 직접 구현</p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/gentium/" target="_blank">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por4.png"} alt="weltree" />
                                </div>
                                <div className="desc">
                                    <strong>웰트리</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#HTML5</li>
                                        <li>#CSS3</li>
                                        <li>#Jquery</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 기본 웹퍼블리싱을 고려한 리뉴얼 사이트 </p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/weltree_renewal/" target="_blank">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="shadow2">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + "/por3.png"} alt="Droptop" />
                                </div>
                                <div className="desc">
                                    <strong>드롭탑</strong>
                                </div>
                                <span className="frongBg">
                                </span>
                                <div id="explain">
                                    <ul className="tag">
                                        <li>#HTML5</li>
                                        <li>#CSS3</li>
                                        <li>#Jquery</li>
                                    </ul>
                                    <div className="desc">
                                        <p>📌 개인작업 100%</p>
                                        <p>📌 기본 웹퍼블리싱을 고려한 리뉴얼 사이트 </p>
                                    </div>
                                    <ul className="btns">
                                        <li><a href="https://suyo9442.github.io/droptop_renewal/" target="_blank">SITE</a></li>
                                        {/* <li><a href="#">PROCESS</a></li> */}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <PrevBtn dataId={"3"} />
                    <NextBtn dataId={"5"} />
                </div>
            </div>
        </div>
    )
}

export default Project;