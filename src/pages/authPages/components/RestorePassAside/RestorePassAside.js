import React from "react";
import { styles } from "./RestorePassAsideStyles";

const {
  Container,
  Aside,
  AsideWrapper,
  AsideTitleWrapper,
  StyledLink,
  AsideTitle,
} = styles;

const RestorePassAside = ({ title, children }) => {
  return (
    <Container>
      <Aside>
        <AsideWrapper>
          <AsideTitleWrapper>
            <StyledLink to="/sign-in"></StyledLink>
            <AsideTitle>{title}</AsideTitle>
          </AsideTitleWrapper>
          {children}
        </AsideWrapper>
      </Aside>
    </Container>
  );
};

export default RestorePassAside;
