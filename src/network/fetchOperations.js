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
      notify(response);
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
    .then((response) => {
      const { first_name, id, last_name, photo, role_name } = response;
      const newData = {
        firstName: first_name,
        lastName: last_name,
        id,
        photo,
        roleName: role_name,
      };
      return newData;
    })
    .then((newData) => dispatch(setUser(newData)))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getPatientAppointment = (dateStatus) => async (dispatch) => {
  // &dateStatus=${dateStatus}
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/patient/me?offset=0&limit=40`)
      .then((response) => dispatch(setPatientAppointments(response)));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};

export const getDoctorAppointment = (sortBy) => async (dispatch) => {
  // &sortBy=${sortBy}
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/doctor/me?offset=0&limit=40`)
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
    console.log(error);
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
