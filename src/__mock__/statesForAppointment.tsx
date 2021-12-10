import { DOCTORS } from "./doctors";
import { SPECIALIZATIONS } from "./specializations";
import { TIME } from "./time";

export const initialStateForRadioButtonsTest = {
    createAppointment: {
      specializations: SPECIALIZATIONS,
      selectedSpecialization: "c43fca01-3ea9-48f5-b5d8-4d7a4705e30f",
      doctors: DOCTORS,
      selectedDoctor: "8d662b40-4a13-11ec-a856-e9af5fdc77bf",
      reasons: "",
      note: "",
      selectedDate: "2021-12-30T19:13:05.000Z",
      availableTime: TIME,
      selectedTime: "",
      isFetching: false,
    },
  };

  export const initialStateForDisabledButton = {
    createAppointment: {
        specializations: [],
        selectedSpecialization: "",
        doctors: [],
        selectedDoctor: "",
        reasons: "",
        note: "",
        selectedDate: "",
        availableTime: "",
        selectedTime: "",
        isFetching: false,
      },
  }

  export const initialStateForFetch = {
    createAppointment: {
        specializations: SPECIALIZATIONS,
        selectedSpecialization: "c43fca01-3ea9-48f5-b5d8-4d7a4705e30f",
        doctors: DOCTORS,
        selectedDoctor: "8d662b40-4a13-11ec-a856-e9af5fdc77bf",
        reasons: "asdadsa",
        note: "dasdasd",
        selectedDate: "2021-12-15T13:00:00.000Z",
        availableTime: TIME,
        selectedTime: "2021-12-15T13:00:00.000Z",
        isFetching: false,
      },
  }