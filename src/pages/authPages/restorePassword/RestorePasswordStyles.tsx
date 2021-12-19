import { Form } from "formik";
import styled from "styled-components";

// media
import angleRight from "media/angle-right-b.svg";
import ButtonWithTextAndArrow from "components/ButtonWithTextAndArrow";

export const NotificationText = styled.div`
  min-width: 256px;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 368px;
  } ;
`;

export const AsideForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

type FormInputWrapperType = {
  svg: string;
};

export const FormInputWrapper = styled.div<FormInputWrapperType>`
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
  margin-top: 14px;

  font-size: ${({ theme }) => theme.fonts.fontSize13};
  line-height: ${({ theme }) => theme.fonts.lineHeight120};

  color: ${({ theme }) => theme.colors.errorTextColor};
`;

export const ButtonWrapper = styled.div`
  margin: 32px 0 0 0;
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
