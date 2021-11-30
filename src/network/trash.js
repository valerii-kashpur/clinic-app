export const getPatientAppointment = (dateStatus) => async (dispatch) => {
  // &dateStatus=${dateStatus}
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/patient/me?offset=0&limit=40`)
      .then((response) => dispatch(fetchPatientAppointments(response)));
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};