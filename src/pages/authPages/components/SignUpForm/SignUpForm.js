import React, { useState } from "react";
import { Formik } from "formik";
import { SignUpSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import * as Styled from "../../signUp/SignUpStyles";

// media
import userSvg from "media/user.svg";
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import checkSvg from "media/check.svg";
import { register } from "network/fetchOperations";

const SignUpForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordConfirmToggle, setPasswordConfirmToggle] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(
        { email: userName, password, firstName, lastName },
        { resetForm }
      ) => {
        const reqData = { userName, password, firstName, lastName };
        register(reqData);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Styled.AsideForm action="">
          <Styled.FormInputWrapper svg={userSvg}>
            <AuthPageInputs
              name="firstName"
              type="text"
              placeholder="First name"
              errored={errors.firstName && touched.firstName ? "true" : ""}
              errors={errors.firstName}
              touched={touched.firstName}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={userSvg}>
            <AuthPageInputs
              name="lastName"
              placeholder="Last name"
              type="text"
              errored={errors.lastName && touched.lastName ? "true" : ""}
              errors={errors.lastName}
              touched={touched.lastName}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={emailSvg}>
            <AuthPageInputs
              name="email"
              type="email"
              placeholder="Email"
              errored={errors.email && touched.email ? "true" : ""}
              errors={errors.email}
              touched={touched.email}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={lockSvg}>
            <AuthPageInputs
              name="password"
              type={passwordToggle ? "text" : "password"}
              placeholder="Password"
              errored={errors.password && touched.password ? "true" : ""}
              password="true"
              errors={errors.password}
              touched={touched.password}
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordToggle(!passwordToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={checkSvg}>
            <AuthPageInputs
              name="confirmPassword"
              type={passwordConfirmToggle ? "text" : "password"}
              placeholder="Confirm Password"
              password="true"
              errored={
                errors.confirmPassword && touched.confirmPassword ? "true" : ""
              }
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordConfirmToggle(!passwordConfirmToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.Button type="submit">
            Sign up <Styled.ButtonVector />
          </Styled.Button>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
