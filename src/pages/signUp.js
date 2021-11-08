import React, { useState } from "react";
import AuthAside from "../components/AuthAside";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

// media
import userSvg from "../media/user.svg";
import emailSvg from "../media/email.svg";
import lockSvg from "../media/lock.svg";
import checkSvg from "../media/check.svg";
import eyeOff from "../media/eye-off.svg";
import angleRight from "../media/angle-right-b.svg";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const AsideLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 44px;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

const AsideLinkText = styled.p`
  margin: 0;
  margin-right: 12px;

  font-size: 15px;
  line-height: 21px;

  color: #a1abc9;

  @media screen and (min-width: 768px) {
    margin-top: 0px;

    font-size: 15px;
    line-height: 21px;
  } ;
`;

const AsideLink = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-decoration: underline;

  color: #7297ff;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    line-height: 19px;
  } ;
`;

const AsideForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormInputWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 16px;

    content: "";
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: cover;
    background: url(${(props) => props.svg});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    &:last-of-type {
      margin-bottom: 0;
    }
    &::before {
      top: 16px;
      left: 24px;
    }
  } ;
`;

const Input = styled(Field)`
  width: 100%;
  height: 40px;

  padding: 0;
  padding-left: 48px;
  padding-right: ${(props) => (props.password ? "48px" : "16px")};

  border: ${(props) =>
    props.errored ? "1px solid #ff2567" : "1px solid #dce0ec"};
  border-radius: 8px;

  background-color: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  filter: ${(props) =>
    props.errored
      ? "drop-shadow(0px 4px 32px rgba(218, 228, 255, 0.16))"
      : "none"};

  &::placeholder {
    color: #a1abc9;
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 368px;
    height: 56px;
    padding-left: 64px;
    padding-right: ${(props) => (props.password ? "64px" : "24px")};

    font-size: 17px;
    line-height: 24px;

    &::placeholder {
      font-size: 17px;
      line-height: 24px;
    }
  } ;
`;

const ErrorMessage = styled.p`
  position: absolute;
  margin-top: 14px;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: #f6657f;
`;

const PasswordEyeSpan = styled.span`
  position: absolute;
  top: 8px;
  right: 18px;
  z-index: 10;

  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-size: cover;
  background: url(${eyeOff});

  @media screen and (min-width: 768px) {
    top: 16px;
    left: 320px;
  } ;
`;

const Button = styled.button`
  width: 122px;
  margin-top: 32px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;

  background-color: #7297ff;
  color: #ffffff;

  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    height: 56px;
    width: 146px;

    font-size: 17px;
    line-height: 24px;
  }
`;

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 8px;

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

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
              <Input name="firstName" type="text" placeholder="First name" />
            </FormInputWrapper>
            <FormInputWrapper svg={userSvg}>
              <Input name="lastName" placeholder="Last name" />
            </FormInputWrapper>
            <FormInputWrapper svg={emailSvg}>
              <Input
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
              <Input
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
              <Input
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
