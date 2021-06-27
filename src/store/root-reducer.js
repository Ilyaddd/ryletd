import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { shortenReducer } from "./shorten";
import { getLinkReducer } from "./get-link";

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        links: shortenReducer,
        link: getLinkReducer,
    });
