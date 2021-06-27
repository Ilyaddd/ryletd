import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Input } from "../input";

import { shortenRequest } from "../../store/shorten/actions";

import "./shorten.sass";

export const Shorten = () => {
    const dispatch = useDispatch();
    const [longLink, setLongLink] = useState(null);

    const onShorten = (e) => {
        e.preventDefault();
        dispatch(shortenRequest(longLink));
    };

    return (
        <div>
            <h2>Shorten</h2>
            <Input name="long" value={longLink} onFieldChange={setLongLink} />
            <button type="submit" onClick={onShorten}>
                Shorten
            </button>
        </div>
    );
};
