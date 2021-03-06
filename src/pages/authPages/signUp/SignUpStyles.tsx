import { Form } from "formik";
import styled from "styled-components";

// media
import eyeOff from "../../../media/eye-off.svg";
import angleRight from "../../../media/angle-right-b.svg";
import ButtonWithTextAndArrow from "components/ButtonWithTextAndArrow";

export const AsideLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 44px;
  margin-top: auto;

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 40px;
  }

  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

export const AsideLinkText = styled.div`
  margin: 0;
  margin-right: 12px;
`;

export const AsideForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

type FormInputWrapperProps = {
  svg: string;
};

export const FormInputWrapper = styled.div<FormInputWrapperProps>`
  margin-bottom: 24px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    position: absolute;
    z-index: 10;
    top: ${({ theme }) => theme.borderRadius.borderRadius};
    left: 16px;

    content: "";
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: cover;
    background: url(${({ svg }) => svg});
  }

  @media ${({ theme }) => theme.media.tablet} {
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

export const ErrorMessage = styled.p`
  position: absolute;
  margin-top: 14px;

  font-size: ${({ theme }) => theme.fonts.fontSize13};
  line-height: ${({ theme }) => theme.fonts.lineHeight120};
  color: ${({ theme }) => theme.colors.errorTextColor};
`;

export const PasswordEyeSpan = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.borderRadius.borderRadius};
  right: 18px;
  z-index: 10;

  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-size: cover;
  background: url(${eyeOff});

  @media ${({ theme }) => theme.media.tablet} {
    top: 16px;
    left: 320px;
  } ;
`;

export const ButtonWrapper = styled.div`
  margin: 64px 0 0 0;
`;

export const Button = styled(ButtonWithTextAndArrow)`
  width: 122px;
  height: 48px;

  @media ${({ theme }) => theme.media.tablet} {
    height: 56px;
    width: 146px;

    font-size: ${({ theme }) => theme.fonts.fontSize17};
    line-height: 24px;
  } ;
`;

export const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${({ theme }) => theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;
