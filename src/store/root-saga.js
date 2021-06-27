import { all } from "redux-saga/effects";

import shortenSaga from "./shorten/saga";
import getLinkSaga from "./get-link/saga";

export default function* rootSaga() {
    yield all([shortenSaga(), getLinkSaga()]);
}
