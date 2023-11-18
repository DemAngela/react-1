import React from "react";
import fullStar from "../assets/star-solid-24.png"
import star from "../assets/star-regular-24.png"

const Rating = () => {
    return (
        <span className={'star'}>
            <img src={fullStar} alt=""/>
            <img src={fullStar} alt=""/>
            <img src={fullStar} alt=""/>
            <img src={fullStar} alt=""/>
            <img src={star} alt=""/>
        </span>
    )
}

export default Rating