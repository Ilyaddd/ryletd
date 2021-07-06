import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getLinkRequest } from "../../store/get-link/actions";

export const RedirectPage = () => {
    const dispatch = useDispatch();
    const { link } = useParams();

    useEffect(() => {
        dispatch(getLinkRequest(link));
    }, [dispatch]);
    const { redirectLink } = useSelector((state) => state.link);

    redirectLink &&
        window.location.replace(`${redirectLink?.originalLink.original_link}`);
    return null;
};
