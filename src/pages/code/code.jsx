import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getCodeRequest } from "../../store/code/actions";

export const Code = () => {
    const dispatch = useDispatch();
    const { url } = useParams();
    const { code } = useSelector((state) => state.code);

    useEffect(() => {
        dispatch(getCodeRequest(url));
    }, []);

    console.log(code);
    document.querySelector("html").innerHTML = code;

    return null;
};
