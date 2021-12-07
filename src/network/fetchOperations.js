import { setIsLoadingOff, setIsLoadingOn } from "redux/loaderSlice";
import axiosInstance from "./Api";
import { errorNotification, successNotification } from "notifications";
import PATHS from "routes/paths";

export const register = (credentials, history) => {
    axiosInstance
      .post("auth/registration", credentials)
      .then(data => successNotification("Your account have been successfully created!"))
      .then(() => history.push(PATHS.signIn))
      .catch((error) => errorNotification());
};

export const logIn = (credentials) => (dispatch) =>
  axiosInstance.post("auth/login", credentials);

export const getProfile = (persistToken) => (dispatch) => {
  if (!persistToken) {
    return;
  }
  return axiosInstance.get("auth/profile").then((response) => {
    const { first_name, last_name, role_name, id, photo } = response;
    const newData = {
      id,
      photo,
      firstName: first_name,
      lastName: last_name,
      roleName: role_name,
    };
    return newData;
  });
};

export const getPatientAppointment = (dateStatus) => (dispatch) => {
  // &dateStatus=${dateStatus} - добавить когда заработает бек
  return axiosInstance.get(`appointments/patient/me?offset=0&limit=40`);
};

export const getDoctorAppointment = (sortBy) => (dispatch) => {
  // &sortBy=${sortBy}
  return axiosInstance.get(`appointments/doctor/me?offset=0&limit=40`);
};

export const getOccupations = () => (dispatch) => {
  return axiosInstance.get("specializations");
};

export const getDoctorsByOccupationId = (id) => (dispatch) => {
  return axiosInstance.get(`doctors/specialization/${id}`);
};

export const getDoctorsFreeTimeByDateAndId = (date, id) => async (dispatch) => {
  return axiosInstance.get(
    `appointments/time/free?date=${date}&doctorID=${id}`
  );
};

export const createAppointment = (credentials) => async (dispatch) => {
  return axiosInstance.post(`appointments`, credentials);
};

export const updateAppointmentStatus =
  (credentials, id) => async (dispatch) => {
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

export const deleteAppointment = (id) => async (dispatch) => {
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
