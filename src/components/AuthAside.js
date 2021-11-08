import React from "react";
import styled from "styled-components";

// media
import bgImage from "../media/bg.jpg";

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

    padding-top: ${(props) => props.padding};
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

const AsideTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 26px;
  } ;
`;

const AuthAside = ({ asidePadding, title, children }) => {
  return (
    <Container>
      <Aside padding={asidePadding}>
        <AsideWrapper>
          <AsideTitle>{title}</AsideTitle>
          {children}
        </AsideWrapper>
      </Aside>
    </Container>
  );
};

export default AuthAside;
