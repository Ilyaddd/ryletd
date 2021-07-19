import React from "react";

import "./button.sass";

export const Button = ({ defaultValue, activeValue, onClick }) => (
    // <div className="btn__wrapper">
    //     <button className="btn" type="submit" onClick={onClick}>
    //         {value}
    //     </button>
    // </div>
    <div className="btn__wrapper">
        <button className="btn btn" type="submit" onClick={onClick}>
            <div className="btn__default_block">
                <span className="btn__text">{defaultValue}</span>
            </div>
            <div className="btn__active_block">
                <img className="btn__img" src={activeValue} alt="" />
            </div>
        </button>
    </div>
);
