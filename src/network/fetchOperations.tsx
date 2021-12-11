import { setIsLoadingOff, setIsLoadingOn } from "redux/loaderSlice";
import axiosInstance from "./Api";
import { errorNotification, successNotification } from "notifications";
import PATHS from "routes/paths";
import { AppDispatch } from "redux/store";
import { IPatientAppointment } from "models/IPatientAppointments";

export const register = (credentials: any, history: any) => {
  axiosInstance
    .post("auth/registration", credentials)
    .then(data => successNotification("Your account have been successfully created!"))
    .then(() => history.push(PATHS.signIn))
    .catch((error) => errorNotification());
};

export const logIn = (credentials: {email: string, password: string}) => async (dispatch: AppDispatch) => {
  type Response = {
    access_token: string,
    refresh_token: string
  }
  const { data } = await axiosInstance.post<Response>("auth/login", credentials);
  return data
}

export const getProfile = (persistToken: string) => async (dispatch: AppDispatch) => {
  if (!persistToken) {
    return;
  }
  type Response = {
    first_name: string, last_name: string, role_name: string, id: string, photo: string
  }
  const { data } = await axiosInstance.get<Response>("auth/profile");
  const { first_name, last_name, role_name, id, photo } = data;
  const newData = {
    id,
    photo,
    firstName: first_name,
    lastName: last_name,
    roleName: role_name,

  };
  return newData;
};

export const getPatientAppointment = (dateStatus: string) => async (dispatch: AppDispatch) => {
  // &dateStatus=${dateStatus} - добавить когда заработает бек
  type FetchPayload = {
    appointments: IPatientAppointment[] | []
    total: number,
  }

  const { data } = await axiosInstance.get<FetchPayload>(`appointments/patient/me?offset=0&limit=40`);
  return data
};

export const getDoctorAppointment = (sortBy: string) => async (dispatch: AppDispatch) => {
  // &sortBy=${sortBy}
  const { data } = await axiosInstance.get(`appointments/doctor/me?offset=0&limit=40`);
  return data
};

export const getOccupations = () => async (dispatch: AppDispatch) => {
  const { data } = await axiosInstance.get("specializations");
  return data
};

export const getDoctorsByOccupationId = (id: string) => async (dispatch: AppDispatch) => {
  const { data } = await axiosInstance.get(`doctors/specialization/${id}`);
  return data
};

export const getDoctorsFreeTimeByDateAndId = (date: string, id: string) => async (dispatch: AppDispatch) => {
  const { data } = await axiosInstance.get(
    `appointments/time/free?date=${date}&doctorID=${id}`
  );
  return data;
};

export const createAppointment = (credentials: any) => async (dispatch: AppDispatch) => {
  return axiosInstance.post(`appointments`, credentials);
};

export const updateAppointmentStatus =
  (credentials: any, id: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoadingOn());
    try {
      const result = await axiosInstance
        .patch(`appointments/${id}`, credentials)
        .then(() => successNotification("Status have been updated!"));
      dispatch(setIsLoadingOff());
      return result;
    } catch (error) {
      dispatch(setIsLoadingOff());
      errorNotification();
    }
  };

export const deleteAppointment = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .delete(`appointments/${id}`)
      .then(() => successNotification("Appointment have been deleted!"));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    errorNotification();
  }
};
