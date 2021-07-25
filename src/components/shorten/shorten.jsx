import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../input";
import { Button } from "../button";

import { shortenRequest } from "../../store/link/actions";
import { checkIsLink } from "../../utils/check-is-link";

import btnImg from "./assets/arrow.svg";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
    const { redirectLink } = useSelector((state) => state.link);
    const [originalLink, setOriginalLink] = useState(null);

    const onShorten = (e) => {
        e.preventDefault();
        if (checkIsLink(originalLink)) {
            dispatch(shortenRequest(originalLink));
        }
    };

    return (
        <section className="section">
            <Input
                title="Shorten link"
                value={originalLink}
                onFieldChange={setOriginalLink}
            />
            {redirectLink && (
                <Input
                    value={`http://localhost:5555/${redirectLink}`}
                    readonly="readonly"
                    className="animate"
                />
            )}
            <Button value="Shorten" activeValue={btnImg} onClick={onShorten} />
        </section>
    );
};
