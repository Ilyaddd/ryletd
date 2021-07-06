import { TYPES } from "../types";

export const getLinkRequest = (shortLink) => ({
    type: TYPES.GET_LINK_REQUEST,
    shortLink,
});

export const getLinkSuccess = (originalLink) => ({
    type: TYPES.GET_LINK_REQUEST_SUCCESS,
    originalLink,
});

export const requestFailure = (error) => ({
    type: TYPES.GET_LINK_REQUEST_FAILTURE,
    error,
});
