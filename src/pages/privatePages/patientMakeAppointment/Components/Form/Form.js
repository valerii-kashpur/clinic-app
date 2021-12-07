import React, { useEffect, useState } from "react";
import DatePickerForm from "../DatePicker/DatePickerForm";
import Text from "components/Text";
import * as Styled from "../../PatientMakeAppointmentStyles";
import Button from "components/Button";

import RadioBtns from "../RadioBtns/RadioBtns";
import VisitReasons from "../VisitReasons/VisitReasons";
import { useHistory } from "react-router";
import LoaderForButtons from "components/LoaderForButtons";
import PATHS from "routes/paths";
import { useAppointmentForm } from "hooks/useAppointmentForm";

const Form = () => {
  const history = useHistory();
  const [toggleButton, setToggleButton] = useState(true);
  const { buttonCondition, isFetching, createAppointmentRequest } =
    useAppointmentForm();

  const submitHandler = async (e) => {
    e.preventDefault();
    await createAppointmentRequest();
    history.push({
      pathname: PATHS.doctorView,
    });
  };

  useEffect(() => {
    if (toggleButton !== buttonCondition) {
      setToggleButton(buttonCondition);
    }
  }, [buttonCondition, toggleButton]);

  return (
    <form action="" onSubmit={submitHandler}>
      <Styled.List>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>1</Styled.Span>
            <Text>Select a doctor and define the reason of your visit</Text>
          </Styled.TextWrapper>
          <VisitReasons />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>2</Styled.Span>
            <Text>Choose a day for an appointment</Text>
          </Styled.TextWrapper>
          <DatePickerForm />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>3</Styled.Span>
            <Text>Select an available timeslot</Text>
          </Styled.TextWrapper>
          <RadioBtns />
        </Styled.ListItem>
      </Styled.List>
      <Button
        type="submit"
        disabled={toggleButton}
        width={"160px"}
        height={"56px"}
        margin={"39px 80px 0px auto"}
        data-testid="submitButton"
      >
        {isFetching ? <LoaderForButtons /> : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
