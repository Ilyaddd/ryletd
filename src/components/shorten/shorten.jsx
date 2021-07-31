import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../input";
import { Button } from "../button";

import { shortenRequest } from "../../store/link/actions";
import {
    setMessageboxSuccess,
    setMessageboxFailture,
} from "../../store/messagebox/actions";
import { values } from "../../store/messagebox/values";
import { checkIsLink } from "../../utils/check-is-link";

import copyImg from "./assets/copy.svg";
import shortenImg from "./assets/arrow.svg";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
    const { redirectLink } = useSelector((state) => state.link);
    const [originalLink, setOriginalLink] = useState(null);
    const [isCopy, setIsCopy] = useState(false);

    const onChengeLink = (text) => {
        setOriginalLink(text);
        setIsCopy(false);
    };

    // Сокращение оригинальной ссылки
    const onShorten = (e) => {
        e.preventDefault();
        if (checkIsLink(originalLink)) {
            dispatch(shortenRequest(originalLink));
            setIsCopy(true);
        } else {
            dispatch(setMessageboxFailture(values.incorrect));
        }
    };

    // Копироание короткой ссылки
    const onCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(`http://localhost:5555/${redirectLink}`);
        dispatch(setMessageboxSuccess(values.copied));
    };

    return (
        <section className="section">
            <Input
                title="Shorten link"
                value={originalLink}
                onFieldChange={onChengeLink}
                isFocus
            />
            {redirectLink && (
                <Input
                    value={`http://localhost:5555/${redirectLink}`}
                    readOnly
                    className="animate"
                />
            )}
            {isCopy ? (
                <Button value="Copy" activeValue={copyImg} onClick={onCopy} />
            ) : (
                <Button
                    value="Shorten"
                    activeValue={shortenImg}
                    onClick={onShorten}
                />
            )}
        </section>
    );
};
