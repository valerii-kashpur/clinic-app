import React from "react";
import { Formik } from "formik";
import {RestorePasswordSchema} from "utils/YupValidationSchemas";

import RestorePassAside from "../components/RestorePassAside/RestorePassAside";
import AuthPageInputs from "../components/AuthPageInputs/AuthPageInputs";

import { styles } from "./RestorePasswordStyles";
// media
import emailSvg from "media/email.svg";

const {
  NotificationText,
  AsideForm,
  FormInputWrapper,
  ErrorMessage,
  Button,
  ButtonVector,
} = styles;


const RestorePassword = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div>
        <NotificationText>
          Please use your email address, and we’ll send you the link to reset
          your password
        </NotificationText>
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
            <AsideForm action="">
              <FormInputWrapper svg={emailSvg}>
                <AuthPageInputs
                  name="email"
                  type="email"
                  placeholder="Email"
                  errored={errors.email && touched.email ? "true" : ""}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </FormInputWrapper>
              <Button>
                Send Resent Link <ButtonVector />
              </Button>
            </AsideForm>
          )}
        </Formik>
      </div>
    </RestorePassAside>
  );
};

export default RestorePassword;
