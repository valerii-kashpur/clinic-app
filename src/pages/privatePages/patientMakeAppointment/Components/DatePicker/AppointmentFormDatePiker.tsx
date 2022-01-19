import React, { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentFormDatePicker.css";
import moment from "moment";

const AppointmentFormDatePiker = () => {
  const [selected, setSelected] = useState(new Date());
  const { setValue } = useFormContext();
  const today = new Date();
  const doctorID = useWatch({ name: "doctor" }).value;
  const selectedDate = useWatch({ name: "selectedDate" });

  const dateCutter = (date: Date) => {
    return moment(date).toISOString();
  };

  const onChangeHandler = (value: Date) => {
    setSelected(value);
    setValue("selectedTime", "");
  };

  useEffect(() => {
    const date = dateCutter(selected);
    if (!selectedDate) {
      setSelected(new Date());
      setValue("selectedDate", date);
    }
  }, [setValue, selected, selectedDate]);

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

export default React.memo(AppointmentFormDatePiker);
