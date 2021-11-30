import { all } from "redux-saga/effects";
import loginSagaWatcher from "./loginSaga";
import PatientsAppointmentsSagaWatcher from "./patientAppointmentsSaga";
import UserSagaWatcher from "./userSaga";

export function* rootSaga() {
  yield all([
    loginSagaWatcher(),
    UserSagaWatcher(),
    PatientsAppointmentsSagaWatcher(),
  ]);
}
