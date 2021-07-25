import React from "react";
import classnames from "classnames";

import "./input.sass";

export const Input = ({
    title,
    value,
    name,
    placeholder = "",
    onFieldChange,
    className,
    readonly,
}) => {
    return (
        <div className="input__wrapper">
            <h3 className="input__title">{title}</h3>
            <input
                name={name}
                type="text"
                value={value}
                className={classnames("input", className)}
                onChange={(e) => {
                    onFieldChange(e.target.value);
                }}
                placeholder={placeholder}
                autoComplete="off"
                readonly={readonly}
            />
        </div>
    );
};
