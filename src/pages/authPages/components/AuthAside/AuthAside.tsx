import TitleH2 from "components/TitleH2";
import React from "react";
import * as Styled from "./AuthAsideStyles";

type AuthAsideProps = {
  asidePadding: string;
  title: string;
  children: React.ReactNode;
};

const AuthAside = ({ asidePadding, title, children }: AuthAsideProps) => {
  return (
    <Styled.Container>
      <Styled.Aside padding={asidePadding}>
        <Styled.AsideWrapper>
          <Styled.TitleWrapper>
            <TitleH2>{title}</TitleH2>
          </Styled.TitleWrapper>
          {children}
        </Styled.AsideWrapper>
      </Styled.Aside>
    </Styled.Container>
  );
};

export default AuthAside;
