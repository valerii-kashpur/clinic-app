import React from "react";
import * as Styled from "./SelectComponentStyles";
import Select from "react-select";

const SelectComponent = ({
  text,
  onChangeFn,
  Disabled,
  optionsArray,
  valueProp,
}) => {
  return (
    <div>
      <Styled.SelectTitle>{text}</Styled.SelectTitle>
      <Select
        defaultValue={null}
        onChange={onChangeFn}
        options={optionsArray}
        styles={Styled.customStyles}
        isDisabled={Disabled}
        value={valueProp}
      />
    </div>
  );
};

export default SelectComponent;
