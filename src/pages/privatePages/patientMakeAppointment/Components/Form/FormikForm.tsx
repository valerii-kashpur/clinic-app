import React, { useState } from 'react';
import { Formik, Field, Form } from "formik";
import FormikVisitReasons from '../VisitReasons/FormikVisitReasons';
import FormikDatePicker from "../DatePicker/FormikDatePiker";
import FormikTimeRadioButtonsWrapper from "../RadioBtns/FormikTimeRadioButtonsWrapper";
import FormikButton from "./FormikButton";
import { useQuery } from 'react-query';
import { errorNotification } from "notifications";
import { appointmentSchema } from "utils/YupValidationSchemas";
import TitleH4 from "components/TitleH4";
import { createAppointment } from "network/fetchOperations";
import {
    CreateAppointmentRequestBody
} from "types/fetchTypes";
import * as Styled from "../../PatientMakeAppointmentStyles";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

type RequestData = {
    date: string,
    reason: string,
    note: string,
    doctorID: string,
};

const FormikForm = () => {
    const [requestData, setRequestData] = useState<React.SetStateAction<any>>(null);

    const { isFetching } = useQuery(["makeAppointment", requestData],
        () => console.log(requestData),
        {
            enabled: !!requestData, retry: 2,
            onSuccess: () => console.log("success"),
            onError: () => errorNotification()
        }
    )

    const formikSubmit = (values: any) => {
        const newData = {
            date: values.selectedTime,
            reason: values.reason,
            note: values.note,
            doctorID: values.doctor.value,
        };
        setRequestData(newData);
    }

    return (
        <div>
            <Formik
                initialValues={{
                    specialization: { value: "", label: "" },
                    doctor: { value: "", label: "" },
                    reason: "",
                    note: "",
                    selectedDate: "",
                    selectedTime: "",
                }}
                validateOnMount={true}
                validationSchema={appointmentSchema}
                onSubmit={(values) => formikSubmit(values)}
            >
                {({ values }) => (
                    <Form>
                        <Styled.List>
                            <Styled.ListItem>
                                <Styled.TextWrapper>
                                    <Styled.Span>1</Styled.Span>
                                    <TitleH4>
                                        Select a doctor and define the reason of your visit
                                    </TitleH4>
                                </Styled.TextWrapper>
                                <FormikVisitReasons />
                            </Styled.ListItem>
                            <Styled.ListItem>
                                <Styled.TextWrapper>
                                    <Styled.Span>2</Styled.Span>
                                    <TitleH4>Choose a day for an appointment</TitleH4>
                                </Styled.TextWrapper>
                                <Field
                                    name="selectedDate"
                                    component={FormikDatePicker}
                                />
                            </Styled.ListItem>
                            <Styled.ListItem>
                                <Styled.TextWrapper>
                                    <Styled.Span>3</Styled.Span>
                                    <TitleH4>Select an available time slot</TitleH4>
                                </Styled.TextWrapper>
                                <Field
                                    name="selectedTime"
                                    component={FormikTimeRadioButtonsWrapper}
                                />
                            </Styled.ListItem>
                        </Styled.List>
                        <ButtonWrapper>
                            <FormikButton values={values} isFetching={isFetching} />
                        </ButtonWrapper>
                    </Form>
                )
                }</Formik>
        </div>
    );
};

export default FormikForm;