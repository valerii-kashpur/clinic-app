import React, { useEffect, useState } from 'react';
import Button from "components/Button";
import LoaderForButtons from "components/LoaderForButtons";

const FormikButton = ({ values, isFetching }: any) => {
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (values.reason.length > 3 && values.doctor.value && values.selectedTime) {
            return setIsDisabled(false)
        };
        !isDisabled && setIsDisabled(true)
    }, [values, isDisabled])

    return (
        <>
            <Button
                type="submit"
                disabled={isDisabled}
                width={"160px"}
                height={"56px"}
                data-testid="submitButton"
            >
                {isFetching ? <LoaderForButtons /> : "Submit"}
            </Button>
        </>
    );
};

export default FormikButton;