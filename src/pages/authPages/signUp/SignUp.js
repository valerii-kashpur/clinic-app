import React from "react";
import AuthAside from "../components/AuthAside/AuthAside";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import * as Styled from "./SignUpStyles";

const SignUp = () => {
  return (
    <AuthAside asidePadding="16vh" title="Sign Up">
      <SignUpForm />
      <Styled.AsideLinkWrapper>
        <Styled.AsideLinkText>Already have an account?</Styled.AsideLinkText>
        <Styled.AsideLink to="/sign-in">Sign in</Styled.AsideLink>
      </Styled.AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignUp;
