import { createAppointment } from "network/fetchOperations";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLoadingSelector } from "redux/selectors";

export const useAppointmentForm = () => {
  const [visitReasonsReady, setVisitReasonsReady] = useState(false);
  const [selectsValue, setSelectsValue] = useState(false);
  const [dateIsPicked, setDateIsPicked] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [toggleButton, setToggleButton] = useState(true);
  const isLoading = useSelector((state) => isLoadingSelector(state));
  const dispatch = useDispatch();

  //   const loginRequest = useCallback(
  //     (data) => {
  //       dispatch(fetchToken(data));
  //     },
  //     [dispatch]
  //   );

  const createAppointmentRequest = (reqData) => {
    dispatch(createAppointment(reqData));
  };

  return {
    visitReasonsReady,
    setVisitReasonsReady,
    selectsValue,
    setSelectsValue,
    dateIsPicked,
    setDateIsPicked,
    timeIsSelected,
    setTimeIsSelected,
    doctorId,
    setDoctorId,
    toggleButton,
    setToggleButton,
    isLoading,
    createAppointmentRequest,
  };
};
