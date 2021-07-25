import { all } from "redux-saga/effects";

import linkSaga from "./link/saga";

export default function* rootSaga() {
    yield all([linkSaga()]);
}
