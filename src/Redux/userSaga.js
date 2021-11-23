import {call, takeEvery, put} from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "./userSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { errorReq, succesReq } from "styles/notificationsStyles";

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(token) {
      axios.defaults.headers.common.Authorization = ``;
    },
  };


toast.configure();
const notify = (status, message) => {
  switch (status) {
    case 200:
      return toast.success("success", succesReq);
    case 201:
      return toast.success("success", succesReq);
    default:
      return toast.error(message, errorReq);
  }
};

function* workerUserSagaFetch({payload}) {
    try {
        const {data} = yield call(() => axios.post("auth/login", payload));
        token.set(data.access_token);
        yield put(getUserSuccess(data.access_token));
    } catch (error) {
        notify(error.response.status, error.response.data)
        yield put(getUserFailure());
    }
}

function* userSagaWatcher() {
    yield takeEvery("userSlice/getUserFetch", workerUserSagaFetch)
}

export default  userSagaWatcher;