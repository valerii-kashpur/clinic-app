import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import SelectComponent from "../SelectComponent/SelectComponent";
import { getOccupations } from "network/fetchOperations";
import { useQuery } from "react-query";
import { SpecializationsResponseBody } from "types/fetchTypes";
import { errorNotification } from "notifications";

type MyOption = { label: string; value: string };

const SpecializationSelect = () => {
  const [specializations, setSpecializations] = useState<MyOption[]>([]);
  const { watch, setValue } = useFormContext();
  const currentValue = watch("specialization");

  const { isFetching } = useQuery<SpecializationsResponseBody[], Error>(
    "specializations",
    getOccupations,
    {
      enabled: true,
      retry: 2,
      onSuccess: (res) => formatOptionsAndSetToState(res),
      onError: () => errorNotification(),
    }
  );

  const formatOptionsAndSetToState = (
    result: SpecializationsResponseBody[]
  ) => {
    const specializationsArray = result.map((object) => ({
      value: object.id,
      label: object.specialization_name,
    }));
    setSpecializations(specializationsArray);
  };

  const resetFormFields = () => {
    setValue("doctor", { value: "", label: "" });
    setValue("selectedTime", "");
  };

  const onChangeHandler = (selected?: MyOption | MyOption[] | null) => {
    resetFormFields();
    setValue("specialization", selected);
  };

  return (
    <div>
      <SelectComponent
        text="Occupation"
        placeholder="select occupation"
        options={specializations}
        onChange={onChangeHandler}
        value={currentValue}
        isDisabled={false}
        isLoading={isFetching}
      />
    </div>
  );
};

export default SpecializationSelect;
