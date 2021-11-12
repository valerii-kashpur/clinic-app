import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import AppointmentsList from "./components/AppointmentsList";
import { styles } from "./PatientViewStyles";

import { appointmentsData } from "utils/appointmentsData";

// IMAGES
import avatar from "media/patientAvatar.png";
import slider from "media/sliders-v-alt.svg";

const {
  NavButtonsWrapper,
  NavButton,
  NavigationWrapper,
  NavSectionTitle,
  NavgationItemsWrapper,
  NavigationItemSelect,
  NavigationSelectSpan,
  NavigationSelectDesktop,
  EmptyListBlock,
  EmptyListText,
  UppointmentCreateButton,
} = styles;

const PatientView = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    setAppointments(appointmentsData);
  }, []);

  return (
    <ViewPagesWrapper name="Larry Primston" role="Patient" avatar={avatar}>
      <NavButtonsWrapper>
        <NavButton>Profile</NavButton>
        <NavButton current>Appointments</NavButton>
        <NavButton>resolutions</NavButton>
      </NavButtonsWrapper>
      <NavigationWrapper>
        <NavSectionTitle>My Appointments</NavSectionTitle>
        <NavgationItemsWrapper>
          <NavigationItemSelect src={slider} alt="" />
          <NavigationSelectSpan>Show:</NavigationSelectSpan>
          <NavigationSelectDesktop>
            <option value="">Upcoming</option>
          </NavigationSelectDesktop>
          <UppointmentCreateButton>
            + create an uppointment
          </UppointmentCreateButton>
        </NavgationItemsWrapper>
      </NavigationWrapper>
      {appointments.length > 0 ? (
        <AppointmentsList appointments={appointments} />
      ) : (
        <EmptyListBlock>
          <EmptyListText>
            You have no patients yet. To create a patient profile, please
            contact your administrator.
          </EmptyListText>
        </EmptyListBlock>
      )}
    </ViewPagesWrapper>
  );
};

export default PatientView;
