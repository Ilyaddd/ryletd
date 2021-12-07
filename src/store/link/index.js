import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    Error: "",
    redirectLink: "",
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        // Сокращение ссылки
        case TYPES.SHORTEN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case TYPES.SHORTEN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                redirectLink: action.shortLink,
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
