import { TYPES } from "../types";

const initialState = {
    isLoading: true,
    isError: false,
    Error: "",
    longLink: "",
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
                longLink: action.longLink,
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
