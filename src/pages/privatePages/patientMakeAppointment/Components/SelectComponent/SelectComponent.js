import React from "react";
import * as Styled from "./SelectComponentStyles";
import Select from "react-select";

const SelectComponent = ({
  text,
  onChangeFn,
  Disabled,
  optionsArray,
  placeholder
}) => {
  return (
    <div>
      <Styled.SelectTitle htmlFor={text}>{text}</Styled.SelectTitle>
      <Select
        defaultValue={null}
        onChange={onChangeFn}
        options={optionsArray}
        styles={Styled.customStyles}
        isDisabled={Disabled}
        inputId={text}
        data-testid={text}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectComponent;
