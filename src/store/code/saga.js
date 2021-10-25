import { put, call, takeLatest } from "redux-saga/effects";

import { ENDPOINTS } from "../endpoints";
import { TYPES } from "../types";
import { getCodeSuccess, requestFailure } from "./actions";

import { axiosInstance } from "../../utils/axios-instance";

function* getCode({ url }) {
    try {
        const { data } = yield call(
            axiosInstance.get,
            ENDPOINTS.CODE_ENDPOINT,
            { params: { url } }
        );
        yield put(getCodeSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

export default function* linkSaga() {
    yield takeLatest(TYPES.GET_CODE_REQUEST, getCode);
}
