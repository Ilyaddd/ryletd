import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { setMessageboxDefault } from "../../store/messagebox/actions";

import errorIcon from "./assets/error.svg";
import successIcon from "./assets/success.svg";
import "./messagebox.sass";

export const Messagebox = () => {
    const dispatch = useDispatch();
    const { isSuccess, isError, messageText } = useSelector(
        (state) => state.messagebox
    );

    const isActive = isSuccess || isError;
    const onSetMessageBoxDisable = () => dispatch(setMessageboxDefault());

    useEffect(() => {
        if (isActive) {
            setTimeout(() => onSetMessageBoxDisable(), 4000);
        }
    }, [isActive]);

    return isActive ? (
        <div
            className={classNames("messagebox__wrapper", {
                success: isSuccess,
                error: isError,
            })}
            onClick={onSetMessageBoxDisable}
            aria-hidden
        >
            <div className="messagebox">
                <img
                    className="messagebox__img"
                    src={isSuccess ? successIcon : errorIcon}
                    alt="error"
                />
                <p className="messagebox__text">{messageText}</p>
            </div>
        </div>
    ) : null;
};
