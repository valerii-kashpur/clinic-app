import React, { useState } from "react";
import { Formik } from "formik";
import { styles } from "./SignInStyles";
import { SignInSchema } from "utils/YupValidationSchemas";

import AuthAside from "../components/AuthAside/AuthAside";
import AuthPageInputs from "../components/AuthPageInputs/AuthPageInputs";

// media
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";

const {
  AsideForm,
  FormInputWrapper,
  PasswordEyeSpan,
  ErrorMessage,
  Button,
  ButtonVector,
  AsideLinkText,
  AsideLinkWrapper,
  AsideLink,
} = styles;

const SignIn = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <AuthAside asidePadding="24vh" title="Sign In">
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
              {/* <p className="singUp__input__error__email hidden">
                Email not found. Please check the spelling
              </p> */}
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
            <Button type="submit">
              Sign In <ButtonVector />
            </Button>
          </AsideForm>
        )}
      </Formik>
      <AsideLinkText forgotPass>
        <AsideLink to="/restore-password">Forgot password?</AsideLink>
      </AsideLinkText>
      <AsideLinkWrapper>
        <AsideLinkText>Don't have an account?</AsideLinkText>
        <AsideLink to="/sign-up">Sign Up</AsideLink>
      </AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignIn;
