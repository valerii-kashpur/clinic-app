import { call, put, takeLatest } from "redux-saga/effects";
import { notify } from "notifications";
import {
  createAppointment,
  getDoctorsByOccupationId,
  getDoctorsFreeTimeByDateAndId,
  getOccupations,
} from "network/fetchOperations";
import {
  createAppointmentFailure,
  createAppointmentSuccess,
  setAvailableTime,
  setDoctors,
  setSpecializations,
} from "redux/createAppointmentSlice";
import {
  fetchDoctors,
  fetchDoctorsFreeTime,
  fetchSpecializations,
} from "redux/createAppointmentsActions";

function* workerSpecializationSagaFetch() {
  try {
    const response = yield call(getOccupations());
    yield put(setSpecializations(response));
  } catch (error) {
    notify(error);
  }
}

function* workerDoctorsSagaFetch({ payload }) {
  try {
    const response = yield call(getDoctorsByOccupationId(payload));
    yield put(setDoctors(response));
  } catch (error) {
    notify(error);
  }
}

function* workerFreeTimeSagaFetch({ payload }) {
  const { date, selectedDoctor } = payload;
  try {
    const response = yield call(getDoctorsFreeTimeByDateAndId(date, selectedDoctor));
    yield put(setAvailableTime(response));
  } catch (error) {
    notify(error);
  }
}

function* workerCreateAppointmentsSagaFetch({ payload }) {
  try {
    const response = yield call(createAppointment(payload));
    yield put(createAppointmentSuccess(response));
    notify(201)
  } catch (error) {
    notify(error);
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