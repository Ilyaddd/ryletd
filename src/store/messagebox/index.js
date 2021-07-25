import { TYPES } from "../types";

import { MESSAGEBOX_TEXTS } from "./errors";

const initialState = {
    messageText: "",
    isActive: false,
};

export const messageboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FAILTURE: {
            return {
                ...state,
                isActive: true,
                messageText: MESSAGEBOX_TEXTS.GET_LINK_ERROR,
            };
        }

        case TYPES.SET_MESSAGEBOX_DEFAULT:
            return { ...state, isActive: false, messageText: "" };

        default:
            return state;
    }
};
