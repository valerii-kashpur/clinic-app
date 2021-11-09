import React, { useEffect, useState } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper.js";
import PatientsList from "../components/PatientsList";
import styled from "styled-components";

import { usersData } from "../usersData.js";
// IMAGES
import avatar from "../media/avatar.png";
import search from "../media/search.svg";
import slider from "../media/sliders-v-alt.svg";
import emptyImg from "../media/medical-history.png";

//  Styles ---------------------------------------------------------------------------------------------

const NavButtonsWrapper = styled.div`
  display: flex;
`;

const NavButton = styled.button`
  width: 120px;
  height: 40px;
  margin-right: 24px;

  border-radius: 8px;
  border: none;
  background: ${(props) => (props.current ? "#7297ff" : "white")};
  color: ${(props) => (props.current ? "white" : "#7297ff")};

  @media screen and (min-width: 768px) {
    width: 160px;
  } ;
`;

const NavigationWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media screen and (min-width: 768px) {
    margin-top: 56px;
    padding-right: 8px;
  } ;
`;

const NavSectionTitle = styled.h3`
  font-size: 24px;
  line-height: 110%;
`;

const NavgationItemsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
`;

const NavigationItemSearch = styled.img`
  margin-right: 24px;

  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }

  @media screen and (min-width: 1920px) {
    margin-right: 16px;
  }
`;

const NavigationSearchInput = styled.input`
  display: none;

  @media screen and (min-width: 1920px) {
    display: block;
    border: none;
    width: 90px;
    margin-right: 10px;
    color: $secondary-text-color;
    &::placeholder {
      color: $secondary-text-color;
    }
  } ;
`;

const NavigationItemSelect = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1920px) {
    display: none;
  } ;
`;

const NavigationSelectSpan = styled.span`
  display: none;

  @media screen and (min-width: 1920px) {
    display: block;
    margin-right: 16px;
    color: #a1abc9;
  } ;
`;

const NavigationSelect = styled.select`
  display: none;

  @media screen and (min-width: 1920px) {
    display: block;
    color: #7297ff;
    border: none;
  } ;
`;

const EmptyListBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 64vh;
  padding-bottom: 108px;
  text-align: center;

  background: url(${emptyImg}) no-repeat;
  background-position-x: center;
  background-position-y: 29%;
  background-size: 120px 120px;
`;

const EmptyListText = styled.p`
  max-width: 461px;

  font-weight: 600;
  line-height: 21px;

  color: #a1abc9;
`;

//  ---------------------------------------------------------------------------------------------

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
