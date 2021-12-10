import { call, takeEvery, put } from "redux-saga/effects";
import { notify } from "notifications";
import { getDoctorAppointment } from "network/fetchOperations";
import { fetchDoctorAppointmentsFailure, fetchDoctorAppointmentsSuccess } from "redux/doctorAppointmentsSlice";

function* workerAppointmentsSagaFetch({ payload }) {
  try {
    const response = yield call(getDoctorAppointment(payload));
    yield put(fetchDoctorAppointmentsSuccess(response));
  } catch (error) {
    notify(error);
    yield put(fetchDoctorAppointmentsFailure());
  }
}

function* DoctorsAppointmentsSagaWatcher() {
  yield takeEvery(
    "doctorAppointments/fetchDoctorAppointments",
    workerAppointmentsSagaFetch
  );
}

export default DoctorsAppointmentsSagaWatcher;
