import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import SelectComponent from "../SelectComponent/SelectComponent";
import { getDoctorsByOccupationId } from "network/fetchOperations";
import { useQuery } from "react-query";
import { errorNotification } from "notifications";
import { Doctors } from "types/fetchTypes";

type MyOption = { label: string; value: string };

const DoctorSelect = () => {
  const [doctors, setDoctors] = useState<MyOption[]>([]);
  const { setValue } = useFormContext();
  const specializationID = useWatch({ name: "specialization" }).value;
  const currentValue = useWatch({ name: "doctor" });

  const { isFetching, refetch } = useQuery<Doctors, Error>(
    "doctors",
    () => getDoctorsByOccupationId(specializationID),
    {
      enabled: false,
      retry: 2,
      onSuccess: (res) => formatOptionsAndSetToState(res),
      onError: () => errorNotification(),
    }
  );

  const formatOptionsAndSetToState = (result: Doctors) => {
    const doctorsArray: { value: string; label: string }[] = result.map(
      (object) => ({
        value: object.id,
        label: `${object.first_name} ${object.last_name}`,
      })
    );
    setDoctors(doctorsArray);
  };

  useEffect(() => {
    if (specializationID) {
      refetch();
    }
  }, [refetch, specializationID]);

  const onChangeHandler = (selected?: MyOption | MyOption[] | null) => {
    setValue("doctor", selected);
  };

  return (
    <div>
      <SelectComponent
        text="Doctor's Name"
        placeholder="select doctor"
        options={doctors}
        value={currentValue}
        onChange={onChangeHandler}
        isDisabled={!specializationID}
        isLoading={isFetching}
      />
    </div>
  );
};

export default React.memo(DoctorSelect);
