import { Form } from "formik";
import styled from "styled-components";
import baseButtonStyles from "styles/baseButtonStyles";

// media
import angleRight from "media/angle-right-b.svg";

export const NotificationText = styled.p`
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

export const AsideForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormInputWrapper = styled.div`
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

export const ErrorMessage = styled.p`
  margin-top: 14px;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: ${(props) => props.theme.colors.errorTextColor};
`;

export const StyledButton = styled(baseButtonStyles)`
  width: 198px;
  margin-top: 32px;
  height: 48px;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 64px;
    height: 56px;
    width: 214px;
  }
`;

export const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${(props) => props.theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;
