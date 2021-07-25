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

// Получение оригинальной ссылки
export const getLinkRequest = (shortLink) => ({
    type: TYPES.GET_LINK_REQUEST,
    shortLink,
});

export const getLinkSuccess = (original_link) => ({
    type: TYPES.GET_LINK_REQUEST_SUCCESS,
    original_link,
});

// Ошибка
export const requestFailure = (error) => ({
    type: TYPES.FAILTURE,
    error,
});
