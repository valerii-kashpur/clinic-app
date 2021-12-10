// import { createSelector } from "reselect";

export const tokenSelector = (state) => state.user.token;
export const loaderSelector = (state) => state.user.loading;
export const user = (state) => state.user;
export const userRoleName = (state) => state.user.roleName;
export const isAuthentificated = (state) => state.user.isAuthorized;
export const isPatientAppointmentFetching = (state) =>
  state.patientAppointments.isFetching;
export const patientAppointments = (state) =>
  state.patientAppointments.appointments;
export const doctorAppointments = (state) =>
  state.doctorAppointments.appointments;
export const isLoadingSelector = (state) => state.loader;
