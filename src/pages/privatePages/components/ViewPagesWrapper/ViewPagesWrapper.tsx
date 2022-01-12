import React from "react";
import * as Styled from "./ViewPagesWrapperStyles";

// media
import logo from "media/logo.png";
import { useSelector } from "react-redux";
import { getCurrentUserSelector } from "redux/selectors";
import PageUserName from "components/PageUserName";
import PageUserRole from "components/PageUserRole";

type ViewPagesWrapperProps = {
  children: React.ReactNode;
};

const ViewPagesWrapper = ({ children }: ViewPagesWrapperProps) => {
  const currentUser = useSelector(getCurrentUserSelector);
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo src={logo} alt="Palm Clinic logo" />
        <Styled.HeaderLogoWrapper>
          <Styled.HeaderUserNAmeWrapper>
            <PageUserName>
              {currentUser.firstName} {currentUser.lastName}
            </PageUserName>
            <PageUserRole>{currentUser.roleName}</PageUserRole>
          </Styled.HeaderUserNAmeWrapper>
          <Styled.HeaderUserAvatarWrapper>
            <img src={currentUser.photo} alt="user avatar" />
            <Styled.HeaderUserStatus></Styled.HeaderUserStatus>
          </Styled.HeaderUserAvatarWrapper>
        </Styled.HeaderLogoWrapper>
      </Styled.Header>
      <Styled.AppCardsSection>{children}</Styled.AppCardsSection>
    </Styled.Container>
  );
};

export default ViewPagesWrapper;
