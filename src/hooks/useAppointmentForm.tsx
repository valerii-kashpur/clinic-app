import { useCallback } from "react";
import { useSelector } from "react-redux";
import { fetchCreateAppointment } from "redux/createAppointmentSlice";
import { appointmentFormData } from "redux/selectors";
import { useAppDispatch } from "./useAppDispatch";

type RequestData = {
  date: string,
  reason: string,
  note: string,
  doctorID: string,
};

export const useAppointmentForm = () => {
  const dispatch = useAppDispatch();
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
    const requestData: RequestData = {
      date: selectedTime,
      reason: reasons,
      note: note,
      doctorID: selectedDoctor,
    };

    dispatch(fetchCreateAppointment(requestData));
  }, [dispatch, note, reasons, selectedDoctor, selectedTime]);

  return {
    buttonCondition,
    isFetching,
    createAppointmentRequest,
  };
};
