import React from "react";
import * as Styled from "./SelectComponentStyles";
import Select from "react-select";



const SelectComponent = ({ text, optionsArray, onChangeFn, Disabled }) => {
  return (
    <div>
      <Styled.SelectTitle>{text}</Styled.SelectTitle>
      <Select
        defaultValue={null}
        onChange={onChangeFn}
        options={optionsArray}
        styles={Styled.customStyles}
        isDisabled={Disabled}
      />
    </div>
  );
};

export default SelectComponent;
