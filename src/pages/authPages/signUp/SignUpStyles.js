import { Link } from "react-router-dom";
import { Form } from "formik";
import styled from "styled-components";

// media
import eyeOff from "../../../media/eye-off.svg";
import angleRight from "../../../media/angle-right-b.svg";

export const AsideLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 44px;
  margin-top: auto;

  @media ${(props) => props.theme.media.tablet} {
    padding-top: 40px;
  }

  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

export const AsideLinkText = styled.p`
  margin: 0;
  margin-right: 12px;

  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 21px;

  color: ${(props) => props.theme.colors.secondaryTextColor};

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 0px;

    font-size: ${(props) => props.theme.fonts.mobileFontSize};
    line-height: 21px;
  } ;
`;

export const AsideLink = styled(Link)`
  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 130%;
  text-decoration: underline;

  color: ${(props) => props.theme.colors.accentColor};

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 0px;
    line-height: 19px;
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
  position: absolute;
  margin-top: 14px;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: ${(props) => props.theme.colors.errorTextColor};
`;

export const PasswordEyeSpan = styled.span`
  position: absolute;
  top: ${(props) => props.theme.borderRadius.borderRadius};
  right: 18px;
  z-index: 10;

  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-size: cover;
  background: url(${eyeOff});

  @media ${(props) => props.theme.media.tablet} {
    top: 16px;
    left: 320px;
  } ;
`;

export const Button = styled.button`
  width: 122px;
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
    width: 146px;

    font-size: 17px;
    line-height: 24px;
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
