import { createSlice } from "@reduxjs/toolkit";

const patientAppointmentsSlice = createSlice({
  name: "patientAppointments",
  initialState: {
    appointments: [],
    total: 0,
    isFetching: false,
  },
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
