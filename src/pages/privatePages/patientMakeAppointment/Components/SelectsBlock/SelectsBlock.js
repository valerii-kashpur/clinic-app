import React, { useEffect, useState } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { appointmentFormData } from "redux/selectors";
import {
  fetchDoctors,
  fetchSpecializations,
} from "redux/createAppointmentsActions";
import { setSelectedDoctor, setSelectedSpecialization } from "redux/createAppointmentSlice";

const SelectsBlock = () => {
  const [toggleSelectDisable, setToggleSelectDisable] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => appointmentFormData(state));

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

  const specializationOnChangeHandler = ({ value }) => {
    dispatch(fetchDoctors(value));
    dispatch(setSelectedSpecialization(value))
    if (toggleSelectDisable) {
      setToggleSelectDisable(false);
    }
  };

  const doctorsOnChangeHandler = ({ value }) => {
    dispatch(setSelectedDoctor(value));
  };

  return (
    <>
      <SelectComponent
        text="Occupation"
        placeholder="select occupation"
        defaultValue={""}
        optionsArray={specializationsArray}
        onChangeFn={specializationOnChangeHandler}
      />
      <SelectComponent
        text="Doctor's Name"
        placeholder="select doctor"
        defaultValue={""}
        optionsArray={doctorsArray}
        onChangeFn={doctorsOnChangeHandler}
        Disabled={toggleSelectDisable}
      />
    </>
  );
};

export default SelectsBlock;
