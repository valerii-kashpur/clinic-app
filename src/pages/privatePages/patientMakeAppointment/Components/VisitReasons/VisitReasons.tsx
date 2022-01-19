import React from "react";
import { useFormContext } from "react-hook-form";
import SpecializationSelect from "../AppointmentFormSelects/SpecializationSelect";
import DoctorSelect from "../AppointmentFormSelects/DoctorSelect";
import InputWithError from "../InputWithError/InputWithError";
import * as Styled from "./VisitReasonsStyles";
import InputLabel from "components/InputLabel";

const VisitReasons = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Styled.Wrapper>
      <SpecializationSelect />
      <DoctorSelect />
      <Styled.InputWrapper>
        <Styled.InputLabel>
          <InputLabel htmlFor="reason">Reason for the visit</InputLabel>
        </Styled.InputLabel>
        <InputWithError register={register} name="reason"
          placeholder="reason" type="text" errors={errors}
        />
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.InputLabel>
          <InputLabel htmlFor="note">Note</InputLabel>{" "}
        </Styled.InputLabel>
        <InputWithError register={register} name="note"
          type="text" errors={errors}
          placeholder="note"
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};

export default React.memo(VisitReasons);
