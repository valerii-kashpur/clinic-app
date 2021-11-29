import React, { useEffect, useState } from "react";
import DatePickerForm from "../DatePicker/DatePickerForm";
import Text from "components/Text";
import * as Styled from "../../PatientMakeAppointmentStyles";
import Button from "components/Button";

import RadioBtns from "../RadioBtns/RadioBtns";
import VisitReasons from "../VisitReasons/VisitReasons";
import { createAppointment } from "network/fetchOperations";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "Redux/selectors";
import LoaderForButtons from "components/LoaderForButtons";
import  PATHS  from "routes/paths";

const Form = () => {
  const [visitReasonsReady, setVisitReasonsReady] = useState(false);
  const [selectsValue, setSelectsValue] = useState(false);
  const [dateIsPicked, setDateIsPicked] = useState(false);
  const [timeIsSelected, setTimeIsSelected] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [toggleButton, setToggleButton] = useState(true);
  const isLoading = useSelector((state) => isLoadingSelector(state));
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    const { reason, note } = selectsValue;
    e.preventDefault();
    const reqData = {
      date: timeIsSelected,
      reason: reason,
      note: note,
      doctorID: doctorId,
    };
    await dispatch(createAppointment(reqData));
    history.push({
      pathname: PATHS.doctorView,
    });
  };

  useEffect(() => {
    if (visitReasonsReady && dateIsPicked && timeIsSelected) {
      setToggleButton(false);
    } else if (!toggleButton) {
      setToggleButton(true);
    }
  }, [visitReasonsReady, dateIsPicked, timeIsSelected, toggleButton]);

  useEffect(() => {
    if (selectsValue) {
      setDoctorId(selectsValue.doctor.value);
    }
  }, [selectsValue]);

  return (
    <form action="" onSubmit={submitHandler}>
      <Styled.List>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>1</Styled.Span>
            <Text>Select a doctor and define the reason of your visit</Text>
          </Styled.TextWrapper>
          <VisitReasons
            onReady={setVisitReasonsReady}
            showDatePicker={setSelectsValue}
            resetPickedDate={setDateIsPicked}
          />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>2</Styled.Span>
            <Text>Choose a day for an appointment</Text>
          </Styled.TextWrapper>
          <DatePickerForm
            selectsValue={selectsValue}
            onDateIsPiked={setDateIsPicked}
          />
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.TextWrapper>
            <Styled.Span>3</Styled.Span>
            <Text>Select an available timeslot</Text>
          </Styled.TextWrapper>
          <RadioBtns
            pickedDate={dateIsPicked}
            onSelected={setTimeIsSelected}
            selectedValuesFromSelects={selectsValue}
            disabled={selectsValue}
            doctorsId={doctorId}
          />
        </Styled.ListItem>
      </Styled.List>
      <Button
        type="submit"
        disabled={toggleButton}
        width={"160px"}
        height={"56px"}
        margin={"39px 80px 0px auto"}
      >
        {isLoading ? <LoaderForButtons /> : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
