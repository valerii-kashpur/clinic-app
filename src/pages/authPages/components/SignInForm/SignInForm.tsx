import React, { useState } from "react";
import { Formik } from "formik";
import * as Styled from "../../signIn/SignInStyles";
import { SignInSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";

// media
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import { useSelector } from "react-redux";
import { loaderSelector } from "redux/selectors";
import { useAuth } from "hooks/useAuth";
import ButtonWithTextAndArrow from "components/ButtonWithTextAndArrow";

type submitHandlerProps = {
  email: string, password: string
}

const SignInForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const isLoading = useSelector(loaderSelector);
  const { loginRequest } = useAuth();

  const submitHandler = ({ email, password }: submitHandlerProps) => {
    const requestData = { userName: email, password: password };
    loginRequest(requestData);
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Styled.AsideForm action="">
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
          <ButtonWithTextAndArrow type="submit" text="Sign in" width="138px" height="56px" margin="64px 0 0 0" isLoading={isLoading} />
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignInForm;
