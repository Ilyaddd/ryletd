import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

import { getLinkRequest } from "../../store/link/actions";

export const RedirectPage = () => {
    const dispatch = useDispatch();
    const { link } = useParams();

    useEffect(() => {
        dispatch(getLinkRequest(link));
    }, [dispatch]);
    const { redirectLink, isError } = useSelector((state) => state.link);

    if (redirectLink !== undefined && redirectLink !== "") {
        window.location.replace(
            redirectLink.includes("http")
                ? redirectLink
                : `https://${redirectLink}`
        );
    }

    return <>{isError && <Redirect to="/" />}</>;
};
