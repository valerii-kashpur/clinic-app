import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDoctorAppointment } from "models/IDoctorAppointments";


interface InitialState {
  appointments: IDoctorAppointment,
  total: Number,
  isFetching: boolean,
}

const initialState:InitialState = {
  appointments: [],
  total: 0,
  isFetching: false,
}

type FetchPayload = {
  appointments: IDoctorAppointment,
  total: number,
}

const doctorAppointmentsSlice = createSlice({
  name: "doctorAppointments",
  initialState,
  reducers: {
    fetchDoctorAppointments(state, action) {
      return { ...state, isFetching: true };
    },
    fetchDoctorAppointmentsSuccess(state, action:PayloadAction<FetchPayload>) {
      return { ...action.payload, isFetching: false };
    },
    fetchDoctorAppointmentsFailure(state) {
      return { ...state, isFetching: false };
    },
  },
});

export default doctorAppointmentsSlice.reducer;
export const {
  fetchDoctorAppointments,
  fetchDoctorAppointmentsSuccess,
  fetchDoctorAppointmentsFailure,
} = doctorAppointmentsSlice.actions;
