import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMessageBoxDefault } from "../../store/messagebox/actions";

import errorIcon from "./assets/error.svg";
import "./messagebox.sass";

export const Messagebox = () => {
    const dispatch = useDispatch();
    const { isActive, messageText } = useSelector((state) => state.messagebox);

    const onSetMessageBoxDisable = () => dispatch(setMessageBoxDefault());

    useEffect(() => {
        if (isActive) {
            setTimeout(() => onSetMessageBoxDisable(), 4000);
        }
    }, [isActive]);

    return isActive ? (
        <div
            className="messagebox__wrapper"
            onClick={onSetMessageBoxDisable}
            aria-hidden
        >
            <div className="messagebox">
                <img className="messagebox__img" src={errorIcon} alt="error" />
                <p className="messagebox__text">{messageText}</p>
            </div>
        </div>
    ) : null;
};
