import { createSlice } from "@reduxjs/toolkit";

const patientAppointmentsSlice = createSlice({
  name: "patientAppointments",
  initialState: {
    appointments: [],
    total: 0,
  },
  reducers: {
    setPatientAppointments(state, { payload }) {
      return payload;
    },
  },
});

export default patientAppointmentsSlice.reducer;
export const { setPatientAppointments } = patientAppointmentsSlice.actions;
