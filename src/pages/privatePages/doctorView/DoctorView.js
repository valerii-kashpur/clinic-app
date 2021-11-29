import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import PatientsList from "./components/PatientsList";
import { useSelector } from "react-redux";
import { userRoleName, doctorAppointments, isAuthentificated } from "Redux/selectors";
import { useHistory } from "react-router-dom";
import * as Styled from "./DoctorViewStyles";

// IMAGES
import avatar from "media/avatar.png";
import search from "media/search.svg";
import slider from "media/sliders-v-alt.svg";
import { useDispatch } from "react-redux";
import { getDoctorAppointment } from "network/fetchOperations.js";

const DoctorView = () => {
  const [sortBy, setSortBy] = useState("dateSort")
  const history = useHistory();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => userRoleName(state));
  const appointments = useSelector((state) => doctorAppointments(state));
  const isAuth = useSelector((state) => isAuthentificated(state))

  useEffect(() => {
    if (!userRole && !isAuth) {
      history.replace("./sign-in");
    }
  }, [userRole, history, isAuth]);

  useEffect(() => {
    if(userRole && isAuth){
      dispatch(getDoctorAppointment(sortBy));
    }
  }, [dispatch, sortBy, userRole, isAuth]);

  return (
    <ViewPagesWrapper name="Miranda Nelson" role="doctor" avatar={avatar}>
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
          <Styled.NavigationSelect name="Date" id="" onChange={e => setSortBy(e.target.value)}>
            <option value="dateSort">Date</option>
            <option value="firstNameSort">Name</option>
            <option value="lastNameSort">Last Name</option>
          </Styled.NavigationSelect>
        </Styled.NavgationItemsWrapper>
      </Styled.NavigationWrapper>
      {appointments.length > 0 ? (
        <PatientsList appointments={appointments} />
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

export default DoctorView;
