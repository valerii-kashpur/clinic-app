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
import { fetchDoctorAppointments } from "redux/slices/doctorAppointmentsSlice";
import { useAppSelector } from "types/useAppSelector";
import { useAppDispatch } from "types/useAppDispatch";
import PATHS from "routes/paths";
import NavTab from "components/NavTab";
import TitleH2 from "components/TitleH2";

const DoctorView = () => {
  const [sortBy, setSortBy] = useState("dateSort");
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(userRoleNameSelector);
  const appointments = useSelector(doctorAppointments);
  const isAuth = useSelector(isAuthorizedSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace(PATHS.signIn);
    }
  }, [userRole, history]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(fetchDoctorAppointments(sortBy));
    }
  }, [dispatch, sortBy, userRole, isAuth]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <NavTab to={PATHS.doctorView} current="true">
          Patients
        </NavTab>
        <NavTab to={PATHS.doctorResolutions}>Resolutions</NavTab>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <TitleH2>My Patients</TitleH2>
        <Styled.NavigationItemsWrapper>
          <Styled.NavigationItemSearch src={search} alt="" />
          <Styled.NavigationSearchInput type="text" placeholder="Search" />
          <Styled.NavigationItemSelect src={slider} alt="" />
          <Styled.NavigationSelectSpan>Sort by:</Styled.NavigationSelectSpan>
          <Styled.NavigationSelect name="Date" id="" onChange={onChangeHandler}>
            <option value="dateSort">Date</option>
            <option value="firstNameSort">Name</option>
            <option value="lastNameSort">Last Name</option>
          </Styled.NavigationSelect>
        </Styled.NavigationItemsWrapper>
      </Styled.NavigationWrapper>
      <PatientsList appointmentsArray={appointments} />
    </ViewPagesWrapper>
  );
};

export default DoctorView;
