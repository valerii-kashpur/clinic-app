import { createSelector } from "reselect";

export const getUserTokenSelector = (state) => state.user.token;
export const loaderSelector = (state) => state.user.loading;
export const getCurrentUserSelector = (state) => state.user;
export const userRoleNameSelector = (state) => state.user.roleName;
export const isAuthorizedSelector = (state) => state.user.isAuthorized;
// 
export const isPatientAppointmentFetching = (state) =>
  state.patientAppointments.isFetching;
export const patientAppointments = (state) =>
  state.patientAppointments.appointments;
export const doctorAppointments = (state) =>
  state.doctorAppointments.appointments;
export const isLoadingSelector = (state) => state.loader;
//
export const appointmentFormData = (state) => state.createAppointment;
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
