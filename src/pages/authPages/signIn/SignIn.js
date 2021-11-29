import React from "react";
import * as Styled from "./SignInStyles";
import SignInForm from "../components/SignInForm/SignInForm";
import AuthAside from "../components/AuthAside/AuthAside";
import  PATHS  from "routes/paths";

const SignIn = () => {
  return (
    <AuthAside asidePadding="24vh" title="Sign In">
      <SignInForm />
      <Styled.AsideLinkText forgotPass>
        <Styled.AsideLink to={PATHS.restorePassword}>
          Forgot password?
        </Styled.AsideLink>
      </Styled.AsideLinkText>
      <Styled.AsideLinkWrapper>
        <Styled.AsideLinkText>Don't have an account?</Styled.AsideLinkText>
        <Styled.AsideLink to={PATHS.signUp}> Sign Up</Styled.AsideLink>
      </Styled.AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignIn;
