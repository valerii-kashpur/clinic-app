import React, { useState } from "react";
import { Formik } from "formik";
import { SignUpSchema } from "utils/YupValidationSchemas";
import { styles } from "./SignUpStyles";

import AuthAside from "../components/AuthAside/AuthAside";
import AuthPageInputs from "../components/AuthPageInputs/AuthPageInputs";

// media
import userSvg from "media/user.svg";
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import checkSvg from "media/check.svg";

const {
  AsideLinkWrapper,
  AsideLinkText,
  AsideLink,
  AsideForm,
  FormInputWrapper,
  ErrorMessage,
  PasswordEyeSpan,
  Button,
  ButtonVector,
} = styles;

const SignUp = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordConfirmToggle, setPasswordConfirmToggle] = useState(false);

  return (
    <AuthAside asidePadding="16vh" title="Sign Up">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <AsideForm action="">
            <FormInputWrapper svg={userSvg}>
              <AuthPageInputs
                name="firstName"
                type="text"
                placeholder="First name"
              />
            </FormInputWrapper>
            <FormInputWrapper svg={userSvg}>
              <AuthPageInputs name="lastName" placeholder="Last name" />
            </FormInputWrapper>
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
            <FormInputWrapper svg={lockSvg}>
              <AuthPageInputs
                name="password"
                type={passwordToggle ? "text" : "password"}
                placeholder="Password"
                errored={errors.password && touched.password ? "true" : ""}
                password="true"
              />
              <PasswordEyeSpan
                onClick={() => setPasswordToggle(!passwordToggle)}
              ></PasswordEyeSpan>
              {errors.password && touched.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : null}
            </FormInputWrapper>
            <FormInputWrapper svg={checkSvg}>
              <AuthPageInputs
                name="confirmPassword"
                type={passwordConfirmToggle ? "text" : "password"}
                placeholder="Confirm Password"
                password="true"
              />
              <PasswordEyeSpan
                onClick={() => setPasswordConfirmToggle(!passwordConfirmToggle)}
              ></PasswordEyeSpan>
            </FormInputWrapper>
            <Button type="submit">
              Sign up <ButtonVector />
            </Button>
          </AsideForm>
        )}
      </Formik>
      <AsideLinkWrapper>
        <AsideLinkText>Already have an account?</AsideLinkText>
        <AsideLink to="/">Sign in</AsideLink>
      </AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignUp;
