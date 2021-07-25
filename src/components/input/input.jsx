import React, { useState } from "react";

import "./input.sass";

export const Input = ({
    title,
    value,
    name,
    placeholder = "",
    onFieldChange,
}) => {
    const [inputValue, setValue] = useState(value || "");

    return (
        <div className="input__wrapper">
            <h3 className="input__title">{title}</h3>
            <input
                name={name}
                type="text"
                value={inputValue}
                className="input"
                onChange={(e) => {
                    onFieldChange(e.target.value);
                    setValue(e.target.value);
                }}
                placeholder={placeholder}
                autoComplete="off"
            />
        </div>
    );
};
