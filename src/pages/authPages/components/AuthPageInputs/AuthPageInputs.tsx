import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const Input = styled(Field)`
  width: 100%;
  height: 40px;

  padding: 0;
  padding-left: 48px;
  padding-right: ${({password}) => (password ? "48px" : "16px")};

  border: ${({errored, theme}) =>
    errored
      ? theme.inputsBorders.asideInputErrorBorder
      : theme.inputsBorders.asideInputBorder};
  border-radius: ${({theme}) => theme.borderRadius.borderRadius};

  background-color: ${({theme}) => theme.colors.asideBackgroundColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  filter: ${(errored) =>
    errored
      ? "drop-shadow(0px 4px 32px rgba(218, 228, 255, 0.16))"
      : "none"};

  &::placeholder {
    color: ${({theme}) => theme.colors.secondaryTextColor};
    font-size: ${({theme}) => theme.fonts.mobileFontSize};
    line-height: 24px;
  }

  @media ${({theme}) => theme.media.tablet} {
    width: 368px;
    height: 56px;
    padding-left: 64px;
    padding-right: ${({password}) => (password ? "64px" : "24px")};

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

  color: ${({theme}) => theme.colors.errorTextColor};
`;

type AuthPageInputsProps = {
  name:string,
  type:string,
  placeholder:string,
  errored?: boolean,
  password?:string,
  errors?:string,
  touched?: boolean
};

const AuthPageInputs = ({
  name,
  type,
  placeholder,
  errored,
  password,
  errors,
  touched
}: AuthPageInputsProps) => {
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
