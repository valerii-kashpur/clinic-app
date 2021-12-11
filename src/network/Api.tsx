import axios from "axios";
import { IDoctorAppointment } from "models/IDoctorAppointments";
import { IPatientAppointment } from "models/IPatientAppointments";
import { store } from "redux/store";

const axiosInstance = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
});

axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.token;
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  return config;
});

type Login = {
  access_token: string,
  refresh_token: string
}
type User = {
  first_name: string, last_name: string, role_name: string, id: string, photo: string
}
type PatientAppointments = {
  appointments: IPatientAppointment[] | []
  total: number,
}
type DoctorAppointments = {
  appointments: IDoctorAppointment[] | []
  total: number,
}
type Specializations = {
  specialization_name: string,
  id: string
}
type Doctor = {
  firstName: string,
  lastName: string,
  id: string
}
type Doctors = Doctor[] | [];
type FreeTime = [number] | [];

type Response = Login | User | PatientAppointments | DoctorAppointments | Specializations | Doctors | FreeTime




// axiosInstance.interceptors.response.use(({ data }): Response => {
//   console.log(data);
//   return data;
// });

export default axiosInstance;
