import React, { FC, useState, useEffect } from 'react';
import { FieldProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerForm.css";
import moment from "moment";

interface CustomInputComponent {
    type?: string;
}

const FormikDatePiker: FC<CustomInputComponent & FieldProps> = ({
    field,
    form,
    ...props
}) => {
    const [selected, setSelected] = useState(new Date());
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const today = new Date();

    const dateCutter = (date: Date) => {
        return moment(date).toISOString();
    };

    const onChangeHandler = (value: Date) => {
        setSelected(value);
    };

    useEffect(() => {
        if (!form.values.doctor.value) {
            setSelectedDoctor("");
            setSelected(new Date());
        }
    }, [form.values.doctor.value])

    useEffect(() => {
        if (form.values.doctor.value && form.values.doctor.value !== selectedDoctor) {
            return setSelectedDoctor(form.values.doctor.value)
        }
        // setSelected(new Date());  // reset selected date after occupation select changes (optional)
    }, [form.values.doctor.value, selectedDoctor])

    useEffect(() => {
        if (selectedDoctor && form.values.selectedDate !== dateCutter(selected)) {
            const date = dateCutter(selected);
            form.setFieldValue("selectedDate", date);
        }
    }, [selected, form, selectedDoctor]);


    useEffect(() => {
        const date = dateCutter(selected);
        if (form.values.selectedDate !== date)
            form.setFieldValue("selectedDate", date);
    }, [selected, form]);

    return (
        <DatePicker
            selected={selected}
            onChange={onChangeHandler}
            formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
            inline
            minDate={today}
            maxDate={selectedDoctor ? null : today} />
    );
};

export default FormikDatePiker;