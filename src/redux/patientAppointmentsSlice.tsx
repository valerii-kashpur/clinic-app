import { createSlice } from "@reduxjs/toolkit";
import { AppointmentsListTypes } from "pages/privatePages/patientView/components/AppointmentsList";



type InitialState = {
  appointments: AppointmentsListTypes | [],
  total: number,
  isFetching: boolean,
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
    fetchPatientAppointments(state) {
      return { ...state, isFetching: true };
    },
    fetchPatientAppointmentsSuccess(state, { payload }) {
      return { ...payload, isFetching: false };
    },
    fetchPatientAppointmentsFailure(state) {
      return { ...state, isFetching: false };
    },
  },
});

export default patientAppointmentsSlice.reducer;
export const { fetchPatientAppointments, fetchPatientAppointmentsSuccess, fetchPatientAppointmentsFailure } = patientAppointmentsSlice.actions;
