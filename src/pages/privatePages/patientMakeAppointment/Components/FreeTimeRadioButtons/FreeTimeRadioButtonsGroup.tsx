import React, { FC } from "react";
import moment from "moment";
import { v4 as uuid4 } from "uuid";
import * as Styled from "./FreeTimeRadioButtonsStyles";

type FreeTime = [number] | [];

interface CustomInputComponent {
  type?: string;
  time: string[];
  onClick: (e: React.FormEvent<HTMLInputElement>) => void;
  selectedDate: string;
  availableTime: FreeTime;
  selectedTime: string;
}

const FreeTimeRadioButtonsGroup: FC<CustomInputComponent> = ({
  time,
  onClick,
  selectedDate,
  availableTime,
  selectedTime,
}) => {
  const isSelectedRadio = (value: string) => selectedTime === value;

  const timeEditor = (date: string, modificator: string) => {
    return date.substr(0, 10) + modificator;
  };

  const getDisabled = (time: string) => {
    if (selectedDate) {
      const dateString = selectedDate.substring(0, 10) + time;
      return !(availableTime as string[]).includes(dateString);
    }
    return true;
  };

  const getInputName = (inputTime: string) => {
    return selectedDate ? timeEditor(selectedDate, inputTime) : inputTime;
  };

  return (
    <Styled.Wrapper role="radiogroup">
      {time.map((singleInput) => {
        const isDisabled = getDisabled(singleInput);
        return (
          <div key={uuid4()}>
            <Styled.Input
              type="radio"
              name={getInputName(singleInput)}
              id={getInputName(singleInput)}
              value={getInputName(singleInput)}
              checked={isSelectedRadio(getInputName(singleInput))}
              onChange={onClick}
              key={uuid4()}
              disabled={isDisabled}
              role="radio"
            />
            <Styled.Label
              htmlFor={getInputName(singleInput)}
              key={uuid4()}
              notReady={isDisabled}
              current={
                selectedTime === getInputName(singleInput) ? true : false
              }
              data-testid={
                isDisabled ? "radioIsDisabled" : "radioIsNotDisabled"
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

export default FreeTimeRadioButtonsGroup;
