import { call, takeEvery, put } from "redux-saga/effects";
import { errorNotification } from "notifications";
import { getPatientsResolutions } from "network/fetchOperations";
import { PayloadAction } from "@reduxjs/toolkit";
import { PatientsResolutionsResponseBody } from "types/fetchTypes";
import {
  fetchPatientsResolutionsFailure,
  fetchPatientsResolutionsSuccess,
} from "redux/slices/patientsResolutionsSlice";

function* workerResolutionsSagaFetch({
  payload,
}: PayloadAction<{ sortBy: string; currentPage: string }>) {
  try {
    const response: PatientsResolutionsResponseBody = yield call(
      getPatientsResolutions,
      payload
    );
    yield put(fetchPatientsResolutionsSuccess(response));
  } catch (error) {
    errorNotification();
    yield put(fetchPatientsResolutionsFailure());
  }
}

function* PatientsResolutionsSagaWatcher() {
  yield takeEvery(
    "patientsResolutions/fetchPatientsResolutions",
    workerResolutionsSagaFetch
  );
}

export default PatientsResolutionsSagaWatcher;
