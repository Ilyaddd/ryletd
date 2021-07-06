import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Input } from "../input";

import { shortenRequest } from "../../store/shorten/actions";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
    const [originalLink, setOriginalLink] = useState(null);

    const onShorten = (e) => {
        e.preventDefault();
        dispatch(shortenRequest(originalLink));
    };

    return (
        <div>
            <h2>Shorten</h2>
            <Input
                name="long"
                value={originalLink}
                onFieldChange={setOriginalLink}
            />
            <button type="submit" onClick={onShorten}>
                Shorten
            </button>
        </div>
    );
};
