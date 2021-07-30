import { TYPES } from "../types";

export const setMessageBoxDefault = () => ({
    type: TYPES.SET_MESSAGEBOX_DEFAULT,
});

export const setMessageboxSuccess = () => ({
    type: TYPES.SET_MESSAGEBOX_SUCCESS,
});

export const setMessageboxFailture = () => ({
    type: TYPES.SET_MESSAGEBOX_ERROR,
});
