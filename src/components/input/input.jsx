import React, { useState } from "react";

import "./input.sass";

export const Input = ({ value, name, placeholder = "", onFieldChange }) => {
    const [inputValue, setValue] = useState(value);

    return (
        <div class="input__wrapper">
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
                autocomplete="off"
            />
        </div>
    );
};
