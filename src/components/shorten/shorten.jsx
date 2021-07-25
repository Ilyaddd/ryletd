import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Input } from "../input";
import { Button } from "../button";

import { shortenRequest } from "../../store/shorten/actions";
import { checkIsLink } from "../../utils/check-is-link";

import btnImg from "./assets/arrow.svg";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
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
                name="long"
                value={originalLink}
                onFieldChange={setOriginalLink}
            />
            <Button value="Shorten" activeValue={btnImg} onClick={onShorten} />
        </section>
    );
};
