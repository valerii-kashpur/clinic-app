import React from "react";
import * as Styled from "./VisitReasonsStyles";
import { Formik } from "formik";
import { appointmentSchema } from "utils/YupValidationSchemas";
import SelectsBlock from "../SelectsBlock/SelectsBlock";
import { setNote, setReason } from "redux/createAppointmentSlice";
import { useAppDispatch } from "hooks/useAppDispatch";

const VisitReasons = () => {
  const dispatch = useAppDispatch();

  return (
    <Styled.Wrapper>
      <SelectsBlock />
      <Formik
        initialValues={{
          reason: "",
          note: "",
        }}
        validateOnMount={true}
        validationSchema={appointmentSchema}
        onSubmit={()=>{}}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    dispatch(setReason(e.target.value));
                  }}
                  errored={errors.reason && touched.reason ? "true" : ""}
                />
                {(errors.reason && touched.reason) || !isValid ? (
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
          onChange={(e) => dispatch(setNote(e.target.value))}
        />
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};

export default VisitReasons;
