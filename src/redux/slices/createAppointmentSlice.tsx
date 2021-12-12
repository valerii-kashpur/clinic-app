import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Specializations = {
  specialization_name: string,
  id: string
}

type Doctor = {
  first_name: string,
  last_name: string,
  id: string
}

export type Doctors = Doctor[] | []

type InitialState = {
  specializations: Specializations[] | [],
  selectedSpecialization: string,
  doctors: Doctor[] | [],
  selectedDoctor: string,
  reasons: string,
  note: string,
  selectedDate: string,
  availableTime: string[] | [],
  selectedTime: string,
  isFetching: boolean,
}

const initialState: InitialState = {
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
  initialState,
  reducers: {
    setSpecializations(state, action: PayloadAction<Specializations[] | []>) {
      return { ...state, specializations: action.payload };
    },
    setSelectedSpecialization(state, action: PayloadAction<string>) {
      return { ...state, selectedSpecialization: action.payload, selectedDoctor: "" };
    },
    setDoctors(state, action: PayloadAction<Doctor[] | []>) {
      return { ...state, doctors: action.payload };
    },
    setSelectedDoctor(state, action: PayloadAction<string>) {
      return { ...state, selectedDoctor: action.payload };
    },
    setReason(state, action: PayloadAction<string>) {
      return { ...state, reasons: action.payload };
    },
    setNote(state, action: PayloadAction<string>) {
      return { ...state, note: action.payload };
    },
    setSelectedDate(state, action: PayloadAction<string>) {
      return { ...state, selectedDate: action.payload };
    },
    setAvailableTime(state, action: PayloadAction<string[] | []>) {
      return { ...state, availableTime: action.payload };
    },
    setSelectedTime(state, action: PayloadAction<string>) {
      return { ...state, selectedTime: action.payload };
    },
    fetchCreateAppointment(state, action) {
      state.isFetching = true;
    },
    fetchSuccess(state) {
      state.isFetching = false;
    },
    fetchFailure(state) {
      state.isFetching = false;
    },
    createAppointmentSuccess() {
      return initialState;
    },
    createAppointmentFailure(state) {
      state.isFetching = false;
    },
    fetchDoctorsFreeTime(state, action) {
      state.isFetching = true;
    },
    fetchDoctors(state, action) {
      state.isFetching = true;
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
  fetchSuccess,
  fetchFailure,
  setSelectedDate,
  setAvailableTime,
  setSelectedTime,
  fetchCreateAppointment,
  createAppointmentSuccess,
  createAppointmentFailure,
  fetchDoctorsFreeTime,
  fetchDoctors
} = createAppointmentSlice.actions;
