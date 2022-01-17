import React, { FC, useState } from "react";
import { FieldProps } from "formik";
import SelectComponent from "../SelectComponent/SelectComponent";
import { getOccupations } from "network/fetchOperations";
import { useQuery } from "react-query";
import { SpecializationsResponseBody } from "types/fetchTypes";
import { errorNotification } from "notifications";

type MyOption = { label: string; value: string };

const SpecializationSelect: FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const [specializations, setSpecializations] = useState<MyOption[]>([]);

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
    form.setFieldValue("doctor", { value: "", label: "" });
    form.setFieldValue("selectedTime", "");
  };

  const onChangeHandler = (selected?: MyOption | MyOption[] | null) => {
    resetFormFields();
    form.setFieldValue("specialization", selected);
  };

  return (
    <div>
      <SelectComponent
        text="Occupation"
        placeholder="select occupation"
        options={specializations}
        onChange={onChangeHandler}
        value={form.values.specialization}
        isDisabled={false}
        isLoading={isFetching}
      />
    </div>
  );
};

export default SpecializationSelect;
