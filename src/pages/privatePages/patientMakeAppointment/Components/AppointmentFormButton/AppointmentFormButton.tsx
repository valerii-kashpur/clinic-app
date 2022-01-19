import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import Button from "components/Button";
import LoaderForButtons from "components/LoaderForButtons";

type buttonProps = {
  isFetching: boolean
}

const AppointmentFormButton = ({ isFetching }: buttonProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const reason = useWatch({ name: "reason" });
  const selectedTime = useWatch({ name: "selectedTime" });

  useEffect(() => {
    if (reason.length > 3 && selectedTime) {
      return setIsDisabled(false);
    }
    !isDisabled && setIsDisabled(true);
  }, [reason.length, selectedTime, isDisabled]);

  return (
    <>
      <Button
        type="submit"
        disabled={(isDisabled || isFetching)}
        width={"160px"}
        height={"56px"}
        data-testid="submitButton"
      >
        {isFetching ? <LoaderForButtons /> : "Submit"}
      </Button>
    </>
  );
};

export default React.memo(AppointmentFormButton);
