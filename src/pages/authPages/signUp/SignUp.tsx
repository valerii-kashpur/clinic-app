import AuthLink from "components/AuthLink";
import AuthSecondaryText from "components/AuthSecondaryText";
import React from "react";
import PATHS from "routes/paths";
import AuthAside from "../components/AuthAside/AuthAside";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import * as Styled from "./SignUpStyles";

const SignUp = () => {
  return (
    <AuthAside asidePadding="16vh" title="Sign Up">
      <SignUpForm />
      <Styled.AsideLinkWrapper>
        <Styled.AsideLinkText>
          <AuthSecondaryText>Already have an account?</AuthSecondaryText>
        </Styled.AsideLinkText>
        <AuthLink to={PATHS.signIn}>Sign in</AuthLink>
      </Styled.AsideLinkWrapper>
    </AuthAside>
  );
};

export default SignUp;
