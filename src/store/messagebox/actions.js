import { TYPES } from "../types";

export const setMessageboxDefault = () => ({
    type: TYPES.SET_MESSAGEBOX_DEFAULT,
});

export const setMessageboxSuccess = (text) => ({
    type: TYPES.SET_MESSAGEBOX_SUCCESS,
    text
});

export const setMessageboxFailture = (text) => ({
    type: TYPES.SET_MESSAGEBOX_ERROR,
    text
});
