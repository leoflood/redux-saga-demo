import { put, takeEvery, all } from "redux-saga/effects";
import { increment, incrementAsync } from "./reducer";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

function* watchIncrementAsync() {
  yield takeEvery(incrementAsync().type, function* () {
    yield delay(1000);
    yield put(increment());
  });
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
