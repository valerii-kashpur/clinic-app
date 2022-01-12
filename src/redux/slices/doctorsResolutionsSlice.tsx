import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDoctorResolutions } from "models/IDoctorResolutions";

interface InitialState {
  resolutions: IDoctorResolutions;
  total: number;
  isFetching: boolean;
}

const initialState: InitialState = {
  resolutions: [],
  total: 0,
  isFetching: false,
};

type FetchPayload = {
  resolutions: IDoctorResolutions;
  total: number;
};

const doctorResolutionsSlice = createSlice({
  name: "doctorsResolutions",
  initialState,
  reducers: {
    fetchDoctorResolutions(state, action) {
      return { ...state, isFetching: true };
    },
    fetchDoctorResolutionsSuccess(state, action: PayloadAction<FetchPayload>) {
      return { ...action.payload, isFetching: false };
    },
    fetchDoctorResolutionsFailure(state) {
      return { ...state, isFetching: false };
    },
  },
});

export default doctorResolutionsSlice.reducer;
export const {
  fetchDoctorResolutions,
  fetchDoctorResolutionsSuccess,
  fetchDoctorResolutionsFailure,
} = doctorResolutionsSlice.actions;
