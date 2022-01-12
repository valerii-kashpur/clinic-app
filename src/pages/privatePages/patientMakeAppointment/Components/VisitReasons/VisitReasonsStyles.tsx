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

export const InputLabel = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;

  border: ${({ theme }) => theme.inputsBorders.asideInputBorder};
  box-sizing: border-box;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};
  color: ${({ theme }) => theme.colors.baseColor}; ;
`;

export const FormikInput = styled(Field)`
  width: 100%;
  height: 54px;
  padding: 0 24px;

  border: ${({ errored, theme }) =>
    errored
      ? theme.inputsBorders.asideInputErrorBorder
      : theme.inputsBorders.asideInputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};

  box-sizing: border-box;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};
  color: ${({ theme }) => theme.colors.baseColor}; ;
`;

export const ErrorMessage = styled.p`
  margin-top: 14px;
  position: absolute;
  top: 84px;

  font-size: ${({ theme }) => theme.fonts.fontSize13};
  line-height: ${({ theme }) => theme.fonts.lineHeight120};
  color: ${({ theme }) => theme.colors.errorTextColor};
`;
