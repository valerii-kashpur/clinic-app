import React, { useEffect, useState } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import { appointmentFormData } from "redux/selectors";
import {
  fetchSpecializations,
} from "redux/createAppointmentsActions";
import { fetchDoctors, setSelectedDoctor, setSelectedSpecialization } from "redux/slices/createAppointmentSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

const SelectsBlock = () => {
  const [toggleSelectDisable, setToggleSelectDisable] = useState(true);
  const dispatch = useAppDispatch();
  const state = useAppSelector(appointmentFormData);

  useEffect(() => {
    dispatch(fetchSpecializations());
  }, [dispatch]);

  const specializationsArray = state.specializations.map((object) => ({
    value: object.id,
    label: object.specialization_name,
  }));

  const doctorsArray = state.doctors.map((object) => ({
    value: object.id,
    label: `${object.first_name} ${object.last_name}`,
  }));

  const specializationOnChangeHandler = (data: { label: string; value: string }) => {
    dispatch(fetchDoctors(data.value));
    dispatch(setSelectedSpecialization(data.value))
    if (toggleSelectDisable) {
      setToggleSelectDisable(false);
    }
  };

  const doctorsOnChangeHandler = (data: { label: string, value: string }) => {
    dispatch(setSelectedDoctor(data.value));
  };

  return (
    <>
      <SelectComponent
        text="Occupation"
        placeholder="select occupation"
        optionsArray={specializationsArray}
        onChangeFn={specializationOnChangeHandler}
      />
      <SelectComponent
        text="Doctor's Name"
        placeholder="select doctor"
        optionsArray={doctorsArray}
        onChangeFn={doctorsOnChangeHandler}
        Disabled={toggleSelectDisable}
      />
    </>
  );
};

export default SelectsBlock;
