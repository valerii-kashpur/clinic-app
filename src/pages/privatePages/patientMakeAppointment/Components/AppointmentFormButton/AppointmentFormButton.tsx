import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "components/Button";
import LoaderForButtons from "components/LoaderForButtons";

type buttonProps = {
  isFetching: boolean
}

const AppointmentFormButton = ({ isFetching }: buttonProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { watch } = useFormContext();
  const reason = watch("reason");
  const doctor = watch("doctor").value;
  const selectedTime = watch("selectedTime");

  useEffect(() => {
    if (reason.length > 3 && doctor && selectedTime) {
      return setIsDisabled(false);
    }
    !isDisabled && setIsDisabled(true);
  }, [reason.length, doctor, selectedTime, isDisabled]);

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

export default AppointmentFormButton;
