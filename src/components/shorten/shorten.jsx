import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../input";
import { Button } from "../button";

import { shortenRequest } from "../../store/link/actions";
import { setMessageboxSuccess } from "../../store/messagebox/actions";
import { checkIsLink } from "../../utils/check-is-link";

import copyImg from "./assets/arrow.svg";
import shortenImg from "./assets/arrow.svg";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
    const { redirectLink } = useSelector((state) => state.link);
    const [originalLink, setOriginalLink] = useState(null);

    // Сокращение оригинальной ссылки
    const onShorten = (e) => {
        e.preventDefault();
        if (checkIsLink(originalLink)) {
            dispatch(shortenRequest(originalLink));
        }
    };

    // Копироание короткой ссылки
    const onCopy = (e) => {
        e.preventDefault();
        dispatch(setMessageboxSuccess());
    };

    return (
        <section className="section">
            <Input
                title="Shorten link"
                value={originalLink}
                onFieldChange={setOriginalLink}
            />
            {redirectLink ? (
                <>
                    <Input
                        value={`http://localhost:5555/${redirectLink}`}
                        readOnly={true}
                        className="animate"
                    />
                    <Button
                        value="Copy"
                        activeValue={copyImg}
                        onClick={onCopy}
                    />
                </>
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
