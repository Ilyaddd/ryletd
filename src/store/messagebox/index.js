import { TYPES } from "../types";

import { MESSAGEBOX_TEXTS } from "./values";

const initialState = {
    messageText: "",
    isSuccess: false,
    isError: false,
};

export const messageboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_MESSAGEBOX_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isError: false,
                messageText: MESSAGEBOX_TEXTS.LINK_COPIED,
            };
        }

        case TYPES.SET_MESSAGEBOX_ERROR: {
            return {
                ...state,
                isSuccess: false,
                isError: true,
                messageText: MESSAGEBOX_TEXTS.GET_LINK_ERROR,
            };
        }

        case TYPES.SET_MESSAGEBOX_DEFAULT:
            return {
                ...state,
                isSuccess: false,
                isError: false,
                messageText: "",
            };

        default:
            return state;
    }
};
