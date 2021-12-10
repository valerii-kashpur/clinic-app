import { Link } from "react-router-dom";
import { Form } from "formik";
import styled from "styled-components";

// media
import eyeOff from "media/eye-off.svg";
import angleRight from "media/angle-right-b.svg";

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
    top: ${({theme}) => theme.borderRadius.borderRadius};
    left: 16px;

    content: "";
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: cover;
    background: url(${({svg}) => svg});
  }

  @media ${({theme}) => theme.media.tablet} {
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

export const PasswordEyeSpan = styled.span`
  position: absolute;
  top: ${({theme}) => theme.borderRadius.borderRadius};
  right: 18px;
  z-index: 10;

  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-size: cover;
  background: url(${eyeOff});

  @media ${({theme}) => theme.media.tablet} {
    top: 16px;
    left: 320px;
  } ;
`;

export const ErrorMessage = styled.p`
  margin-top: 14px;
  position: absolute;

  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;

  color: ${({theme}) => theme.colors.errorTextColor};
`;

export const Button = styled.button`
  width: 118px;
  margin-top: 32px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({theme}) => theme.borderRadius.borderRadius};
  border: none;

  background-color: ${({theme}) => theme.colors.accentColor};
  color: ${({theme}) => theme.colors.inputBackgroundColor};

  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 19px;

  @media ${({theme}) => theme.media.tablet} {
    margin-top: 64px;
    height: 56px;
    width: 138px;

    font-size: 17px;
    line-height: 24px;
  }
`;

export const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${({theme}) => theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

export const AsideLinkText = styled.p`
  margin: 0;
  margin-right: 12px;
  margin-top: 32px;

  margin-top: ${({forgotPass}) => (forgotPass ? "32px" : "0px")};

  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 21px;

  color: ${({theme}) => theme.colors.secondaryTextColor};

  @media ${({theme}) => theme.media.tablet} {
    font-size: ${({theme}) => theme.fonts.mobileFontSize};
    line-height: 21px;
  } ;
`;

export const AsideLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 44px;
  margin-top: auto;

  @media ${({theme}) => theme.media.tablet} {
    padding-top: 40px;
  }

  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

export const AsideLink = styled(Link)`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  text-decoration: underline;

  color: ${({theme}) => theme.colors.accentColor};

  @media ${({theme}) => theme.media.tablet} {
    margin-top: 0px;
    line-height: 19px;
  } ;
`;
