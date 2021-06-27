import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getLinkRequest } from "../../store/get-link/actions";

export const RedirectPage = () => {
    const dispatch = useDispatch();
    const { link } = useParams();
    dispatch(getLinkRequest(link));
    // window.location.replace(`https:\\${link}`);
    return null;
};
