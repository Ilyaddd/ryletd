import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    filesList: [],
};

export const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Получение пользователя
        case TYPES.GET_FILE_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case TYPES.GET_FILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                filesList: action.files,
            };

        // FAILURE
        case TYPES.FAILTURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error,
            };

        default:
            return state;
    }
};
