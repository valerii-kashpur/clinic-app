import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCreateAppointment } from "redux/createAppointmentSlice";
import { appointmentFormData } from "redux/selectors";

export const useAppointmentForm = () => {
  const dispatch = useDispatch();
  const {
    selectedSpecialization,
    selectedDoctor,
    reasons,
    selectedTime,
    isFetching,
    note,
  } = useSelector(appointmentFormData);

  const buttonCondition = !Boolean(
    selectedSpecialization &&
      selectedDoctor &&
      reasons.length > 3 &&
      selectedTime
  );

  const createAppointmentRequest = useCallback(() => {
    const reqData = {
      date: selectedTime,
      reason: reasons,
      note: note,
      doctorID: selectedDoctor,
    };

    dispatch(fetchCreateAppointment(reqData));
  }, [dispatch, note, reasons, selectedDoctor, selectedTime]);

  return {
    buttonCondition,
    isFetching,
    createAppointmentRequest,
  };
};
