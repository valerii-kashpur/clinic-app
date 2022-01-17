import React, { useEffect, useState } from "react";
import Button from "components/Button";
import LoaderForButtons from "components/LoaderForButtons";

const AppointmentFormButton = ({ values, isFetching }: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { reason, doctor, selectedTime } = values;

  useEffect(() => {
    if (reason.length > 3 && doctor.value && selectedTime) {
      return setIsDisabled(false);
    }
    !isDisabled && setIsDisabled(true);
  }, [reason.length, doctor.value, selectedTime, isDisabled]);

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
