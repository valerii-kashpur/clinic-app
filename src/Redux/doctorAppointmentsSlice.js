import { createSlice } from "@reduxjs/toolkit";

const doctorAppointmentsSlice = createSlice({
  name: "doctorAppointments",
  initialState: {
    appointments: [],
    total: 0,
    isFetching: false,
  },
  reducers: {
    fetchDoctorAppointments(state) {
      return { ...state, isFetching: true };
    },
    fetchDoctorAppointmentsSuccess(state, { payload }) {
      return { ...payload, isFetching: false };
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
