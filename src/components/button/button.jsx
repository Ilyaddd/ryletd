import React from "react";

import "./button.sass";

export const Button = ({ value, onClick }) => (
    <div className="btn__wrapper">
        <button className="btn" type="submit" onClick={onClick}>
            {value}
        </button>
    </div>
);
