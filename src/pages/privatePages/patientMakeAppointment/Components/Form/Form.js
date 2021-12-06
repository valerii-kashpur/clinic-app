import React from "react";
import DatePickerForm from "../DatePicker/DatePickerForm";
import Text from "components/Text";
import * as Styled from "../../PatientMakeAppointmentStyles";
import Button from "components/Button";

import RadioBtns from "../RadioBtns/RadioBtns";
import VisitReasons from "../VisitReasons/VisitReasons";
import { useHistory } from "react-router";
import LoaderForButtons from "components/LoaderForButtons";
import PATHS from "routes/paths";
import { appointmentFormData } from "redux/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCreateAppointment } from "redux/createAppointmentSlice";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    selectedSpecialization,
    selectedDoctor,
    reasons,
    selectedTime,
    isFetching,
    note,
  } = useSelector((state) => appointmentFormData(state));

  const buttonCondition =
    selectedSpecialization &&
    selectedDoctor &&
    reasons.length > 3 &&
    selectedTime;

  const submitHandler = async (e) => {
    e.preventDefault();
    const reqData = {
      date: selectedTime,
      reason: reasons,
      note: note,
      doctorID: selectedDoctor,
    };
    await dispatch(fetchCreateAppointment(reqData));
    history.push({
      pathname: PATHS.doctorView,
    });
  };

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
        disabled={!buttonCondition}
        width={"160px"}
        height={"56px"}
        margin={"39px 80px 0px auto"}
      >
        {isFetching ? <LoaderForButtons /> : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
