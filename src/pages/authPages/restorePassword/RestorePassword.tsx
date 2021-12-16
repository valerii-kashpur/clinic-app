import AuthSecondaryText from "components/AuthSecondaryText";
import React from "react";
import RestorePassAside from "../components/RestorePassAside/RestorePassAside";
import ResstorePasswordForm from "../components/restorePasswordForm/RestorePasswordForm";
import * as styled from "./RestorePasswordStyles";

const RestorePassword = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div>
        <styled.NotificationText>
          <AuthSecondaryText>
            Please use your email address, and we’ll send you the link to reset
            your password
          </AuthSecondaryText>
        </styled.NotificationText>
        <ResstorePasswordForm />
      </div>
    </RestorePassAside>
  );
};

export default RestorePassword;
