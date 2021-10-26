import React from "react";
import classnames from "classnames";

import "./input.sass";

export const Input = ({
    title,
    value,
    name,
    placeholder = "",
    onFieldChange = () => {},
    className,
    readonly,
}) => {
    const onChange = (e) => onFieldChange(e.target.value);
    const onFocus = (e) => e.target.select();

    return (
        <div className="input__wrapper">
            <h3 className="input__title">{title}</h3>
            <input
                name={name}
                type="text"
                value={value || ""}
                className={classnames("input", className)}
                onChange={onChange}
                onFocus={onFocus}
                placeholder={placeholder}
                autoComplete="off"
                readOnly={readonly}
            />
        </div>
    );
};
