import React, { FC, useEffect, useState } from "react";
import { FieldProps } from "formik";
import FreeTimeRadioButtonsGroup from "./FreeTimeRadioButtonsGroup";
import { getDoctorsFreeTimeByDateAndId } from "network/fetchOperations";
import { useQuery } from "react-query";
import { errorNotification } from "notifications";

const time = [
  "T05:00:00.000Z",
  "T06:00:00.000Z",
  "T07:00:00.000Z",
  "T08:00:00.000Z",
  "T09:00:00.000Z",
  "T10:00:00.000Z",
  "T11:00:00.000Z",
  "T12:00:00.000Z",
  "T13:00:00.000Z",
  "T14:00:00.000Z",
  "T15:00:00.000Z",
  "T16:00:00.000Z",
  "T17:00:00.000Z",
];

type FreeTime = [number] | [];

const FreeTimeRadioButtonsWrapper: FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const [availableTime, setAvailableTime] = useState<FreeTime>([]);

  const { refetch } = useQuery<FreeTime, Error>(
    "freeTime",
    () =>
      getDoctorsFreeTimeByDateAndId(
        form.values.selectedDate,
        form.values.doctor.value
      ),
    {
      enabled: false,
      retry: 2,
      onSuccess: (res) => setAvailableTime(res),
      onError: () => errorNotification(),
    }
  );

  useEffect(() => {
    if (form.values.doctor.value) {
      refetch();
    }
    setAvailableTime([]);
  }, [form.values.selectedDate, form.values.doctor.value, refetch]);

  const handleRadioClick = (e: React.FormEvent<HTMLInputElement>) => {
    form.setFieldValue("selectedTime", e.currentTarget.value);
  };

  return (
    <div>
      <FreeTimeRadioButtonsGroup
        time={time}
        onClick={handleRadioClick}
        selectedDate={form.values.selectedDate}
        availableTime={availableTime}
        selectedTime={form.values.selectedTime}
      />
    </div>
  );
};

export default FreeTimeRadioButtonsWrapper;
