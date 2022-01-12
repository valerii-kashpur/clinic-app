import React from "react";
import * as Styled from "./SignInStyles";
import SignInForm from "../components/SignInForm/SignInForm";
import AuthAside from "../components/AuthAside/AuthAside";
import PATHS from "routes/paths";
import AuthLink from "components/AuthLink";
import AuthSecondaryText from "components/AuthSecondaryText";

const SignIn = () => {
  return (
    <AuthAside asidePadding="24vh" title="Sign In">
      <SignInForm />
      <Styled.ForgotPasswordLinkWrapper>
        <AuthLink to={PATHS.restorePassword}>Forgot password?</AuthLink>
      </Styled.ForgotPasswordLinkWrapper>
      <Styled.AsideLinkWrapper>
        <Styled.LinkText>
          <AuthSecondaryText>Don't have an account?</AuthSecondaryText>
        </Styled.LinkText>
        <AuthLink to={PATHS.signUp}> Sign Up</AuthLink>
      </Styled.AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignIn;
