import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { Input } from "../input";

import { getLinkRequest } from "../../store/get-link/actions";

import "./follow.sass";

export const Follow = () => {
    const dispatch = useDispatch();
    const [shortLink, setshortLink] = useState(null);
    const [isRedirect, setRedirect] = useState(false);

    const onFollow = (e) => {
        e.preventDefault();
        dispatch(getLinkRequest(shortLink));
        setRedirect(true);
    };

    return (
        <>
            {isRedirect ? (
                <Redirect to={shortLink} />
            ) : (
                <section className="section">
                    <Input
                        title="Follow the link →"
                        name="long"
                        value={shortLink}
                        onFieldChange={setshortLink}
                    />
                    <button type="submit" onClick={onFollow} className="btn">
                        Follow
                    </button>
                </section>
            )}
        </>
    );
};
