import { setDoctorAppointments } from "Redux/doctorAppointmentsSlice";
import { setIsLoadingOff, setIsLoadingOn } from "Redux/loaderSlice";
import { setPatientAppointments } from "Redux/patientAppointmentsSlice";
import { setUser } from "Redux/userSlice";
import axiosInstance from "./Api";
import { notify } from "notifications";

export const register = (credentials) =>
  axiosInstance
    .post("auth/registration", credentials)
    .then((response) => {
      notify(response.status);
    })
    .catch((error) => notify(error.response.status, error.response.data));

export const logIn = (credentials) => (dispatch) =>
  axiosInstance.post("auth/login", credentials);

export const getProfile = (persistToken) => (dispatch) => {
  if (!persistToken) {
    return;
  }
  axiosInstance
    .get("auth/profile")
    .then((response) => dispatch(setUser(response.data)))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getPatientAppointment = (dateStatus) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/patient/me?offset=0&limit=20&dateStatus=${dateStatus}`)
      .then((response) => dispatch(setPatientAppointments(response.data)));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const getDoctorAppointment = (sortBy) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/doctor/me?offset=0&limit=20&sortBy=${sortBy}`)
      .then((response) =>
        dispatch(setDoctorAppointments(response.data)).then()
      );
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const getOccupations = () => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    const result = await axiosInstance
      .get("specializations")
      .then((data) => data);
    dispatch(setIsLoadingOff());
    return result;
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const getDoctorsByOccupationId = (id) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    const result = await axiosInstance
      .get(`doctors/specialization/${id}`)
      .then(({ data, status }) => data);
    dispatch(setIsLoadingOff());
    return result;
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const getDoctorsFreeTimeByDateAndId = (date, id) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    const result = await axiosInstance
      .get(`appointments/time/free?date=${date}&doctorID=${id}`)
      .then(({ data }) => data);
    dispatch(setIsLoadingOff());
    return result;
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const createAppointment = (credentials) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    const result = await axiosInstance
      .post(`appointments`, credentials)
      .then(({ status }) => notify(status));
    dispatch(setIsLoadingOff());
    return result;
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const updateAppointmentStatus =
  (credentials, id) => async (dispatch) => {
    dispatch(setIsLoadingOn());
    try {
      const result = await axiosInstance
        .patch(`appointments/${id}`, credentials)
        .then(({ status }) => notify(status));
      dispatch(setIsLoadingOff());
      return result;
    } catch (error) {
      dispatch(setIsLoadingOff());
      notify(error.response.status, error.response.data);
    }
  };

export const deleteAppointment = (id) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .delete(`appointments/${id}`)
      .then(({ status }) => notify(status));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};
