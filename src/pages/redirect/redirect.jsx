import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

import { getLinkRequest } from "../../store/link/actions";

import { setMessageboxFailture } from "../../store/messagebox/actions";
import { values } from "../../store/messagebox/values";

export const RedirectPage = () => {
    const dispatch = useDispatch();
    const { shortLink } = useParams();

    useEffect(() => {
        dispatch(getLinkRequest({ shortLink }));
    }, [dispatch]);
    const { redirectLink, isError } = useSelector((state) => state.link);

    if (redirectLink !== undefined && redirectLink !== "") {
        window.location.replace(
            redirectLink.includes("http")
                ? redirectLink
                : `https://${redirectLink}`
        );
    }

    if (isError) dispatch(setMessageboxFailture(values.notFound));

    return <>{isError && <Redirect to="/" />}</>;
};
