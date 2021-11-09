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

const AuthPageInputs = ({ name, type, placeholder, errored, password }) => {
  return (
    <>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        errored={errored}
        password={password}
      />
    </>
  );
};

export default AuthPageInputs;
