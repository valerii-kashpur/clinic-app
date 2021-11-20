import React from 'react';
import { Formik } from "formik";
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
          // same shape as initial values
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
                errored={errors.email && touched.email ? "true" : ""}
              />
              {errors.email && touched.email ? (
                <styled.ErrorMessage>{errors.email}</styled.ErrorMessage>
              ) : null}
            </styled.FormInputWrapper>
            <styled.StyledButton>
              Send Resent Link <styled.ButtonVector />
            </styled.StyledButton>
          </styled.AsideForm>
        )}
      </Formik>
    );
};

export default RestorePasswordForm;