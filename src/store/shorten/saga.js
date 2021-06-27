import { put, call, takeLatest } from "redux-saga/effects";

import { ENDPOINTS } from "../endpoints";
import { TYPES } from "../types";
import { shortenSuccess, requestFailure } from "./actions";

import { axiosInstance } from "../../utils/axios-instance";

function* shortenLink({ longLink }) {
    try {
        const { data } = yield call(
            axiosInstance.get,
            ENDPOINTS.SHORTEN_ENDPOINT,
            longLink
        );
        yield put(shortenSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

export default function* shortenSaga() {
    yield takeLatest(TYPES.SHORTEN_REQUEST, shortenLink);
}
