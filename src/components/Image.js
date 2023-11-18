import React from "react";
import myImage from "../assets/rectangle-39.png"
import icon from "../assets/icons-48.png"

const Image = () => {
    return (
        <div className={'col-5'}>
            <div className="box">
                <div className={'cardImg'}>
                    <img src={myImage} className={'img'}  alt=""/>
                    <span className={'buy'}><img src={icon} width={30} alt=""/></span>
                </div>
            </div>
        </div>
    )
}

export default Image