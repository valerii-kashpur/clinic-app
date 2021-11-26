import moment from "moment";
import { getDoctorsFreeTimeByDateAndId } from "network/fetchOperations";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import * as Styled from "./RadioBtnsStyles";

const time = [
  "T05:00:00.000Z",
  "T06:00:00.000Z",
  "T07:00:00.000Z",
  "T08:00:00.000Z",
  "T09:00:00.000Z",
  "T10:00:00.000Z",
  "T11:00:00.000Z",
  "T12:00:00.000Z",
  "T13:00:00.000Z",
  "T14:00:00.000Z",
  "T15:00:00.000Z",
  "T16:00:00.000Z",
  "T17:00:00.000Z",
];

const RadioBtns = ({ pickedDate, onSelected, doctorsId }) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [doctorsFreeTime, setDoctorsFreeTime] = useState([]);
  const isSelectedRadio = (value) => selectedRadio === value;
  const dispatch = useDispatch();

  const handleRadioClick = (e) => {
    setSelectedRadio(e.currentTarget.value);
  };

  useEffect(() => {
    setSelectedRadio("");
  }, [pickedDate]);

  useEffect(() => {
    if (pickedDate) {
      dispatch(getDoctorsFreeTimeByDateAndId(pickedDate, doctorsId)).then(
        (response) => setDoctorsFreeTime(response)
      );
    }
  }, [pickedDate, doctorsId]);

  useEffect(() => {
    if (selectedRadio) {
      onSelected(selectedRadio);
    }
  }, [selectedRadio, onSelected]);

  const timeEditor = (date, modificator) => {
    return date.substr(0, 10) + modificator;
  };

  const getDisabled = (time) => {
    if (pickedDate) {
      return !doctorsFreeTime.includes(pickedDate.substring(0, 10) + time);
    }
    return true;
  };

  const getInputName = (inputTime) => {
    return pickedDate ? timeEditor(pickedDate, inputTime) : inputTime;
  };

  return (
    <Styled.Wrapper>
      {time.map((singleInput) => {
        const dis = getDisabled(singleInput);
        return (
          <div key={uuid4()}>
            <Styled.Input
              type="radio"
              name={getInputName(singleInput)}
              id={getInputName(singleInput)}
              value={getInputName(singleInput)}
              checked={isSelectedRadio(getInputName(singleInput))}
              onChange={handleRadioClick}
              key={uuid4()}
              disabled={!pickedDate || dis}
            />
            <Styled.Label
              htmlFor={getInputName(singleInput)}
              key={uuid4()}
              notReady={!pickedDate || dis}
              current={
                selectedRadio === getInputName(singleInput) ? true : false
              }
            >
              {moment(`2021-11-22${singleInput}`).format("hh:mm a")}
            </Styled.Label>
          </div>
        );
      })}
    </Styled.Wrapper>
  );
};

export default RadioBtns;
