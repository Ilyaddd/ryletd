import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { Input } from "../input";
import { Button } from "../button";

import { getLinkRequest } from "../../store/get-link/actions";

import btnImg from "./assets/arrow.svg";

import "./follow.sass";

export const Follow = () => {
    const dispatch = useDispatch();
    const [shortLink, setshortLink] = useState(null);
    const [isRedirect, setRedirect] = useState(false);

    const onFollow = (e) => {
        e.preventDefault();
        if (shortLink) {
            dispatch(getLinkRequest(shortLink));
            setRedirect(true);
        }
    };

    return (
        <>
            {isRedirect ? (
                <Redirect to={shortLink} />
            ) : (
                <section className="section">
                    <Input
                        title="Follow the link"
                        name="long"
                        value={shortLink}
                        onFieldChange={setshortLink}
                    />
                    <Button
                        value="Follow"
                        activeValue={btnImg}
                        onClick={onFollow}
                    />
                </section>
            )}
        </>
    );
};
