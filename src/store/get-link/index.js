import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    Error: "",
    originalLink: "",
};

export const getLinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHORTEN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        // SUCCESS
        case TYPES.GET_LINK_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                redirectLink: action.original_link.original_link,
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
