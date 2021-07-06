import { put, call, takeLatest } from "redux-saga/effects";

import { ENDPOINTS } from "../endpoints";
import { TYPES } from "../types";
import { getLinkSuccess, requestFailure } from "./actions";

import { axiosInstance } from "../../utils/axios-instance";

function* getLink({ shortLink }) {
    try {
        const { data } = yield call(
            axiosInstance.get,
            ENDPOINTS.GET_LINK_ENDPOINT,
            { params: { shortLink } }
        );
        yield put(getLinkSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

export default function* getLinkSaga() {
    yield takeLatest(TYPES.GET_LINK_REQUEST, getLink);
}
