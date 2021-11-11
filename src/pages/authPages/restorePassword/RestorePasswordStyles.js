import { Form } from "formik";
import styled from "styled-components";

// media
import angleRight from "media/angle-right-b.svg";

const NotificationText = styled.p`
  min-width: 256px;
  margin: 0;
  margin-bottom: 24px;

  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${(props) => props.theme.fonts.fontStyle};

  color: ${(props) => props.theme.colors.secondaryTextColor};

  @media ${(props) => props.theme.media.tablet} {
    width: 368px;
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
    top: ${(props) => props.theme.borderRadius.borderRadius};
    left: 16px;

    content: "";
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: cover;
    background: url(${(props) => props.svg});
  }

  @media ${(props) => props.theme.media.tablet} {
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

const ErrorMessage = styled.p`
  margin-top: 14px;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: ${(props) => props.theme.colors.errorTextColor};
`;

const Button = styled.button`
  width: 198px;
  margin-top: 32px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.borderRadius.borderRadius};
  border: none;

  background-color: ${(props) => props.theme.colors.accentColor};
  color: ${(props) => props.theme.colors.inputBackgroundColor};

  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 19px;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 64px;
    height: 56px;
    width: 214px;

    font-size: 17px;
    line-height: 24px;
  }
`;

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${(props) => props.theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

export const styles = {
  NotificationText,
  AsideForm,
  FormInputWrapper,
  ErrorMessage,
  Button,
  ButtonVector,
};
