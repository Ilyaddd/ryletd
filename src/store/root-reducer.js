import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { linkReducer } from "./link";

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        link: linkReducer,
    });
