import React, { FC, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentFormDatePicker.css";
import moment from "moment";

const AppointmentFormDatePiker = () => {
  const [selected, setSelected] = useState(new Date());
  const { watch, setValue } = useFormContext();
  const today = new Date();
  const doctorID = watch("doctor").value;
  const selectedDate = watch("selectedDate");

  const dateCutter = (date: Date) => {
    return moment(date).toISOString();
  };

  const onChangeHandler = (value: Date) => {
    setSelected(value);
    setValue("selectedTime", "");
  };

  useEffect(() => {
    const date = dateCutter(selected);
    if (!doctorID && selectedDate) {
      setSelected(new Date());
      setValue("selectedDate", date);
    }
  }, [doctorID, setValue, selected, selectedDate]);

  useEffect(() => {
    const date = dateCutter(selected);
    if (doctorID && selectedDate !== date) {
      setValue("selectedDate", date);
    }
  }, [selected, setValue, doctorID, selectedDate]);

  return (
    <DatePicker
      selected={selected}
      onChange={onChangeHandler}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      inline
      minDate={today}
      maxDate={doctorID ? null : today}
    />
  );
};

export default AppointmentFormDatePiker;
