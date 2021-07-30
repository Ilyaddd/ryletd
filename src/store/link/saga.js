import { put, call, takeLatest } from "redux-saga/effects";

import { ENDPOINTS } from "../endpoints";
import { TYPES } from "../types";
import { shortenSuccess, getLinkSuccess, requestFailure } from "./actions";

import { axiosInstance } from "../../utils/axios-instance";

function* shortenLink({ originalLink }) {
    try {
        const { data } = yield call(
            axiosInstance.post,
            ENDPOINTS.SHORTEN_ENDPOINT,
            { params: { originalLink } }
        );
        yield put(shortenSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

function* getLink({ shortLink }) {
    try {
        const { data } = yield call(
            axiosInstance.get,
            ENDPOINTS.GET_LINK_ENDPOINT,
            { params: shortLink }
        );
        yield put(getLinkSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

export default function* linkSaga() {
    yield takeLatest(TYPES.SHORTEN_REQUEST, shortenLink);
    yield takeLatest(TYPES.GET_LINK_REQUEST, getLink);
}
