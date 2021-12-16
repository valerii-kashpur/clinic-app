import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import PATHS from "routes/paths";
import NavTab from "components/NavTab";
import * as Styled from "./PatientsResolutionsStyles";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "types/useAppDispatch";
import { useAppSelector } from "types/useAppSelector";
import {
  isAuthorizedSelector,
  patientsResolutionsSelector,
  patientsTotalResolutionsSelector,
  userRoleNameSelector,
} from "redux/selectors";

import search from "media/search.svg";
import slider from "media/sliders-v-alt.svg";
import ResolutionsTable from "./components/ResolutionsTable/ResolutionsTable";
import { fetchPatientsResolutions } from "redux/slices/patientsResolutionsSlice";
import Pagination from "components/Pagination/Pagination";

const PatientsResolutions = () => {
  const [sortBy, setSortBy] = useState("dateSort");
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(userRoleNameSelector);
  const isAuth = useAppSelector(isAuthorizedSelector);
  const resolutions = useAppSelector(patientsResolutionsSelector);
  const paginationPages = useAppSelector(patientsTotalResolutionsSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace(PATHS.signIn);
    }
  }, [userRole, history]);

  useEffect(() => {
    if (userRole && isAuth) {
      //   dispatch(fetchDoctorResolutions({ sortBy, currentPage }));
    }
  }, [dispatch, sortBy, userRole, isAuth, currentPage]);

  useEffect(() => {
    if (userRole && isAuth) {
      dispatch(fetchPatientsResolutions({ sortBy, currentPage }));
    }
  }, [dispatch, sortBy, userRole, isAuth, currentPage]);

  const handlePaginationClick = (pageNummber: number) => {
    setCurrentPage(pageNummber);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <ViewPagesWrapper>
      <Styled.NavButtonsWrapper>
        <NavTab to={"/profile"} disabled={true}>
          Profile
        </NavTab>
        <NavTab to={PATHS.patientView}>Appointments</NavTab>
        <NavTab to={PATHS.patientsResolutions} current="true">
          resolutions
        </NavTab>
      </Styled.NavButtonsWrapper>
      <Styled.NavigationWrapper>
        <Styled.NavSectionTitle>Resolutions</Styled.NavSectionTitle>
        <Styled.NavigationItemsWrapper>
          <Styled.NavigationItemSearch src={search} alt="" />
          <Styled.NavigationSearchInput type="text" placeholder="Search" />
          <Styled.NavigationItemSelect src={slider} alt="" />
          <Styled.NavigationSelectSpan>Sort by:</Styled.NavigationSelectSpan>
          <Styled.NavigationSelect name="Date" id="" onChange={onChangeHandler}>
            <option value="dateSort">Date</option>
            <option value="firstNameSort">Name</option>
            <option value="lastNameSort">Last Name</option>
            <option value="NextDateSort">Next Date</option>
          </Styled.NavigationSelect>
        </Styled.NavigationItemsWrapper>
      </Styled.NavigationWrapper>
      <ResolutionsTable resolutions={resolutions} />
      <Pagination
        total={paginationPages}
        perPage={8}
        onClick={handlePaginationClick}
        currentPage={currentPage}
      />
    </ViewPagesWrapper>
  );
};

export default PatientsResolutions;
