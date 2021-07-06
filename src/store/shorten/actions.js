import { TYPES } from "../types";

export const shortenRequest = (originalLink) => ({
    type: TYPES.SHORTEN_REQUEST,
    originalLink,
});

export const shortenSuccess = (shortLink) => ({
    type: TYPES.SHORTEN_REQUEST_SUCCESS,
    shortLink,
});

export const requestFailure = (error) => ({
    type: TYPES.SHORTEN_REQUEST_FAILTURE,
    error,
});
