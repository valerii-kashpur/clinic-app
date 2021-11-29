import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import AppointmentsList from "./components/AppointmentsList";
import { useSelector, useDispatch } from "react-redux";
import {
  patientAppointments,
  userRoleName,
  isAuthentificated,
} from "Redux/selectors";
import { useHistory } from "react-router-dom";
import { getPatientAppointment } from "network/fetchOperations.js";
import * as Styled from "./PatientViewStyles";

// IMAGES
import slider from "media/sliders-v-alt.svg";
import  PATHS  from "routes/paths";

const PatientView = () => {
  const [dateStatus, setDateStatus] = useState("Upcoming");
  const history = useHistory();
  const dispatch = useDispatch();
  const appointments = useSelector((state) => patientAppointments(state));
  const userRole = useSelector((state) => userRoleName(state));
  const isAuth = useSelector((state) => isAuthentificated(state));

  useEffect(() => {
    if (!userRole && !isAuth) {
      history.replace(PATHS.signIn);
    }
  }, [userRole, history, isAuth]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(getPatientAppointment(dateStatus));
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
