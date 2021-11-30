import { all } from "redux-saga/effects";
import loginSagaWatcher from "./loginSaga";

export function* rootSaga() {
  yield all([loginSagaWatcher()]);
}
