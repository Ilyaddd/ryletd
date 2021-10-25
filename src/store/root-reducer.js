import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { linkReducer } from "./link";
import { filesReducer } from "./files";
import { codeReducer } from "./code";
import { messageboxReducer } from "./messagebox";

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        link: linkReducer,
        messagebox: messageboxReducer,
        file: filesReducer,
        code: codeReducer,
    });
