import React, { FC } from "react";
import { FieldProps } from "formik";
import * as Styled from "../VisitReasons/VisitReasonsStyles";

interface CustomInputComponent {
  type?: string;
}

const FormikInputWithError: FC<CustomInputComponent & FieldProps> = ({
  field,
  form,
  ...props
}) => {
  return (
    <>
      <Styled.FormikInput {...field} {...props} />
      {form.errors[field.name] ? (
        <Styled.ErrorMessage>{form.errors[field.name]}</Styled.ErrorMessage>
      ) : null}
    </>
  );
};

export default FormikInputWithError;
