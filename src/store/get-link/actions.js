import { TYPES } from "../types";

export const getLinkRequest = (shortLink) => ({
    type: TYPES.GET_LINK_REQUEST,
    shortLink,
});

export const getLinkSuccess = (original_link) => ({
    type: TYPES.GET_LINK_REQUEST_SUCCESS,
    original_link,
});

export const requestFailure = (error) => ({
    type: TYPES.GET_LINK_REQUEST_FAILTURE,
    error,
});
