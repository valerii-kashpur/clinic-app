import React from 'react';
import { Field } from "formik";
import FormikSpecializationSelector from "../SelectsBlock/FormikSpecializationSelector";
import FormikDoctorSelector from "../SelectsBlock/FormikDoctorSelector";
import FormikInputWithError from "../Form/FormikInputWithError";
import * as Styled from "./VisitReasonsStyles";
import InputLabel from "components/InputLabel";

const FormikVisitReasons = () => {
    return (
        <Styled.Wrapper>
            <Field
                name="specialization"
                type="select"
                component={FormikSpecializationSelector}
            />
            <Field
                name="doctor"
                type="select"
                component={FormikDoctorSelector}
            />
            <Styled.InputWrapper>
                <Styled.InputLabel>
                    <InputLabel htmlFor="reason">Reason for the visit</InputLabel>
                </Styled.InputLabel>
                <Field
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
                <Field
                    name="note"
                    type="text"
                    component={FormikInputWithError}
                    placeholder="note"
                />
            </Styled.InputWrapper>
        </Styled.Wrapper>
    );
};

export default FormikVisitReasons;