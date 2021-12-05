import React, { useEffect, useState } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  getDoctorsByOccupationId,
  getOccupations,
} from "network/fetchOperations";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { notify } from "notifications";
import { useAppointmentForm } from "hooks/useAppointmentForm";

const SelectsBlock = ({
  disabled,
  onChangeFnOccupation,
  onChangeFnDoctor,
  doctorValue,
  setSelectedValues,
  onResetPickedDate,
}) => {
  const [occupationOptions, setOccupationOptions] = useState("");
  const [doctorOptions, setDoctorOptions] = useState([]);
  const dispatch = useDispatch();
  const { data, error } = useQuery("occupations", getOccupations);

  const {
    visitReasonsReady,
    setVisitReasonsReady,
    selectsValue,
    setSelectsValue,
    dateIsPicked,
    setDateIsPicked,
    timeIsSelected,
    setTimeIsSelected,
    doctorId,
    setDoctorId,
    toggleButton,
    setToggleButton,
    isLoading,
    createAppointmentRequest,
  } = useAppointmentForm();

  useEffect(() => {
    if (!occupationOptions && data) {
      const array = data.map((object) => ({
        value: object.id,
        label: object.specialization_name,
      }));
      setOccupationOptions(array);
    }
  }, [occupationOptions, data]);

  useEffect(() => {
    error && notify(error);
  }, [error]);

  const getDoctors = ({ value: id }) => {
    dispatch(getDoctorsByOccupationId(id)).then((response) => {
      setDoctorOptions([]);
      setSelectedValues(false);
      onResetPickedDate("");
      onChangeFnDoctor("");
      const array = response.map((object) => ({
        value: object.id,
        label: `${object.first_name} ${object.last_name}`,
      }));
      setDoctorOptions(array);
    });
  };

  return (
    <>
      <SelectComponent
        text="Occupation"
        defaultValue={""}
        optionsArray={occupationOptions}
        onChangeFn={(value) => {
          onChangeFnOccupation(value);
          getDoctors(value);
        }}
      />
      <SelectComponent
        text="Doctor's Name"
        defaultValue={""}
        optionsArray={doctorOptions}
        onChangeFn={(value) => {
          onChangeFnDoctor(value);
          onResetPickedDate("");
        }}
        Disabled={disabled}
        valueProp={doctorValue}
      />
    </>
  );
};

export default SelectsBlock;
