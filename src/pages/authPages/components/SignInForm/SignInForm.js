import React, { useState } from "react";
import { Formik } from "formik";
import * as Styled from "../../signIn/SignInStyles";
import { SignInSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";

// media
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";

const SignInForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Styled.AsideForm action="">
          <Styled.FormInputWrapper svg={emailSvg}>
            <AuthPageInputs
              name="email"
              type="email"
              placeholder="Email"
              errored={errors.email && touched.email ? "true" : ""}
            />
            {errors.email && touched.email ? (
              <Styled.ErrorMessage>{errors.email}</Styled.ErrorMessage>
            ) : null}
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={lockSvg}>
            <AuthPageInputs
              name="password"
              type={passwordToggle ? "text" : "password"}
              placeholder="Password"
              errored={errors.password && touched.password ? "true" : ""}
              password="true"
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordToggle(!passwordToggle)}
            ></Styled.PasswordEyeSpan>
            {errors.password && touched.password ? (
              <Styled.ErrorMessage>{errors.password}</Styled.ErrorMessage>
            ) : null}
          </Styled.FormInputWrapper>
          <Styled.Button type="submit">
            Sign In <Styled.ButtonVector />
          </Styled.Button>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignInForm;
