import { call, takeEvery, put } from "redux-saga/effects";
import { errorNotification } from "notifications";
import { getDoctorResolutions } from "network/fetchOperations";
import { PayloadAction } from "@reduxjs/toolkit";
import { DoctorResolutionsResponseBody } from "types/fetchTypes";
import {
  fetchDoctorResolutionsFailure,
  fetchDoctorResolutionsSuccess,
} from "redux/slices/doctorsResolutionsSlice";

function* workerResolutionsSagaFetch({
  payload,
}: PayloadAction<{ sortBy: string; currentPage: string }>) {
  console.log(payload);

  try {
    const response: DoctorResolutionsResponseBody = yield call(
      getDoctorResolutions,
      payload
    );
    yield put(fetchDoctorResolutionsSuccess(response));
  } catch (error) {
    errorNotification();
    yield put(fetchDoctorResolutionsFailure());
  }
}

function* DoctorsResolutionsSagaWatcher() {
  yield takeEvery(
    "doctorsResolutions/fetchDoctorResolutions",
    workerResolutionsSagaFetch
  );
}

export default DoctorsResolutionsSagaWatcher;
