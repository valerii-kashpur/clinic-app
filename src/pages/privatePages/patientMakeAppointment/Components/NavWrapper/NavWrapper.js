import React from "react";
import * as Styled from "./NavWrapperStyles";

const NavWrapper = () => {
  return (
    <Styled.NavWrapper>
      <Styled.NavLink to="/patient-view">Doctors</Styled.NavLink>
      <Styled.VectorSpan/>
      <Styled.BreadCrumbsCurrent>Make an appointment</Styled.BreadCrumbsCurrent>
    </Styled.NavWrapper>
  );
};

export default NavWrapper;
