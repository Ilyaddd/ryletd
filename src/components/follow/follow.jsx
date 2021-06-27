import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Input } from "../input";

import "./follow.sass";

export const Follow = () => {
    const [shortLink, setshortLink] = useState(null);
    const [isRedirect, setRedirect] = useState(false);

    const onFollow = (e) => {
        e.preventDefault();
        setRedirect(true);
    };

    return (
        <>
            {isRedirect ? (
                <Redirect to={shortLink} />
            ) : (
                <div>
                    <h2>Follow the link →</h2>
                    <Input
                        name="long"
                        value={shortLink}
                        onFieldChange={setshortLink}
                    />
                    <button type="submit" onClick={onFollow}>
                        Follow
                    </button>
                </div>
            )}
        </>
    );
};
