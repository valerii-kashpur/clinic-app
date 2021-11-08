import React from "react";
import RestorePassAside from "../components/RestorePassAside";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RestorePasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const restorePassword = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div className="restorePass__form__wrapper">
        <p className="restorePass__notification">
          Please use your email address, and we’ll send you the link to reset
          your password
        </p>
        <Formik
          initialValues={{
            email: ""
          }}
          validationSchema={RestorePasswordSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form action="" className="aside__form__signUp">
              <div className="aside__form__input__wrapper email">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                className={`aside__form__input email ${errors.email?`error`:null}`}
                />
                 {errors.email && touched.email ? (
                <p className="singUp__input__error__email">{errors.email}</p>
              ) : null}
              </div>
              <button className="aside__form__restorePass__button">
                Send Resent Link <span className="form__button__vector"></span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </RestorePassAside>
  );
};

export default restorePassword;
