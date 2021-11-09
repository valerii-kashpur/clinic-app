import React from "react";
import RestorePassAside from "../components/RestorePassAside";
import styled from "styled-components";

//  Styles ---------------------------------------------------------------------------------------------
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

const EmailLInk = styled.a`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-decoration: underline;

  color: #7297ff;
`;
//  ---------------------------------------------------------------------------------------------

const RestorePasswordConfirmed = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div>
        <NotificationText>
          An email has been sent to{" "}
          <EmailLInk href="/">example@exam.com.</EmailLInk> Check your inbox,
          and click the reset link provided.
        </NotificationText>
      </div>
    </RestorePassAside>
  );
};

export default RestorePasswordConfirmed;
