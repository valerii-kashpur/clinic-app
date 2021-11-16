import React, { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";
import * as Styled from "./RadioBtnsStyles";

const time = [
  "12:00 am",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",
  "8:00 pm",
  "9:00 pm",
];

const RadioBtns = ({ disabled, onSelected }) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const isSelectedRadio = (value) => selectedRadio === value;

  const handleRadioClick = (e) => {
    setSelectedRadio(e.currentTarget.value);
  };

  useEffect(() => {
    if (selectedRadio) {
      onSelected(selectedRadio);
    }
  }, [selectedRadio, onSelected]);

  return (
    <Styled.Wrapper>
      {time.map((singleInput, idx) => (
        <div key={uuid4()}>
          <Styled.Input
            type="radio"
            name={singleInput}
            id={singleInput}
            value={singleInput}
            checked={isSelectedRadio({ singleInput })}
            onChange={handleRadioClick}
            key={uuid4()}
            disabled={disabled}
          />
          <Styled.Label
            htmlFor={singleInput}
            key={uuid4()}
            notReady={disabled}
            current={selectedRadio === singleInput ? true : false}
          >
            {singleInput}
          </Styled.Label>
        </div>
      ))}
    </Styled.Wrapper>
  );
};

export default RadioBtns;
