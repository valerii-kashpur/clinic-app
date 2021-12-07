import { call, takeEvery, put } from "redux-saga/effects";
import { errorNotification } from "notifications";
import { getPatientAppointment } from "network/fetchOperations";
import {
  fetchPatientAppointmentsFailure,
  fetchPatientAppointmentsSuccess,
} from "redux/patientAppointmentsSlice";

function* workerAppointmentsSagaFetch({ payload }) {
  try {
    const response = yield call(getPatientAppointment(payload));
    yield put(fetchPatientAppointmentsSuccess(response));
  } catch (error) {
    errorNotification();
    yield put(fetchPatientAppointmentsFailure());
  }
}

function* PatientsAppointmentsSagaWatcher() {
  yield takeEvery(
    "patientAppointments/fetchPatientAppointments",
    workerAppointmentsSagaFetch
  );
}

export default PatientsAppointmentsSagaWatcher;
