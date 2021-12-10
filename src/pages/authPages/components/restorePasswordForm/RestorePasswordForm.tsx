import React from 'react';
import { Formik } from "formik";
import { RestorePasswordSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import * as styled from "../../restorePassword/RestorePasswordStyles";
// media
import emailSvg from "media/email.svg";
import ButtonWithTextAndArrow from 'components/ButtonWithTextAndArrow';


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
      {({ errors, touched }) => (
        <styled.AsideForm action="">
          <styled.FormInputWrapper svg={emailSvg}>
            <AuthPageInputs
              name="email"
              type="email"
              placeholder="Email"
              errored={errors.email && touched.email ? true : undefined}
            />
            {errors.email && touched.email ? (
              <styled.ErrorMessage>{errors.email}</styled.ErrorMessage>
            ) : null}
          </styled.FormInputWrapper>
          <ButtonWithTextAndArrow text="Send Resent Link" width='198px' height='48px' margin='32px 0 0 0' />
        </styled.AsideForm>
      )}
    </Formik>
  );
};

export default RestorePasswordForm;