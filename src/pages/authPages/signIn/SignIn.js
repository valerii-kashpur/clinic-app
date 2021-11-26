import React from "react";
import * as Styled from "./SignInStyles";
import SignInForm from "../components/SignInForm/SignInForm";
import AuthAside from "../components/AuthAside/AuthAside";

const SignIn = () => {
  return (
    <AuthAside asidePadding="24vh" title="Sign In">
      <SignInForm />
      <Styled.AsideLinkText forgotPass>
        <Styled.AsideLink to="/restore-password">
          Forgot password?
        </Styled.AsideLink>
      </Styled.AsideLinkText>
      <Styled.AsideLinkWrapper>
        <Styled.AsideLinkText>Don't have an account?</Styled.AsideLinkText>
        <Styled.AsideLink to="/sign-up"> Sign Up</Styled.AsideLink>
      </Styled.AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignIn;
