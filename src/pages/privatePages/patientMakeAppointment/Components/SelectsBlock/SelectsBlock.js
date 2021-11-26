import React, { useEffect, useState } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  getDoctorsByOccupationId,
  getOccupations,
} from "network/fetchOperations";
import { useDispatch } from "react-redux";

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

  useEffect(() => {
    if (!occupationOptions) {
      dispatch(getOccupations()).then((response) => {
        const array = response.data.map((object) => ({
          value: object.id,
          label: object.specialization_name,
        }));
        setOccupationOptions(array);
      });
    }
  }, [occupationOptions, dispatch]);

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
