import axiosInstance from "./Api";
import { errorNotification, successNotification } from "notifications";
import PATHS from "routes/paths";
import { IPatientAppointment } from "models/IPatientAppointments";
import { IDoctorAppointment } from "models/IDoctorAppointments";
import {
  CreateAppointmentRequestBody,
  CreateResolutionRequestBody,
  Doctors,
  EditResolutionRequestBody,
  LoginRequestBody,
  LoginResponseBody,
  RegistrationRequestBody,
  SpecializationsResponseBody,
} from "types/fetchTypes";
import { History } from "history";
import { IDoctorResolutions } from "models/IDoctorResolutions";
import { IPatientsResolutions } from "models/IPatientsResolutions";

export const register = (
  credentials: RegistrationRequestBody,
  history: History
) => {
  axiosInstance
    .post("auth/registration", credentials)
    .then((data) =>
      successNotification("Your account have been successfully created!")
    )
    .then(() => history.push(PATHS.signIn))
    .catch((error) => errorNotification());
};

export const logIn = async (credentials: LoginRequestBody) => {
  const { data } = await axiosInstance.post<LoginResponseBody>(
    "auth/login",
    credentials
  );
  return data;
};

export const getProfile = async (persistToken: string) => {
  if (!persistToken) {
    return;
  }
  type Response = {
    first_name: string;
    last_name: string;
    role_name: string;
    id: string;
    photo: string;
  };
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

export const getPatientAppointment = async (dateStatus: string) => {
  type FetchPayload = {
    appointments: IPatientAppointment[] | [];
    total: number;
  };

  const { data } = await axiosInstance.get<FetchPayload>(
    `appointments/patient/me`,
    {
      params: {
        offset: 0,
        limit: 40,
        dateStatus: dateStatus,
      },
    }
  );
  return data;
};

export const getDoctorAppointment = async (sortBy: string) => {
  type FetchPayload = {
    appointments: IDoctorAppointment[] | [];
    total: number;
  };
  const { data } = await axiosInstance.get<FetchPayload>(
    `appointments/doctor/me`,
    {
      params: {
        offset: 0,
        limit: 40,
        sortBy: sortBy,
      },
    }
  );
  return data;
};

export const getDoctorResolutions = async (requestData: {
  sortBy: string;
  currentPage: string;
}) => {
  type FetchPayload = {
    appointments: IDoctorResolutions[] | [];
    total: number;
  };
  const { data } = await axiosInstance.get<FetchPayload>(
    `resolutions/doctor/me`,
    {
      params: {
        offset: requestData.currentPage,
        limit: 8,
        sortBy: requestData.sortBy,
      },
    }
  );
  return data;
};

export const getPatientsResolutions = async (requestData: {
  sortBy: string;
  currentPage: string;
}) => {
  type FetchPayload = {
    appointments: IPatientsResolutions[] | [];
    total: number;
  };
  const { data } = await axiosInstance.get<FetchPayload>(
    `resolutions/patient/me`,
    {
      params: {
        offset: requestData.currentPage,
        limit: 8,
        sortBy: requestData.sortBy,
      },
    }
  );
  return data;
};

export const getOccupations = async () => {
  const { data } = await axiosInstance.get<SpecializationsResponseBody[]>(
    "specializations"
  );
  return data;
};

export const getDoctorsByOccupationId = async (id: string) => {
  const { data } = await axiosInstance.get<Doctors>(
    `doctors/specialization/${id}`
  );
  return data;
};

export const getDoctorsFreeTimeByDateAndId = async (
  date: string,
  id: string
) => {
  type FreeTime = [number] | [];
  const { data } = await axiosInstance.get<FreeTime>(
    `appointments/time/free?date=${date}&doctorID=${id}`
  );
  return data;
};

export const createAppointment = (
  credentials: CreateAppointmentRequestBody
) => {
  return axiosInstance.post(`appointments`, credentials);
};

export const updateAppointmentStatus = async (credentials: any, id: string) => {
  try {
    const result = await axiosInstance
      .patch(`appointments/${id}`, credentials)
      .then(() => successNotification("Status have been updated!"));
    return result;
  } catch (error) {
    errorNotification();
  }
};

export const deleteAppointment = async (id: string) => {
  try {
    await axiosInstance
      .delete(`appointments/${id}`)
      .then(() => successNotification("Appointment have been deleted!"));
  } catch (error) {
    errorNotification();
  }
};

export const CreateResolution = async (
  credentials: CreateResolutionRequestBody
) => {
  try {
    await axiosInstance
      .post(`resolutions/`, credentials)
      .then(() => successNotification("Resolution have been created!"));
  } catch (error) {
    errorNotification();
  }
};

export const editResolution = async (
  credentials: EditResolutionRequestBody
) => {
  console.log(credentials);
  try {
    await axiosInstance
      .patch(`resolutions/${credentials.resolutionID}`, {
        resolution: credentials.resolution,
      })
      .then(() => successNotification("Resolution have been created!"));
  } catch (error) {
    errorNotification();
  }
};

export const deleteResolution = async (id: string) => {
  try {
    await axiosInstance
      .delete(`resolutions/${id}`)
      .then(() => successNotification("Resolution have been deleted!"));
  } catch (error) {
    errorNotification();
  }
};
