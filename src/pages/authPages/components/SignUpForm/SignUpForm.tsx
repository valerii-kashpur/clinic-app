import React, { useState } from "react";
import { Formik } from "formik";
import { SignUpSchema } from "utils/YupValidationSchemas";
import { useSelector } from "react-redux";
import { loaderSelector } from "redux/selectors";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";
import ButtonTextWithArrow from "components/ButtonTextWithArrow";
import LoaderForButtons from "components/LoaderForButtons";
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
    email: string, password: string, firstName: string, lastName: string
  }

  const submitHandler = ({ email: userName, password, firstName, lastName }: submitHandlerPtops) => {
    const requestData = { userName, password, firstName, lastName };
    registrationRequest(requestData);
  }

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
      {({ errors, touched }) => (
        <Styled.AsideForm action="">
          <Styled.FormInputWrapper svg={userSvg}>
            <AuthPageInputs
              name="firstName"
              type="text"
              placeholder="First name"
              errored={errors.firstName && touched.firstName ? "true" : undefined}
              errors={errors.firstName}
              touched={touched.firstName}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={userSvg}>
            <AuthPageInputs
              name="lastName"
              placeholder="Last name"
              type="text"
              errored={errors.lastName && touched.lastName ? "true" : undefined}
              errors={errors.lastName}
              touched={touched.lastName}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={emailSvg}>
            <AuthPageInputs
              name="email"
              type="email"
              placeholder="Email"
              errored={errors.email && touched.email ? "true" : undefined}
              errors={errors.email}
              touched={touched.email}
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={lockSvg}>
            <AuthPageInputs
              name="password"
              type={passwordToggle ? "text" : "password"}
              placeholder="Password"
              errored={errors.password && touched.password ? "true" : undefined}
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
                errors.confirmPassword && touched.confirmPassword ? "true" : undefined
              }
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordConfirmToggle(!passwordConfirmToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.Button type="submit">
            {loaderFromUserState ? (
              <LoaderForButtons />
            ) : (
              <ButtonTextWithArrow text="Sign up" />
            )}
          </Styled.Button>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
