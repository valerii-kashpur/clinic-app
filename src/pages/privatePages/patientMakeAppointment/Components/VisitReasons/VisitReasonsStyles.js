import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputLabel = styled.label`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;

  border: 1px solid #dce0ec;
  box-sizing: border-box;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #202225;
`;

export const FormikInput = styled(Field)`
  width: 100%;
  height: 54px;
  padding: 0 24px;

  border: ${({errored, theme}) =>
    errored
      ? theme.inputsBorders.asideInputErrorBorder
      : theme.inputsBorders.asideInputBorder};
  border-radius: ${({theme}) => theme.borderRadius.borderRadius};
  
  box-sizing: border-box;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);


  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #202225;
`;

export const ErrorMessage = styled.p`
  margin-top: 14px;
  position: absolute;
  top: 84px;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: ${({theme}) => theme.colors.errorTextColor};
`;