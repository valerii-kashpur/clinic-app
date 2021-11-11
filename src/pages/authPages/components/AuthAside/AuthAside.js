import React from "react";
import {styles} from "./AuthAsideStyles";

const {Container, Aside, AsideWrapper, AsideTitle} = styles;

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
