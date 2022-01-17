import React, { useEffect } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import NavWrapper from "./Components/NavWrapper/NavWrapper";
import { useSelector } from "react-redux";
import { userRoleNameSelector } from "redux/selectors";
import { useHistory } from "react-router-dom";
import PATHS from "routes/paths";
import TitleH2 from "components/TitleH2";
import * as Styled from "./PatientMakeAppointmentStyles";
import FormikForm from "./Components/Form/FormikForm";

const PatientMakeAppointment = () => {
  const history = useHistory();
  const userRole = useSelector(userRoleNameSelector);

  useEffect(() => {
    if (!userRole) {
      history.replace(PATHS.signIn);
    }
  }, [userRole, history]);

  return (
    <ViewPagesWrapper>
      <NavWrapper />
      <section>
        <Styled.TitleWrapper>
          <TitleH2>Make an appointment</TitleH2>
        </Styled.TitleWrapper>
        <FormikForm />
      </section>
    </ViewPagesWrapper>
  );
};

export default PatientMakeAppointment;
