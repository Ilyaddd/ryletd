import { TYPES } from "../types";

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
                messageText: action.text,
            };
        }

        case TYPES.SET_MESSAGEBOX_ERROR: {
            return {
                ...state,
                isSuccess: false,
                isError: true,
                messageText: action.text,
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
