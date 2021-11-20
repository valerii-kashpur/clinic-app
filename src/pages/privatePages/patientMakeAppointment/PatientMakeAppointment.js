import React from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import NavWrapper from "./Components/NavWrapper/NavWrapper";
import Title from "components/Title";
import Form from "./Components/Form/Form";

// import * as Styled from './PatientMakeAppointmentStyles';

// IMAGES
import avatar from "media/patientAvatar.png";


const PatientMakeAppointment = () => {
  return (
    <ViewPagesWrapper name="Larry Primston" role="Patient" avatar={avatar}>
      <NavWrapper />
      <section>
        <Title marginProp={"72px 0 40px 0"}>Make an appointment</Title>
        <Form/>
      </section>
    </ViewPagesWrapper>
  );
};

export default PatientMakeAppointment;
