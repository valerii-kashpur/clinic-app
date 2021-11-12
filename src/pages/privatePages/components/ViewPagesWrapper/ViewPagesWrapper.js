import React from "react";
import {styles} from "./ViewPagesWrapperStyles";

// media
import logo from "media/logo.png";

const {
  Container,
  Header,
  Logo,
  HeaderLogoWrapper,
  HeaderUserNAmeWrapper,
  HeaderUserAvatarWrapper,
  HeaderUserStatus,
  AppCardsSection
} = styles;


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
