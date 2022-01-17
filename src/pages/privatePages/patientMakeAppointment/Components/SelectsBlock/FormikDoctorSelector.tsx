import React, { FC, useEffect, useState } from 'react';
import { FieldProps } from "formik";
import FormikSelect from "../SelectComponent/FormikSelect";
import { getDoctorsByOccupationId } from "network/fetchOperations";
import { useQuery } from 'react-query';
import { errorNotification } from "notifications";
import {
    Doctors,
} from "types/fetchTypes";

interface CustomInputComponent {
    type?: string;
}
type MyOption = { label: string, value: string }

const FormikDoctorSelector: FC<CustomInputComponent & FieldProps> = ({ field,
    form,
    ...props }) => {
    const [doctors, setDoctors] = useState<MyOption[]>([]);
    const specializationID = form.values.specialization.value;

    const { isFetching, refetch } =
        useQuery<Doctors, Error>('doctors', () => getDoctorsByOccupationId(specializationID),
            {
                enabled: false, retry: 2,
                onSuccess: res => pushToState(res),
                onError: () => errorNotification()
            });

    const pushToState = (result: Doctors) => {
        const doctorsArray: any = result.map((object: any) => ({
            value: object.id,
            label: `${object.first_name} ${object.last_name}`,
        }));
        setDoctors(doctorsArray)
    }

    useEffect(() => {
        if (specializationID) {
            refetch()
        }
    }, [refetch, specializationID])

    const changeHandler = (selected?: MyOption | MyOption[] | null) => {
        form.setFieldValue("doctor", selected)
    };

    return (
        <div>
            <FormikSelect text="Doctor's Name"
                placeholder="select doctor"
                options={doctors}
                value={form.values.doctor}
                onChange={changeHandler}
                isDisabled={false}
                isLoading={isFetching}
            />

        </div>
    );
};

export default FormikDoctorSelector;