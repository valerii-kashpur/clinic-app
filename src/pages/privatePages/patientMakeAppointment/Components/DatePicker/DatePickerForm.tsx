import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerForm.css";
import { selectedDoctorSelector } from "redux/selectors";
import { fetchDoctorsFreeTime, setSelectedDate } from "redux/slices/createAppointmentSlice";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";

const DatePickerForm = () => {
  const [selected, setSelected] = useState(new Date());
  const dispatch = useAppDispatch();
  const today = new Date();
  const selectedDoctor = useAppSelector(selectedDoctorSelector);

  const dateCutter = (date: Date) => {
    return moment(date).toISOString();
  };

  const onChangeHandler = (value: Date) => {
    setSelected(value)
  }

  useEffect(() => {
    if (selectedDoctor) {
      const date = dateCutter(selected);
      dispatch(fetchDoctorsFreeTime({ date, selectedDoctor }));

    }
  }, [selected, selectedDoctor, dispatch]);

  useEffect(() => {
    const date = dateCutter(selected);
    dispatch(setSelectedDate(date));
  }, [selected, dispatch]);

  return (
    <DatePicker
      selected={selected}
      onChange={onChangeHandler}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      inline
      minDate={today}
      maxDate={selectedDoctor ? null : today}
    />
  );
};

export default DatePickerForm;
