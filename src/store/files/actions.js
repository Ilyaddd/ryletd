import { TYPES } from "../types";

// Получение файла
export const getFileRequest = (url) => ({
    type: TYPES.GET_FILE_REQUEST,
    url,
});

export const getFileSuccess = (files) => ({
    type: TYPES.GET_FILE_SUCCESS,
    files,
});

// Ошибка
export const requestFailure = (error) => ({
    type: TYPES.FAILTURE,
    error,
});
