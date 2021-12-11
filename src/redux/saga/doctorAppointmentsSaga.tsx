import { call, takeEvery, put } from "redux-saga/effects";
import { errorNotification } from "notifications";
import { getDoctorAppointment } from "network/fetchOperations";
import {
  fetchDoctorAppointmentsFailure,
  fetchDoctorAppointmentsSuccess,
} from "redux/doctorAppointmentsSlice";
import { IDoctorAppointment } from "models/IDoctorAppointments";
import { PayloadAction } from "@reduxjs/toolkit";

type FetchPayload = {
  appointments: IDoctorAppointment[] | []
  total: number,
}

function* workerAppointmentsSagaFetch({ payload }: PayloadAction<string>) {
  try {
    const response: FetchPayload = yield call(getDoctorAppointment(payload));
    yield put(fetchDoctorAppointmentsSuccess(response));
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
