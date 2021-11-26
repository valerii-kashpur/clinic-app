import axios from "axios";
import { toast } from "react-toastify";
import { setDoctorAppointments } from "Redux/doctorAppointmentsSlice";
import { setIsLoadingOff, setIsLoadingOn } from "Redux/loaderSlice";
import { setPatientAppointments } from "Redux/patientAppointmentsSlice";
import { setToken, setUser } from "Redux/userSlice";
import { errorReq, succesReq } from "styles/notificationsStyles";

toast.configure();
const notify = (status, message) => {
  switch (status) {
    case 200:
      return toast.success("success", succesReq);
    case 201:
      return toast.success("success", succesReq);
    default:
      return toast.error(message, errorReq);
  }
};

axios.defaults.baseURL = "https://reactlabapi.herokuapp.com/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = (credentials) =>
  axios
    .post("auth/registration", credentials)
    .then((response) => {
      token.set(response.data.access_token);
      notify(response.status);
    })
    .catch((error) => notify(error.response.status, error.response.data));

export const logIn = (credentials) => (dispatch) =>
  axios
    .post("auth/login", credentials)
    .then((response) => {
      dispatch(setToken(response.data.access_token));
      token.set(response.data.access_token);
    })
    .catch((error) => notify(error.response.status, error.response.data));

export const getProfile = (persistToken) => (dispatch) => {
  if (!persistToken) {
    return;
  }
  token.set(persistToken);
  axios
    .get("auth/profile")
    .then((response) => dispatch(setUser(response.data)))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getPatientAppointment = (dateStatus) => async (dispatch) => {
  dispatch(setIsLoadingOn());
  try {
    await axios
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
    await axios
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
    const result = await axios.get("specializations").then((data) => data);
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
    const result = await axios
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
    const result = await axios
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
    const result = await axios
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
      const result = await axios
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
    await axios
      .delete(`appointments/${id}`)
      .then(({ status }) => notify(status));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};
