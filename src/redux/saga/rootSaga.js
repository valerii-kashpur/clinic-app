import { all } from "redux-saga/effects";
import loginSagaWatcher from "./loginSaga";
import UserSagaWatcher from "./userSaga";

export function* rootSaga() {
  yield all([loginSagaWatcher(), UserSagaWatcher()]);
}
