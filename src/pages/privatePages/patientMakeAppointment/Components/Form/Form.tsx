import React, { useEffect, useState } from "react";
import DatePickerForm from "../DatePicker/DatePickerForm";
import * as Styled from "../../PatientMakeAppointmentStyles";
import Button from "components/Button";
import RadioBtns from "../RadioBtns/RadioBtns";
import VisitReasons from "../VisitReasons/VisitReasons";
import { useHistory } from "react-router";
import LoaderForButtons from "components/LoaderForButtons";
import PATHS from "routes/paths";
import { useAppointmentForm } from "hooks/useAppointmentForm";
import TitleH4 from "components/TitleH4";
import styled from "styled-components";


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Form = () => {
  const history = useHistory();
  const [toggleButton, setToggleButton] = useState(true);
  const { buttonCondition, isFetching, createAppointmentRequest } =
    useAppointmentForm();

  const submitHandler = async (e: React.SyntheticEvent) => {
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
    <div>
      <form action="" onSubmit={submitHandler}>
        <Styled.List>
          <Styled.ListItem>
            <Styled.TextWrapper>
              <Styled.Span>1</Styled.Span>
              <TitleH4>
                Select a doctor and define the reason of your visit
              </TitleH4>
            </Styled.TextWrapper>
            <VisitReasons />
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.TextWrapper>
              <Styled.Span>2</Styled.Span>
              <TitleH4>Choose a day for an appointment</TitleH4>
            </Styled.TextWrapper>
            <DatePickerForm />
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.TextWrapper>
              <Styled.Span>3</Styled.Span>
              <TitleH4>Select an available time slot</TitleH4>
            </Styled.TextWrapper>
            <RadioBtns />
          </Styled.ListItem>
        </Styled.List>
        <ButtonWrapper>
          <Button
            type="submit"
            disabled={toggleButton && isFetching}
            width={"160px"}
            height={"56px"}
            data-testid="submitButton"
          >
            {isFetching ? <LoaderForButtons /> : "Submit"}
          </Button>
        </ButtonWrapper>
      </form>
    </div>
  );
};

export default Form;
