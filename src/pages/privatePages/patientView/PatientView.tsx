import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import AppointmentsList from "./components/AppointmentsList";
import PATHS from "routes/paths";
import NavTab from "components/NavTab";
import { useSelector } from "react-redux";
import {
  patientAppointments,
  userRoleNameSelector,
  isAuthorizedSelector,
} from "redux/selectors";
import { useHistory } from "react-router-dom";
import { fetchPatientAppointments } from "redux/slices/patientAppointmentsSlice";
import { useAppSelector } from "types/useAppSelector";
import { useAppDispatch } from "types/useAppDispatch";
import * as Styled from "./PatientViewStyles";

// IMAGES
import slider from "media/sliders-v-alt.svg";
import TitleH2 from "components/TitleH2";

const PatientView = () => {
  const [dateStatus, setDateStatus] = useState("Upcoming");
  const history = useHistory();
  const dispatch = useAppDispatch();
  const appointments = useAppSelector(patientAppointments);
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateStatus(e.target.value);
  };

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <NavTab to={"/profile"} disabled={true}>
          Profile
        </NavTab>
        <NavTab to={PATHS.patientView} current="true">
          Appointments
        </NavTab>
        <NavTab to={PATHS.patientsResolutions}>resolutions</NavTab>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <TitleH2>My Appointments</TitleH2>
        <Styled.NavigationItemsWrapper>
          <Styled.NavigationItemSelect src={slider} alt="" />
          <Styled.NavigationSelectSpan>Show:</Styled.NavigationSelectSpan>
          <Styled.NavigationSelectDesktop onChange={onChangeHandler}>
            <option value="Upcoming">Upcoming</option>
            <option value="Outdate">Outdate</option>
          </Styled.NavigationSelectDesktop>
          <Styled.AppointmentCreateButton to={PATHS.makeAppointment}>
            + create an uppointment
          </Styled.AppointmentCreateButton>
        </Styled.NavigationItemsWrapper>
      </Styled.NavigationWrapper>
      <AppointmentsList appointmentsArray={appointments} />
    </ViewPagesWrapper>
  );
};

export default PatientView;
