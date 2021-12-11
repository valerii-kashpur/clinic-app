import { createAction } from "@reduxjs/toolkit";

export const fetchSpecializations = createAction("createAppointment/fetchSpecializations");
export const loginAction = createAction<{ userName: string, password: string }>("userSlice/FetchUserAction")
// export const fetchDoctors = createAction("createAppointment/fetchDoctors");
// export const fetchDoctorsFreeTime = createAction("createAppointment/fetchDoctorsFreeTime");
