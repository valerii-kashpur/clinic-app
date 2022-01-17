import React, { FC, useState, useEffect } from "react";
import { FieldProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentFormDatePicker.css";
import moment from "moment";

const AppointmentFormDatePiker: FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const [selected, setSelected] = useState(new Date());
  const today = new Date();
  let doctorID = form.values.doctor.value;
  let selectedDate = form.values.selectedDate;

  const dateCutter = (date: Date) => {
    return moment(date).toISOString();
  };

  const onChangeHandler = (value: Date) => {
    setSelected(value);
  };

  useEffect(() => {
    if (!doctorID) {
      setSelected(new Date());
    }
  }, [doctorID]);

  useEffect(() => {
    if (doctorID && selectedDate !== dateCutter(selected)) {
      const date = dateCutter(selected);
      form.setFieldValue("selectedDate", date);
    }
  }, [selected, form, doctorID, selectedDate]);

  useEffect(() => {
    const date = dateCutter(selected);
    if (selectedDate !== date) {
      form.setFieldValue("selectedDate", date);
    }
  }, [selected, form, selectedDate]);

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
