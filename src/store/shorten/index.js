import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    Error: "",
    originalLink: "",
};

export const shortenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHORTEN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        // SUCCESS
        case TYPES.SHORTEN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                shortLink: action.shortLink,
            };

        // FAILURE
        case TYPES.SHORTEN_REQUEST_FAILTURE:
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
