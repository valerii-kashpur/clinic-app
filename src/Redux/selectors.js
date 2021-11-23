// import { createSelector } from "reselect";

export const tokenSelector = (state) => state.user.token;
export const loaderSelector = (state) => state.user.loading;
export const user = (state) => state.user;
export const userRoleName = (state) => state.user.role_name;
export const isAuthentificated = (state) => state.user.isAuthorized;
export const patientAppointments = (state) =>
  state.patientAppointments.appointments;
export const doctorAppointments = (state) =>
  state.doctorAppointments.appointments;

