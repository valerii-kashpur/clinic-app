import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Input = styled(Field)`
  width: 100%;
  height: 40px;

  padding: 0;
  padding-left: 48px;
  padding-right: ${(props) => (props.password ? "48px" : "16px")};

  border: ${(props) =>
    props.errored
      ? props.theme.inputsBorders.asideInputErrorBorder
      : props.theme.inputsBorders.asideInputBorder};
  border-radius: ${(props) => props.theme.borderRadius.borderRadius};

  background-color: ${(props) => props.theme.colors.asideBackgroundColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  filter: ${(props) =>
    props.errored
      ? "drop-shadow(0px 4px 32px rgba(218, 228, 255, 0.16))"
      : "none"};

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryTextColor};
    font-size: ${(props) => props.theme.fonts.mobileFontSize};
    line-height: 24px;
  }

  @media ${(props) => props.theme.media.tablet} {
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

  color: ${(props) => props.theme.colors.errorTextColor};
`;

const AuthPageInputs = ({
  name,
  type,
  placeholder,
  errored,
  password,
  errors,
  touched
}) => {
  return (
    <>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        errored={errored}
        password={password}
      />
      {errors && touched ? (
        <ErrorMessage>{errors}</ErrorMessage>
      ) : null}
    </>
  );
};

export default AuthPageInputs;
