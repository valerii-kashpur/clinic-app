import { call, takeEvery, put } from "redux-saga/effects";
import { errorNotification } from "notifications";
import { getDoctorAppointment } from "network/fetchOperations";
import {
  fetchDoctorAppointmentsFailure,
  fetchDoctorAppointmentsSuccess,
} from "redux/slices/doctorAppointmentsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { DoctorAppointmentsResponseBody } from "types/fetchTypes";

function* workerAppointmentsSagaFetch({ payload }: PayloadAction<string>) {
  try {
    const response: DoctorAppointmentsResponseBody = yield call(getDoctorAppointment,payload)
    yield put(fetchDoctorAppointmentsSuccess(response))
  } catch (error) {
    errorNotification();
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
