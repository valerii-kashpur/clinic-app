import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Styled from "../../signIn/SignInStyles";
import { SignInSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";

// media
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import { useSelector } from "react-redux";
import { loaderSelector } from "redux/selectors";
import { useAuth } from "hooks/useAuth";

type submitHandlerProps = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const isLoading = useSelector(loaderSelector);
  const { loginRequest } = useAuth();

  const submitHandler = ({ email, password }: submitHandlerProps) => {
    const requestData = { userName: email, password: password };
    loginRequest(requestData);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={submitHandler}
    >
      {() => (
        <Styled.AsideForm action="">
          <Styled.FormInputWrapper svg={emailSvg}>
            <Field
              name="email"
              type="email"
              component={AuthPageInputs}
              placeholder="Email"
            />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper svg={lockSvg}>
            <Field
              name="password"
              type={passwordToggle ? "text" : "password"}
              component={AuthPageInputs}
              placeholder="Password"
            />
            <Styled.PasswordEyeSpan
              onClick={() => setPasswordToggle(!passwordToggle)}
            ></Styled.PasswordEyeSpan>
          </Styled.FormInputWrapper>
          <Styled.ButtonWrapper>
            <Styled.Button
              type="submit"
              text="Sign in"
              width="138px"
              height="56px"
              isLoading={isLoading}
            />
          </Styled.ButtonWrapper>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignInForm;
