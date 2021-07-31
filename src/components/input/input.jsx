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
    isFocus,
}) => {
    return (
        <div className="input__wrapper">
            <h3 className="input__title">{title}</h3>
            <input
                name={name}
                type="text"
                value={value || ""}
                className={classnames("input", className)}
                onChange={(e) => {
                    onFieldChange(e.target.value);
                }}
                placeholder={placeholder}
                autoComplete="off"
                readOnly={readonly}
            />
        </div>
    );
};
