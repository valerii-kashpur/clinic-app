import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper.js";
import AppoinmentsList from "../components/AppoinmentsList";
import styled from "styled-components";

import { appointmentsData } from "../appointmentsData.js";

// IMAGES
import avatar from "../media/avatar.png";
import slider from "../media/sliders-v-alt.svg";
import emptyImg from "../media/medical-history.png";

const NavButtonsWrapper = styled.div`
  display: flex;
`;
const NavButton = styled.button`
  width: 120px;
  height: 40px;
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
    display: none;
  }

  border-radius: 8px;
  border: none;
  background: ${(props) => (props.current ? "#7297ff" : "white")};
  color: ${(props) => (props.current ? "white" : "#7297ff")};

  @media screen and (min-width: 768px) {
    width: 160px;

    &:last-of-type {
      display: block;
    }
  } ;
`;
const NavigationWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media screen and (min-width: 768px) {
    margin-top: 56px;
    padding-right: 8px;
  } ;
`;
const NavSectionTitle = styled.h3`
  font-size: 24px;
  line-height: 110%;
`;
const NavgationItemsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
`;
const NavigationItemSelect = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1920px) {
    display: none;
  } ;
`;
const NavigationSelectSpan = styled.span`
  display: none;
  @media screen and (min-width: 1920px) {
    display: block;
    margin-right: 16px;

    color: #a1abc9;
  } ;
`;
const NavigationSelectDesctop = styled.select`
  display: none;
  @media screen and (min-width: 1920px) {
    display: block;

    color: #7297ff;
    border: none;
  } ;
`;
const EmptyListBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 64vh;
  padding-bottom: 108px;
  text-align: center;

  background: url(${emptyImg}) no-repeat;
  background-position-x: center;
  background-position-y: 29%;
  background-size: 120px 120px;
`;
const EmptyListText = styled.p`
  max-width: 461px;

  font-weight: 600;
  line-height: 21px;

  color: #a1abc9;
`;
const UppointmentCreateButton = styled.button`
  display: none;
  @media screen and (min-width: 1920px) {
    width: 224px;
    height: 48px;
    margin-left: 64px;
    display: block;

    border: none;
    border-radius: 8px;
    background: #7297ff;
    color: white;
  } ;
`;

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
          <NavigationSelectDesctop>
            <option value="">Upcoming</option>
          </NavigationSelectDesctop>
          <UppointmentCreateButton>
            + create an uppointment
          </UppointmentCreateButton>
        </NavgationItemsWrapper>
      </NavigationWrapper>
      {appointments.length > 0 ? (
        <AppoinmentsList appointments={appointments} />
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
