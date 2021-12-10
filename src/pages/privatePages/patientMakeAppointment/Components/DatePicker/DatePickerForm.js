import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerForm.css";

const DatePickerForm = ({ selectsValue, onDateIsPiked }) => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();

  const dateCutter = (date) => {
    return moment(date).toISOString()

  }

  useEffect(() => {
    if (selectsValue) {
      onDateIsPiked(dateCutter(startDate));
    }
  }, [startDate, selectsValue, onDateIsPiked]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      inline
      minDate={today}
      maxDate={!selectsValue ? today : null}
    />
  );
};

export default DatePickerForm;
