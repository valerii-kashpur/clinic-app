import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import * as Styled from "./DoctorResolutionsStyles";

import search from "media/search.svg";
import slider from "media/sliders-v-alt.svg";
import ResolutionsTable from "./components/ResolutionsTable/ResolutionsTable";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";
import {
  doctorsResolutionsSelector,
  isAuthorizedSelector,
  userRoleNameSelector,
} from "redux/selectors";
import { fetchDoctorResolutions } from "redux/slices/doctorsResolutionsSlice";

const DoctorResolutions = () => {
  const [sortBy, setSortBy] = useState("dateSort");
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(userRoleNameSelector);
  const isAuth = useAppSelector(isAuthorizedSelector);
  const resolutions = useAppSelector(doctorsResolutionsSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace("./sign-in");
    }
  }, [userRole, history]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(fetchDoctorResolutions(sortBy));
    }
  }, [dispatch, sortBy, userRole, isAuth]);

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <Styled.NavButton>Patients</Styled.NavButton>
        <Styled.NavButton current>Resolutions</Styled.NavButton>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <Styled.NavSectionTitle>Resolutions</Styled.NavSectionTitle>
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
            <option value="NextDateSort">Next Date</option>
          </Styled.NavigationSelect>
        </Styled.NavgationItemsWrapper>
      </Styled.NavigationWrapper>
      <ResolutionsTable resolutions={resolutions}/>
    </ViewPagesWrapper>
  );
};

export default DoctorResolutions;
