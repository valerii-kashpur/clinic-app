import React, { useEffect } from 'react';
import { Formik, Field } from "formik";
import FormikSelect from "./FormikSelect";
import FormikInputWithError from "./FormikInputWithError";
import FormikDatePicker from "./FormikDatePiker";
import FormikTimeRadioButtonsGroup from "./FormikTimeRadioButtonsGroup";
import {
    fetchSpecializations,
} from "redux/createAppointmentsActions";
import { appointmentFormData } from "redux/selectors";
import { fetchDoctors, setSelectedDoctor, setSelectedSpecialization } from "redux/slices/createAppointmentSlice";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";

const FormikForm = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(appointmentFormData);

    useEffect(() => {
        dispatch(fetchSpecializations());
    }, [dispatch]);

    const specializationsArray = state.specializations.map((object) => ({
        value: object.id,
        label: object.specialization_name,
    }));

    const doctorsArray = state.doctors.map((object) => ({
        value: object.id,
        label: `${object.first_name} ${object.last_name}`,
    }));

    const formicSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <div>
            <Formik
                initialValues={{
                    specialization: {},
                    doctor: null,
                    reason: "",
                    note: "",
                    selectedDate: "",
                    selectedTime: "",
                }}
                onSubmit={formicSubmit}
            >
                {() => (
                    <div>
                        <Field
                            name="specialization"
                            type="select"
                            component={FormikSelect}
                            placeholder="specialization"
                            optionsArray={specializationsArray}
                        />
                        <Field
                            name="doctor"
                            component={FormikSelect}
                            placeholder="doctor"
                            optionsArray={doctorsArray}
                        />
                        <Field
                            name="reason"
                            type="text"
                            component={FormikInputWithError}
                            placeholder="reason"
                        />
                        <Field
                            name="note"
                            type="text"
                            component={FormikInputWithError}
                            placeholder="note"
                        />
                        <Field
                            name="selectedDate"
                            component={FormikDatePicker}
                        />
                        <Field
                            name="selectedTime"
                            component={FormikTimeRadioButtonsGroup}
                        />
                    </div>
                )
                }</Formik>
        </div>
    );
};

export default FormikForm;