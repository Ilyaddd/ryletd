import { put, call, takeLatest } from "redux-saga/effects";

import { ENDPOINTS } from "../endpoints";
import { TYPES } from "../types";
import { getFileSuccess, requestFailure } from "./actions";

import { axiosInstance } from "../../utils/axios-instance";

// Получение файла
function* getFile({ url }) {
    try {
        const { data } = yield call(
            axiosInstance.get,
            ENDPOINTS.FILE_ENDPOINT,
            { params: { url } }
        );
        yield put(getFileSuccess(data));
    } catch (err) {
        yield put(requestFailure(err));
    }
}

export default function* filesSaga() {
    yield takeLatest(TYPES.GET_FILE_REQUEST, getFile);
}
