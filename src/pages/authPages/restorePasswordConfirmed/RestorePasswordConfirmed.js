import React from "react";
import RestorePassAside from "../components/RestorePassAside/RestorePassAside";
import { styles } from "./RestorePasswordConfirmedStyles";

const { NotificationText, EmailLInk } = styles;

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
