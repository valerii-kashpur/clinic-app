import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// MEDIA
import bgImage from "../media/bg.jpg";
import angle from "../media/angle-left-b.svg";

const Container = styled.div`
  padding-top: 72px;

  background-size: 100%;
  overflow: hidden;
  background: url(${bgImage}) no-repeat;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    background: url(${bgImage}) no-repeat;
    background-size: cover;
  }
`;

const Aside = styled.aside`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;

  border-radius: 24px 24px 0px 0px;
  height: calc(90vh - 2px);

  background-color: #f9faff;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    top: 0;
    border-radius: 0;
    width: 560px;
    height: 100vh;

    padding-top: 26vh;
  }

  @media screen and (min-width: 1920px) {
    width: 560px;
  } ;
`;

const AsideWrapper = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 368px;
  }
`;

const AsideTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  } ;
`;

const StyledLink = styled(Link)`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  background: url(${angle});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AsideTitle = styled.h2`
  margin: 0;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;
  } ;
`;

const RestorePassAside = ({ title, children }) => {
  return (
    <Container>
      <Aside>
        <AsideWrapper>
          <AsideTitleWrapper>
            <StyledLink to="/"></StyledLink>
            <AsideTitle>{title}</AsideTitle>
          </AsideTitleWrapper>
          {children}
        </AsideWrapper>
      </Aside>
    </Container>
  );
};

export default RestorePassAside;
