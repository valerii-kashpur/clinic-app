import React, { useEffect } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import AppointmentsList from "./components/AppointmentsList";
import { useSelector, useDispatch } from "react-redux";
import { patientAppointments, userRoleName } from "Redux/selectors";
import { useHistory } from "react-router-dom";
import { getPatientAppointment } from "network/fetchOperations.js";
import * as Styled from "./PatientViewStyles";

// IMAGES
import slider from "media/sliders-v-alt.svg";

const PatientView = () => {
  const appointments = useSelector(state => patientAppointments(state));
  const history = useHistory();
  const userRole = useSelector((state) => userRoleName(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userRole) {
      history.replace("/sign-in");
    }
  }, [userRole, history]);

  useEffect(() => {
    dispatch(getPatientAppointment());
  }, [dispatch]);

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <Styled.NavButton>Profile</Styled.NavButton>
        <Styled.NavButton current>Appointments</Styled.NavButton>
        <Styled.NavButton>resolutions</Styled.NavButton>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <Styled.NavSectionTitle>My Appointments</Styled.NavSectionTitle>
        <Styled.NavgationItemsWrapper>
          <Styled.NavigationItemSelect src={slider} alt="" />
          <Styled.NavigationSelectSpan>Show:</Styled.NavigationSelectSpan>
          <Styled.NavigationSelectDesktop>
            <option value="">Upcoming</option>
          </Styled.NavigationSelectDesktop>
          <Styled.UppointmentCreateButton to="/patient-view/make-appointment">
            + create an uppointment
          </Styled.UppointmentCreateButton>
        </Styled.NavgationItemsWrapper>
      </Styled.NavigationWrapper>
      {appointments.length > 0 ? (
        <AppointmentsList appointments={appointments} />
      ) : (
        <Styled.EmptyListBlock>
          <Styled.EmptyListText>
            You have no patients yet. To create a patient profile, please
            contact your administrator.
          </Styled.EmptyListText>
        </Styled.EmptyListBlock>
      )}
    </ViewPagesWrapper>
  );
};

export default PatientView;
