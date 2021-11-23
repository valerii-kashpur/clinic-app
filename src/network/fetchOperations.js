import axios from "axios";
import { toast } from "react-toastify";
import { setDoctorAppointments } from "Redux/doctorAppointmentsSlice";
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

export const getPatientAppointment = () => (dispatch) => {
  axios
    .get("appointments/patient/me?offset=0&limit=40")
    .then((response) => dispatch(setPatientAppointments(response.data)))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getDoctorAppointment = () => (dispatch) => {
  axios
    .get("appointments/doctor/me?offset=0&limit=40")
    .then((response) => dispatch(setDoctorAppointments(response.data)))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getOccupations = () => {
  return axios
    .get("specializations")
    .then((data) => data)
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getDoctorsByOccupationId = (id) => {
  return axios
    .get(`doctors/specialization/${id}`)
    .then(({ data, status }) => data)
    .catch((error) => notify(error.response.status, error.response.data));
};

export const getDoctorsFreeTimeByDateAndId = (date, id) => {
  return axios
    .get(`appointments/time/free?date=${date}&doctorID=${id}`)
    .then(({ data }) => data)
    .catch((error) => notify(error.response.status, error.response.data));
};

export const createAppointment = (credentials) => {
  return axios
    .post(`appointments`, credentials)
    .then(({ status }) => notify(status))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const updateAppointmentStatus = (credentials, id) => {
  return axios
    .patch(`appointments/${id}`, credentials)
    .then(({ status }) => notify(status))
    .catch((error) => notify(error.response.status, error.response.data));
};

export const deleteAppointment = (id) => {
  return axios
    .delete(`appointments/${id}`)
    .then(({ status }) => notify(status))
    .catch((error) => notify(error.response.status, error.response.data));
};
