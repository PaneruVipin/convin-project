import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { HISTORY_ADD, HISTORY_DELETE, HISTORY_FETCH, VIDEOS_FECH, VIDEO_ADD, VIDEO_DELETE, VIDEO_EDIT, VIDEO_FECH } from "../action/video";
import { addHistorySaga, addVideoSaga, deleteHistorySaga, deleteVideoSaga, editVideoSaga, getHistorySaga, getVideoSaga, getVideosSaga } from "./video";

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga(){
    yield takeLatest(VIDEOS_FECH, getVideosSaga),
    yield takeEvery(VIDEO_DELETE, deleteVideoSaga)
    yield takeEvery(VIDEO_ADD, addVideoSaga)
    yield takeEvery(VIDEO_FECH, getVideoSaga)
    yield takeEvery(VIDEO_EDIT, editVideoSaga)
    yield takeEvery(HISTORY_ADD,addHistorySaga)
    yield takeEvery(HISTORY_DELETE,deleteHistorySaga)
    yield takeEvery(HISTORY_FETCH,getHistorySaga)
}