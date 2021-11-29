import {call, takeEvery, put} from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "./userSlice";
import { toast } from "react-toastify";
import { errorReq, successReq } from "styles/notificationsStyles";
import axiosInstance from "network/Api";


toast.configure();
const notify = (status, message) => {
  switch (status) {
    case 200:
      return toast.success("success", successReq);
    case 201:
      return toast.success("success", successReq);
    default:
      return toast.error(message, errorReq);
  }
};

function* workerUserSagaFetch({payload}) {
    try {
        const response = yield call(() => axiosInstance.post("auth/login", payload));
        yield put(getUserSuccess(response.data.access_token));
        notify(response.status)
    } catch (error) {
        notify(error.response.status, error.response.data)
        yield put(getUserFailure());
    }
}

function* userSagaWatcher() {
    yield takeEvery("userSlice/getUserFetch", workerUserSagaFetch)
}

export default  userSagaWatcher;