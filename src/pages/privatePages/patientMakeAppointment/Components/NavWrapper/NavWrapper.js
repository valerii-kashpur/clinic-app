import React from "react";
import  PATHS  from "routes/paths";
import * as Styled from "./NavWrapperStyles";

const NavWrapper = () => {
  return (
    <Styled.NavWrapper>
      <Styled.NavLink to={PATHS.patientView}>Doctors</Styled.NavLink>
      <Styled.VectorSpan/>
      <Styled.BreadCrumbsCurrent>Make an appointment</Styled.BreadCrumbsCurrent>
    </Styled.NavWrapper>
  );
};

export default NavWrapper;
