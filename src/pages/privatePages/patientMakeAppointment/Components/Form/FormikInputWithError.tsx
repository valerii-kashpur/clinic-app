import React, { FC } from "react";
import { FieldProps } from "formik";

interface CustomInputComponent {
    type?: string;
}

const FormikInputWithError: FC<CustomInputComponent & FieldProps> = ({ field,
    form,
    ...props }) => {
    return (
        <div>
            <input {...field} {...props} />
            {form.errors[field.name] && form.touched[field.name] ? (
                <p>{form.errors[field.name]}</p>
            ) : null}
        </div>
    );
};

export default FormikInputWithError;