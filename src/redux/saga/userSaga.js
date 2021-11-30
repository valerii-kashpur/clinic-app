import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchUserSuccess } from "../userSlice";
import { notify } from "notifications";
import { getProfile } from "network/fetchOperations";
import { historyReplace } from "utils/history";


function* workerUserSagaFetch({payload}) {
  try {
    const response = yield call(getProfile(payload));
    yield put(fetchUserSuccess(response));
  } catch (error) {
    notify(error.response.status, error.response.data);
    yield put(fetchFailure());
    yield put(historyReplace());
  }
}

function* UserSagaWatcher() {
  yield takeEvery("userSlice/fetchUser", workerUserSagaFetch);
}

export default UserSagaWatcher;