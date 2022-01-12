import AuthSecondaryText from "components/AuthSecondaryText";
import React from "react";
import RestorePassAside from "../components/RestorePassAside/RestorePassAside";
import * as Styled from "./RestorePasswordConfirmedStyles";

const RestorePasswordConfirmed = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div>
        <Styled.NotificationText>
          <AuthSecondaryText>
            An email has been sent to{" "}
            <Styled.EmailLInk href="/">example@exam.com.</Styled.EmailLInk>{" "}
            Check your inbox, and click the reset link provided.
          </AuthSecondaryText>
        </Styled.NotificationText>
      </div>
    </RestorePassAside>
  );
};

export default RestorePasswordConfirmed;
