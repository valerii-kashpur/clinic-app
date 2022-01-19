import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
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

const FreeTimeRadioButtonsWrapper = () => {
  const [availableTime, setAvailableTime] = useState<FreeTime>([]);
  const { setValue } = useFormContext();
  const selectedDate = useWatch({ name: "selectedDate" });
  const selectedTime = useWatch({ name: "selectedTime" });
  const doctorID = useWatch({ name: "doctor" }).value;

  const { refetch } = useQuery<FreeTime, Error>(
    "freeTime",
    () => getDoctorsFreeTimeByDateAndId(selectedDate, doctorID),
    {
      enabled: false,
      retry: 2,
      onSuccess: (res) => setAvailableTime(res),
      onError: () => errorNotification(),
    }
  );

  useEffect(() => {
    if (doctorID && selectedDate) {
      refetch();
    }
    setAvailableTime([]);
  }, [doctorID, refetch, selectedDate]);

  const handleRadioClick = (e: React.FormEvent<HTMLInputElement>) => {
    setValue("selectedTime", e.currentTarget.value);
  };

  return (
    <div>
      <FreeTimeRadioButtonsGroup
        time={time}
        onClick={handleRadioClick}
        selectedDate={selectedDate}
        availableTime={availableTime}
        setSelectedTime={selectedTime}
      />
    </div>
  );
};

export default React.memo(FreeTimeRadioButtonsWrapper);
