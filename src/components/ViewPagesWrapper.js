import React from "react";
import styled from "styled-components";

// media
import logo from "../media/logo.png";

const Container = styled.div`
  background-color: #e4ebff;

  @media screen and (min-width: 768px) {
    padding: 0 64px;
    padding-bottom: 48px;
    height: 100vh;
  };
`;

const Header = styled.header`
  display: flex;
  height: 72px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 80px;
  } ;
`;

const Logo = styled.img`
  width: 132px;
  height: 32px;
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
`;

const HeaderUserNAmeWrapper = styled.div`
  display: none;
  text-align: end;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 16px;
  } ;
`;

const HeaderUserAvatarWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    text-align: end;
  } ;
`;

const HeaderUserStatus = styled.span`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  border-radius: 50%;
  width: 12px;
  height: 12px;

  background-image: radial-gradient(
    ellipse at center,
    #34c197 40%,
    #e4ebff 40%,
    #e4ebff 100%
  );
`;

const AppCardsSection = styled.section`
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px 16px 0px 0px;

  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;

    border-radius: 16px;
    height: 92%;
  }
  @media screen and (min-width: 1920px) {
    padding-right: 24px;
  } ;
`;

const ViewPagesWrapper = ({ name, role, avatar, children }) => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Palm Clinic logo" />
        <HeaderLogoWrapper>
          <HeaderUserNAmeWrapper>
            <p>{name}</p>
            <p>{role}</p>
          </HeaderUserNAmeWrapper>
          <HeaderUserAvatarWrapper>
            <img src={avatar} alt="" />
            <HeaderUserStatus></HeaderUserStatus>
          </HeaderUserAvatarWrapper>
        </HeaderLogoWrapper>
      </Header>
      <AppCardsSection>{children}</AppCardsSection>
    </Container>
  );
};

export default ViewPagesWrapper;
