import React, { FC, useState } from 'react';
import { FieldProps } from "formik";
import FormikSelect from "../SelectComponent/FormikSelect";
import { getOccupations } from "network/fetchOperations";
import { useQuery } from 'react-query';
import {
    SpecializationsResponseBody,
} from "types/fetchTypes";
import { errorNotification } from "notifications";

interface CustomInputComponent {
    type?: string;
}
type MyOption = { label: string, value: string }

const FormikSpecializationSelector: FC<CustomInputComponent & FieldProps> = ({ field,
    form,
    ...props }) => {
    const [specializations, setSpecializations] = useState<MyOption[]>([]);

    const { isFetching } =
        useQuery<SpecializationsResponseBody[], Error>('specializations', getOccupations,
            {
                enabled: true, retry: 2,
                onSuccess: res => pushToState(res),
                onError: () => errorNotification()
            });

    const pushToState = (result: SpecializationsResponseBody[]) => {
        const specializationsArray = result.map((object) => ({
            value: object.id,
            label: object.specialization_name,
        }));
        setSpecializations(specializationsArray)
    }

    const resetFormFields = () => {
        form.setFieldValue("doctor", { value: "", label: "" });
        form.setFieldValue("selectedTime", "");
    }

    const changeHandler = (selected?: MyOption | MyOption[] | null) => {
        resetFormFields();
        form.setFieldValue("specialization", selected)
    };

    return (
        <div>
            <FormikSelect text="Occupation"
                placeholder="select occupation"
                options={specializations}
                onChange={changeHandler}
                value={form.values.specialization}
                isDisabled={false}
                isLoading={isFetching}
            />
        </div>
    );
};

export default FormikSpecializationSelector;