import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Input } from "../input";
import { Button } from "../button";

import btnImg from "./assets/arrow.svg";

import "./follow.sass";

export const Follow = () => {
    const [shortLink, setshortLink] = useState(null);
    const [isRedirect, setRedirect] = useState(false);

    const onFollow = (e) => {
        e.preventDefault();
        if (shortLink) {
            setRedirect(true);
        }
    };

    return (
        <form className="form">
            {isRedirect ? (
                <Redirect to={shortLink} />
            ) : (
                <>
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
                </>
            )}
        </form>
    );
};
