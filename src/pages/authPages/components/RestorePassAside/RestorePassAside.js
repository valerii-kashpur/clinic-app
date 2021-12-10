import React from "react";
import PATHS  from "routes/paths";
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
            <StyledLink to={PATHS.signIn}></StyledLink>
            <AsideTitle>{title}</AsideTitle>
          </AsideTitleWrapper>
          {children}
        </AsideWrapper>
      </Aside>
    </Container>
  );
};

export default RestorePassAside;
