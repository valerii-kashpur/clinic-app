import { IDoctorAppointment } from "models/IDoctorAppointments";
import { IPatientAppointment } from "models/IPatientAppointments";

export type RegistrationRequestBody = {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
};
export type LoginResponseBody = {
  access_token: string;
  refresh_token: string;
};
export type LoginRequestBody = { email: string; password: string };
export type UserResponseBody = {
  first_name: string;
  last_name: string;
  role_name: string;
  id: string;
  photo: string;
};
export type PatientAppointmentsResponseBody = {
  appointments: IPatientAppointment;
  total: number;
};
export type DoctorAppointmentsResponseBody = {
  appointments: IDoctorAppointment;
  total: number;
};
export type SpecializationsResponseBody = {
  specialization_name: string;
  id: string;
};
export type SingleDoctorType = {
  firstName: string;
  lastName: string;
  id: string;
};
export type Doctors = SingleDoctorType[] | [];
export type FreeTime = [number] | [];
export type CreateAppointmentRequestBody = {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
};
export type CreateResolutionRequestBody = {
  resolution: string;
  appointmentID: string;
};
