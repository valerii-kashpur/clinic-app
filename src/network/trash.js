export const getDoctorAppointment = (sortBy) => async (dispatch) => {
  // &sortBy=${sortBy}
  dispatch(setIsLoadingOn());
  try {
    await axiosInstance
      .get(`appointments/doctor/me?offset=0&limit=40`)
      .then((response) =>
        dispatch(fetchDoctorAppointments(response.data)).then()
      );
    dispatch(setIsLoadingOff());
  } catch (error) {
    dispatch(setIsLoadingOff());
    notify(error.response.status, error.response.data);
  }
};