import React, { useEffect } from "react";
import ViewPagesWrapper from "../components/ViewPagesWrapper/ViewPagesWrapper";
import NavWrapper from "./Components/NavWrapper/NavWrapper";
import Title from "components/Title";
import Form from "./Components/Form/Form";

import { useSelector } from "react-redux";
import { userRoleName } from "redux/selectors";
import { useHistory } from "react-router-dom";

const PatientMakeAppointment = () => {
  const history = useHistory();
  const userRole = useSelector((state) => userRoleName(state));

  useEffect(() => {
    if (!userRole) {
      history.replace("./sign-in");
    }
  }, [userRole, history]);

  return (
    <ViewPagesWrapper>
      <NavWrapper />
      <section>
        <Title marginProp={"72px 0 40px 0"}>Make an appointment</Title>
        <Form />
      </section>
    </ViewPagesWrapper>
  );
};

export default PatientMakeAppointment;
