import { call, put, takeLatest } from "redux-saga/effects";
import { errorNotification, successNotification } from "notifications";
import {
  createAppointment,
  getDoctorsByOccupationId,
  getDoctorsFreeTimeByDateAndId,
  getOccupations,
} from "network/fetchOperations";
import {
  createAppointmentFailure,
  createAppointmentSuccess,
  Doctors,
  fetchDoctorsFreeTime,
  setAvailableTime,
  setDoctors,
  fetchDoctors,
  setSpecializations,
  fetchSuccess,
} from "redux/slices/createAppointmentSlice";
import {
  fetchSpecializations,
} from "redux/createAppointmentsActions";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchFailure } from "redux/slices/userSlice";
import { CreateAppointmentRequestBody, SpecializationsResponseBody } from "types/fetchTypes";

function* workerSpecializationSagaFetch() {
  try {
    const response: SpecializationsResponseBody[] | [] = yield call(getOccupations);
    yield put(fetchSuccess());
    yield put(setSpecializations(response));
  } catch (error) {
    yield put(fetchFailure());
    errorNotification();
  }
}

function* workerDoctorsSagaFetch({ payload }: PayloadAction<string>) {
  try {
    const response: Doctors = yield call(getDoctorsByOccupationId, payload);
    yield put(fetchSuccess());
    yield put(setDoctors(response));
  } catch (error) {
    yield put(fetchFailure());
    errorNotification();
  }
}

function* workerFreeTimeSagaFetch({ payload }: PayloadAction<{ date: string, selectedDoctor: string }>) {
  const { date, selectedDoctor } = payload;
  try {
    const response: string[] | [] = yield call(getDoctorsFreeTimeByDateAndId, date, selectedDoctor);
    yield put(fetchSuccess());
    yield put(setAvailableTime(response));
  } catch (error) {
    yield put(fetchFailure());
    errorNotification();
  }
}

function* workerCreateAppointmentsSagaFetch({ payload }: PayloadAction<CreateAppointmentRequestBody>) {
  try {
    yield call(createAppointment, payload);
    yield put(createAppointmentSuccess());
    successNotification("Appointment have been created!");
  } catch (error) {
    errorNotification();
    yield put(createAppointmentFailure());
  }
}

function* CreateAppointmentsSagaWatcher() {
  yield takeLatest(fetchSpecializations, workerSpecializationSagaFetch);
  yield takeLatest(fetchDoctors, workerDoctorsSagaFetch);
  yield takeLatest(fetchDoctorsFreeTime, workerFreeTimeSagaFetch);
  yield takeLatest(
    "createAppointment/fetchCreateAppointment",
    workerCreateAppointmentsSagaFetch
  );
}

export default CreateAppointmentsSagaWatcher;
