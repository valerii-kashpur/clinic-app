import React, { useState } from "react";
import { useHistory } from "react-router";
import { Formik, Field, Form } from "formik";
import PATHS from "routes/paths";
import VisitReasons from "../VisitReasons/VisitReasons";
import AppointmentFormDatePiker from "../DatePicker/AppointmentFormDatePiker";
import FreeTimeRadioButtonsWrapper from "../FreeTimeRadioButtons/FreeTimeRadioButtonsWrapper";
import AppointmentFormButton from "../AppointmentFormButton/AppointmentFormButton";
import { useQuery } from "react-query";
import { errorNotification } from "notifications";
import { appointmentSchema } from "utils/YupValidationSchemas";
import TitleH4 from "components/TitleH4";
import { createAppointment } from "network/fetchOperations";
import { CreateAppointmentRequestBody } from "types/fetchTypes";
import * as Styled from "../../PatientMakeAppointmentStyles";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

type RequestData = {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
};

const FormikForm = () => {
  const [requestData, setRequestData] =
    useState<React.SetStateAction<any>>(null);

  const history = useHistory();

  const { isFetching } = useQuery(
    ["makeAppointment", requestData],
    () => console.log(requestData),
    {
      enabled: !!requestData,
      retry: 2,
      onSuccess: () => console.log("success"),
      onError: () => errorNotification(),
    }
  );

  const formSubmit = (values: any) => {
    const newData = {
      date: values.selectedTime,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor.value,
    };
    setRequestData(newData);

    // history.push({
    //     pathname: PATHS.doctorView,
    //   });
  };

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
        onSubmit={(values) => formSubmit(values)}
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
                <VisitReasons />
              </Styled.ListItem>
              <Styled.ListItem>
                <Styled.TextWrapper>
                  <Styled.Span>2</Styled.Span>
                  <TitleH4>Choose a day for an appointment</TitleH4>
                </Styled.TextWrapper>
                <Field
                  name="selectedDate"
                  component={AppointmentFormDatePiker}
                />
              </Styled.ListItem>
              <Styled.ListItem>
                <Styled.TextWrapper>
                  <Styled.Span>3</Styled.Span>
                  <TitleH4>Select an available time slot</TitleH4>
                </Styled.TextWrapper>
                <Field
                  name="selectedTime"
                  component={FreeTimeRadioButtonsWrapper}
                />
              </Styled.ListItem>
            </Styled.List>
            <ButtonWrapper>
              <AppointmentFormButton values={values} isFetching={isFetching} />
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
