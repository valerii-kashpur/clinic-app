const { createSlice } = require("@reduxjs/toolkit");

const doctorAppointmentsSlice = createSlice({
  name: "doctorAppointments",
  initialState: {
    appointments: [],
    total: 0,
  },
  reducers: {
    setDoctorAppointments(state, { payload }) {
      return payload;
    },
  },
});

export default doctorAppointmentsSlice.reducer;
export const { setDoctorAppointments } = doctorAppointmentsSlice.actions;
