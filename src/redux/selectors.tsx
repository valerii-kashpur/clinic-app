import { createSelector } from "reselect";
import { RootState } from "./store";

export const getCurrentUserSelector = (state: RootState) => state.user;
export const getUserTokenSelector = createSelector(
  getCurrentUserSelector,
  (state) => state.token
);
export const loaderSelector = createSelector(
  getCurrentUserSelector,
  (state) => state.loading
);
export const userRoleNameSelector = createSelector(
  getCurrentUserSelector,
  (state) => state.roleName
);
export const isAuthorizedSelector = createSelector(
  getCurrentUserSelector,
  (state) => state.isAuthorized
);
//
export const isPatientAppointmentFetching = (state: RootState) =>
  state.patientAppointments.isFetching;
export const patientAppointments = (state: RootState) =>
  state.patientAppointments.appointments;
export const doctorAppointments = (state: RootState) =>
  state.doctorAppointments.appointments;
//
export const doctorsResolutions = (state: RootState) =>
  state.doctorsResolutions;
export const doctorsResolutionsSelector = createSelector(
  doctorsResolutions,
  (state) => state.resolutions
);
export const doctorsTotalResolutionsSelector = createSelector(
  doctorsResolutions,
  (state) => state.total
);
export const doctorsResolutionsIsFetchingSelector = createSelector(
  doctorsResolutions,
  (state) => state.isFetching
);
//
export const patientsResolutions = (state: RootState) =>
  state.patientsResolutions;
export const patientsResolutionsSelector = createSelector(
  patientsResolutions,
  (state) => state.resolutions
);
export const patientsTotalResolutionsSelector = createSelector(
  patientsResolutions,
  (state) => state.total
);
export const patientsResolutionsIsFetchingSelector = createSelector(
  patientsResolutions,
  (state) => state.isFetching
);
//
export const appointmentFormData = (state: RootState) =>
  state.createAppointment;
export const selectedDoctorSelector = createSelector(
  appointmentFormData,
  (state) => state.selectedDoctor
);
export const reasonsSelector = createSelector(
  appointmentFormData,
  (state) => state.reasons
);
export const selectedTimeSelector = createSelector(
  appointmentFormData,
  (state) => state.selectedTime
);
export const availableTimeSelector = createSelector(
  appointmentFormData,
  (state) => state.availableTime
);
export const selectedDateSelector = createSelector(
  appointmentFormData,
  (state) => state.selectedDate
);
export const selectedSpecializationSelector = createSelector(
  appointmentFormData,
  (state) => state.selectedSpecialization
);
