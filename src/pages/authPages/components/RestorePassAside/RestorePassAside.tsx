import React from "react";
import PATHS from "routes/paths";
import * as Styled from "./RestorePassAsideStyles";

type RestorePassAsideProps = {
  title: string, children: React.ReactNode
};

const RestorePassAside = ({ title, children }: RestorePassAsideProps) => {
  return (
    <Styled.Container>
      <Styled.Aside>
        <Styled.AsideWrapper>
          <Styled.AsideTitleWrapper>
            <Styled.StyledLink to={PATHS.signIn}></Styled.StyledLink>
            <Styled.AsideTitle>{title}</Styled.AsideTitle>
          </Styled.AsideTitleWrapper>
          {children}
        </Styled.AsideWrapper>
      </Styled.Aside>
    </Styled.Container>
  );
};

export default RestorePassAside;
