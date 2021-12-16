import React from "react";
import * as Styled from "./SelectComponentStyles";
import Select from "react-select";
import InputLabel from "components/InputLabel";

type SelectProps = {
  text: string;
  onChangeFn: (data: any) => void;
  Disabled?: boolean;
  optionsArray: { value: string; label: string }[];
  placeholder: string;
};

const SelectComponent = ({
  text,
  onChangeFn,
  Disabled,
  optionsArray,
  placeholder,
}: SelectProps) => {
  return (
    <div>
      <Styled.SelectTitle>
        <InputLabel htmlFor={text}>{text}</InputLabel>
      </Styled.SelectTitle>
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
