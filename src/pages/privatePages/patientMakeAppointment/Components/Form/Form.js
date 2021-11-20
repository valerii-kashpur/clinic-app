import React, { useEffect, useState } from "react";
import DatePickerForm from "../DatePicker/DatePickerForm";
import Text from "components/Text";
import * as Styled from "../../PatientMakeAppointmentStyles";
import Button from "components/Button";

import RadioBtns from "../RadioBtns/RadioBtns";
import VisitReasons from "..//VisitReasons/VisitReasons";

const Form = () => {
  const [visitReasonsReady, setVisitReasonsReady] = useState(false);
  const [unlockDatePicker, setUnlockDatepicker] = useState(false);
  const [dateIsPicked, setDateIsPicked] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(false);
  const [togleButton, setTogglebutton] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(visitReasonsReady);
    console.log({
      inputs: unlockDatePicker,
      date: dateIsPicked,
      time: timeIsSelected,
    });
  };

  useEffect(() => {
    if (visitReasonsReady && dateIsPicked && timeIsSelected) {
      setTogglebutton(false);
    } else if (!togleButton) {
      setTogglebutton(true);
    }
  }, [visitReasonsReady, dateIsPicked, timeIsSelected, togleButton]);

  return (
    <form action="" onSubmit={submitHandler}>
      <Styled.List>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>1</Styled.Span>
            <Text>
              Select a doctor and define the reason of your visit
            </Text>
          </Styled.TextWrapper>
          <VisitReasons
            onReady={setVisitReasonsReady}
            showDatePicker={setUnlockDatepicker}
          />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>2</Styled.Span>
            <Text>Choose a day for an appointment</Text>
          </Styled.TextWrapper>
          <DatePickerForm
            disabled={!unlockDatePicker}
            onDateIsPiked={setDateIsPicked}
          />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>3</Styled.Span>
            <Text>Select an available timeslot</Text>
          </Styled.TextWrapper>
          <RadioBtns
            disabled={!unlockDatePicker}
            onSelected={setTimeIsSelected}
          />
        </Styled.ListItem>
      </Styled.List>
      <Button
        type="submit"
        disabled={togleButton}
        width={"160px"}
        height={"56px"}
        margin={"39px 80px 0px auto"}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
