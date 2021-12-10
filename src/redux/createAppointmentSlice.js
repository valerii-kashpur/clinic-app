import { createSlice } from "@reduxjs/toolkit";

const stateInit = {
  specializations: [],
  selectedSpecialization: "",
  doctors: [],
  selectedDoctor: "",
  reasons: "",
  note: "",
  selectedDate: "",
  availableTime: [],
  selectedTime: "",
  isFetching: false,
};

const createAppointmentSlice = createSlice({
  name: "createAppointment",
  initialState: {
    specializations: [],
    selectedSpecialization: "",
    doctors: [],
    selectedDoctor: "",
    reasons: "",
    note: "",
    selectedDate: "",
    availableTime: [],
    selectedTime: "",
    isFetching: false,
  },
  reducers: {
    setSpecializations(state, { payload }) {
      return { ...state, specializations: payload };
    },
    setSelectedSpecialization(state, { payload }) {
      return { ...state, selectedSpecialization: payload, selectedDoctor: "" };
    },
    setDoctors(state, { payload }) {
      return { ...state, doctors: payload };
    },
    setSelectedDoctor(state, { payload }) {
      return { ...state, selectedDoctor: payload };
    },
    setReason(state, { payload }) {
      return { ...state, reasons: payload };
    },
    setNote(state, { payload }) {
      return { ...state, note: payload };
    },
    setSelectedDate(state, { payload }) {
      return { ...state, selectedDate: payload };
    },
    setAvailableTime(state, { payload }) {
      return { ...state, availableTime: payload };
    },
    setSelectedTime(state, { payload }) {
      return { ...state, selectedTime: payload };
    },
    fetchCreateAppointment(state) {
      state.isFetching = true;
    },
    createAppointmentSuccess(state) {
      return stateInit;
    },
    createAppointmentFailure(state) {
      state.isFetching = false;
    },
  },
});

export default createAppointmentSlice.reducer;
export const {
  setSpecializations,
  setSelectedSpecialization,
  setSelectedDoctor,
  setDoctors,
  setReason,
  setNote,
  setSelectedDate,
  setAvailableTime,
  setSelectedTime,
  fetchCreateAppointment,
  createAppointmentSuccess,
  createAppointmentFailure,
} = createAppointmentSlice.actions;
