import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import RestorePassAside from "../components/RestorePassAside";
import AuthPageInputs from "../components/AuthPageInputs";


// media
import emailSvg from "../media/email.svg";
import angleRight from "../media/angle-right-b.svg";

//  Styles ---------------------------------------------------------------------------------------------

const RestorePasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const NotificationText = styled.p`
  min-width: 256px;
  margin: 0;
  margin-bottom: 24px;

  font-size: 15px;
  line-height: 130%;
  font-weight: normal;

  color: #a1abc9;

  @media screen and (min-width: 768px) {
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
    top: 8px;
    left: 16px;

    content: "";
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: cover;
    background: url(${(props) => props.svg});
  }

  @media screen and (min-width: 768px) {
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

  color: #f6657f;
`;

const Button = styled.button`
  width: 198px;
  margin-top: 32px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;

  background-color: #7297ff;
  color: #ffffff;

  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  @media screen and (min-width: 768px) {
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
  margin-left: 8px;

  background: url(${angleRight});
  background-repeat: no-repeat;
`;
// -------------------------------------------------------------------------------------------------
const RestorePassword = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div>
        <NotificationText>
          Please use your email address, and we’ll send you the link to reset
          your password
        </NotificationText>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={RestorePasswordSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <AsideForm action="">
              <FormInputWrapper svg={emailSvg}>
                <AuthPageInputs
                  name="email"
                  type="email"
                  placeholder="Email"
                  errored={errors.email && touched.email ? "true" : ""}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </FormInputWrapper>
              <Button>
                Send Resent Link <ButtonVector />
              </Button>
            </AsideForm>
          )}
        </Formik>
      </div>
    </RestorePassAside>
  );
};

export default RestorePassword;
