import React, { FC, useState } from 'react';
import { FieldProps } from "formik";
import Select from "react-select";

interface CustomInputComponent {
    type?: string;
    placeholder: string;
    optionsArray: [];
}

const FormikSelect: FC<CustomInputComponent & FieldProps> = ({
    field,
    form,
    ...props
}) => {
    type MyOption = { label: string, value: number }
    const [value, setValue] = useState(null)

    const changeHandler = (selected?: MyOption | MyOption[] | null) => {

        console.log(selected);
        form.setFieldValue("specialization", selected)
    };

    return (
        <div>
            <Select
                defaultValue={null}
                value={value}
                onChange={changeHandler}
                options={props.optionsArray}
                isDisabled={false}
                inputId={props.placeholder}
                data-testid={props.placeholder}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default FormikSelect;