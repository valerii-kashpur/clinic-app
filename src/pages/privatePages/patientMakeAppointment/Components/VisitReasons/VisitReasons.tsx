import React from "react";
import { FastField } from "formik";
import SpecializationSelect from "../AppointmentFormSelects/SpecializationSelect";
import DoctorSelect from "../AppointmentFormSelects/DoctorSelect";
import FormikInputWithError from "../FormikInputWithError/FormikInputWithError";
import * as Styled from "./VisitReasonsStyles";
import InputLabel from "components/InputLabel";

const VisitReasons = () => {
  return (
    <Styled.Wrapper>
      <FastField
        name="specialization"
        type="select"
        component={SpecializationSelect}
      />
      <FastField name="doctor" type="select" component={DoctorSelect} />
      <Styled.InputWrapper>
        <Styled.InputLabel>
          <InputLabel htmlFor="reason">Reason for the visit</InputLabel>
        </Styled.InputLabel>
        <FastField
          name="reason"
          type="text"
          component={FormikInputWithError}
          placeholder="reason"
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.InputLabel>
          <InputLabel htmlFor="note">Note</InputLabel>{" "}
        </Styled.InputLabel>
        <FastField
          name="note"
          type="text"
          component={FormikInputWithError}
          placeholder="note"
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};

export default VisitReasons;
