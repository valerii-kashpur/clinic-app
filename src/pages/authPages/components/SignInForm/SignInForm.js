import React, { useState } from "react";
import { Formik } from "formik";
import * as Styled from "../../signIn/SignInStyles";
import { SignInSchema } from "utils/YupValidationSchemas";
import AuthPageInputs from "../AuthPageInputs/AuthPageInputs";

// media
import emailSvg from "media/email.svg";
import lockSvg from "media/lock.svg";
import { useDispatch } from "react-redux";
import { getUserFetch } from "Redux/userSlice";
import { useSelector } from "react-redux";
import { loaderSelector } from "Redux/selectors";
import ButtonTextWithArrow from "components/ButtonTextWithArrow";
import LoaderForButtons from "components/LoaderForButtons";

const SignInForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const loaderFromUserState = useSelector((state) => loaderSelector(state));
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        const reqData = { userName: email, password: password };
        dispatch(getUserFetch(reqData));
        resetForm();
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
          <Styled.Button type="submit">
            {loaderFromUserState ? (
              <LoaderForButtons />
            ) : (
              <ButtonTextWithArrow text="Sign in" />
            )}
          </Styled.Button>
        </Styled.AsideForm>
      )}
    </Formik>
  );
};

export default SignInForm;
