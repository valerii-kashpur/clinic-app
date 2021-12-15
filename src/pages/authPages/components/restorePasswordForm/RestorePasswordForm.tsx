import React from "react";
import { Field, Formik } from "formik";
import { RestorePasswordSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import * as styled from "../../restorePassword/RestorePasswordStyles";
// media
import emailSvg from "media/email.svg";
import ButtonWithTextAndArrow from "components/ButtonWithTextAndArrow";

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
          <ButtonWithTextAndArrow
            text="Send Resent Link"
            width="198px"
            height="48px"
            margin="32px 0 0 0"
          />
        </styled.AsideForm>
      )}
    </Formik>
  );
};

export default RestorePasswordForm;
