import React, { FC } from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

type Type = {
  password?: boolean;
  errored?: boolean;
};

const Input = styled.input<Type>`
  width: 100%;
  height: 40px;

  padding: 0;
  padding-left: 48px;
  padding-right: ${({ password }) => (password ? "48px" : "16px")};

  border: ${({ errored, theme }) =>
    errored
      ? theme.inputsBorders.asideInputErrorBorder
      : theme.inputsBorders.asideInputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};

  background-color: ${({ theme }) => theme.colors.asideBackgroundColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  filter: ${(errored) =>
    errored ? "drop-shadow(0px 4px 32px rgba(218, 228, 255, 0.16))" : "none"};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: ${({ theme }) => theme.fonts.mobileFontSize};
    line-height: 24px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 368px;
    height: 56px;
    padding-left: 64px;
    padding-right: ${({ password }) => (password ? "64px" : "24px")};

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

  color: ${({ theme }) => theme.colors.errorTextColor};
`;

interface CustomInputComponent {
  type?: string;
}

const AuthPageInputs: FC<CustomInputComponent & FieldProps> = ({
  field,
  form,
  ...props
}) => {
  return (
    <div>
      <Input {...field} {...props} />
      {form.errors[field.name] && form.touched[field.name] ? (
        <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default AuthPageInputs;
