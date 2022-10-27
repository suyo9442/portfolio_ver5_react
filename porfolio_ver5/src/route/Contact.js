import React from "react";
import './Contact.css';
import DiamondLine from '../component/DiamondLine';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Contact() {
    return (
        <div id="contact" className="section">
            <div className="container">
                <div className="row">
                    <DiamondLine />
                    <article id="contactCenter" className="sec contBox shadow">
                        <img className="cont_profile" src={process.env.PUBLIC_URL + "/profile2.png"} alt="profile" />
                        <img className="cont_diamond" src={process.env.PUBLIC_URL + "/diamondgif.gif"} alt="diamond" />

                        <div className="contact_menu">
                            <div id="subject" className="m_set m_left m1">
                                <a className="subBundle" href="mailto:suyo7798@gmail.com">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/mail.png"} alt="mail" style={{ maxWidth: "90%" }} />
                                    </span>
                                    <span className="title shadow2">Send Mail...</span>
                                </a>
                            </div>
                            <div id="subject" className="m_set m_left m2">
                                <a className="subBundle" href="https://fancy-note.tistory.com/" target="_blank">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/tstroy.png"} alt="blog" style={{ maxWidth: "110%" }} />
                                    </span>
                                    <span className="title shadow2">Visit Blog...</span>
                                </a>
                            </div>
                            <div id="subject" className="m_set m_left m3">
                                <a className="subBundle" href="https://github.com/suyo9442" target="_blank">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/github_contact.png"} alt="github" style={{ maxWidth: "110%" }} />
                                    </span>
                                    <span className="title shadow2">Visit Github...</span>
                                </a>
                            </div>
                            <div id="subject" className="m_set m_right m4">
                                <a className="subBundle">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/thumbsUp.png"} alt="like" style={{ maxWidth: "120%" }} />
                                    </span>
                                    <span className="title shadow2">Like !</span>
                                </a>
                            </div>
                            <div id="subject" className="m_set m_right m5">
                                <a className="subBundle" href="https://www.instagram.com/_soo__life_/" target="_blank">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/instagram.png"} alt="instagram" style={{ maxWidth: "90%" }} />
                                    </span>
                                    <span className="title shadow2">Visit Instagram...</span>
                                </a>
                            </div>
                            <div id="subject" className="m_set m_right m6">
                                <a className="subBundle">
                                    <span className="circle">
                                        <img className="cont_icon" src={process.env.PUBLIC_URL + "/comment.png"} alt="comment" />
                                    </span>
                                    <span className="title shadow2">Leave A Comment...</span>
                                </a>
                            </div>
                        </div>
                    </article>
                    <PrevBtn dataId={"4"} />
                </div>
            </div>
        </div>
    )
}

export default Contact;
