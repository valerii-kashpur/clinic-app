import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatientAppointment } from "models/IPatientAppointments";

interface InitialState {
  appointments: IPatientAppointment
  total: number,
  isFetching: boolean,
}

type FetchPayload = {
  appointments: IPatientAppointment
  total: number,
}

const initialState: InitialState = {
  appointments: [],
  total: 0,
  isFetching: false,
}

const patientAppointmentsSlice = createSlice({
  name: "patientAppointments",
  initialState,
  reducers: {
    fetchPatientAppointments(state, action) {
      return { ...state, isFetching: true };
    },
    fetchPatientAppointmentsSuccess(state, action:PayloadAction<FetchPayload>) {
      return { ...action.payload, isFetching: false };
    },
    fetchPatientAppointmentsFailure(state) {
      return { ...state, isFetching: false };
    },
  },
});

export default patientAppointmentsSlice.reducer;
export const { fetchPatientAppointments, fetchPatientAppointmentsSuccess, fetchPatientAppointmentsFailure } = patientAppointmentsSlice.actions;
