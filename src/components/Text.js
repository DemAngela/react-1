import React from "react";
import Price from "./Price";
import Rating from "./Rating";

const Text = () =>  {
    return (
        <div className={'col-7'}>
            <div className={'box'}>
                <div className={'wrapperText'}>
                    <h1>Always in style!</h1>
                    <p>The standard chunk of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel neque.</p>
                    <Price />
                    <Rating />
                </div>

            </div>
        </div>
    )
}

export default Text