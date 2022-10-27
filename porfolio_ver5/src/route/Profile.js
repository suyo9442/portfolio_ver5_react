import React, { useState } from "react";
import './Profile.css';
import { PrevBtn, NextBtn } from '../component/SliderBtn'

function Profile() {
    // let [dataNum, setDataNum] = useState(0);

    return (
        <div id="profile" className="section">
            <div className="container">
                <div className="row">
                    <div id="profileCont" className="contBox shadow1">
                        <div className="cont_img">
                            <img className="cont_diamond" src='/diamondgif.gif' alt="diamond" />
                            <div className="imgBg">
                                <img src='/profile.png' alt="profile" />
                            </div>
                        </div>
                        <div className="cont_desc">
                            <p className="p-1">
                                Sim's name is . . .
                                <span style={{ display: "block" }}>kim soo</span>
                            </p>
                            <p className="p-2">
                                Soon to be a
                                <span style={{ display: "block" }}>web developer👩‍💻</span>
                            </p>
                            <p className="p-3">Korea born and raised in Seoul🌆</p>
                            <ul className="can">
                                <li className="she">She can&nbsp;</li>
                                <li>#Publishing</li>
                                <li>#VanilaJS</li>
                                <li>#NodeJS</li>
                                <li>#React</li>
                            </ul>
                            <ul className="is">
                                <li className="she">She is&nbsp;</li>
                                <li>#Honest</li>
                                <li>#Responsive</li>
                                <li>#Creative</li>
                                <li>#Kind</li>
                            </ul>
                        </div>
                        {/* <button className="next shadow3" data-id='1' type="button">next</button> */}
                        <NextBtn dataId={"1"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;