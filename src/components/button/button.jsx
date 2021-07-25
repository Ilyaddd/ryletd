import React from "react";

import "./button.sass";

export const Button = ({ value, activeValue, onClick }) => (
    <div className="btn__wrapper">
        <button onClick={onClick}>
            <div className="btn" type="submit">
                <div className="btn__default_block">
                    <span className="btn__text">{value}</span>
                </div>
                <div className="btn__active_block">
                    <img className="btn__img" src={activeValue} alt="" />
                </div>
            </div>
        </button>
    </div>
);
