import { call, takeEvery, put } from "redux-saga/effects";
import { notify } from "notifications";
import { getProfile } from "network/fetchOperations";
import {
  fetchPatientAppointmentsFailure,
  fetchPatientAppointmentsSuccess,
} from "redux/patientAppointmentsSlice";

function* workerAppointmentsSagaFetch({ payload }) {
  try {
    const response = yield call(getProfile(payload));
    yield put(fetchPatientAppointmentsSuccess(response));
  } catch (error) {
    notify(error.response.status, error.response.data);
    yield put(fetchPatientAppointmentsFailure());
  }
}

function* PatientsAppointmentsSagaWatcher() {
  yield takeEvery(
    "patientAppointmentsSlice/fetchPatientAppointments",
    workerAppointmentsSagaFetch
  );
}

export default PatientsAppointmentsSagaWatcher;
