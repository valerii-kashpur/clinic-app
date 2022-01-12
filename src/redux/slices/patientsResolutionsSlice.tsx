import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatientsResolutions } from "models/IPatientsResolutions";

interface InitialState {
  resolutions: IPatientsResolutions;
  total: number;
  isFetching: boolean;
}

const initialState: InitialState = {
  resolutions: [],
  total: 0,
  isFetching: false,
};

type FetchPayload = {
  resolutions: IPatientsResolutions;
  total: number;
};

const patientsResolutionsSlice = createSlice({
  name: "patientsResolutions",
  initialState,
  reducers: {
    fetchPatientsResolutions(state, action) {
      return { ...state, isFetching: true };
    },
    fetchPatientsResolutionsSuccess(
      state,
      action: PayloadAction<FetchPayload>
    ) {
      return { ...action.payload, isFetching: false };
    },
    fetchPatientsResolutionsFailure(state) {
      return { ...state, isFetching: false };
    },
  },
});

export default patientsResolutionsSlice.reducer;
export const {
  fetchPatientsResolutions,
  fetchPatientsResolutionsSuccess,
  fetchPatientsResolutionsFailure,
} = patientsResolutionsSlice.actions;
