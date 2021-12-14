import React from "react";
import { styles } from "./AuthAsideStyles";


const { Container, Aside, AsideWrapper, AsideTitle } = styles;

type AuthAsideProps = {
  asidePadding: string, title: string, children: React.ReactNode
}

const AuthAside = ({ asidePadding, title, children }: AuthAsideProps) => {
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
