import { all } from "redux-saga/effects";

import linkSaga from "./link/saga";
import filesSaga from "./files/saga";
import codeSaga from "./code/saga";

export default function* rootSaga() {
    yield all([linkSaga(), filesSaga(), codeSaga()]);
}
