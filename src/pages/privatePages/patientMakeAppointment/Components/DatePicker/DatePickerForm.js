import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerForm.css";

const DatePickerForm = ({ disabled, onDateIsPiked }) => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();

  const dateCutter = (date) => {
    return moment(date, "DD/MM/YYYY").format("DD.MM.YYYY")
  }

  useEffect(() => {
    if (!disabled) {
      onDateIsPiked(dateCutter(startDate));
    }
  }, [startDate, disabled, onDateIsPiked]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      inline
      minDate={today}
      maxDate={disabled ? today : null}
    />
  );
};

export default DatePickerForm;
