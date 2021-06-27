import { TYPES } from "../types";

export const shortenRequest = (longLink) => ({
    type: TYPES.SHORTEN_REQUEST,
    longLink,
});

export const shortenSuccess = (shortLink) => ({
    type: TYPES.SHORTEN_REQUEST_SUCCESS,
    shortLink,
});

export const requestFailure = (error) => ({
    type: TYPES.SHORTEN_REQUEST_FAILTURE,
    error,
});
