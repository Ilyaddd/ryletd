import { TYPES } from "../types";

export const getCodeRequest = (url) => ({
    type: TYPES.GET_CODE_REQUEST,
    url,
});

export const getCodeSuccess = ({ code }) => ({
    type: TYPES.GET_CODE_SUCCESS,
    code,
});

// Ошибка
export const requestFailure = (error) => ({
    type: TYPES.FAILTURE,
    error,
});
