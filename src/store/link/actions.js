import { TYPES } from "../types";

// Сокращение ссылки
export const shortenRequest = (originalLink) => ({
    type: TYPES.SHORTEN_REQUEST,
    originalLink,
});

export const shortenSuccess = (shortLink) => ({
    type: TYPES.SHORTEN_REQUEST_SUCCESS,
    shortLink,
});

// Ошибка
export const requestFailure = (error) => ({
    type: TYPES.FAILTURE,
    error,
});
