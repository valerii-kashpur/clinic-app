import React, { useState } from "react";
import { Field, Formik } from "formik";
import { SignUpSchema } from "utils/YupValidationSchemas";
import { useSelector } from "react-redux";
import { loaderSelector } from "redux/selectors";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import * as Styled from "../../signUp/SignUpStyles";

// media
import userSvg from "media/user.svg";
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import checkSvg from "media/check.svg";
import { useAuth } from "hooks/useAuth";

const SignUpForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordConfirmToggle, setPasswordConfirmToggle] = useState(false);
  const loaderFromUserState = useSelector(loaderSelector);
  const { registrationRequest } = useAuth();

  type submitHandlerPtops = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };

  const submitHandler = ({
    email: userName,
    password,
    firstName,
    lastName,
  }: submitHandlerPtops) => {
    const requestData = { userName, password, firstName, lastName };
    registrationRequest(requestData);
  };

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
      onSubmit={submitHandler}
    >
      {() => (
        <Styled.AsideForm action="">
          <Styled.FormInputWrapper svg={userSvg}>
            <Field
              name="firstName"
              type="text"
              placeholder="First name"
              component={AuthPageInputs}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={userSvg}>
            <Field
              name="lastName"
              placeholder="Last name"
              type="text"
              component={AuthPageInputs}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={emailSvg}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              component={AuthPageInputs}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={lockSvg}>
            <Field
              name="password"
              type={passwordToggle ? "text" : "password"}
              placeholder="Password"
              component={AuthPageInputs}
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordToggle(!passwordToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={checkSvg}>
            <Field
              name="confirmPassword"
              type={passwordConfirmToggle ? "text" : "password"}
              placeholder="Confirm Password"
              password="true"
              component={AuthPageInputs}
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordConfirmToggle(!passwordConfirmToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.buttonWrapper>
            <Styled.Button
              text="Sign up"
              width="122px"
              height="48px"
              isLoading={loaderFromUserState}
            />
          </Styled.buttonWrapper>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
