import { useEffect } from "react";
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
    console.log(useSelector((state) => state));
    if (redirectLink !== undefined) {
        window.location.replace(
            redirectLink.includes("http")
                ? redirectLink
                : `https://${redirectLink}`
        );
    }
    return null;
};
