import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import PatientsList from "./components/PatientsList";
import { useSelector } from "react-redux";
import {
  userRoleNameSelector,
  doctorAppointments,
  isAuthorizedSelector,
} from "redux/selectors";
import { useHistory } from "react-router-dom";
import * as Styled from "./DoctorViewStyles";

// IMAGES
import search from "media/search.svg";
import slider from "media/sliders-v-alt.svg";
import { fetchDoctorAppointments } from "redux/doctorAppointmentsSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

const DoctorView = () => {
  const [sortBy, setSortBy] = useState("dateSort");
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(userRoleNameSelector);
  const appointments = useSelector(doctorAppointments);
  const isAuth = useSelector(isAuthorizedSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace("./sign-in");
    }
  }, [userRole, history]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(fetchDoctorAppointments(sortBy));
    }
  }, [dispatch, sortBy, userRole, isAuth]);

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <Styled.NavButton current>Patients</Styled.NavButton>
        <Styled.NavButton>Resolutions</Styled.NavButton>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <Styled.NavSectionTitle>My Patients</Styled.NavSectionTitle>
        <Styled.NavgationItemsWrapper>
          <Styled.NavigationItemSearch src={search} alt="" />
          <Styled.NavigationSearchInput type="text" placeholder="Search" />
          <Styled.NavigationItemSelect src={slider} alt="" />
          <Styled.NavigationSelectSpan>Sort by:</Styled.NavigationSelectSpan>
          <Styled.NavigationSelect
            name="Date"
            id=""
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dateSort">Date</option>
            <option value="firstNameSort">Name</option>
            <option value="lastNameSort">Last Name</option>
          </Styled.NavigationSelect>
        </Styled.NavgationItemsWrapper>
      </Styled.NavigationWrapper>
      <PatientsList appointmentsArray={appointments} />
    </ViewPagesWrapper>
  );
};

export default DoctorView;
