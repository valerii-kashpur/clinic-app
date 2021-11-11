import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper.js";
import PatientsList from "./components/PatientsList";
import {styles} from "./DoctorViewStyles";

import { usersData } from "utils/usersData.js";
// IMAGES
import avatar from "media/avatar.png";
import search from "media/search.svg";
import slider from "media/sliders-v-alt.svg";

const {
  NavButtonsWrapper,
  NavButton,
  NavigationWrapper,
  NavSectionTitle,
  NavgationItemsWrapper,
  NavigationItemSearch,
  NavigationSearchInput,
  NavigationItemSelect,
  NavigationSelectSpan,
  NavigationSelect,
  EmptyListBlock,
  EmptyListText
} = styles;


const DoctorView = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersData);
  }, []);
  return (
    <ViewPagesWrapper name="Miranda Nelson" role="doctor" avatar={avatar}>
      <NavButtonsWrapper>
        <NavButton current>Patients</NavButton>
        <NavButton>Resolutions</NavButton>
      </NavButtonsWrapper>
      <NavigationWrapper>
        <NavSectionTitle>My Patients</NavSectionTitle>
        <NavgationItemsWrapper>
          <NavigationItemSearch src={search} alt="" />
          <NavigationSearchInput type="text" placeholder="Search" />
          <NavigationItemSelect src={slider} alt="" />
          <NavigationSelectSpan>Sort by:</NavigationSelectSpan>
          <NavigationSelect name="Date" id="">
            <option>Date</option>
          </NavigationSelect>
        </NavgationItemsWrapper>
      </NavigationWrapper>
      {users.length > 0 ? (
        <PatientsList users={users} />
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

export default DoctorView;
