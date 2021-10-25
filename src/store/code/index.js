import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    Error: "",
    code: "",
};

export const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        // Сокращение ссылки
        case TYPES.GET_CODE_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case TYPES.GET_CODE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                code: action.code,
            };

        // FAILURE
        case TYPES.FAILTURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                Error: action.error,
            };

        default:
            return state;
    }
};
