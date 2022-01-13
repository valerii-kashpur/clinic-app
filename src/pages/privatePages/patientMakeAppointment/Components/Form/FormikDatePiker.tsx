import React, { FC, useState, useEffect } from 'react';
import { FieldProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";
import { fetchDoctorsFreeTime, setSelectedDate } from "redux/slices/createAppointmentSlice";

interface CustomInputComponent {
    type?: string;
    placeholder: string;
    optionsArray: [];
}

const FormikDatePiker: FC<CustomInputComponent & FieldProps> = ({
    field,
    form,
    ...props
}) => {


    const [selected, setSelected] = useState(new Date());
    const today = new Date();
    const dispatch = useAppDispatch();
    const selectedDoctor = form.values.doctor
    // const selectedDoctor = useAppSelector(selectedDoctorSelector);

    const dateCutter = (date: Date) => {
        return moment(date).toISOString();
    };

    const onChangeHandler = (value: Date) => {
        setSelected(value);
    };

    useEffect(() => {
        if (selectedDoctor) {
            const date = dateCutter(selected);
            dispatch(fetchDoctorsFreeTime({ date, selectedDoctor }));
            form.setFieldValue("selectedDate", date);
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
        // maxDate={selectedDoctor ? null : today}
        />
    );
};

export default FormikDatePiker;