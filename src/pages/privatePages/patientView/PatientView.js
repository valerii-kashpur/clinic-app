import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import AppointmentsList from "./components/AppointmentsList";
import { useSelector, useDispatch } from "react-redux";
import {
  patientAppointments,
  userRoleNameSelector,
  isAuthorizedSelector,
} from "redux/selectors";
import { useHistory } from "react-router-dom";
import * as Styled from "./PatientViewStyles";

// IMAGES
import slider from "media/sliders-v-alt.svg";
import PATHS from "routes/paths";
import { fetchPatientAppointments } from "redux/patientAppointmentsSlice.js";

const PatientView = () => {
  const [dateStatus, setDateStatus] = useState("Upcoming");
  const history = useHistory();
  const dispatch = useDispatch();
  const appointments = useSelector(patientAppointments);
  const userRole = useSelector(userRoleNameSelector);
  const isAuth = useSelector(isAuthorizedSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace(PATHS.signIn);
    }
  }, [userRole, history]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(fetchPatientAppointments(dateStatus));
    }
  }, [dispatch, dateStatus, userRole, isAuth]);

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
          <Styled.NavigationSelectDesktop
            onChange={(e) => setDateStatus(e.target.value)}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Outdate">Outdate</option>
          </Styled.NavigationSelectDesktop>
          <Styled.UppointmentCreateButton to={PATHS.makeAppointment}>
            + create an uppointment
          </Styled.UppointmentCreateButton>
        </Styled.NavgationItemsWrapper>
      </Styled.NavigationWrapper>
      <AppointmentsList appointments={appointments} />
    </ViewPagesWrapper>
  );
};

export default PatientView;
