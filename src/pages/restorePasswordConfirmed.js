import React from "react";
import RestorePassAside from "../components/RestorePassAside";

const restorePasswordConfirmed = () => {
  return (
    <RestorePassAside title="Restore Password">
      <div className="restorePass__notification_wrapper">
        <p className="restorePass__notification">
          An email has been sent to{" "}
          <a href="/" className="restorePass__notification__accent">
            example@exam.com.
          </a>{" "}
          Check your inbox, and click the reset link provided.
        </p>
      </div>
    </RestorePassAside>
  );
};

export default restorePasswordConfirmed;
