import React from "react";
import { Field, Formik } from "formik";
import { RestorePasswordSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import * as styled from "../../restorePassword/RestorePasswordStyles";
// media
import emailSvg from "media/email.svg";

const RestorePasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={RestorePasswordSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <styled.AsideForm action="">
          <styled.FormInputWrapper svg={emailSvg}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              component={AuthPageInputs}
            />
          </styled.FormInputWrapper>
          <styled.ButtonWrapper>
            <styled.Button
              text="Send Resent Link"
              width="198px"
              height="48px"
            />
          </styled.ButtonWrapper>
        </styled.AsideForm>
      )}
    </Formik>
  );
};

export default RestorePasswordForm;
