import React, { useEffect, useState } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import * as Styled from "./VisitReasonsStyles";
import { Formik } from "formik";
import { appointmentShema } from "utils/YupValidationSchemas";

// Then inside the component body

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const VisitReasons = ({ onReady, showDatePicker }) => {
  const [occupation, setOccupation] = useState("");
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [isReasonValid, setIsReasonValid] = useState(false);

  useEffect(() => {
    if (occupation && doctor) {
      showDatePicker({ occupation, doctor, reason, note });
    }
    if (occupation && doctor && reason) {
      onReady(isReasonValid);
    }
  }, [occupation, doctor, reason, note, showDatePicker, onReady, isReasonValid]);

  return (
    <Styled.Wrapper>
      <SelectComponent
        text="Occupation"
        defaultValue={occupation}
        optionsArray={options}
        onChangeFn={setOccupation}
      />
      <SelectComponent
        text="Doctor's Name"
        defaultValue={doctor}
        optionsArray={options}
        onChangeFn={setDoctor}
        Disabled={!occupation}
      />

      <Formik
        initialValues={{
          reason: "",
        }}
        validateOnMount={true}
        validationSchema={appointmentShema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, isValid, handleChange }) => {
          return (
            <>
              <Styled.InputWrapper>
                <Styled.InputLabel htmlFor="reason">
                  Reason for the visit
                </Styled.InputLabel>
                <Styled.FormikInput
                  name="reason"
                  placeholder="describe reasons for the visit"
                  onChange={(e) => {
                    handleChange(e);
                    setReason(e.target.value);
                    if (isReasonValid === !isValid) {
                      setIsReasonValid(isValid);
                    }
                  }}
                  errored={errors.reason && touched.reason ? "true" : ""}
                />
                {(errors.reason && touched.reason) || !isValid? (
                  <Styled.ErrorMessage>{errors.reason}</Styled.ErrorMessage>
                ) : null}
              </Styled.InputWrapper>
            </>
          );
        }}
      </Formik>
      <Styled.InputWrapper>
        <Styled.InputLabel htmlFor="note">Note</Styled.InputLabel>
        <Styled.Input
          name="note"
          type="text"
          placeholder="Leave a note if needed"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};

export default VisitReasons;
