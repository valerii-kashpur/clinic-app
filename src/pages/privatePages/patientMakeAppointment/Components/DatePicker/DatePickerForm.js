import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerForm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorsFreeTime } from "redux/createAppointmentsActions";
import { selectedDoctorSelector } from "redux/selectors";
import { setSelectedDate } from "redux/createAppointmentSlice";

const DatePickerForm = () => {
  const [selected, setSelected] = useState(new Date());
  const dispatch = useDispatch();
  const today = new Date();
  const selectedDoctor = useSelector((state) => selectedDoctorSelector(state));

  const dateCutter = (date) => {
    return moment(date).toISOString();
  };

  useEffect(() => {
    if (selectedDoctor) {
      const date = dateCutter(selected);
      dispatch(fetchDoctorsFreeTime({date, selectedDoctor}));
    }
  }, [selected, selectedDoctor, dispatch]);

  useEffect(() => {
    const date = dateCutter(selected);
    dispatch(setSelectedDate(date));
  }, [selected, dispatch]);

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => setSelected(date)}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      inline
      minDate={today}
      maxDate={selectedDoctor ? null : today}
    />
  );
};

export default DatePickerForm;
